import { css } from '@emotion/react';

const breakpoints = [375, 768, 1200];

const mediaQuery = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mediaQuery;
