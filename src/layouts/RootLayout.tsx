import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Test>Test</Test>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const Test = styled.div`
  font-size: ${changeRem(100)};
`;

export default RootLayout;
