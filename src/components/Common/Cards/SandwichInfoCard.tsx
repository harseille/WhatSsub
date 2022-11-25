import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userLike } from '@state/User';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import heart from '@assets/icons/heart.svg';
import heartFill from '@assets/icons/heart-fill.svg';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import dbUpdate from '@api/dbUpdate';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { increment } from 'firebase/firestore';
import { User } from 'firebase/auth';

type TProps = {
  sandwich: 인터페이스_꿀조합;
  userInfo: User | null;
  toggleModal: () => void;
};

function SandwichInfoCard({ sandwich, userInfo, toggleModal }: TProps) {
  const [좋아요한샌드위치, 좋아요한샌드위치_수정] = useRecoilState<string[]>(userLike);
  const navigate = useNavigate();

  const 꿀조합_상세_페이지로_이동하기 = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'BUTTON') return;
    navigate(`/best-combination/${sandwich.id}`);
  };

  const 클릭핸들러_좋아요_토글 = () => {
    if (!userInfo) {
      toggleModal();
    } else {
      if (좋아요한샌드위치.includes(sandwich.id)) {
        dbUpdate('좋아요', userInfo.uid, {
          좋아요_리스트: 좋아요한샌드위치.filter(id => id !== sandwich.id),
        });
        dbUpdate('꿀조합', sandwich.id, { 좋아요: increment(-1) });
      } else {
        dbUpdate('좋아요', userInfo.uid, { 좋아요_리스트: [...좋아요한샌드위치, sandwich.id] });
        dbUpdate('꿀조합', sandwich.id, { 좋아요: increment(1) });
      }

      좋아요한샌드위치_수정(prevData => {
        if (!prevData.includes(sandwich.id)) return [...prevData, sandwich.id];

        return prevData.filter(id => id !== sandwich.id);
      });
    }
  };

  return (
    <CardWarp role="link" onClick={꿀조합_상세_페이지로_이동하기}>
      <SandwichInfo sandwich={sandwich} />
      <LikeBtn onClick={클릭핸들러_좋아요_토글} isLiked={좋아요한샌드위치.includes(sandwich.id)} />
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
