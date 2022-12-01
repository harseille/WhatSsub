import { PROGRESS } from '@constants/CustomCombination/constants';
import { 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

const firstStepValidation = (나만의_조합: 인터페이스_생성단계_꿀조합) => {
  const isSelectedSandwich = !!나만의_조합.베이스샌드위치;
  return isSelectedSandwich;
};

const secondStepValidation = (나만의_조합: 인터페이스_생성단계_꿀조합) => {
  const isSelectedBread = !!나만의_조합.선택재료.find(재료 => 재료.카테고리 === '빵');
  const isToasted = !!나만의_조합.토스팅;
  return isSelectedBread && isToasted;
};

const combinationVerification = (진행도: number, 나만의_조합: 인터페이스_생성단계_꿀조합) => {
  if (진행도 === PROGRESS.FirstStep) return firstStepValidation(나만의_조합);
  if (진행도 === PROGRESS.SecondStep) return secondStepValidation(나만의_조합);
  if (진행도 === PROGRESS.ThirdStep || 진행도 === PROGRESS.LastStep) return true;
  return false;
};

export default combinationVerification;
