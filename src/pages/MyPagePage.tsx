import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import Wrapper from '@components/Common/UI/Wrapper';
import MyPageTab from '@components/MyPage/MyPageTab';
import UserCombinatonList from '@components/MyPage/UserCombinatonList';
import LikeCombinationList from '@components/MyPage/LikeCombinationList';
import Modal from '@components/Common/UI/Modal';
import { dbDelete, dbUpdate } from '@api/index';
import styled from '@emotion/styled';
import dbGet from '@api/dbGet';
import useDeleteBestCombination from '@hooks/useDeleteBestCombination';
import { collection, orderBy, query } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { userLike } from '@state/User';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { db } from '../firebase.config';
// import useDeleteBestCombination from '@hooks/useDeleteBestCombination';

export interface 인터페이스_꿀조합_아이디 extends 인터페이스_꿀조합 {
  id: string;
}

function MyPage() {
  // const { 모달_토글하기, 꿀조합_삭제하기, isShowModal, 유저 } = useDeleteBestCombination(combinationId!);
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);
  const [toggleState, setToggleState] = useState<boolean>(true);
  const [targetBestCombinationId, setTargetBestCombinationId] = useState<string | null>(null);
  const [myList, setMyList] = useState<인터페이스_꿀조합_아이디[] | null>(null);
  const [유저만의조합, 유저만의조합_수정] = useState<인터페이스_꿀조합_아이디[] | null>(null);
  const 유저정보: User | null = useRecoilValue(userState);
  const [좋아요한샌드위치, 좋아요한샌드위치_수정] = useRecoilState<string[]>(userLike);
  const [삭제예정, 삭제예정_수정] = useState<string[]>([]);

  const { 꿀조합_삭제하기, 모달_토글하기, isShowModal } = useDeleteBestCombination(targetBestCombinationId!);

  useEffect(() => {
    const tabToggle: string = toggleState ? '작성일' : '좋아요';
    꿀조합_컬렉션_탭에따라_가져오기(tabToggle);
    // 좋아요한샌드위치_수정(isUserLikeUser);
    console.log('로그인한 유저가 좋아요 누른 꿀조합의 id  =>', 좋아요한샌드위치);
    console.log('좋아요한샌드위치  =>', 좋아요한샌드위치);

    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    }
  }, [isLoggedin, navigate, toggleState]);

  // ? --------------------------------------------------------------------------------------------------------------------
  const 클릭핸들러_꿀조합_목록_변경 = (e: React.MouseEvent<HTMLElement>) => {
    const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes(`${유저정보?.displayName}`)!;
    setToggleState(사용자명_체크);
  };

  const 꿀조합_컬렉션_탭에따라_가져오기 = async (tabToggle: string) => {
    const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(tabToggle, 'desc'))); // tabToggle에 따라 내림차순

    const 샌드위치_데이터: 인터페이스_꿀조합_아이디[] = [];
    await 쿼리스냅샷.forEach(doc => {
      샌드위치_데이터.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
    });
    const result = 샌드위치_데이터.filter((user: 인터페이스_꿀조합_아이디) => user.작성자id === 유저정보?.uid);
    console.log('샌드위치 데이터 =>', 샌드위치_데이터);
    setMyList(샌드위치_데이터); // 전체 데이터 리스트
    유저만의조합_수정(result); // 유저가 만든 샌드위치 데이터 리스트
  };
  // ? --------------------------------------------------------------------------------------------------------------------

  const 유저가_좋아요한_꿀조합 = myList?.filter((꿀조합: 인터페이스_꿀조합_아이디) =>
    좋아요한샌드위치.includes(꿀조합.id)
  );

  const 꿀조합_삭제_모달_열기 = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const targetLi = target.closest('li');

    if (targetLi!.id) {
      setTargetBestCombinationId(targetLi!.id);
    } else {
      setTargetBestCombinationId(null);
    }
    모달_토글하기();
  };

  const 목록에서_샌드위치_삭제하기 = () => {
    try {
      꿀조합_삭제하기();

      const 삭제 = 유저만의조합!.filter((val: 인터페이스_꿀조합_아이디) => val.id !== targetBestCombinationId);
      유저만의조합_수정(삭제);
    } catch {
      console.log('삭제 실패');
    }
  };

  // 수정 지금 이게 통째로 읽힘 ul을 읽는 것 마냥. 클릭은 li로 됨 => '유저가_좋아요한_꿀조합'을 i로 비교하려 했던 문제 때문 => includes로 판별해야함
  const 좋아요_버튼_수정하기 = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const targetLi = target.closest('li');

    if (targetLi && 유저정보 && 좋아요한샌드위치.includes(targetLi.id) && !삭제예정.includes(targetLi.id)) {
      dbUpdate('좋아요', 유저정보.uid, { 좋아요_리스트: 좋아요한샌드위치.filter(id => id !== targetLi.id) });
      삭제예정_수정(prev => [...prev, targetLi.id]);
    } else if (targetLi && 유저정보) {
      console.log('서버로보내줘');
      dbUpdate('좋아요', 유저정보.uid, { 좋아요_리스트: [...new Set([...좋아요한샌드위치, targetLi.id])] });
      삭제예정_수정(prev => prev.filter(삭제예정꿀조합 => 삭제예정꿀조합 !== targetLi.id));
    }
  };

  return (
    <>
      {isShowModal && (
        <Modal
          title="🚨 작성하신 꿀조합이 사라져요 🚨"
          message="정말로 삭제하시겠습니까?"
          onEvent={목록에서_샌드위치_삭제하기}
          onClose={모달_토글하기}
          isConfirm="삭제"
          eventButtonDesignType="primaryRed"
          cancelButtonDesignType="normal"
        />
      )}
      <Wrapper>
        <Content>
          <MyPageTab isSelectedTab={toggleState} onClick={클릭핸들러_꿀조합_목록_변경} />
          <ul>
            {toggleState ? (
              // <UserCombinatonList userCombination={유저만의조합} onClick={목록에서_샌드위치_삭제하기} />
              <UserCombinatonList userCombination={유저만의조합} onClick={꿀조합_삭제_모달_열기} />
            ) : (
              <LikeCombinationList
                likeCombination={유저가_좋아요한_꿀조합}
                onClick={좋아요_버튼_수정하기}
                deleteList={삭제예정}
              />
            )}
          </ul>
        </Content>
      </Wrapper>
    </>
  );
}

export default MyPage;

const Content = styled.div`
  width: 380px;
  margin: 30px auto 0;
`;
