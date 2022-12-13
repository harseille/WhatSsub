import Button from '@components/Common/UI/Button';
import { 버튼_텍스트 } from '@constants/CustomCombination/constants';
import styled from '@emotion/styled';

type TProps = {
  currentStep: number;
  onNextStep: () => void;
};

function NextStepButton({ currentStep: 현재진행도, onNextStep: 다음_선택지로_이동 }: TProps) {
  return (
    <SelectButton
      designType="AccessibilityGreen"
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
