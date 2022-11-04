import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Global, ThemeProvider, css } from '@emotion/react';

import emotionNormalize from 'emotion-normalize';
import globalStyle from './styles/global';
import theme from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <Global
      styles={css`
        ${emotionNormalize}
        ${globalStyle}
      `}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
