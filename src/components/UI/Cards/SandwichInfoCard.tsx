import styled from '@emotion/styled';
import heart from '@assets/images/heart.png';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import SandwichInfo from '@components/UI/SandwichInfo';
import { changeRem } from '../../../styles/mixin';

export interface 샌드위치뱃지리스트 {
  맛: string[];
  재료: string[];
  추가사항: string[];
}

export interface 샌드위치 {
  id: string;
  이미지: string;
  이름: string;
  베이스샌드위치: string;
  칼로리: string;
  뱃지리스트: 샌드위치뱃지리스트;
}

export const mockSandwich: 샌드위치 = {
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

function SandwichInfoCard({ sandwich }: { sandwich: 샌드위치 }) {
  return (
    <CardWarp>
      <SandwichInfo sandwich={mockSandwich} />
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

export default SandwichInfoCard;
