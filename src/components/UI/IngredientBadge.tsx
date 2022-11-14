import styled from '@emotion/styled';

interface 뱃지컬러 {
  fontColor: string;
  backgroundColor: string;
}

interface 뱃지정보 extends 뱃지컬러 {
  item: string;
}

function IngredientBadge({ fontColor, backgroundColor, item }: 뱃지정보) {
  return (
    <li>
      <IngredientBadgeBox fontColor={fontColor} backgroundColor={backgroundColor}>
        {item}
      </IngredientBadgeBox>
    </li>
  );
}
// test 주석
const IngredientBadgeBox = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: ${(props: 뱃지컬러) => props.fontColor};
  background: ${(props: 뱃지컬러) => props.backgroundColor};
`;

export default IngredientBadge;
