import { useState } from 'react';
import useCheckLogin from '@hooks/useCheckLogin';
import { collection, orderBy, query, where } from 'firebase/firestore';
import NotFoundBestCombinationList from '@components/BestCombinationList/NotFoundBestCombinationList';
import SandwichInfoCard from '@components/Common/Cards/SandwichInfoCard';
import Modal from '@components/UI/Modal';
import dbGet from '@api/dbGet';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import useInfiniteScroll from '@hooks/useInfiniteScroll';

import { db } from '../../firebase.config';

function BestCombinationList({ filter }: { filter: string[] }) {
  const [꿀조합_목록, 꿀조합_목록_수정] = useState<인터페이스_꿀조합[]>([]);
  const { userInfo, isShowModal, toggleModal, navigateLoginPage } = useCheckLogin();

  const fetchData = async () => {
    const 꿀조합_컬렉션 = collection(db, '꿀조합');
    const 꿀조합쿼리 =
      filter.length === 0
        ? query(꿀조합_컬렉션, orderBy('좋아요', 'desc'))
        : query(꿀조합_컬렉션, where('뱃지리스트', 'array-contains', filter));

    const 쿼리스냅샷 = await dbGet(꿀조합쿼리);

    const convertBCList: 인터페이스_꿀조합[] = [];
    쿼리스냅샷.forEach((doc: any) => {
      convertBCList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    꿀조합_목록_수정(convertBCList);
  };

  const { listRef, isLoading } = useInfiniteScroll(fetchData, 36, '꿀조합');

  if (isLoading)
    return (
      <ul>
        <li ref={listRef}>Loading.....</li>
      </ul>
    );

  if (꿀조합_목록.length === 0) return <NotFoundBestCombinationList />;

  return (
    <>
      {isShowModal && (
        <Modal
          title="로그인이 필요한 서비스입니다."
          message="로그인 페이지로 이동하시겠습니까?"
          onEvent={navigateLoginPage}
          onClose={toggleModal}
          isConfirm="이동"
        />
      )}
      <ListWrap>
        {꿀조합_목록.map(sandwich => (
          //* key 값 수정 필요
          <SandwichInfoCard key={sandwich.id} sandwich={sandwich} userInfo={userInfo} toggleModal={toggleModal} />
        ))}
      </ListWrap>
    </>
  );
}

export default BestCombinationList;

const ListWrap = styled.ul`
  width: 100%;
  display: flex;
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
`;
