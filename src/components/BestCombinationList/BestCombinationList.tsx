import NotFoundBestCombinationList from '@components/BestCombinationList/NotFoundBestCombinationList';
import SandwichInfoCard from '@components/Common/Cards/SandwichInfoCard';
import dbGet from '@api/dbGet';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import { collection, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import { db } from '../../firebase.config';

function BestCombinationList({ filter }: { filter: string[] }) {
  // const ALL_ATTR = ['달달', '고소', '새콤', '짧짤', '닭고기', '고기러버', '치즈러버', '돼지고기', '소고기', '에그마요'];

  // const 없는_속성 = ALL_ATTR.filter(val => !filter.includes(val));
  // console.log(없는_속성);

  const [꿀조합_목록, 꿀조합_목록_수정] = useState<인터페이스_꿀조합[]>([]);

  const fetchData = async () => {
    const 꿀조합_컬렉션 = collection(db, '꿀조합');
    const 꿀조합쿼리 =
      filter.length === 0
        ? query(꿀조합_컬렉션, orderBy('좋아요', 'desc'))
        : query(꿀조합_컬렉션, where('뱃지리스트', 'array-contains', filter));
    // : query(꿀조합_컬렉션, ...filter.map(attr => where('badgeList' , '==', attr)));
    // orderBy('like', 'desc')

    console.log('꿀조합쿼리', 꿀조합쿼리);
    console.log('filter', filter);
    const 쿼리스냅샷 = await dbGet(꿀조합쿼리);
    console.log(쿼리스냅샷);

    const covertBCList: 인터페이스_꿀조합[] = [];
    쿼리스냅샷.forEach((doc: any) => {
      covertBCList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    꿀조합_목록_수정(covertBCList);
  };

  // const { listRef, isLoading } = useInfiniteScroll(fetchData, 10, '꿀조합');
  const { listRef, isLoading } = useInfiniteScroll(fetchData, 10, query(collection(db, '꿀조합')));

  useEffect(() => {
    // fetchData();
  }, []);

  if (isLoading)
    return (
      <ul>
        <li ref={listRef}>Loading.....</li>
      </ul>
    );

  if (꿀조합_목록.length === 0) return <NotFoundBestCombinationList />;

  return (
    <ListWrap>
      {꿀조합_목록.map(sandwich => (
        //* key 값 수정 필요
        <SandwichInfoCard key={sandwich.id} sandwich={sandwich} />
      ))}
    </ListWrap>
  );
}

export default BestCombinationList;

const ListWrap = styled.ul`
  width: 100%;
  display: flex;
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
`;
