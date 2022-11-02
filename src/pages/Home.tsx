import styled from '@emotion/styled';
import Counter from '@components/Counter';

function HomePage() {
  return (
    <>
      <Counter />
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis.</Description>
    </>
  );
}

export default HomePage;

const Description = styled.p`
  font-size: 20px;
  background-color: yellow;
  color: ${props => props.theme.colors.primaryBlue};
  padding: 10px;
`;
