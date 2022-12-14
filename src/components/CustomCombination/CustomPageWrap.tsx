import { useState, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { useBeforeunload } from 'react-beforeunload';
import { isLoggedInState } from '@state/index';
import combinationVerification from '@services/customCombination/combinationVerification';
import MyCombinationStep from '@components/CustomCombination/MyCombinationStep';
import SelectComponent from '@components/CustomCombination/SelectComponent';
import CustomPageModal from '@components/CustomCombination/CustomPageModal';
import Wrapper from '@components/Common/UI/Wrapper';
import { 나만의_조합_초기값, PROGRESS, MODAL_TYPE_KEYS } from '@constants/CustomCombination/constants';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

function CustomPageWrap() {
  const [modalType, setModalType] = useState('none');
  const [현재진행도, 현재진행도_수정] = useState(PROGRESS.FirstStep);
  const [나만의_조합, 나만의_조합_수정] = useState(나만의_조합_초기값);
  const [변경될_진행도, 변경될_진행도_수정] = useState(PROGRESS.FirstStep);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  if (현재진행도 !== 변경될_진행도) {
    if (combinationVerification(현재진행도, 나만의_조합)) 현재진행도_수정(변경될_진행도);
    else {
      setModalType(MODAL_TYPE_KEYS.Required);
      변경될_진행도_수정(현재진행도);
    }
  }

  const closeModal = useCallback(() => setModalType(MODAL_TYPE_KEYS.none), []);
  const changeModalType = (type: string) => setModalType(type);

  useBeforeunload(e => e.preventDefault());

  useEffect(() => {
    if (!isLoggedIn) setModalType(MODAL_TYPE_KEYS.Login);

    const 뒤로가기_경고 = () => {
      window.history.pushState(null, '', window.location.href);
      changeModalType(MODAL_TYPE_KEYS.BackEvent);
    };
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', 뒤로가기_경고);

    return () => window.removeEventListener('popstate', 뒤로가기_경고);
  }, [isLoggedIn]);

  const 클릭핸들러_현재진행도_수정 = useCallback(
    (진행도: number) => {
      if (진행도 === 현재진행도) return;
      if (현재진행도 < 진행도) 변경될_진행도_수정(진행도);
      else {
        현재진행도_수정(진행도);
        변경될_진행도_수정(진행도);
      }
    },
    [현재진행도]
  );

  const 다음_선택지로_이동하기 = () => {
    if (현재진행도 > PROGRESS.LastStep) return;
    변경될_진행도_수정(변경될_진행도 => 변경될_진행도 + 1);
  };

  const 체인지핸들러_나만의_조합_수정 = (선택한재료: 인터페이스_생성단계_꿀조합) => 나만의_조합_수정(선택한재료);

  return (
    <>
      <CustomPageModal type={modalType} closeModal={closeModal} />
      {isLoggedIn ? (
        <CustomPage>
          {현재진행도 <= 4 ? (
            <MyCombinationStep currentStep={현재진행도} onChangeStep={클릭핸들러_현재진행도_수정} />
          ) : null}
          <SelectComponent
            currentStep={현재진행도}
            customCombination={나만의_조합}
            onChange={체인지핸들러_나만의_조합_수정}
            onNextStep={다음_선택지로_이동하기}
            changeModalType={changeModalType}
          />
        </CustomPage>
      ) : null}
    </>
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
    height: calc(100vh - 110px);
  }
`;
