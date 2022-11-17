import CustomStep from '@components/CustomCombination/CustomStep';
import { 인터페이스_꿀조합 } from '../../types/ISandwitch';

type 타입_재료선택 = {
  customCombination: 인터페이스_꿀조합;
  currentStep: number;
  onChange: (선택한재료: 인터페이스_꿀조합) => void;
};

function SelectCombination(props: 타입_재료선택) {
  const { currentStep: 현재진행도, onChange: 나만의_조합_수정_이벤트, customCombination: 나만의_조합 } = props;

  return <CustomStep currentStep={현재진행도} customCombination={나만의_조합} onChange={나만의_조합_수정_이벤트} />;
}

export default SelectCombination;
