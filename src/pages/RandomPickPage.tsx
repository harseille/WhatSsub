import RandomRoulette from '@components/UI/RandomRoulette';
import RandomModalResult from '@components/UI/RandomModalResult';
import Wrapper from '@components/UI/Wrapper';

function RandomPickPage() {
  return (
    <Wrapper>
      {/* <Title>랜덤 조합 룰렛</Title> */}
      <RandomRoulette />
      {/* <Text>돌려돌려 돌림판~</Text> */}
      <RandomModalResult />
    </Wrapper>
  );
}

// const Title = styled.div`
//   background-color: #fff;
//   text-align: center;
// `;

// const Text = styled.div`
//   box-sizing: border-box;
//   font-size: 20px;
//   font-weight: 400;
//   padding: 40px;
//   color: #fff;
//   background-color: ${props => props.theme.colors.primaryGreen};
//   height: ${changeRem(109)};
//   text-align: center;
//   margin-bottom: 0;
// `;

export default RandomPickPage;
