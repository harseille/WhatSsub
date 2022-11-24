import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import PulledPork from '@assets/images/sandwich_Pulled-Pork+cheese.png';
import SteakCheese from '@assets/images/sandwich_Steak-&-Cheese.png';
import { changeRem } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import dbGet from '@api/dbGet';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase.config';

const sandwiches: 인터페이스_꿀조합[] = [
  {
    작성자id: 'test1',
    꿀조합제목: '꿀꿀마앗',
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
    작성자id: 'test2',
    꿀조합제목: '돼지위치',
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
    꿀조합제목: '소고기 굿굿',
    이미지: SteakCheese,
    작성자id: 'test3',
    작성자: '다비나',
    작성일: '2022.11.017',
    베이스샌드위치: '풀드 포크드',
    칼로리: '355',
    뱃지리스트: {
      맛: ['고소'],
      재료: ['소고기'],
      추가사항: ['고기러버'],
    },
    좋아요: '51',
    선택재료: [],
  },
];

function MyPage() {
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);
  const [currentTab, setCurrentTab] = useState<string>('좋아요 꿀조합');

  // db.collection('꿀조합') =>

  useEffect(() => {
    const tabToggle: string = currentTab !== '좋아요 꿀조합' ? '작성일' : '좋아요';
    꿀조합_컬렉션_탭에따라_가져오기(tabToggle);
    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    }
  }, [isLoggedin, navigate, currentTab]);

  const [toggleState, setToggleState] = useState<boolean | undefined>(true);

  const 클릭핸들러_꿀조합_목록_변경 = (e: React.MouseEvent<HTMLElement>) => {
    const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes('단찌');
    setToggleState(사용자명_체크);
  };
  const 꿀조합_컬렉션_탭에따라_가져오기 = async (tabToggle: string) => {
    const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(tabToggle, 'desc'))); // tabToggle에 따라 내림차순
    console.log('쿼리 스냅샷 =>', 쿼리스냅샷);
  };

  // const 꿀조합_정렬해서_가져오기 = async() => {
  //   const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(데이터에 담긴애랑 여기서 걸른 로직의 유저 변수값이 들어가야함, 'desc')));
  // }

  //! 서버에서 sort 해주면 얘도 없어질 예정
  const 날짜_내림차순_꿀조합_목록 = (prev: 인터페이스_꿀조합, next: 인터페이스_꿀조합): number => {
    if (prev.작성일 < next.작성일) return 1;
    return -1;
  };

  const 좋아요_내림차순_꿀조합_목록 = (prev: 인터페이스_꿀조합, next: 인터페이스_꿀조합): number =>
    +next.좋아요 - +prev.좋아요;

  // ! 데이터 받아온 후 컴포넌트를 만들게 됨으로 리팩토링 예정
  const userCombination = sandwiches.sort(날짜_내림차순_꿀조합_목록).map(sandwich => (
    <Card key={sandwich.작성자id}>
      <Link to={`/best-combination/${sandwich.꿀조합제목}`}>
        <SandwichInfo sandwich={sandwich} />
      </Link>
    </Card>
  ));

  const likeCombination = sandwiches.sort(좋아요_내림차순_꿀조합_목록).map(sandwich => (
    <Card key={sandwich.꿀조합제목}>
      <Link to={`/best-combination/${sandwich.꿀조합제목}`}>
        <SandwichInfo sandwich={sandwich} />
      </Link>
    </Card>
  ));

  return (
    <Wrapper>
      <Content>
        {toggleState ? (
          <div>
            <UserTitle onClick={클릭핸들러_꿀조합_목록_변경}>단찌만의 조합</UserTitle>
            <LikeTitle className="sub-title" onClick={클릭핸들러_꿀조합_목록_변경}>
              좋아요 꿀조합
            </LikeTitle>
          </div>
        ) : (
          <div>
            <UserTitle onClick={클릭핸들러_꿀조합_목록_변경} style={{ color: '#6b6b6b' }}>
              단찌만의 조합
            </UserTitle>
            <LikeTitle style={{ color: '#252525' }} className="sub-title" onClick={클릭핸들러_꿀조합_목록_변경}>
              좋아요 꿀조합
            </LikeTitle>
          </div>
        )}
        {toggleState ? userCombination : likeCombination}
      </Content>
    </Wrapper>
  );
}

export default MyPage;

const Content = styled.div`
  width: 380px;
  margin: 30px auto 0;
`;

const UserTitle = styled.span`
  text-align: left;
  padding: 25px 15px 0 0;
  display: inline;
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: #252525;
  cursor: pointer;
  border-radius: 5px;
  padding: 4px 6px;
  margin-right: 10px;
  transition: 0.3s;
  cursor: pointer;
`;
const LikeTitle = styled.span`
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: #6b6b6b;
  cursor: pointer;
`;

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 35px;
  width: ${changeRem(370)};
  /* height: ${changeRem(286)}; */
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  margin: 20px auto 0;
`;
