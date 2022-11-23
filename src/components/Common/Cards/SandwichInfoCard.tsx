import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import heart from '@assets/icons/heart.svg';
import heartFill from '@assets/icons/heart-fill.svg';
import styled from '@emotion/styled';
import { userLike } from '@state/User';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_샌드위치 } from '@typings/ISandwich';

function SandwichInfoCard({ sandwich }: { sandwich: 인터페이스_샌드위치 }) {
  // Todo 임시 user데이터 atom으로 사용 나중에 수정 필요
  //* id 대신 임시로 꿀조합 제목 나중에 수정 필요
  const [userData, setUserData] = useRecoilState(userLike);
  const navigate = useNavigate();

  const 꿀조합_상세_페이지로_이동하기 = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'BUTTON') return;
    navigate(`/best-combination/${sandwich.꿀조합제목}`);
  };

  const 클릭핸들러_좋아요_토글 = () => {
    setUserData(prevData => {
      const { likedSandwich } = prevData;

      if (!likedSandwich.includes(sandwich.꿀조합제목))
        return { ...prevData, likedSandwich: [...likedSandwich, sandwich.꿀조합제목] };

      return {
        ...prevData,
        likedSandwich: likedSandwich.filter(id => id !== sandwich.꿀조합제목),
      };
    });
  };

  return (
    <CardWarp role="link" onClick={꿀조합_상세_페이지로_이동하기}>
      <SandwichInfo sandwich={sandwich} />
      <LikeBtn onClick={클릭핸들러_좋아요_토글} isLiked={userData.likedSandwich.includes(sandwich.꿀조합제목)} />
    </CardWarp>
  );
}

export default SandwichInfoCard;

const CardWarp = styled.li`
  min-width: ${changeRem(370)};
  width: 80%;
  position: relative;
  padding: 45px 25px 20px;
  max-width: ${changeRem(370)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  background: #fff;

  ${mediaQuery} {
    min-width: 90%;
    min-height: ${changeRem(260)};
    padding: 20px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LikeBtn = styled.button<{ isLiked: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  border-radius: 50%;
  width: ${changeRem(34)};
  height: ${changeRem(34)};
  background: url(${({ isLiked }) => (isLiked ? heartFill : heart)}) no-repeat center;
  background-color: #ffe8e0;

  ${mediaQuery} {
    width: ${changeRem(48)};
    height: ${changeRem(48)};
  }
`;
