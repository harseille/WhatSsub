import { useEffect, MouseEvent, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import isPlaying from '@state/isPlaying';
import { userLike } from '@state/User';
import SandwichBadgeList from '@components/BestCombinationAttribute/AttributeBadgeList';
import Modal from '@components/Common/UI/Modal';
import Like from '@components/Common/Button/Like';
import useLikedBestCombination from '@hooks/useLikedBestCombination';
import styled from '@emotion/styled';
import { flexbox, changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { User } from 'firebase/auth';

type TProps = {
  id: string;
  listRef: ((node: HTMLLIElement) => void) | null;
  isNew: boolean;
  rankingImage: string;
  currentTab: string;
  rank: number;
  title: string;
  imageUrl: string;
  originName: string;
  badgeList: string[];
  like: number;
  rearrangeList: (id: string, isIncreasing: boolean) => void;
};

function CombinationRankingCard({
  id,
  listRef,
  isNew: 신규_샌드위치인가,
  rankingImage: 랭킹_뱃지_이미지,
  currentTab: 현재탭,
  rank: 순위,
  title: 이름,
  imageUrl: 이미지,
  originName: 베이스샌드위치,
  badgeList: 뱃지리스트,
  like: 좋아요,
  rearrangeList: 리스트_재정렬,
}: TProps) {
  const {
    isShowModal,
    toggleModal,
    navigateLoginPage,
    좋아요한_샌드위치인가,
    클릭핸들러_좋아요_토글,
    좋아요_개수_수정,
  } = useLikedBestCombination(id);
  const 유저정보 = useRecoilValue<User | null>(userState);
  const 좋아요한_샌드위치 = useRecoilValue(userLike);
  const [작동하는가, 작동하는가_수정] = useRecoilState(isPlaying);

  useEffect(() => {
    좋아요_개수_수정(좋아요);
    console.log(작동하는가);
  }, [좋아요_개수_수정, 좋아요]);

  const 좋아요_토글 = useCallback(
    async (e: MouseEvent) => {
      e.preventDefault();
      console.log(작동하는가);
      if (작동하는가) return;
      작동하는가_수정(true);

      const 좋아요_개수_증가하는가 = !좋아요한_샌드위치.includes(id);
      await 클릭핸들러_좋아요_토글('fulfilled', e);

      if (유저정보) 리스트_재정렬(id, 좋아요_개수_증가하는가);
    },
    [id, 작동하는가]
  );

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
      <li ref={listRef}>
        <RankingCardWrapper to={`/best-combination/${id}`}>
          {신규_샌드위치인가 && <NewBadge>NEW</NewBadge>}
          {랭킹_뱃지_이미지 && <RankBadge src={랭킹_뱃지_이미지} alt={`rank${순위}`} />}
          <RankingCard>
            {현재탭 === '맛잘알랭킹' && <Rank>{순위}</Rank>}
            <RankingImageWrap>
              <img src={이미지} alt={베이스샌드위치} />
            </RankingImageWrap>
            <RankingContents>
              <Title>{이름}</Title>
              <RankingBadgeList badgeList={뱃지리스트} />
              <Like count={좋아요} isLiked={좋아요한_샌드위치인가} onClick={좋아요_토글} />
            </RankingContents>
          </RankingCard>
        </RankingCardWrapper>
      </li>
    </>
  );
}

export default memo(CombinationRankingCard);

const RankingCardWrapper = styled(Link)`
  position: relative;
  display: block;
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate3d(-5px, -5px, 0);
  }
`;

const RankBadge = styled.img`
  position: absolute;
  right: -5px;
  top: -10px;
  z-index: 1;
  width: ${changeRem(60)};

  ${mediaQuery} {
    width: ${changeRem(80)};
    top: -35px;
    right: -10px;
  }
`;

const NewBadge = styled.span`
  position: absolute;
  top: -6px;
  right: 20px;
  z-index: 1;
  padding: 3px 5px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  font-size: ${changeRem(10)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  ${mediaQuery} {
    top: -8px;
  }
`;

const RankingCard = styled.section`
  box-sizing: border-box;
  ${flexbox('row', 'flex-start', 'center')};
  gap: ${changeRem(20)};
  min-width: ${changeRem(300)};
  position: relative;
  padding: 30px 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  filter: ${({ theme }) => `drop-shadow(${theme.boxShadow.type3})`};

  ${mediaQuery} {
    padding: 20px;
    border-radius: 10px;
    filter: none;
    box-shadow: ${({ theme }) => theme.boxShadow.type1};
  }
`;

const Rank = styled.div`
  display: none;

  ${mediaQuery} {
    display: block;
    font-weight: bold;
    font-size: ${changeRem(20)};
  }
`;

const RankingImageWrap = styled.div`
  ${flexbox('row', 'center', 'center')};
  width: ${changeRem(80)};
  height: ${changeRem(80)};
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => `${theme.boxShadow.type3}, inset ${theme.boxShadow.type2}`};

  & img {
    width: 100%;
    object-fit: cover;
  }

  ${mediaQuery} {
    width: ${changeRem(143)};
    box-shadow: none;
  }
`;

const RankingContents = styled.div`
  flex-basis: calc(100% - 160px);

  & > div:last-of-type {
    flex-shrink: 0;

    button {
      width: auto;
      height: auto;
      padding: 5px;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 3px;
      font-size: ${changeRem(15)};
    }
  }

  ${mediaQuery} {
    flex-basis: calc(100% - 250px);
  }
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: ${changeRem(16)};
  color: ${({ theme }) => theme.colors.AccessibilityGreen};
`;

const RankingBadgeList = styled(SandwichBadgeList)`
  ul {
    flex-wrap: wrap;
  }
`;
