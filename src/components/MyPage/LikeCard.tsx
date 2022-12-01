import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import { dbUpdate } from '@api/index';
import { User } from 'firebase/auth';
import { userLike } from '@state/User';
import LikeRedBtn from '@components/Common/Button/LikeRed';
import SandwichInfo from '@components/Common/SandwichInfo';
import styled from '@emotion/styled';
import { 인터페이스_샌드위치 } from '@typings/ISandwich';
import useLikedBestCombination from '@hooks/useLikedBestCombination';
import { increment } from 'firebase/firestore';

type TProps = {
  id: string;
  imgUrl: string;
  sandwich: 인터페이스_샌드위치_아이디;
};

interface 인터페이스_샌드위치_아이디 extends 인터페이스_샌드위치 {
  id: string;
}

function LikeCard({ id, imgUrl, sandwich: sandwichData }: TProps) {
  const 유저정보: User | null = useRecoilValue(userState);
  const [삭제대기, 삭제대기_수정] = useState<string[]>([]);
  const 좋아요한샌드위치: string[] = useRecoilValue(userLike);
  const [target, setTarget] = useState<string | null>(null);
  const { setLikeCount } = useLikedBestCombination(target!);

  const 좋아요_버튼_수정하기 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetLi = (e.target as HTMLButtonElement).closest('li');
    setTarget(targetLi!.id);

    if (좋아요한샌드위치.includes(targetLi!.id) && !삭제대기.includes(targetLi!.id)) {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: 좋아요한샌드위치.filter(id => id !== targetLi!.id) });
      삭제대기_수정(prev => [...prev, targetLi!.id]);
      dbUpdate('꿀조합', targetLi!.id, { 좋아요: increment(-1) });
      setLikeCount(prev => prev - 1);
    } else {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: [...좋아요한샌드위치] });
      삭제대기_수정(prev => prev.filter(삭제대기꿀조합 => 삭제대기꿀조합 !== targetLi!.id));
      dbUpdate('꿀조합', targetLi!.id, { 좋아요: increment(1) });
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <div>
      <Card className={삭제대기.includes(sandwichData.id) ? 'delete' : ''} id={id}>
        <LikeRedBtn onClick={좋아요_버튼_수정하기} isLiked={!삭제대기.includes(sandwichData.id)} />
        <Link to={imgUrl}>
          <SandwichInfo sandwich={sandwichData} />
        </Link>
      </Card>
    </div>
  );
}

export default LikeCard;

const Card = styled.li`
  box-sizing: border-box;
  padding: 20px 35px;
  width: 100%;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  margin: 20px auto 0;
  position: relative;

  &.delete {
    background: #e4e4e4;
  }
`;
