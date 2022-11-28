import Button from '@components/Common/UI/Button';
import { 버튼_텍스트 } from '@constants/CustomCombination/constants';
import styled from '@emotion/styled';

type 타입_선택_버튼_속성 = {
  currentStep: number;
  onNextStep: () => void;
};

function NextStepButton(props: 타입_선택_버튼_속성) {
  const { currentStep: 현재진행도, onNextStep: 다음_선택지로_이동 } = props;

  return (
    <SelectButton
      designType="primaryGreen"
      width="100%"
      padding="15px"
      fontSize="16px"
      fontWeight="700"
      onClick={다음_선택지로_이동}>
      {버튼_텍스트[현재진행도]}
    </SelectButton>
  );
}

export default NextStepButton;

const SelectButton = styled(Button)`
  flex-shrink: 0;
`;
