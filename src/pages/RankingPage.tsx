import { useState, MouseEvent } from 'react';
import Wrapper from '@components/UI/Wrapper';
import RankingTab from '@components/Ranking/RankingTab';
import RankingList from '@components/Ranking/RankingList';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

const rankingListData: 인터페이스_꿀조합[] = [
  {
    꿀조합제목: '꿀꿀마앗',
    이미지: ChickenSlice,
    작성자id: 'sdfd',
    작성자: '도은',
    작성일: '2022.11.16',
    베이스샌드위치: '치킨 슬라이스',
    칼로리: '265',
    뱃지리스트: ['달달', '돼지고기', '고기러버'],
    좋아요: '44',
    선택재료: [],
  },
  {
    꿀조합제목: '고기 조합이다아아아',
    이미지: ChickenSlice,
    작성자id: 'sdfd',
    작성자: '도은',
    작성일: '2022.11.16',
    베이스샌드위치: '포크샌드',
    칼로리: '265',
    뱃지리스트: ['달달', '고소', '새콤'],
    좋아요: '28',
    선택재료: [],
  },
  {
    꿀조합제목: '다이어트',
    이미지: ChickenSlice,
    작성자id: 'sdfd',
    작성자: '도은',
    작성일: '2022.11.16',
    베이스샌드위치: '에그마요',
    칼로리: '265',
    뱃지리스트: ['달달', '에그마요', '저칼로리'],
    좋아요: '5',
    선택재료: [],
  },
];

function RankingPage() {
  const [rankingList, setRankingList] = useState<인터페이스_꿀조합[]>(rankingListData);
  const [currentTab, setCurrentTab] = useState<string>('맛잘알랭킹');

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
