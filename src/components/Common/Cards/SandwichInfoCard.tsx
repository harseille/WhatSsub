import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import heart from '@assets/icons/heart.svg';
import heartFill from '@assets/icons/heart-fill.svg';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import styled from '@emotion/styled';
import { userLike } from '@state/User';
import { changeRem } from '@styles/mixin';
import { 인터페이스_샌드위치 } from '../../../types/ISandwich';

export const mockSandwich: 인터페이스_샌드위치 = {
  id: 'S1',
  이미지: ChickenSlice,
  이름: '꿀꿀마앗',
  베이스샌드위치: '치킨 슬라이스',
  칼로리: '265',
  뱃지리스트: {
    맛: ['달달', '고소'],
    재료: ['살라미'],
    추가사항: ['고기러버'],
  },
};

function SandwichInfoCard({ sandwich }: { sandwich: 인터페이스_샌드위치 }) {
  // Todo 임시 user데이터 atom으로 사용 나중에 수정 필요
  const [userData, setUserData] = useRecoilState(userLike);
  const navigate = useNavigate();

  const 꿀조합_상세_페이지로_이동하기 = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'BUTTON') return;
    navigate(`/best-combination/${sandwich.id}`);
  };

  const 클릭핸들러_좋아요_토글 = () => {
    setUserData(prevData => {
      const { likedSandwich } = prevData;

      if (!likedSandwich.includes(sandwich.id)) return { ...prevData, likedSandwich: [...likedSandwich, sandwich.id] };

      return {
        ...prevData,
        likedSandwich: likedSandwich.filter(id => id !== sandwich.id),
      };
    });
  };

  return (
    <CardWarp role="link" onClick={꿀조합_상세_페이지로_이동하기}>
      <SandwichInfo sandwich={sandwich} />
      <LikeBtn onClick={클릭핸들러_좋아요_토글} isLiked={userData.likedSandwich.includes(sandwich.id)} />
    </CardWarp>
  );
}

export default SandwichInfoCard;

const CardWarp = styled.li`
  position: relative;
  padding: 45px 25px 20px;
  max-width: ${changeRem(370)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  background: #fff;
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
`;
