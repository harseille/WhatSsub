import React, { useState } from 'react';
import styled from '@emotion/styled';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import PulledPork from '@assets/images/sandwich_Pulled-Pork+cheese.png';
import SteakCheese from '@assets/images/sandwich_Steak-&-Cheese.png';
import Wrapper from '@components/UI/Wrapper';
import { changeRem } from '@styles/mixin';
import SandwitchInfo from '@components/UI/SandwitchInfo';

function MyPage() {
  interface 샌드위치뱃지리스트 {
    맛: string[];
    메인재료: string;
    추가사항: string[];
  }
  interface 샌드위치 {
    이미지: string;
    이름: string;
    베이스샌드위치: string;
    칼로리: string;
    좋아요: number;
    날짜: string;
    뱃지리스트: 샌드위치뱃지리스트;
  }

  const sandwitches: 샌드위치[] = [
    {
      이미지: ChickenSlice,
      이름: '꿀꿀마앗',
      베이스샌드위치: '치킨 슬라이스',
      칼로리: '265',
      좋아요: 20,
      날짜: '2022.11.24',
      뱃지리스트: {
        맛: ['달달', '고소'],
        메인재료: '치킨고기',
        추가사항: ['고기러버'],
      },
    },
    {
      이미지: PulledPork,
      이름: '돼지 잡자',
      베이스샌드위치: '풀드 포크드',
      칼로리: '327',
      좋아요: 5,
      날짜: '2022.12.03',
      뱃지리스트: {
        맛: ['달달', '고소'],
        메인재료: '돼지고기',
        추가사항: ['고기러버'],
      },
    },
    {
      이미지: SteakCheese,
      이름: '소고기 굿굿',
      베이스샌드위치: '풀드 포크드',
      칼로리: '355',
      좋아요: 1,
      날짜: '2022.11.26',
      뱃지리스트: {
        맛: ['고소'],
        메인재료: '소고기',
        추가사항: ['고기러버'],
      },
    },
  ];
  const [toggleState, setToggleState] = useState<boolean | undefined>(true);

  const combinationChangeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes('단찌');
    setToggleState(사용자명_체크);

    console.log(사용자명_체크);
  };

  const clickHandler = () => {};

  const likeFirstOrder = (prev: 샌드위치, next: 샌드위치): number => next.좋아요 - prev.좋아요;

  const dateFirstOrder = (prev: 샌드위치, next: 샌드위치): number => {
    if (prev.날짜 < next.날짜) return 1;
    return -1;
  };

  const userCombination = sandwitches.sort(dateFirstOrder).map(sandwitch => (
    <Card onClick={clickHandler}>
      <SandwitchInfo sandwitch={sandwitch} />
    </Card>
  ));

  const likeCombination = sandwitches.sort(likeFirstOrder).map(sandwitch => (
    <Card onClick={clickHandler}>
      <SandwitchInfo sandwitch={sandwitch} />
    </Card>
  ));

  return (
    <Wrapper>
      <Content>
        <UserTitle onClick={combinationChangeHandler}>단찌만의 조합</UserTitle>
        <LikeTitle className="sub-title" onClick={combinationChangeHandler}>
          좋아요 꿀조합
        </LikeTitle>
        {toggleState ? userCombination : likeCombination}
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  width: 380px;
  margin: 30px auto 0;
`;

const UserTitle = styled.span`
  text-align: left;
  padding: 25px 15px 0 0;
  display: inline;
  color: #2a2a2a;
  font-weight: 500;
  font-size: 18px;
  background-color: #fab608;
  border-radius: 5px;
  padding: 4px 6px;
  margin-right: 10px;
`;
const LikeTitle = styled.span`
  font-weight: 500;
  color: #2a2a2a;
  border: 2px solid #f5d891;
  background-color: #f5d891;
  border-radius: 5px;
  padding: 4px 6px;
  transition: 0.2s;
  &:hover {
    background-color: #fab608;
    border: 2px solid #fab608;
  }
`;

const UserName = styled.h2`
  /* display: inline;
  color: #2a2a2a;
  font-weight: 500;
  font-size: 18px;
  padding-right: 3px;
  background-color: #fab608;
  border-radius: 5px;
  padding: 4px 6px; */
`;

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 35px;
  width: ${changeRem(370)};
  height: ${changeRem(286)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  margin: 20px auto 0;
`;

export default MyPage;
