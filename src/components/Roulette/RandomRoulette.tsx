import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import DimmedLayer from '@components/UI/DimmedLayer';
import RandomModalResult from '@components/Roulette/RandomModalResult';
import spinBoard from '@assets/images/roulette.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_재료데이터, 인터페이스_랜덤재료샌드위치 } from '../../types/ISandwich';

function RandomRoulette() {
  const rouletteRef = useRef<HTMLImageElement>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [sandwichData, setSandwichData] = useState<인터페이스_랜덤재료샌드위치>({
    이름: '',
    베이스샌드위치: '',
    빵: '',
    치즈: '',
    소스: '',
    칼로리: '',
    뱃지리스트: [],
  });
  const [random, setRandom] = useState<number>(-1);
  const [sumNum, setSumNum] = useState<number>(0);

  const randomNum = (num: number) => Math.floor(Math.random() * num);

  // 샌드위치
  useEffect(() => {
    console.log(sandwichData, '샌드위치 데이터');
  }, [sandwichData]);

  // 재료 객체 만들기
  useEffect(() => {
    if (random === -1) return;

    axios
      .all([
        axios.get('http://localhost:3000/data/recipe.json'),
        axios.get('http://localhost:3000/data/ingredients.json'),
      ])
      .then(
        axios.spread((res1, res2) => {
          const wanted = ['빵', '치즈', '소스'];
          const filter = res2.data
            .filter((val: 인터페이스_재료데이터) => wanted.includes(val.카테고리))
            .map((val: 인터페이스_재료데이터) => ({ [val.카테고리]: val.목록[randomNum(val.목록.length)].이름 }))
            .reduce((acc: { [key: string]: string }, cur: { [key: string]: string }) => ({ ...acc, ...cur }), {});

          const 칼로리 = '265';
          // const 칼로리 = res2.data
          //   .filter((val: 인터페이스_재료데이터) => wanted[0].includes(val.카테고리))
          //   .map((val: 인터페이스_재료데이터) => {
          //     console.log(val.목록[randomNum(val.목록.length)].이름, filter.빵, '같은지 확인~~~~~~~~~~~~~');
          //     // if (val.목록[randomNum(val.목록.length)].이름 === filter.빵) console.log('gg');
          //     if (val.목록[randomNum(val.목록.length)].includes(filter.빵)) console.log('gg');
          //   });
          // 소스의 속성
          // const 뱃지리스트;

          setSandwichData({
            이름: '',
            베이스샌드위치: res1.data[randomNum(res1.data.length)].이름,
            ...filter,
            칼로리,
            // 뱃지리스트,
          });

          // console.log(filter, 'filter', 칼로리, '칼로리');
          // console.log(filter.빵);
          // console.log(칼로리);
        })
      )
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          (rouletteRef.current as HTMLImageElement).style.transform = '';
          (rouletteRef.current as HTMLImageElement).style.transition = '';
          모달_열기();
        }, 3000);
      });
  }, [random]);

  const 룰렛_회전하기 = () => {
    const rotate = 3000;
    (rouletteRef.current as HTMLImageElement).style.transform = `rotate(-${rotate}deg)`;
    (rouletteRef.current as HTMLImageElement).style.transition = `4s`;
    (rouletteRef.current as HTMLImageElement).style.transitionTimingFunction = 'ease-out';
    return random;
  };

  const 룰렛_돌리기 = () => {
    // console.log(sandwichData, random);
    setRandom(Math.floor(Math.random() * 17));
    룰렛_회전하기();
  };

  const 모달_열기 = () => {
    setIsShowModal(true);
    // console.log(sandwichData[random].이름);
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
            {/* <RandomModalResult randomSandwich={sandwichData} onClick={클릭핸들러_모달_닫기} /> */}
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
