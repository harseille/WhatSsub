import { memo } from 'react';
import heart from '@assets/icons/heart.svg';
import heartFill from '@assets/icons/heart-fill.svg';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

const LikeRedBtn = styled.button<{ isLiked: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  border-radius: 50%;
  width: ${changeRem(34)};
  height: ${changeRem(34)};
  background: url(${({ isLiked }) => (isLiked ? heartFill : heart)}) no-repeat center;
  background-color: #ffe8e0;
  cursor: pointer;

  &:hover {
    background-color: #f7a9a9a3;
    box-shadow: 3px 3px 3px #7879706d;
  }

  ${mediaQuery} {
    width: ${changeRem(48)};
    height: ${changeRem(48)};
  }
`;

export default memo(LikeRedBtn, (prevProps, nextProps) => prevProps.isLiked === nextProps.isLiked);
