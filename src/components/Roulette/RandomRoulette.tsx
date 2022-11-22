import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import DimmedLayer from '@components/UI/DimmedLayer';
import RandomModalResult from '@components/Roulette/RandomModalResult';
import spinBoard from '@assets/images/roulette.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import ChickenSlice from '@assets/images/Chicken_Slice.png';

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
          const 랜덤_필수재료 = ['빵', '치즈'];
          const 랜덤_소스_리스트 = Array(3).fill('소스');
          const kcal: number[] = [];
          const kcalS: number[] = [];
          const filter = res2.data.filter((val: 인터페이스_재료데이터) => 랜덤_필수재료.includes(val.카테고리));

          const randomIdx: number[] = [];

          // ! 빵, 치즈 랜덤 뽑기
          const 필터링된_랜덤_재료 = filter
            .map((val: 인터페이스_꿀조합_랜덤칼로리포함) => {
              const 랜덤_인덱스 = randomNum(val.목록.length); // 빵의 개수, 치즈의 개수 안에서 랜덤
              kcal.push(랜덤_인덱스); // 빵과 치즈에 각각 인덱스 값 넣기
              return {
                [val.카테고리]: val.목록[랜덤_인덱스].이름,
              };
            })
            .reduce((acc: { [key: string]: string }, cur: { [key: string]: string }) => ({ ...acc, ...cur }), {});

          // ! 소스 랜덤 배열로 뽑기
          // ![소스 랜덤]기존 내가 손본 소스 코드 1
          const 소스_랜덤_재료 = res2.data
            .filter((val: 인터페이스_재료데이터) => 랜덤_소스_리스트.includes(val.카테고리))
            .map((val: 인터페이스_꿀조합_랜덤칼로리포함) => {
              const 랜덤_인덱스 = randomNum(val.목록.length);
              const 랜덤_인덱스2 = randomNum(val.목록.length);
              const 랜덤_인덱스3 = randomNum(val.목록.length);
              kcalS.push(랜덤_인덱스, 랜덤_인덱스2, 랜덤_인덱스3);
              return {
                // [val.카테고리]: [val.목록[랜덤_인덱스].이름, val.목록[랜덤_인덱스2].이름, val.목록[랜덤_인덱스3].이름],
                이름: val.목록[랜덤_인덱스].이름,
                속성: val.목록[랜덤_인덱스].속성,
                칼로리: val.목록[랜덤_인덱스].칼로리,
              };
            })
            .reduce((acc: { [key: string]: string }, cur: { [key: string]: string }) => ({ ...acc, ...cur }), {});
          console.log('소스 랜덤 재료 ==>', 소스_랜덤_재료);

          // ! [소스 랜덤] 도은이 조언과 내가 조합해보고 있는1
          // const 소스 = res2.data.find((val: 인터페이스_꿀조합_랜덤칼로리포함) => val.카테고리 === '소스').목록;
          // console.log('소스 =>', 소스);

          // const 소스_랜덤_재료 = res2.data
          //   .filter((val: 인터페이스_재료데이터) => 랜덤_소스_리스트.includes(val.카테고리))
          //   .map((val: 인터페이스_꿀조합_랜덤칼로리포함) => {
          //     const 랜덤_인덱스 = randomNum(val.목록.length); // 소스의 개수, 치즈의 개수 안에서 랜덤
          //     const 랜덤_인덱스2 = randomNum(val.목록.length);
          //     const 랜덤_인덱스3 = randomNum(val.목록.length);
          //     console.log('랜덤인덱스 =>', 랜덤_인덱스, 랜덤_인덱스2, 랜덤_인덱스3, 'randomIdx =>', randomIdx);

          //     if (랜덤_인덱스 !== 랜덤_인덱스2 && 랜덤_인덱스 !== 랜덤_인덱스3 && 랜덤_인덱스2 !== 랜덤_인덱스3) {
          //       randomIdx.push(랜덤_인덱스);
          //       randomIdx.push(랜덤_인덱스2);
          //       randomIdx.push(랜덤_인덱스3);
          //     }
          //     const result = randomIdx.map(idx => 소스[idx]);

          //     return result;
          //   });

          // console.log('소스 랜덤 재료 ==>', 소스_랜덤_재료);

          // ![소스 랜덤] 도은이가 러프하게 그려준 코드 1
          // const 소스 = res2.data.find((val: 인터페이스_꿀조합_랜덤칼로리포함) => val.카테고리 === '소스').목록;
          // const 소스_랜덤_재료 = 소스.map((val: 인터페이스_꿀조합_랜덤칼로리포함) => {
          //   const 랜덤_인덱스 = randomNum(val.목록.length); // 소스의 개수, 치즈의 개수 안에서 랜덤
          //   const 랜덤_인덱스2 = randomNum(val.목록.length);
          //   const 랜덤_인덱스3 = randomNum(val.목록.length);

          //   if (랜덤_인덱스 !== 랜덤_인덱스2 && 랜덤_인덱스 !== 랜덤_인덱스3 && 랜덤_인덱스2 !== 랜덤_인덱스3) {
          //     randomIdx.push(랜덤_인덱스);
          //   }
          //   return {
          //     이름: val.목록[랜덤_인덱스].이름,
          //     속성: val.목록[랜덤_인덱스],
          //   };
          // });
          // console.log(소스, 소스_랜덤_재료);
          // const randomIdx = []

          // if(인덱스비교하기) {
          //   randomIdx.push(index);
          // }

          // randomIdx.map(idx => 소스[idx]);

          const 랜덤_샌드위치_인덱스 = randomNum(res1.data.length);
          const 랜덤_샌드위치_칼로리 = res1.data[랜덤_샌드위치_인덱스].재료칼로리;
          // 각각 빵, 치즈 칼로리 배열
          const 랜덤_재료_칼로리_배열 = filter.map(
            (val: 인터페이스_꿀조합_랜덤칼로리포함, i: number) => val.목록[kcal[i]].칼로리
          );
          // 빵, 치즈 칼로리 합
          const 랜덤_샌드위치_재료_칼로리 = 랜덤_재료_칼로리_배열.reduce(
            (a: number, b: number) => Number(a) + Number(b)
          );
          // 소스 칼로리 배열
          const 랜덤_소스_칼로리_배열 = res2.data
            .filter((val: 인터페이스_재료데이터) => 랜덤_소스_리스트.includes(val.카테고리))
            .map((val: 인터페이스_꿀조합_랜덤칼로리포함, i: number) => val.목록[kcalS[i]].칼로리);
          // 소스 칼로리 합

          // ! 소스 칼로리 포함 시켜야함
          const 랜덤_샌드위치_총_칼로리 = Math.floor(Number(랜덤_샌드위치_칼로리) + Number(랜덤_샌드위치_재료_칼로리));

          // ! 수정
          const 랜덤_뱃지 = res2.data
            .filter((val: 인터페이스_재료데이터) => 랜덤_소스_리스트.includes(val.카테고리))
            .map((val: 인터페이스_꿀조합_랜덤칼로리포함, i: number) => val.목록[kcal[i]].속성);

          // ! setState
          setSandwichData({
            이름: '',
            베이스샌드위치: res1.data[랜덤_샌드위치_인덱스].이름,
            ...필터링된_랜덤_재료,
            칼로리: 랜덤_샌드위치_총_칼로리,
            뱃지리스트: 랜덤_뱃지,
            이미지: ChickenSlice,
            ...소스_랜덤_재료,
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
