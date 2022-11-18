import Button from '@components/UI/Button';
import styled from '@emotion/styled';

type 타입_선택_버튼_속성 = {
  currentStep: number;
  onNextStep: () => void;
};

type 타입_버튼_텍스트 = {
  [key: number]: string;
};

function NextStepButton(props: 타입_선택_버튼_속성) {
  const { currentStep: 현재진행도, onNextStep: 다음_선택지로_이동 } = props;

  const 버튼_텍스트: 타입_버튼_텍스트 = {
    1: '빵 선택하러가기',
    2: '재료 선택하러가기',
    3: '소스 선택하러가기',
    4: '조합 완료',
  };

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
