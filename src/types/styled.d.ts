import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryGreen: string;
      primaryYellow: string;
      primaryBlue: string;
      primaryOrange: string;
    };
  }
}
