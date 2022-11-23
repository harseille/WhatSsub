import { useState, MouseEvent, useEffect } from 'react';
import Wrapper from '@components/UI/Wrapper';
import RankingTab from '@components/Ranking/RankingTab';
import RankingList from '@components/Ranking/RankingList';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import dbGet from '@api/dbGet';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase.config';

export interface 인터페이스_꿀조합_아이디 extends 인터페이스_꿀조합 {
  id: string;
}

function RankingPage() {
  const [rankingList, setRankingList] = useState<인터페이스_꿀조합_아이디[] | null>(null);
  const [currentTab, setCurrentTab] = useState<string>('맛잘알랭킹');

  useEffect(() => {
    const condition: string = currentTab === '맛잘알랭킹' ? '좋아요' : '작성일';

    꿀조합_컬렉션_정렬해서_가져오기(condition);
  }, [currentTab]);

  const 꿀조합_컬렉션_정렬해서_가져오기 = async (condition: string) => {
    const 쿼리스냅샷 = await dbGet(query(collection(db, '꿀조합'), orderBy(condition, 'desc')));
    const 랭킹리스트: 인터페이스_꿀조합_아이디[] = [];

    await 쿼리스냅샷.forEach(doc => {
      랭킹리스트.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
    });

    setRankingList(랭킹리스트);
  };

  const 클릭핸들러_탭_변경 = (title: string, e: MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(title);
  };

  return (
    <Wrapper2>
      <Wrapper>
        <RankingTab currentTab={currentTab} onClick={클릭핸들러_탭_변경} />
        <RankingList currentTab={currentTab} rankingList={rankingList} />
      </Wrapper>
    </Wrapper2>
  );
}

export default RankingPage;

const Wrapper2 = styled.div`
  background: #f9f9f9;
  height: 100vh;
  padding: 25px 20px;

  ${mediaQuery} {
    padding-top: 35px;
  }
`;
