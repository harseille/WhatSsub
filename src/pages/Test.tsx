import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const TestPage = styled.div`
  padding: 30px;
  font-size: 20px;
  text-align: center;
`;

const Test = () => {
  return (
    <TestPage>
      <h1>test page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, temporibus.</p>
      <Outlet />
    </TestPage>
  );
};

export default Test;
