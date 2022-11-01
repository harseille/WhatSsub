import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Global, ThemeProvider } from '@emotion/react';

import emotionNormalize from 'emotion-normalize';
import theme from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <Global styles={emotionNormalize} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
