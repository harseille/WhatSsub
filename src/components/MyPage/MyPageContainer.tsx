import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import { userLike } from '@state/User';
import getBestCombinationList from '@api/getBestCombinationList';
import MyPageTab from '@components/MyPage/MyPageTab';
import MyPageList from '@components/MyPage/MyPageList';
import Modal from '@components/Common/UI/Modal';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { User } from 'firebase/auth';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import useDeleteBestCombination from '@hooks/useDeleteBestCombination';
import { getDoc, doc, collection, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase.config';

function MyPageContainer() {
  const isLoggedin = useRecoilValue(isLoggedInState);
  const [targetBestCombinationId, setTargetBestCombinationId] = useState<string | null>(null);
  const [유저만의조합, 유저만의조합_수정] = useState<인터페이스_꿀조합[]>([]);
  const 유저정보: User | null = useRecoilValue(userState);
  const 좋아요한샌드위치_수정 = useSetRecoilState(userLike);
  const navigate = useNavigate();
  const { state } = useLocation();
  const toggleState = state !== '좋아요한꿀조합';

  const { 꿀조합_삭제하기, 모달_토글하기, isShowModal } = useDeleteBestCombination(targetBestCombinationId!);

  const 좋아요한_데이터_가져오기 = async () => {
    if (유저정보) {
      const 좋아요한_데이터 = await getDoc(doc(collection(db, '좋아요'), 유저정보.uid));
      const { 좋아요_리스트 } = (좋아요한_데이터 as DocumentData).data();
      좋아요한샌드위치_수정(좋아요_리스트);
    }
  };

  useEffect(() => {
    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    } else {
      좋아요한_데이터_가져오기();
      유저만의조합_수정([]);
      꿀조합_받아오기(toggleState);
    }
  }, [isLoggedin, navigate, toggleState]);

  const 클릭핸들러_꿀조합_목록_변경 = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes(`${유저정보?.displayName}`)!;
      if (사용자명_체크) {
        navigate(`/MyPage?currentTab=${유저정보?.displayName}만의꿀조합`, {
          state: `${유저정보?.displayName}만의 조합`,
        });
      } else {
        navigate(`/MyPage?currentTab=좋아요한꿀조합`, {
          state: '좋아요한꿀조합',
        });
      }
    },
    [유저정보]
  );

  const 꿀조합_받아오기 = useCallback(
    async (toggleState: boolean) => {
      const tabToggle: string = toggleState ? '작성일' : '좋아요';
      const 샌드위치_데이터 = await getBestCombinationList(tabToggle);

      if (샌드위치_데이터) {
        유저만의조합_수정(샌드위치_데이터);
      }
    },
    [유저만의조합, toggleState]
  );

  const 꿀조합_삭제_모달_열기 = useCallback((id: string) => {
    setTargetBestCombinationId(id);
    모달_토글하기();
  }, []);

  const 목록에서_샌드위치_삭제하기 = () => {
    try {
      꿀조합_삭제하기();
      const 삭제 = 유저만의조합!.filter((val: 인터페이스_꿀조합) => val.id !== targetBestCombinationId);
      유저만의조합_수정(삭제);
    } catch {
      console.log('삭제 실패');
    }
  };
  return (
    <>
      {isShowModal && (
        <Modal
          title="🚨 좋아요 누른 꿀조합이 사라져요 🚨"
          message="정말로 삭제하시겠습니까?"
          onEvent={목록에서_샌드위치_삭제하기}
          onClose={모달_토글하기}
          isConfirm="삭제"
          eventButtonDesignType="primaryRed"
          cancelButtonDesignType="normal"
        />
      )}
      <Wrapper>
        <MyPageTab isSelectedTab={toggleState} onClick={클릭핸들러_꿀조합_목록_변경} />
        <MyPageList isSelectedTab={toggleState} userCombinationList={유저만의조합} onClick={꿀조합_삭제_모달_열기} />
      </Wrapper>
    </>
  );
}

export default MyPageContainer;

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'center')};
  padding: 25px 70px;

  ${mediaQuery} {
    max-width: 751px;
    margin: 0 auto;
    padding: 0 0 50px;
  }
`;
