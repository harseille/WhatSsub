import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { User } from 'firebase/auth';

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

export default MyPageTab;
const Container = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const Title = styled.span<{ isSelectedTab: boolean }>`
  text-align: left;
  display: inline;
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: ${({ isSelectedTab }) => (isSelectedTab ? '#252525' : '#6b6b6b')};
  border-radius: 5px;
  cursor: pointer;
`;
