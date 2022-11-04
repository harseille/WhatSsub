import styled from '@emotion/styled';

interface 인터페이스_조합재료선택_속성 {
  currentStep: number;
}

function SelectCombination(props: 인터페이스_조합재료선택_속성) {
  const { currentStep: 현재진행도 } = props;

  return <SelectCombinationWrap />;
}

export default SelectCombination;

const SelectCombinationWrap = styled.div``;
