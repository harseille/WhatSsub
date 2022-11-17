import RandomRoulette from '@components/UI/RandomRoulette';
import RandomModalResult from '@components/UI/RandomModalResult';
import DimmedLayer from '@components/UI/DimmedLayer';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { API_URL_PATH_PREFIX } from '@constants/constants';

function RandomPickPage() {
  // const fetchData = (url: string) => fetch(url).then(res => res.json());

  return (
    <Wrapper>
      <Title>랜덤 조합 룰렛</Title>
      <RandomRoulette />
      <Text>돌려돌려 돌림판~</Text>
      {/* <DimmedLayer />
      <RandomModalResult /> */}
    </Wrapper>
  );
}

const Title = styled.div`
  text-align: center;
  margin: 40px 0 20px;
  font-size: 24px;
  font-weight: 700;
`;

const Text = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 77px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  padding: 30px;
  color: #fff;
  background-color: ${props => props.theme.colors.primaryGreen};
  height: ${changeRem(90)};
  text-align: center;
  margin-bottom: 0;
`;

export default RandomPickPage;
