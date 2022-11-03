import { css } from '@emotion/react';
import { DEFAULT_SIZE } from '@constants/constants';

const changeRem = (n: number) => `${n / DEFAULT_SIZE}rem`;

const flexbox = (
  direction: string | undefined = 'row',
  justify: string | undefined = 'flex-start',
  items: string | undefined = 'stretch',
  wrap: string | undefined = 'nowrap'
) => `
    display: flex;
    flex-flow: ${direction} ${wrap};
    justify-content: ${justify};
    align-items: ${items};
  `;

const autoMargin = (marginX: number | string = 'auto') => `
  margin-left: ${marginX};
  margin-right: ${marginX};
  `;

const buttonNone = () => `
    appearance: none;
    border: 0;
    padding: 0;
    background: none;
  `;

export { changeRem, flexbox, autoMargin, buttonNone };
