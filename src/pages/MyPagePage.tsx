import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { isLoggedInState, userState } from '@state/index';
import getBestCombination from '@api/getBestCombination';
import Wrapper from '@components/Common/UI/Wrapper';
import MyPageTab from '@components/MyPage/MyPageTab';
import MyPageList from '@components/MyPage/MyPageList';
import Modal from '@components/Common/UI/Modal';
import { flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { User } from 'firebase/auth';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import useDeleteBestCombination from '@hooks/useDeleteBestCombination';

function MyPage() {
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);
  const [toggleState, setToggleState] = useState<boolean>(true);
  const [targetBestCombinationId, setTargetBestCombinationId] = useState<string | null>(null);
  const [유저만의조합, 유저만의조합_수정] = useState<인터페이스_꿀조합[]>([]);
  const 유저정보: User | null = useRecoilValue(userState);

  const { 꿀조합_삭제하기, 모달_토글하기, isShowModal } = useDeleteBestCombination(targetBestCombinationId!);

  useEffect(() => {
    꿀조합_받아오기(toggleState);
    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    }
  }, [isLoggedin, navigate, toggleState]);

  const 클릭핸들러_꿀조합_목록_변경 = (e: React.MouseEvent<HTMLElement>) => {
    const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes(`${유저정보?.displayName}`)!;
    setToggleState(사용자명_체크);
  };

  const 꿀조합_받아오기 = async (toggleState: boolean) => {
    const tabToggle: string = toggleState ? '작성일' : '좋아요';
    let 샌드위치_데이터 = await getBestCombination(tabToggle);

    if (샌드위치_데이터) {
      if (toggleState) {
        샌드위치_데이터 = 샌드위치_데이터.filter((user: 인터페이스_꿀조합) => user.작성자id === 유저정보?.uid);
      }
      유저만의조합_수정(샌드위치_데이터);
    }
  };

  const 꿀조합_삭제_모달_열기 = (id: string) => {
    setTargetBestCombinationId(id);
    모달_토글하기();
  };

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
        <Container>
          <MyPageTab isSelectedTab={toggleState} onClick={클릭핸들러_꿀조합_목록_변경} />
          <MyPageList isSelectedTab={toggleState} userCombinationList={유저만의조합} onClick={꿀조합_삭제_모달_열기} />
        </Container>
      </Wrapper>
    </>
  );
}

export default MyPage;

const Container = styled.div`
  ${flexbox('column', 'flex-start', 'center')}
  padding: 25px 70px;
  margin: 0 auto;
  ${mediaQuery} {
    padding-bottom: 50px;
  }
`;
