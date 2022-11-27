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
    <div>
      <Title onClick={onClick} isSelectedTab={isSelectedTab}>
        <span>{유저정보?.displayName}</span>만의 꿀조합
      </Title>
      <Title onClick={onClick} isSelectedTab={!isSelectedTab}>
        좋아요 꿀조합
      </Title>
    </div>
  );
}

export default MyPageTab;

const Title = styled.span<{ isSelectedTab: boolean }>`
  text-align: left;
  padding: 25px 15px 0 0;
  display: inline;
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: ${({ isSelectedTab }) => (isSelectedTab ? '#252525' : '#6b6b6b')};
  border-radius: 5px;
  padding: 4px 6px;
  margin-right: 10px;
  transition: 0.3s;
  cursor: pointer;
`;
