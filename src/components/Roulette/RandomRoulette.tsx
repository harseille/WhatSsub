import { useRef, useState } from 'react';
import DimmedLayer from '@components/UI/DimmedLayer';
import RandomModalResult from '@components/Roulette/RandomModalResult';
import spinBoard from '@assets/images/roulette.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

function RandomRoulette() {
  const rouletteRef = useRef<HTMLImageElement>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const 룰렛_회전하기 = () => {
    const random = Math.floor(+Math.random * 6);
    const rotate = 3000;
    (rouletteRef.current as HTMLImageElement).style.transform = `rotate(-${rotate}deg)`;
    (rouletteRef.current as HTMLImageElement).style.transition = `4s`;
    (rouletteRef.current as HTMLImageElement).style.transitionTimingFunction = 'ease-out';
    return random;
  };

  const 룰렛_돌리기 = () => {
    룰렛_회전하기();
    console.log('회전 클릭 이벤트');

    setTimeout(() => {
      console.log('3초');
      (rouletteRef.current as HTMLImageElement).style.transform = '';
      (rouletteRef.current as HTMLImageElement).style.transition = '';
      모달_열기();
    }, 3000);
  };

  const 모달_열기 = () => {
    setIsShowModal(true);
  };
  const 클릭핸들러_모달_닫기 = () => {
    setIsShowModal(false);
  };

  return (
    <div>
      <div>
        {isShowModal ? (
          <div>
            <DimmedLayer />
            <RandomModalResult onClick={클릭핸들러_모달_닫기} />
          </div>
        ) : null}
      </div>
      <Container>
        <Roulette src={spinBoard} alt="룰렛" ref={rouletteRef} />
        <StartButton src={startBtn} alt="시작 버튼" onClick={룰렛_돌리기} />
        <Pointer src={pointer} alt="포인터" />
      </Container>
    </div>
  );
}

export default RandomRoulette;

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
