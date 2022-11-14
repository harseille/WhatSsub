import styled from '@emotion/styled';
import spinBoard from '@assets/images/spinBoard.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import { changeRem } from '@styles/mixin';

function RandomRoulette() {
  return (
    <Container>
      <Roulette src={spinBoard} alt="룰렛" />
      <StartButton src={startBtn} alt="시작 버튼" />
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
  /* 
  left: 50%;
  top: 18%;
  transform: translate(-50%, -4%);
  width: ${changeRem(316)}; */
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
