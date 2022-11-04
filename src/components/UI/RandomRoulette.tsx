import styled from '@emotion/styled';
import spinBoard from '@assets/images/spinBoard.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import { changeRem } from '../../styles/mixin';

function RandomRoulette() {
  return (
    <Container>
      <Roulette src={spinBoard} alt="pointer" />
      <StartButton src={startBtn} alt="pointer" />
      <Pointer src={pointer} alt="pointer" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 100px;
`;
const Roulette = styled.img`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 18%;
  transform: translate(-50%, -4%);
  width: ${changeRem(316)};
`;
const Pointer = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${changeRem(30)};
`;
const StartButton = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 110%);
  width: ${changeRem(82)};
`;
export default RandomRoulette;
