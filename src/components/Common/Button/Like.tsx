import Button from '@components/Common/UI/Button';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import likeCountLntl from '@utils/likeCountIntl';
import theme from '@styles/theme';

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
      <LikeButton isLiked={isLiked} onClick={onClick} aria-label="좋아요 버튼">
        <svg className="heart-main" viewBox="0 0 512 512" width="100">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
        <svg className="heart-background" viewBox="0 0 512 512" width="100">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
      </LikeButton>
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
  & svg {
    width: ${changeRem(28)};
    height: ${changeRem(28)};
    overflow: visible;
  }

  fill: ${({ isLiked }) => (isLiked ? theme.colors.primaryYellow : 'transparent')};
  stroke: ${({ isLiked }) => (isLiked ? theme.colors.primaryYellow : theme.colors.primaryGreen)};
  stroke-width: 40;

  path {
    stroke-dashoffset: 0;
    stroke-dasharray: 1550;
    transform-origin: center;
  }

  .heart-background {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    stroke: none;
  }

  .heart-main:hover path {
    animation: stroke-animation 2s ease-in-out forwards;
  }

  @keyframes stroke-animation {
    0% {
      stroke-dashoffset: 0;
    }
    30% {
      stroke-dashoffset: 1550;
    }
    60% {
      stroke-dashoffset: 3100;
      fill: transparent;
      transform: scale(1);
    }
    80% {
      fill: var(--pink);
      fill: ${theme.colors.primaryYellow};
      transform: scale(1.1);
    }
    90% {
      transform: scale(1);
    }
    100% {
      stroke-dashoffset: 3100;
    }
  }
`;
