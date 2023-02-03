import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from '@state/index';
import toBeDelete from '@state/pending';
import useLikedBestCombination from '@hooks/useLikedBestCombination';
import { dbUpdate } from '@api/index';
import LikeRedBtn from '@components/Common/Button/LikeRed';
import SandwichInfo from '@components/Common/SandwichInfo';
import styled from '@emotion/styled';
import { 인터페이스_샌드위치_아이디 } from '@typings/ISandwich';
import { User } from 'firebase/auth';

type TProps = {
  id: string;
  imgUrl: string;
  sandwich: 인터페이스_샌드위치_아이디;
};

function LikeCard({ id, imgUrl, sandwich: sandwichData }: TProps) {
  const 유저정보: User | null = useRecoilValue(userState);
  const [삭제될_꿀조합, 삭제될_꿀조합_수정] = useRecoilState<string[]>(toBeDelete);
  const { 클릭핸들러_좋아요_토글, 좋아요한샌드위치, 좋아요한샌드위치_수정 } = useLikedBestCombination(id);

  const 좋아요_버튼_수정하기 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = (e.target as HTMLButtonElement).closest('li');

    // 좋아요버튼 눌려있을 때 => id 비교해서 데이터베이스에서 삭제, 삭제 전역에도 추가
    if (좋아요한샌드위치.includes(target!.id) && !삭제될_꿀조합.includes(target!.id)) {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: 좋아요한샌드위치.filter(id => id !== target!.id) });
      삭제될_꿀조합_수정(prev => [...prev, target!.id]);
      // 좋아요 버튼 해제 됐을 때(펜딩 상태)
    } else {
      dbUpdate('좋아요', 유저정보!.uid, { 좋아요_리스트: [...좋아요한샌드위치] });
      삭제될_꿀조합_수정(prev => prev.filter(삭제될_꿀조합 => 삭제될_꿀조합 !== target!.id));
    }
    클릭핸들러_좋아요_토글('pending', e);
  };

  const navigate = useNavigate();

  const onClickLink = () => {
    navigate(imgUrl);
    if (!삭제될_꿀조합) return;
    좋아요한샌드위치_수정(prevData => prevData.filter(prev => !삭제될_꿀조합.includes(prev)));
    삭제될_꿀조합_수정([]);
  };

  // const 타이머_셋하기 = () => {
  //   타이머_수정(setInterval(맛잘알_리스트_가져오기.bind(null, 랭킹리스트.length), 60000));
  // };

  // const 타이머_멈추기 = () => {
  //   clearInterval(타이머);
  // };

  useEffect(() => {}, []);

  return (
    <div>
      <Card className={삭제될_꿀조합.includes(sandwichData.id) ? 'delete' : ''} id={id}>
        <LikeRedBtn onClick={좋아요_버튼_수정하기} isLiked={!삭제될_꿀조합.includes(sandwichData.id)} />
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
  transition: transform 0.3s ease;

  &.delete {
    background: #e4e4e4;
  }

  &:hover {
    transform: translate3d(-5px, -5px, 0);
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
`;
