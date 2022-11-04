import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function RootLayout() {
  return (
    <Layout>
      <Header />
      <Main>
        <Outlet />
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

  ${mediaQuery} {
    padding-top: 98px;
    padding-bottom: 0px;
  }
`;
