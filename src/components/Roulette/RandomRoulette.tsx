import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import DimmedLayer from '@components/UI/DimmedLayer';
import RandomModalResult from '@components/Roulette/RandomModalResult';
import spinBoard from '@assets/images/roulette.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

import {
  인터페이스_재료데이터,
  // 인터페이스_랜덤재료샌드위치,
  인터페이스_꿀조합_랜덤칼로리포함,
  인터페이스_꿀조합_랜덤,
} from '../../types/ISandwich';

function RandomRoulette() {
  const rouletteRef = useRef<HTMLImageElement>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [sandwichData, setSandwichData] = useState<인터페이스_꿀조합_랜덤>({
    이름: '',
    베이스샌드위치: '',
    빵: '',
    치즈: '',
    소스: '',
    칼로리: '',
    뱃지리스트: [],
    이미지: '',
    id: '',
  });

  const [random, setRandom] = useState<number>(-1);

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
          const kcal: number[] = [];

          const filter = res2.data.filter((val: 인터페이스_재료데이터) => wanted.includes(val.카테고리));

          const 필터링된_랜덤_재료 = filter
            .map((val: 인터페이스_꿀조합_랜덤칼로리포함) => {
              const 랜덤_인덱스 = randomNum(val.목록.length);
              kcal.push(랜덤_인덱스);
              return {
                [val.카테고리]: val.목록[랜덤_인덱스].이름,
              };
            })
            .reduce((acc: { [key: string]: string }, cur: { [key: string]: string }) => ({ ...acc, ...cur }), {});

          const 랜덤_샌드위치_인덱스 = randomNum(res1.data.length);
          const 랜덤_샌드위치_칼로리 = res1.data[랜덤_샌드위치_인덱스].재료칼로리;
          const 랜덤_재료_칼로리_배열 = filter.map(
            (val: 인터페이스_꿀조합_랜덤칼로리포함, i: number) => val.목록[kcal[i]].칼로리
          );
          const 랜덤_샌드위치_재료_칼로리 = 랜덤_재료_칼로리_배열.reduce(
            (a: number, b: number) => Number(a) + Number(b)
          );
          const 랜덤_샌드위치_총_칼로리 = Math.floor(Number(랜덤_샌드위치_칼로리) + Number(랜덤_샌드위치_재료_칼로리));
          const 랜덤_뱃지 = filter.map((val: 인터페이스_꿀조합_랜덤칼로리포함, i: number) => val.목록[kcal[i]].속성);
          // const 랜덤_뱃지 = res2.data
          //   .filter((val: 인터페이스_재료데이터) => ['소스'].includes(val.카테고리))
          //   .map((val: 인터페이스_꿀조합_랜덤칼로리포함, i: number) => val.목록[kcal[i]].속성);

          // console.log(필터링된_랜덤_재료, 랜덤_뱃지, '뱃지');
          // console.log(랜덤_샌드위치_칼로리, '+', 랜덤_재료_칼로리_배열, '=', 랜덤_샌드위치_총_칼로리);

          setSandwichData({
            이름: '',
            베이스샌드위치: res1.data[랜덤_샌드위치_인덱스].이름,
            ...필터링된_랜덤_재료,
            칼로리: 랜덤_샌드위치_총_칼로리,
            뱃지리스트: 랜덤_뱃지,
          });
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
    setRandom(Math.floor(Math.random() * 17));
    룰렛_회전하기();
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
            {/* 데이터 정리되면 요 아래 걸로 보낼거임 지우지 말자 */}
            <RandomModalResult sandwich={sandwichData} onClick={클릭핸들러_모달_닫기} />
            {/* <RandomModalResult onClick={클릭핸들러_모달_닫기} /> */}
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
