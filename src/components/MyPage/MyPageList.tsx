import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import UserCombinatonList from '@components/MyPage/UserCombinatonList';
import LikeCombinationList from '@components/MyPage/LikeCombinationList';
import { dbUpdate } from '@api/index';
import styled from '@emotion/styled';
import { User } from 'firebase/auth';
import { userLike } from '@state/User';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

type TProps = {
  isSelectedTab: boolean;
  userCombinationList: 인터페이스_꿀조합[];
  onClick: (id: string) => void;
};

function MyPageList({ isSelectedTab, userCombinationList, onClick }: TProps) {
  const 유저정보: User | null = useRecoilValue(userState);
  const [삭제예정, 삭제예정_수정] = useState<string[]>([]);
  const 좋아요한샌드위치: string[] = useRecoilValue(userLike);
  const 유저만의조합 = isSelectedTab
    ? userCombinationList
    : userCombinationList.filter((꿀조합: 인터페이스_꿀조합) => 좋아요한샌드위치.includes(꿀조합.id));

  const 좋아요_버튼_수정하기 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetLi = (e.target as HTMLButtonElement).closest('li');

    if (좋아요한샌드위치.includes(targetLi!.id) && !삭제예정.includes(targetLi!.id)) {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: 좋아요한샌드위치.filter(id => id !== targetLi!.id) });
      삭제예정_수정(prev => [...prev, targetLi!.id]);
    } else {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: [...좋아요한샌드위치] });
      삭제예정_수정(prev => prev.filter(삭제예정꿀조합 => 삭제예정꿀조합 !== targetLi!.id));
    }
  };
  // comment
  return (
    <Container>
      {isSelectedTab ? (
        <UserCombinatonList userCombination={유저만의조합} onClick={onClick} />
      ) : (
        <LikeCombinationList likeCombination={유저만의조합} onClick={좋아요_버튼_수정하기} deleteList={삭제예정} />
      )}
    </Container>
  );
}

export default React.memo(MyPageList);

const Container = styled.div`
  margin-bottom: 10px;
`;
