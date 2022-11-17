import { useRef } from 'react';
import styled from '@emotion/styled';
import spinBoard from '@assets/images/roulette.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import { changeRem } from '@styles/mixin';

function RandomRoulette() {
  const roulette = useRef<string | any>();

  const 룰렛_회전 = () => {
    const random = Math.floor(+Math.random * 6);
    const rotate = 3000;
    roulette.current.style.transform = `rotate(-${rotate}deg)`;
    roulette.current.style.transition = `2s`;
    return random;
  };

  const 룰렛_돌리기 = () => {
    룰렛_회전();
    console.log('회전 클릭 이벤트');
    setTimeout(() => {
      console.log('3초');
      // 여기에 모달 뜨게
    }, 3000);
  };

  return (
    <Container>
      <Roulette src={spinBoard} alt="룰렛" ref={roulette} />
      <StartButton src={startBtn} alt="시작 버튼" onClick={룰렛_돌리기} />
      <Pointer src={pointer} alt="포인터" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 379px;
  margin: 18px auto 0;
  padding-top: 18px;
`;
const Roulette = styled.img`
  /* transform: rotate(-${200}deg); */
`;
const Pointer = styled.img`
  position: absolute;
  width: 48px;
  height: 84px;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  /* top: 18%;
  transform: translate(-50%, -50%);
  width: ${changeRem(30)}; */
`;
const StartButton = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* top: 29%;
  width: ${changeRem(82)}; */
`;
export default RandomRoulette;
