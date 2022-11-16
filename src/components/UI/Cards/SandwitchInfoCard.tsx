import styled from '@emotion/styled';
import heart from '@assets/images/heart.png';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import SandwitchInfo from '@components/UI/SandwitchInfo';
import { changeRem } from '../../../styles/mixin';

export interface 샌드위치뱃지리스트 {
  맛: string[];
  메인재료: string[];
  추가사항: string[];
}

export interface 샌드위치 {
  이미지: string;
  이름: string;
  베이스샌드위치: string;
  칼로리: string;
  뱃지리스트: 샌드위치뱃지리스트;
}

export const sandwitch: 샌드위치 = {
  이미지: ChickenSlice,
  이름: '꿀꿀마앗',
  베이스샌드위치: '치킨 슬라이스',
  칼로리: '265',
  뱃지리스트: {
    맛: ['달달', '고소'],
    메인재료: ['살라미'],
    추가사항: ['고기러버'],
  },
};

function SandwitchInfoCard() {
  return (
    <CardWarp>
      <SandwitchInfo sandwitch={sandwitch} />
      <LikeBtn />
    </CardWarp>
  );
}

const CardWarp = styled.li`
  position: relative;
  padding: 45px 25px 20px;
  max-width: ${changeRem(370)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  background: #fff;
`;

const LikeBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  border-radius: 50%;
  width: ${changeRem(34)};
  height: ${changeRem(34)};
  background: url(${heart}) no-repeat center;
  background-color: #ffe8e0;
`;

export default SandwitchInfoCard;
