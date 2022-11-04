import styled from '@emotion/styled';
import { useState } from 'react';
import MyCombinationStep from '@components/MyCombinationStep';
import SelectCombination from '@components/SelectCombination';
import NextStepButton from '@components/NextStepButton';
import mediaQuery from '../styles/media-queries';

function CustomCombination() {
  const [현재진행도, 현재진행도_수정] = useState(1);

  const 현재진행도_수정_이벤트 = (e: React.MouseEvent<HTMLSpanElement>) => {
    const 선택된_진행도 = Number((e.target as HTMLSpanElement).textContent);
    if (선택된_진행도 < 1 || 선택된_진행도 > 4) return;
    현재진행도_수정(선택된_진행도);
  };

  const 다음_선택지로_이동 = () => {
    if (현재진행도 > 3) return;
    현재진행도_수정(진행도 => 진행도 + 1);
  };

  return (
    <CustomPageWrap>
      <MyCombinationStep currentStep={현재진행도} onChangeStep={현재진행도_수정_이벤트} />
      <SelectCombination currentStep={현재진행도} />
      <NextStepButton currentStep={현재진행도} onNextStep={다음_선택지로_이동} />
    </CustomPageWrap>
  );
}

export default CustomCombination;

const CustomPageWrap = styled.div`
  padding: 0 25px;

  ${mediaQuery} {
    padding: 0 15%;
  }
`;
