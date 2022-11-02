import { css } from '@emotion/react';
import { DEFAULT_SIZE } from '@constants/constants';

const changeRem = (n: number) => `${n / DEFAULT_SIZE}rem`;

export { changeRem };
