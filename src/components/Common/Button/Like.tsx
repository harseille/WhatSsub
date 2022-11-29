import Button from '@components/Common/UI/Button';
import styled from '@emotion/styled';
import greenHeart from '@assets/icons/green-heart.svg';
import greenHeartFill from '@assets/icons/green-heart-fill.svg';
import { changeRem, flexbox } from '@styles/mixin';
import likeCountLntl from '@utils/likeCountIntl';

type TProps = {
  count: number;
  isLiked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Like(props: TProps) {
  const { count, isLiked, onClick } = props;
  const formmatedCount = likeCountLntl(count);

  return (
    <LikeContainter>
      <LikeButton isLiked={isLiked} onClick={onClick} />
      <span>{formmatedCount}</span>
    </LikeContainter>
  );
}

export default Like;

const LikeContainter = styled.div`
  ${flexbox('row', 'right', 'center')};
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  color: ${props => props.theme.colors.primaryGreen};
  & span {
    font-size: ${changeRem(20)};
    margin-left: 8px;
  }
`;

const LikeButton = styled(Button)<{ isLiked: boolean }>`
  width: ${changeRem(32)};
  height: ${changeRem(32)};
  background: url(${({ isLiked }) => (isLiked ? greenHeartFill : greenHeart)}) no-repeat center;
`;
