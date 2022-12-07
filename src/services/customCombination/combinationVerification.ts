import { PROGRESS } from '@constants/CustomCombination/constants';
import { 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

const 베이스샌드위치_유효성검사 = (나만의_조합: 인터페이스_생성단계_꿀조합) => {
  const 샌드위치_선택_여부 = !!나만의_조합.베이스샌드위치;
  return 샌드위치_선택_여부;
};

const 빵_토스팅_유효성검사 = (나만의_조합: 인터페이스_생성단계_꿀조합) => {
  const 빵_선택_여부 = !!나만의_조합.선택재료.find(재료 => 재료.카테고리 === '빵');
  const 토스팅_선택_여부 = !!나만의_조합.토스팅;
  return 빵_선택_여부 && 토스팅_선택_여부;
};

const combinationVerification = (진행도: number, 나만의_조합: 인터페이스_생성단계_꿀조합) => {
  if (진행도 === PROGRESS.FirstStep) return 베이스샌드위치_유효성검사(나만의_조합);
  if (진행도 === PROGRESS.SecondStep) return 빵_토스팅_유효성검사(나만의_조합);
  if (진행도 === PROGRESS.ThirdStep || 진행도 === PROGRESS.LastStep) return true;
  return false;
};

export default combinationVerification;
