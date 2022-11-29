import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import { User } from 'firebase/auth';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

type TProps = {
  isSelectedTab: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
function MyPageTab({ isSelectedTab, onClick }: TProps) {
  const 유저정보: User | null = useRecoilValue(userState);
  return (
    <Container>
      <Title onClick={onClick} isSelectedTab={isSelectedTab}>
        <span>{유저정보?.displayName}</span>만의 꿀조합
      </Title>
      <Title onClick={onClick} isSelectedTab={!isSelectedTab}>
        좋아요 꿀조합
      </Title>
    </Container>
  );
}

export default React.memo(MyPageTab);

const Container = styled.div`
  display: flex;
  gap: 15px;

  ${mediaQuery} {
    width: 100%;
  }
`;

const Title = styled.span<{ isSelectedTab: boolean }>`
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: ${({ isSelectedTab }) => (isSelectedTab ? '#252525' : '#6b6b6b')};
  border-radius: 5px;
  cursor: pointer;
`;
