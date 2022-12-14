import { useNavigate } from 'react-router-dom';
import useLikedBestCombination from '@hooks/useLikedBestCombination';
import Modal from '@components/Common/UI/Modal';
import SandwichInfo from '@components/Common/SandwichInfo';
import LikeRedBtn from '@components/Common/Button/LikeRed';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

type TProps = {
  sandwich: 인터페이스_꿀조합;
};

function SandwichInfoCard({ sandwich, sandwich: { id } }: TProps) {
  const { isShowModal, toggleModal, navigateLoginPage, 좋아요한_샌드위치인가, 클릭핸들러_좋아요_토글 } =
    useLikedBestCombination(id);
  const navigate = useNavigate();

  const 꿀조합_상세_페이지로_이동하기 = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'BUTTON') return;
    navigate(`/best-combination/${id}`);
  };

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
      <CardWarp role="link" onClick={꿀조합_상세_페이지로_이동하기}>
        <SandwichInfo sandwich={sandwich} />
        <LikeRedBtn onClick={클릭핸들러_좋아요_토글.bind(null, 'fulfilled')} isLiked={좋아요한_샌드위치인가} />
      </CardWarp>
    </>
  );
}

export default SandwichInfoCard;

const CardWarp = styled.li`
  min-width: ${changeRem(340)};
  width: 80%;
  position: relative;
  padding: 45px 25px 20px;
  max-width: ${changeRem(370)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #f3f7d86e;
    box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5), 10px 5px 5px #7879706d;
    transform: translate3d(-5px, -5px, 0);
  }

  ${mediaQuery} {
    min-width: 90%;
    min-height: ${changeRem(260)};
    padding: 20px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
