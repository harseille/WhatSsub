import styled from '@emotion/styled';
import MyCombinationStepBadge from './MyCombinationStepBadge';
import { changeRem } from '../styles/mixin';
import mediaQuery from '../styles/media-queries';

interface 인터페이스_조합진행도_속성 {
  currentStep: number;
  onChangeStep: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const 커스텀진행도_배열: number[] = [1, 2, 3, 4];

function MyCombinationStep(props: 인터페이스_조합진행도_속성) {
  const { currentStep: 현재진행도, onChangeStep: 현재진행도_수정 } = props;

  return (
    <CombinationStageWrap>
      <CombinationStepTitle>나만의 조합</CombinationStepTitle>
      <CombinationStepList currentStep={현재진행도}>
        {커스텀진행도_배열.map(진행도 => (
          <li key={진행도}>
            <MyCombinationStepBadge currentStep={현재진행도} onClick={현재진행도_수정}>
              {진행도}
            </MyCombinationStepBadge>
          </li>
        ))}
      </CombinationStepList>
    </CombinationStageWrap>
  );
}

export default MyCombinationStep;

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
    box-sizing: border-box;
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