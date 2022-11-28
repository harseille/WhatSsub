import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useCheckLogin from '@hooks/useCheckLogin';
import getFilteredBestCombination from '@api/getFilteredBestCombination';
import NotFoundBestCombinationList from '@components/BestCombinationList/NotFoundBestCombinationList';
import SandwichInfoCard from '@components/Common/Cards/SandwichInfoCard';
import Modal from '@components/Common/UI/Modal';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

function BestCombinationList() {
  const [꿀조합_목록, 꿀조합_목록_수정] = useState<인터페이스_꿀조합[] | null>(null);
  const { userInfo, isShowModal, toggleModal, navigateLoginPage } = useCheckLogin();
  const { state } = useLocation();

  useEffect(() => {
    getFilteredBestCombination(꿀조합_목록_수정, state);
  }, [state]);

  if (꿀조합_목록?.length === 0) return <NotFoundBestCombinationList />;

  return (
    <>
      {isShowModal && (
        <Modal
          title="로그인이 필요한 서비스입니다."
          message="로그인 페이지로 이동하시겠습니까?"
          onEvent={navigateLoginPage}
          onClose={toggleModal}
          isConfirm="이동"
        />
      )}
      <ListWrap>
        {꿀조합_목록?.map(sandwich => (
          <SandwichInfoCard key={sandwich.id} sandwich={sandwich} userInfo={userInfo} toggleModal={toggleModal} />
        ))}
      </ListWrap>
    </>
  );
}

export default BestCombinationList;

const ListWrap = styled.ul`
  width: 100%;
  display: flex;
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
`;
