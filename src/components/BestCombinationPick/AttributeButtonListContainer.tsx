import AttributeButtonList from '@components/BestCombinationAttribute/AttributeButtonList';
import RefreshButton from '@components/BestCombinationPick/RefreshButton';
import 꿀조합속성 from '@data/PickAttribute';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';

type TProps = {
  filteredAttribute: 인터페이스_꿀조합선택페이지_필터;
  overSelectedAttribute: string;
  toggleAttribute: (Attribute: string, name: string, maxNum: number) => void;
  initializeAttribute: () => void;
};

function AttributeButtonListContainer({
  filteredAttribute,
  overSelectedAttribute,
  toggleAttribute,
  initializeAttribute,
}: TProps) {
  return (
    <AttributeButtonListWrap>
      <RefreshButton onClick={initializeAttribute} />
      {꿀조합속성.map(data => (
        <AttributeButtonList
          key={data.이름}
          attributeData={data}
          selectedAttribute={filteredAttribute}
          overSelectedAttribute={overSelectedAttribute}
          onSelectAttribute={toggleAttribute}
        />
      ))}
    </AttributeButtonListWrap>
  );
}

export default AttributeButtonListContainer;

const AttributeButtonListWrap = styled.div`
  position: relative;
  padding: 20px 0;
`;
