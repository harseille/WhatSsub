import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState, userState } from '@state/index';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import xBtn from '@assets/images/x-btn.svg';
import { changeRem } from '@styles/mixin';
import { dbDelete } from '@api/index';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import dbGet from '@api/dbGet';
import { collection, orderBy, query } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { userLike } from '@state/User';
import { db } from '../firebase.config';

export interface 인터페이스_꿀조합_아이디 extends 인터페이스_꿀조합 {
  id: string;
}

function MyPage() {
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);
  const isUserLikeUser = useRecoilValue(userLike);
  const [currentTab, setCurrentTab] = useState<string>('좋아요 꿀조합');
  const [toggleState, setToggleState] = useState<boolean | undefined>(true);
  const [myList, setMyList] = useState<인터페이스_꿀조합_아이디[] | null>(null);
  const [유저만의조합, 유저만의조합_수정] = useState<인터페이스_꿀조합_아이디[] | null>(null);

  const 유저정보: User | null = useRecoilValue(userState);

  useEffect(() => {
    const tabToggle: string = currentTab !== '좋아요 꿀조합' ? '작성일' : '좋아요';
    꿀조합_컬렉션_탭에따라_가져오기(tabToggle);
    console.log('로그인한 유저가 좋아요 누른 꿀조합의 id  =>', isUserLikeUser);

    if (!isLoggedin) {
      alert('로그인 먼저');
      navigate('/login');
    }
  }, [isLoggedin, navigate, currentTab]);

  // ? --------------------------------------------------------------------------------------------------------------------
  const 클릭핸들러_꿀조합_목록_변경 = (e: React.MouseEvent<HTMLElement>) => {
    const 사용자명_체크 = (e.target as HTMLSpanElement).textContent?.includes(`${유저정보?.displayName}`);
    setToggleState(사용자명_체크);
  };
  const 꿀조합_컬렉션_탭에따라_가져오기 = async (tabToggle: string) => {
    const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(tabToggle, 'desc'))); // tabToggle에 따라 내림차순

    const 샌드위치_데이터: 인터페이스_꿀조합_아이디[] = [];
    await 쿼리스냅샷.forEach(doc => {
      샌드위치_데이터.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
    });
    const result = 샌드위치_데이터.filter((user: 인터페이스_꿀조합_아이디) => user.작성자id === 유저정보?.uid);
    console.log('샌드위치 데이터 =>', 샌드위치_데이터);
    setMyList(샌드위치_데이터); // 전체 데이터 리스트
    유저만의조합_수정(result); // 유저가 만든 샌드위치 데이터 리스트
  };
  // ? --------------------------------------------------------------------------------------------------------------------

  const 유저가_좋아요한_꿀조합 = myList?.filter(
    (user: 인터페이스_꿀조합_아이디, i: number) => user.id === isUserLikeUser[i]
  );

  const 목록에서_샌드위치_삭제하기 = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const targetLi = target.closest('li');

    if (유저만의조합 && targetLi) {
      try {
        dbDelete('꿀조합', targetLi.id);
        if (유저만의조합) {
          const 삭제 = 유저만의조합.filter((val: 인터페이스_꿀조합_아이디) => val.id !== target.closest('li')?.id);
          유저만의조합_수정(삭제);
        }
      } catch {
        console.log('삭제 실패');
      }
    }

    유저만의조합?.filter((val: 인터페이스_꿀조합_아이디) => val.id !== target.closest('li')?.id);
  };

  const 좋아요_내림차순_꿀조합_목록 = (prev: 인터페이스_꿀조합, next: 인터페이스_꿀조합): number =>
    +next.좋아요 - +prev.좋아요;

  const userCombination = 유저만의조합?.map(sandwich => (
    <Card key={sandwich.꿀조합제목} id={sandwich.id}>
      <RemoveBtn onClick={목록에서_샌드위치_삭제하기}>
        <img src={xBtn} alt="닫기 버튼" />
      </RemoveBtn>
      <Link to={`/best-combination/${sandwich.id}`}>
        <SandwichInfo sandwich={sandwich} />
      </Link>
    </Card>
  ));

  const likeCombination = 유저가_좋아요한_꿀조합?.sort(좋아요_내림차순_꿀조합_목록).map(sandwich => (
    // const likeCombination = 유저가좋아한조합?.sort(좋아요_내림차순_꿀조합_목록).map(sandwich => (
    <Card key={sandwich.꿀조합제목}>
      <RemoveBtn>
        <img src={xBtn} alt="닫기 버튼" />
      </RemoveBtn>
      <Link to={`/best-combination/${sandwich.id}`}>
        <SandwichInfo sandwich={sandwich} />
      </Link>
    </Card>
  ));

  return (
    <Wrapper>
      <Content>
        {toggleState ? (
          <div>
            <UserTitle onClick={클릭핸들러_꿀조합_목록_변경}>
              <span>{유저정보?.displayName}</span>만의 조합
            </UserTitle>
            <LikeTitle className="sub-title" onClick={클릭핸들러_꿀조합_목록_변경}>
              좋아요 꿀조합
            </LikeTitle>
          </div>
        ) : (
          <div>
            <UserTitle onClick={클릭핸들러_꿀조합_목록_변경} style={{ color: '#6b6b6b' }}>
              <span>{유저정보?.displayName}</span>만의 조합
            </UserTitle>
            <LikeTitle style={{ color: '#252525' }} className="sub-title" onClick={클릭핸들러_꿀조합_목록_변경}>
              좋아요 꿀조합
            </LikeTitle>
          </div>
        )}
        <ul>{toggleState ? userCombination : likeCombination}</ul>
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

const Card = styled.li`
  box-sizing: border-box;
  padding: 20px 35px;
  /* width: ${changeRem(370)}; */
  width: 100%;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  margin: 20px auto 0;
  position: relative;
`;

const RemoveBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  border: none;
  background-color: transparent;
  margin-right: 5px;
  cursor: pointer;
`;
