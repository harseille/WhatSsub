import RandomRoulette from '@components/Roulette/RandomRoulette';
import Wrapper from '@components/Common/UI/Wrapper';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import danzziQuestion from '@assets/images/danzzi/danzzi_question.png';
import danzziUniform from '@assets/images/danzzi/danzzi_uniform.png';
import mediaQuery from '@styles/media-queries';

function RandomPickPage() {
  return (
    <Wrapper>
      <Title>랜덤 조합 룰렛</Title>
      <RandomRoulette />
      <DanzziLeft src={danzziQuestion} alt="캐릭터 단찌 왼쪽" />
      <DanzziRight src={danzziUniform} alt="캐릭터 단찌 오르쪽" />
      <Text>돌려돌려 돌림판~</Text>
    </Wrapper>
  );
}

const Title = styled.div`
  text-align: center;
  margin: 40px 0 20px;
  font-size: 24px;
  font-weight: 700;
  ${mediaQuery} {
    font-size: 34px;
  }
`;

const DanzziLeft = styled.img`
  position: absolute;
  left: 0;
  bottom: 140px;
  width: ${changeRem(175)};
  z-index: 5;

  ${mediaQuery} {
    width: ${changeRem(275)};
    left: 60px;
    bottom: 85px;
  }
`;
const DanzziRight = styled.img`
  position: absolute;
  width: ${changeRem(110)};
  right: 0;
  bottom: 150px;
  z-index: 5;
  ${mediaQuery} {
    width: ${changeRem(180)};
    right: 60px;
    bottom: 130px;
  }
`;

const Text = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 77px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  padding: 40px;
  color: #fff;
  background-color: ${props => props.theme.colors.primaryGreen};
  height: ${changeRem(110)};
  text-align: center;
  margin-bottom: 0;

  ${mediaQuery} {
    bottom: 0;
    height: 160px;
    padding: 70px;
  }
`;

export default RandomPickPage;
