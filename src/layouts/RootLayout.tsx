import { Outlet, ScrollRestoration } from 'react-router-dom';
import useScrollTop from '@hooks/useScrollTop';
import Header from '@layouts/Header';
import Top from '@components/Common/Button/Top';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function RootLayout() {
  const { isShowTop } = useScrollTop();

  return (
    <Layout>
      <ScrollRestoration />
      <Header />
      <Main>
        <Outlet />
        {isShowTop && <Top />}
      </Main>
    </Layout>
  );
}

export default RootLayout;

const Layout = styled.div`
  position: relative;
  min-width: 375px;
  min-height: 667px;
  height: 100vh;
  background: #fafafa;
`;

const Main = styled.main`
  padding-top: 76px;
  padding-bottom: 80px;
  background: #fafafa;

  ${mediaQuery} {
    padding-top: 98px;
    padding-bottom: 0px;
  }
`;
