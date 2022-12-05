/* eslint-disable react/jsx-no-bind */
import MyCombinationStepBadge from '@components/CustomCombination/MyCombinationStepBadge';
import { PROGRESS } from '@constants/CustomCombination/constants';

import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import react from 'react';

type TProps = {
  currentStep: number;
  onChangeStep: (진행도: number) => void;
};

const 커스텀진행도_배열 = Object.values(PROGRESS);

function MyCombinationStep(props: TProps) {
  const { currentStep: 현재진행도, onChangeStep: 클릭핸들러_현재진행도_수정 } = props;

  return (
    <CombinationStageWrap>
      <CombinationStepTitle>나만의 조합</CombinationStepTitle>
      <CombinationStepList currentStep={현재진행도}>
        {커스텀진행도_배열.map(진행도 => (
          <li key={진행도}>
            <MyCombinationStepBadge currentStep={현재진행도} onClick={클릭핸들러_현재진행도_수정.bind(null, 진행도)}>
              {진행도}
            </MyCombinationStepBadge>
          </li>
        ))}
      </CombinationStepList>
    </CombinationStageWrap>
  );
}

export default react.memo(MyCombinationStep);

const CombinationStageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CombinationStepTitle = styled.h2`
  font-size: ${changeRem(20)};
  font-weight: 700;

  ${mediaQuery} {
    font-size: ${changeRem(24)};
  }
`;

type 타입_진행도_리스트_속성 = {
  currentStep: number;
};

const CombinationStepList = styled.ol<타입_진행도_리스트_속성>`
  display: flex;
  align-items: center;

  & li {
    padding: 0 4px;
    position: relative;
    ${mediaQuery} {
      padding: 0 6px;
    }
  }

  & li:nth-of-type(n + 2):nth-of-type(-n + 4) span::before {
    content: '';
    display: block;
    width: ${changeRem(9)};
    height: ${changeRem(3)};
    background-color: #eee;
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translateY(-50%);
    pointer-events: none;
    ${mediaQuery} {
      width: ${changeRem(14)};
      height: ${changeRem(6)};
      left: -12%;
    }
  }

  & li:nth-of-type(n + 2):nth-of-type(-n + ${props => props.currentStep}) span::before {
    content: '';
    background-color: #fbc200;
    transition: all 0.3s;
  }
`;
