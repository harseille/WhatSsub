import { useState, MouseEvent, useRef, useCallback, useEffect } from 'react';
import Wrapper from '@components/UI/Wrapper';
import RankingTab from '@components/Ranking/RankingTab';
import RankingList from '@components/Ranking/RankingList';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import dbGet from '@api/dbGet';
import { collection, orderBy, query, limit, startAfter, DocumentData } from 'firebase/firestore';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { db } from '../firebase.config';

function RankingPage() {
  const [rankingList, setRankingList] = useState<인터페이스_꿀조합[]>([]);
  const [currentTab, setCurrentTab] = useState<string>('맛잘알랭킹');
  const [key, setKey] = useState<DocumentData | null>(null);

  useEffect(() => {
    // const condition: string = currentTab === '맛잘알랭킹' ? '좋아요' : '작성일';

    꿀조합_컬렉션_정렬해서_가져오기(currentTab);
  }, [currentTab]);

  const 꿀조합_컬렉션_정렬해서_가져오기 = async (currentTab: string) => {
    const condition: string = currentTab === '맛잘알랭킹' ? '좋아요' : '작성일';

    const 쿼리스냅샷 = !key
      ? await dbGet(query(collection(db, '꿀조합'), orderBy(condition, 'desc'), limit(5)))
      : await dbGet(query(collection(db, '꿀조합'), orderBy(condition, 'desc'), startAfter(key), limit(5)));

    const 랭킹리스트: 인터페이스_꿀조합[] = [];

    await 쿼리스냅샷.forEach(doc => {
      랭킹리스트.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
      setKey(doc);
    });

    setRankingList(prev => [...prev, ...랭킹리스트]);
  };

  const onClick = () => {
    꿀조합_컬렉션_정렬해서_가져오기(currentTab);
  };

  // const { target, isLoading } = useInfiniteScroll(꿀조합_컬렉션_정렬해서_가져오기.bind(null, currentTab));

  const 클릭핸들러_탭_변경 = (title: string, e: MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(title);
  };

  const observer = useRef<IntersectionObserver | null>(null);
  const listRef = useCallback(
    (node: HTMLLIElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          꿀조합_컬렉션_정렬해서_가져오기(currentTab);
        }
      });
      if (node) observer.current.observe(node);
    },
    [꿀조합_컬렉션_정렬해서_가져오기]
  );

  // if (isLoading)
  //   return (
  //     <ul ref={target}>
  //       <li>Loading...</li>
  //     </ul>
  //   );

  return (
    <Wrapper2>
      <Wrapper>
        <RankingTab currentTab={currentTab} onClick={클릭핸들러_탭_변경} />
        <RankingList currentTab={currentTab} rankingList={rankingList} target={listRef} />
        <button type="button" onClick={onClick}>
          next List
        </button>
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
