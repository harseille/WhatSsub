import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { User } from 'firebase/auth';

type TProps = {
  isSelectedTab: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
function MyPageTab({ isSelectedTab, onClick }: TProps) {
  const 유저정보: User | null = useRecoilValue(userState);
  console.log(isSelectedTab);
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

export default memo(MyPageTab);

const Container = styled.div`
  display: flex;
  gap: 15px;
  ${mediaQuery} {
    width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.button<{ isSelectedTab: boolean }>`
  border: none;
  backgoround-color: transparent;
  font-size: ${changeRem(16)};
  font-weight: bold;
  color: ${({ isSelectedTab, theme }) => (isSelectedTab ? theme.colors.black25 : theme.colors.black6b)};
  border-radius: 5px;
  cursor: pointer;
  ${mediaQuery} {
    font-size: ${changeRem(20)};
  }
`;
