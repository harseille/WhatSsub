import styled from '@emotion/styled';
import Counter from '@components/Counter';
import Header from '@components/Header';

const Description = styled.p`
  font-size: 20px;
  background-color: yellow;
  color: ${props => props.theme.colors.primaryBlue};
  padding: 10px;
`;

function HomePage() {
  return (
    <>
      <Header />
      <Counter />
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis.</Description>
    </>
  );
}

export default HomePage;
