import { useRef, useState, useEffect } from 'react';
import DimmedLayer from '@components/Common/UI/DimmedLayer';
import RandomModalResult from '@components/Roulette/RandomModalResult';
import spinBoard from '@assets/images/roulette.png';
import startBtn from '@assets/images/startBtn.png';
import pointer from '@assets/images/pointer.png';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import {
  인터페이스_꿀조합_랜덤2,
  인터페이스_꿀조합_재료,
  인터페이스_레시피,
  인터페이스_재료데이터,
} from '@typings/ISandwich';
import recipe from '@data/recipe';
import ingredients from '@data/ingredients';

function RandomRoulette() {
  const rouletteRef = useRef<HTMLImageElement>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [sandwichData, setSandwichData] = useState<인터페이스_꿀조합_랜덤2>({
    꿀조합제목: '',
    베이스샌드위치: '',
    빵: '',
    치즈: '',
    소스: [],
    칼로리: '',
    속성: [],
    이미지: '',
    id: '',
  });

  console.log('recipe =>', recipe);
  const [random, setRandom] = useState<number>(-1);

  const randomNum = (num: number) => Math.floor(Math.random() * num);
  // 재료 객체 만들기
  useEffect(() => {
    // setRecipeData(recipe);
    // setIngredientsData(ingredientsData);
    if (random === -1) return;

    const 랜덤_필수재료 = ['빵', '치즈'];
    let 랜덤_소스_리스트 = Array(3).fill(-1);
    const kcal: number[] = [];
    const 랜덤_소스_이름_리스트: string[] = [];
    const 랜덤_소스_칼로리_리스트: string[] = [];
    const 랜덤_소스_속성_리스트: string[] = [];
    const filter = ingredients.filter((val: 인터페이스_재료데이터) => 랜덤_필수재료.includes(val.카테고리));

    // 빵, 치즈 랜덤 뽑기
    const 필터링된_랜덤_재료 = filter
      .map((val: 인터페이스_재료데이터) => {
        const 랜덤_인덱스 = randomNum(val.목록.length); // 빵의 개수, 치즈의 개수 안에서 랜덤
        kcal.push(랜덤_인덱스); // 빵과 치즈에 각각 인덱스 값 넣기
        return {
          [val.카테고리]: val.목록[랜덤_인덱스].이름,
        };
      })
      .reduce((acc: { [key: string]: string }, cur: { [key: string]: string }) => ({ ...acc, ...cur }), {});

    // 카테고리에서 소스 목록 뽑기
    const 소스_목록 = ingredients.find((val: 인터페이스_재료데이터) => val.카테고리 === '소스')!.목록;

    랜덤_소스_리스트 = 랜덤_소스_리스트.map((소스_인덱스: 인터페이스_꿀조합_재료) => {
      const 랜덤_인덱스 = randomNum(소스_목록.length);
      return 랜덤_인덱스;
    });

    // 중복 제거
    const 랜덤_소스_리스트_중복제거 = 랜덤_소스_리스트.filter(
      (소스_인덱스: 인터페이스_꿀조합_재료, i: number) => 랜덤_소스_리스트.indexOf(소스_인덱스) === i
    );

    // 소스 데이터 객체 3개 뽑기
    const 소스_랜덤_재료: 인터페이스_꿀조합_재료[] = 랜덤_소스_리스트_중복제거.map(randomIdx => 소스_목록[randomIdx]);
    console.log('소스_랜덤_재료 =>', 소스_랜덤_재료);

    const 랜덤_샌드위치_인덱스 = randomNum(recipe.length);
    const 랜덤_샌드위치_칼로리 = recipe[랜덤_샌드위치_인덱스].재료칼로리;

    // 각각 빵, 치즈 칼로리 총 합
    const 랜덤_샌드위치_재료_칼로리 = filter.reduce((acc: number, cur: 인터페이스_재료데이터, i: number) => {
      const response = cur.목록[kcal[i]].칼로리;
      return acc + Number(response);
    }, 0);

    // 소스에 대해 각각 이름, 속성, 칼로리 마다 배열 만들어서 리스팅 하기
    소스_랜덤_재료.forEach((val: 인터페이스_꿀조합_재료, i: number) => {
      랜덤_소스_이름_리스트.push(val.이름);
      랜덤_소스_속성_리스트.push(val.속성 || '');
      랜덤_소스_칼로리_리스트.push(val.칼로리 || '');
    });

    const 랜덤_소스_뱃지리스트 = 랜덤_소스_속성_리스트.filter(
      (v: string, i: number) => 랜덤_소스_속성_리스트.indexOf(v) === i
    );

    // 소스 칼로리
    const toNumbers = (arr: string[]) => arr.map(Number);
    const 소스_합 = toNumbers(랜덤_소스_칼로리_리스트).reduce((a: number, b: number) => a + b);

    const 랜덤_샌드위치_총_칼로리 = (
      Number(랜덤_샌드위치_칼로리) +
      Number(랜덤_샌드위치_재료_칼로리) +
      소스_합
    ).toFixed(1);

    console.log('소스칼로리 =>', 소스_합);

    // setState
    setSandwichData({
      꿀조합제목: '',
      베이스샌드위치: recipe[랜덤_샌드위치_인덱스].이름,
      빵: 필터링된_랜덤_재료!.빵,
      치즈: 필터링된_랜덤_재료!.치즈,
      속성: 랜덤_소스_뱃지리스트,
      이미지: recipe[랜덤_샌드위치_인덱스].이미지, // 경로 물어보기
      소스: 랜덤_소스_이름_리스트,
      칼로리: 랜덤_샌드위치_총_칼로리,
      id: '',
    });
    console.log('이미지 =>', recipe[랜덤_샌드위치_인덱스].이미지);
    // finally
    setTimeout(() => {
      (rouletteRef.current as HTMLImageElement).style.transform = '';
      (rouletteRef.current as HTMLImageElement).style.transition = '';
      모달_열기();
    }, 3000);
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
            <RandomModalResult sandwich={sandwichData} onClick={클릭핸들러_모달_닫기} />
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
  width: ${changeRem(279)};
  margin: 18px auto 0;
  padding-top: 18px;
  ${mediaQuery} {
    /*width: ${changeRem(379)};*/
    width: 50%;
  }
`;

const Roulette = styled.img``;
const Pointer = styled.img`
  position: absolute;
  width: ${changeRem(38)};
  left: 50%;
  top: 0;
  transform: translate(-50%);
  ${mediaQuery} {
    /*width: ${changeRem(50)};*/
    width: 8%;
  }
`;

const StartButton = styled.img`
  position: absolute;
  width: ${changeRem(80)};
  /* height: 80px; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${mediaQuery} {
    /*width: ${changeRem(99)};*/
    width: 18%;
  }
`;
