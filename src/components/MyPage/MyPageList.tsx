import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { userLike } from '@state/User';
import UserCombinatonList from '@components/MyPage/UserCombinatonList';
import LikeCombinationList from '@components/MyPage/LikeCombinationList';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

type TProps = {
  isSelectedTab: boolean;
  userCombinationList: 인터페이스_꿀조합[];
  onClick: (id: string) => void;
};

function MyPageList({ isSelectedTab, userCombinationList, onClick }: TProps) {
  const 좋아요한샌드위치: string[] = useRecoilValue(userLike);
  const 유저만의조합 = isSelectedTab
    ? userCombinationList
    : userCombinationList.filter((꿀조합: 인터페이스_꿀조합) => 좋아요한샌드위치.includes(꿀조합.id));

  return (
    <Container>
      {isSelectedTab ? (
        <UserCombinatonList userCombination={유저만의조합} onClick={onClick} />
      ) : (
        <LikeCombinationList likeCombination={유저만의조합} />
      )}
    </Container>
  );
}

export default memo(MyPageList);

const Container = styled.div`
  margin-bottom: 10px;
`;
