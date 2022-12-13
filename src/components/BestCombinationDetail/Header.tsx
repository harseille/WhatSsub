import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useLikedBestCombination from '@hooks/useLikedBestCombination';
import Modal from '@components/Common/UI/Modal';
import Like from '@components/Common/Button/Like';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { changeRem, flexbox } from '@styles/mixin';

type Tprops = {
  author: string;
  like: number;
};

function HeaderContiner({ author, like }: Tprops) {
  const { combinationId } = useParams();
  const {
    isShowModal,
    toggleModal,
    navigateLoginPage,
    좋아요한_샌드위치인가,
    클릭핸들러_좋아요_토글,
    좋아요_개수,
    좋아요_개수_수정,
  } = useLikedBestCombination(combinationId!);

  useEffect(() => {
    좋아요_개수_수정(like);
  }, [좋아요_개수_수정, like]);

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
      <Header>
        <h2>
          <span>{author}</span> 만의 조합
        </h2>
        <Like
          count={좋아요_개수}
          isLiked={좋아요한_샌드위치인가}
          onClick={클릭핸들러_좋아요_토글.bind(null, 'fulfilled')}
        />
      </Header>
    </>
  );
}

export default HeaderContiner;

const Header = styled.div`
  ${flexbox('row', 'space-between', 'center')}
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  padding: ${changeRem(40)} ${changeRem(16)};
  & h2 {
    font-weight: 700;
    font-size: ${changeRem(20)};

    & span {
      color: ${props => props.theme.colors.primaryYellow};
      font-size: ${changeRem(24)};
    }
  }
  ${mediaQuery} {
    padding: ${changeRem(54)} ${changeRem(24)};
    height: ${changeRem(72)};
    padding: 0px 48px 0px 48px;
    & h1 {
      font-size: ${changeRem(28)};

      & span {
        color: ${props => props.theme.colors.primaryYellow};
        font-size: ${changeRem(36)};
      }
    }
  }
`;
