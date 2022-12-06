import SelectCombination from '@components/CustomCombination/SelectCombination';
import NextStepButton from '@components/CustomCombination/NextStepButton';
import CombinationRegistration from '@components/CustomCombination/CombinationRegistration';
import { PROGRESS } from '@constants/CustomCombination/constants';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import { 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

type TProps = {
  currentStep: number;
  onNextStep: () => void;
  onChange: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  customCombination: 인터페이스_생성단계_꿀조합;
  changeModalType: (type: string) => void;
};

function SelectComponent({
  currentStep: 현재진행도,
  onNextStep: 다음_선택지로_이동하기,
  onChange: 체인지핸들러_나만의_조합_수정,
  customCombination: 나만의_조합,
  changeModalType,
}: TProps) {
  return (
    <SelectWrap>
      {현재진행도 <= PROGRESS.LastStep ? (
        <>
          <SelectCombination
            currentStep={현재진행도}
            customCombination={나만의_조합}
            onChange={체인지핸들러_나만의_조합_수정}
            changeModalType={changeModalType}
          />
          <NextStepButton currentStep={현재진행도} onNextStep={다음_선택지로_이동하기} />
        </>
      ) : (
        <CombinationRegistration customCombination={나만의_조합} changeModalType={changeModalType} />
      )}
    </SelectWrap>
  );
}

export default SelectComponent;

const SelectWrap = styled.section`
  ${flexbox('column', 'space-between')};
  flex-grow: 1;
  min-height: ${changeRem(510)};
`;
