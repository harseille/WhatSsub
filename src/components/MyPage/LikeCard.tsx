import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from '@state/index';
import { dbUpdate } from '@api/index';
import { User } from 'firebase/auth';
import LikeRedBtn from '@components/Common/Button/LikeRed';
import SandwichInfo from '@components/Common/SandwichInfo';
import styled from '@emotion/styled';
import { 인터페이스_샌드위치 } from '@typings/ISandwich';
import useLikedBestCombination from '@hooks/useLikedBestCombination';
import pendingState from '@state/pending';

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
  // const [삭제대기, 삭제대기_수정] = useState<string[]>([]);
  const [pending, setPending] = useRecoilState<string[]>(pendingState);
  const { 클릭핸들러_좋아요_토글, 좋아요한샌드위치, 좋아요한샌드위치_수정 } = useLikedBestCombination(id);

  const 좋아요_버튼_수정하기 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetLi = (e.target as HTMLButtonElement).closest('li');

    if (좋아요한샌드위치.includes(targetLi!.id) && !pending.includes(targetLi!.id)) {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: 좋아요한샌드위치.filter(id => id !== targetLi!.id) });
      setPending(prev => [...prev, targetLi!.id]);
      클릭핸들러_좋아요_토글('pending', e);
    } else {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: [...좋아요한샌드위치] });
      setPending(prev => prev.filter(삭제대기꿀조합 => 삭제대기꿀조합 !== targetLi!.id));
      클릭핸들러_좋아요_토글('pending', e);
    }
  };

  const navigate = useNavigate();

  const onClickLink = () => {
    navigate(imgUrl);
    if (!pending) return;
    좋아요한샌드위치_수정(prevData => prevData.filter(prev => !pending.includes(prev)));
    console.log('pendingStatus', pending);
  };

  return (
    <div>
      <Card className={pending.includes(sandwichData.id) ? 'delete' : ''} id={id}>
        <LikeRedBtn onClick={좋아요_버튼_수정하기} isLiked={!pending.includes(sandwichData.id)} />
        <Button onClick={onClickLink}>
          <SandwichInfo sandwich={sandwichData} />
        </Button>
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

const Button = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
`;
