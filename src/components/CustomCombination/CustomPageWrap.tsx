import { useState } from 'react';
import MyCombinationStep from '@components/CustomCombination/MyCombinationStep';
import SelectComponent from '@components/CustomCombination/SelectComponent';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_꿀조합 } from '../../types/ISandwich';

const 나만의_조합_초기값: 인터페이스_꿀조합 = {
  id: '',
  이름: '',
  작성자: '',
  작성일: '',
  좋아요: '0',
  베이스샌드위치: '',
  이미지: '',
  토스팅: '',
  칼로리: '',
  뱃지리스트: {
    맛: [],
    재료: [],
    추가사항: [],
  },
  선택재료: [],
};

function CustomPageWrap() {
  const [현재진행도, 현재진행도_수정] = useState(1);
  const [나만의_조합, 나만의_조합_수정] = useState(나만의_조합_초기값);

  const 클릭핸들러_현재진행도_수정 = (진행도: number) => 현재진행도_수정(진행도);

  const 다음_선택지로_이동하기 = () => {
    if (현재진행도 > 4) return;
    현재진행도_수정(진행도 => 진행도 + 1);
  };

  const 체인지핸들러_나만의_조합_수정 = (선택한재료: 인터페이스_꿀조합) => 나만의_조합_수정(선택한재료);
  return (
    <CustomPage>
      {현재진행도 <= 4 ? (
        <MyCombinationStep currentStep={현재진행도} onChangeStep={클릭핸들러_현재진행도_수정} />
      ) : null}
      <SelectComponent
        currentStep={현재진행도}
        customCombination={나만의_조합}
        onChange={체인지핸들러_나만의_조합_수정}
        onNextStep={다음_선택지로_이동하기}
      />
    </CustomPage>
  );
}

export default CustomPageWrap;

const CustomPage = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
  padding: 0 24px;
  overflow-y: auto;
  ${mediaQuery} {
    padding: 0 36px;
  }
`;
