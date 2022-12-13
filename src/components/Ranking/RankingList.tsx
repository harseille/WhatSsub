import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { collection, query } from 'firebase/firestore';
import isPlaying from '@state/isPlaying';
import useSetRankingList from '@hooks/useSetRankingList';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import useCheckLogin from '@hooks/useCheckLogin';
import getYearMonthDate from '@utils/getYearMonthDate';
import CombinationRankingCard from '@components/Ranking/CombinationRankingCard';
import LoadingSpinner from '@components/Common/LoadingSpinner';
import Modal from '@components/Common/UI/Modal';
import Rank1 from '@assets/images/rankingBadge/rank_1.webp';
import Rank2 from '@assets/images/rankingBadge/rank_2.webp';
import Rank3 from '@assets/images/rankingBadge/rank_3.webp';
import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';
import { db } from '../../firebase.config';

type 타입_랭킹_순위_아이템 = {
  id: number;
  imageSrc: string;
};

type 타입_랭킹_순위 = {
  [key: string]: 타입_랭킹_순위_아이템;
};

const 랭킹_순위: 타입_랭킹_순위 = {
  일위: { id: 0, imageSrc: Rank1 },
  이위: { id: 1, imageSrc: Rank2 },
  삼위: { id: 2, imageSrc: Rank3 },
};

function RankingList() {
  const { state } = useLocation();
  const 현재탭: string = state || '맛잘알랭킹';
  const { isShowModal, toggleModal, navigateLoginPage } = useCheckLogin();
  const 작동하는가_수정 = useSetRecoilState(isPlaying);
  const { key, 랭킹리스트, 랭킹리스트_수정, 꿀조합_컬렉션_정렬해서_가져오기, 리스트_재정렬 } =
    useSetRankingList(현재탭);

  const { listRef, hasMore } = useInfiniteScroll(
    꿀조합_컬렉션_정렬해서_가져오기,
    랭킹리스트.length,
    query(collection(db, '꿀조합'))
  );

  useEffect(() => {
    key.current = null;
    랭킹리스트_수정([]);
    꿀조합_컬렉션_정렬해서_가져오기();
    작동하는가_수정(false);
  }, [현재탭]);

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

      <ul>
        {랭킹리스트.length > 0 &&
          랭킹리스트.map(({ id, 꿀조합제목, 이미지, 베이스샌드위치, 작성일, 뱃지리스트, 좋아요 }, i) => {
            let 랭킹_뱃지_이미지 = '';
            let 신규_샌드위치인가 = false;

            if (현재탭 === '맛잘알랭킹') {
              const 순위 = Object.keys(랭킹_순위).find(key => 랭킹_순위[key].id === i);
              랭킹_뱃지_이미지 = 순위 ? 랭킹_순위[순위].imageSrc : '';
            } else if (현재탭 === '신규조합') {
              const { year: 오늘_년도, month: 오늘_월, date: 오늘_일 } = getYearMonthDate(new Date());
              const { year: 작성일_년도, month: 작성일_월, date: 작성일_일 } = getYearMonthDate(new Date(작성일));

              신규_샌드위치인가 = 오늘_년도 === 작성일_년도 && 오늘_월 === 작성일_월 && 오늘_일 === 작성일_일;
            }

            return (
              <CombinationRankingCard
                key={id}
                id={id}
                listRef={i === 랭킹리스트.length - 1 ? listRef : null}
                isNew={신규_샌드위치인가}
                rankingImage={랭킹_뱃지_이미지}
                rank={i + 1}
                currentTab={현재탭}
                title={꿀조합제목}
                imageUrl={이미지}
                originName={베이스샌드위치}
                badgeList={뱃지리스트}
                like={좋아요}
                rearrangeList={리스트_재정렬}
                openModal={toggleModal}
              />
            );
          })}
        <li />
        {hasMore && (
          <LoadingLi>
            <LoadingSpinner />
          </LoadingLi>
        )}
      </ul>
    </>
  );
}

export default RankingList;

const LoadingLi = styled.li`
  ${flexbox('row', 'center', 'center')}

  & div {
    position: static;
    transform: translate(0, 0);
  }
`;
