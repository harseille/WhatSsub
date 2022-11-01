import { css } from '@emotion/react';

const breakpoints = [576, 768, 992, 1200];

const mediaQuery = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mediaQuery;
