import styled from '@emotion/styled';
import { 샌드위치뱃지리스트 } from '@components/UI/Cards/SandwitchInfoCard';
import IngredientBadge from '@components/UI/IngredientBadge';

interface 뱃지컬러_인터페이스 {
  노랑: string;
  파랑: string;
  빨강: string;
  노랑배경: string;
  파랑배경: string;
  빨강배경: string;
}

const 뱃지컬러: 뱃지컬러_인터페이스 = {
  노랑: '#DFA000',
  파랑: '#4B69FD',
  빨강: '#FF4200',
  노랑배경: 'rgba(252, 189, 33, 0.1)',
  파랑배경: 'rgba(75, 105, 253, 0.1)',
  빨강배경: 'rgba(255, 66, 0, 0.1)',
};

function SandwitchBadgeList({ badgeList: { 맛, 메인재료, 추가사항 } }: { badgeList: 샌드위치뱃지리스트 }) {
  return (
    <BadgeList>
      {맛.map((item: string) => (
        <IngredientBadge fontColor={뱃지컬러.노랑} backgroundColor={뱃지컬러.노랑배경} item={item} />
      ))}
      <IngredientBadge fontColor={뱃지컬러.파랑} backgroundColor={뱃지컬러.파랑배경} item={메인재료} />
      {추가사항.map((item: string) => (
        <IngredientBadge fontColor={뱃지컬러.빨강} backgroundColor={뱃지컬러.빨강배경} item={item} />
      ))}
    </BadgeList>
  );
}

const BadgeList = styled.ul`
  display: flex;
  margin: 0;
  gap: 8px;
`;

export default SandwitchBadgeList;
