import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
// import PulledPork from '@assets/images/sandwich_Pulled-Pork+cheese.png';
// import SteakCheese from '@assets/images/sandwich_Steak-&-Cheese.png';
import { changeRem } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import dbGet from '@api/dbGet';
import { collection, orderBy, query } from 'firebase/firestore';
import { User } from 'firebase/auth';
// import TitleTab from '@components/TitleTab/TitleTab';
import { db } from '../firebase.config';

export interface 인터페이스_꿀조합_아이디 extends 인터페이스_꿀조합 {
  id: string;
}
const sandwiches: 인터페이스_꿀조합_아이디[] = [
  {
    id: 'txavWFNEA6tLkvaZVRGj',
    꿀조합제목: '꿀꿀마앗',
    뱃지리스트: {
      맛: ['달달', '고소'],
      재료: ['닭고기'],
      추가사항: ['고기러버'],
    },
    선택재료: [],
    이미지: ChickenSlice,
    작성일: '2022.11.05',
    작성자: '다다',
    작성자id: 'test1',
    좋아요: '44',
    칼로리: '265',
    베이스샌드위치: '치킨 슬라이스',
  },
];

function MyPage() {
  const [myList, setMyList] = useState<인터페이스_꿀조합_아이디[]>([]);
  const isLoggedin = useRecoilValue(isLoggedInState);
  const [currentTab, setCurrentTab] = useState<string>('만의 조합');
  const [toggle, setToggle] = useState<boolean>(true);
  const [user, setUser] = useState<string>('');
  const 유저정보: User | null = useRecoilValue(userState);

  console.log('유저 정보=>', 유저정보);
  const navigate = useNavigate();

  useEffect(() => {
    const tabToggle: string = currentTab === `${유저정보?.displayName}만의 조합` ? '좋아요' : '작성일';
    console.log('tabToggle => ', tabToggle);
    꿀조합_컬렉션_탭에따라_가져오기(tabToggle);

    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    }
  }, [isLoggedin, navigate, currentTab]);

  const 꿀조합_컬렉션_탭에따라_가져오기 = async (tabToggle: string) => {
    const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(tabToggle, 'desc'))); // tabToggle에 따라 내림차순
    const 나의조합_리스트: 인터페이스_꿀조합_아이디[] = [];

    // 전체 데이터
    await 쿼리스냅샷.forEach(doc => {
      나의조합_리스트.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
    });
    //  유저가 만든 꿀조합 리스트
    const 유저만의_꿀조합 = 나의조합_리스트.filter((user: 인터페이스_꿀조합_아이디) => user.작성자id === 유저정보?.uid);
    console.log('유저만의_꿀조합 =>', 유저만의_꿀조합);

    setMyList(유저만의_꿀조합);
  };

  const 클릭핸들러_꿀조합_목록_변경 = (e: React.MouseEvent<HTMLElement>) => {
    // const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes('만의 조합');
    setToggle(false);
  };

  const test = {
    // id: myList[0].id,
    꿀조합제목: '꿀꿀마앗',
    뱃지리스트: {
      맛: ['달달', '고소'],
      재료: ['닭고기'],
      추가사항: ['고기러버'],
    },
    선택재료: [],
    이미지: ChickenSlice,
    작성일: '2022.11.05',
    작성자: '다다',
    작성자id: 'test1',
    좋아요: '44',
    칼로리: '265',
    베이스샌드위치: '치킨 슬라이스',
  };

  console.log('myList =>', myList);
  return (
    <Wrapper>
      <Content>
        <div>
          <UserTitle onClick={클릭핸들러_꿀조합_목록_변경}>
            <span>{유저정보?.displayName}</span>만의 조합
          </UserTitle>
          <LikeTitle className="sub-title" onClick={클릭핸들러_꿀조합_목록_변경}>
            좋아요 꿀조합
          </LikeTitle>
        </div>
        <Card key={sandwiches[0].꿀조합제목}>
          <Link to={`/best-combination/${sandwiches[0].꿀조합제목}`}>
            <SandwichInfo sandwich={sandwiches[0]} />
            {/* <SandwichInfo sandwich={myList} /> */}
          </Link>
        </Card>
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

