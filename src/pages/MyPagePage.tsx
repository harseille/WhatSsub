import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import PulledPork from '@assets/images/sandwich_Pulled-Pork+cheese.png';
import SteakCheese from '@assets/images/sandwich_Steak-&-Cheese.png';
import Wrapper from '@components/UI/Wrapper';
import { changeRem } from '@styles/mixin';
import SandwichInfo from '@components/UI/SandwichInfo';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import { 샌드위치뱃지리스트, 인터페이스_재료 } from '../types/ISandwich';

interface 인터페이스_꿀조합_임의 {
  id: string;
  이름: string;
  작성자: string;
  작성일: string;
  좋아요: string;
  베이스샌드위치: string;
  이미지: string;
  칼로리: string;
  뱃지리스트: 샌드위치뱃지리스트;
  선택재료: 인터페이스_재료[];
}

const sandwiches: 인터페이스_꿀조합_임의[] = [
  {
    id: 'a1',
    이름: '꿀꿀마앗',
    작성자: '다다',
    작성일: '2022.11.05',
    좋아요: '44',
    베이스샌드위치: '치킨 슬라이스',
    이미지: ChickenSlice,
    칼로리: '265',
    뱃지리스트: {
      맛: ['달달', '고소'],
      재료: ['닭고기'],
      추가사항: ['고기러버'],
    },
    선택재료: [],
  },
  {
    id: 'a2',
    이름: '돼지위치',
    작성자: '댑',
    작성일: '2022.11.01',
    좋아요: '51',
    베이스샌드위치: '풀드 포크드',
    이미지: PulledPork,
    칼로리: '327',
    뱃지리스트: {
      맛: ['달달', '고소'],
      재료: ['돼지고기'],
      추가사항: ['고기러버'],
    },
    선택재료: [],
  },
  {
    id: 'a3',
    이름: '소고기 굿굿',
    작성자: '다비나',
    작성일: '2022.11.017',
    좋아요: '51',
    베이스샌드위치: '풀드 포크드',
    이미지: SteakCheese,
    칼로리: '355',
    뱃지리스트: {
      맛: ['고소'],
      재료: ['소고기'],
      추가사항: ['고기러버'],
    },
    선택재료: [],
  },
];

function MyPage() {
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);

  useEffect(() => {
    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    }
  }, [isLoggedin]);

  const [toggleState, setToggleState] = useState<boolean | undefined>(true);

  const combinationChangeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes('단찌');
    setToggleState(사용자명_체크);
  };

  // const clickHandler = (id, e: React.MouseEvent<HTMLElement>) => {
  //   navigator('/ranking/a2');
  // };
  const clickHandler = (sandwiches: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log((e.target as Element).closest('SandwichInfo'));
    // console.log(sandwiches);
    navigate('/best-combination/${sandwiches[1]}');
  };

  const likeFirstOrder = (prev: 인터페이스_꿀조합_임의, next: 인터페이스_꿀조합_임의): number =>
    +next.좋아요 - +prev.좋아요;

  const dateFirstOrder = (prev: 인터페이스_꿀조합_임의, next: 인터페이스_꿀조합_임의): number => {
    if (prev.작성일 < next.작성일) return 1;
    return -1;
  };

  const userCombination = sandwiches.sort(dateFirstOrder).map(sandwich => (
    // <Card onClick={clickHandler.bind(null, sandwtch.id)}>
    <Card onClick={clickHandler}>
      <SandwichInfo sandwich={sandwich} />
    </Card>
  ));

  const likeCombination = sandwiches.sort(likeFirstOrder).map(sandwich => (
    <Card onClick={clickHandler}>
      <SandwichInfo sandwich={sandwich} />
    </Card>
  ));

  return (
    <Wrapper>
      <Content>
        {toggleState ? (
          <div>
            <UserTitle onClick={combinationChangeHandler}>단찌만의 조합</UserTitle>
            <LikeTitle className="sub-title" onClick={combinationChangeHandler}>
              좋아요 꿀조합
            </LikeTitle>
          </div>
        ) : (
          <div>
            <UserTitle style={{ background: '#f5d891' }} onClick={combinationChangeHandler}>
              단찌만의 조합
            </UserTitle>
            <LikeTitle style={{ background: '#fab608' }} className="sub-title" onClick={combinationChangeHandler}>
              좋아요 꿀조합
            </LikeTitle>
          </div>
        )}
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
  transition: 0.3s;
  cursor: pointer;
`;
const LikeTitle = styled.span`
  font-weight: 500;
  color: #2a2a2a;
  border: 1px solid #f5d891;
  background-color: #f5d891;
  border-radius: 5px;
  padding: 4px 6px;
  transition: 0.3s;
  cursor: pointer;
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
