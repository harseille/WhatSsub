import RandomRoulette from '@components/Roulette/RandomRoulette';
import Wrapper from '@components/Common/UI/Wrapper';
import danzziQuestion from '@assets/images/danzzi/danzzi_question.webp';
import danzziUniform from '@assets/images/danzzi/danzzi_uniform.webp';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function RandomPickPage() {
  return (
    <Wrapper>
      <Container>
        <Title>랜덤 조합 룰렛</Title>
        <RandomRoulette />
        <DanzziContainer>
          <DanzziLeft src={danzziQuestion} alt="캐릭터 단찌 왼쪽" />
          <DanzziRight src={danzziUniform} alt="캐릭터 단찌 오른쪽" />
        </DanzziContainer>
        <Text>돌려돌려 돌림판~</Text>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  ${flexbox('column', 'center', 'center')};
`;

const Title = styled.div`
  text-align: center;
  margin: 40px 0 20px;
  font-size: 24px;
  font-weight: 700;
  ${mediaQuery} {
    font-size: 34px;
  }
`;

const DanzziContainer = styled.div`
  display: none;

  ${mediaQuery} {
    ${flexbox('row', 'space-evenly', 'center')};
    z-index: 1;
    position: absolute;
    width: 100%;
    bottom: 80px;
  }
`;

const DanzziLeft = styled.img`
  width: ${changeRem(175)};
  bottom: 200px;

  ${mediaQuery} {
    width: ${changeRem(275)};
    left: 60px;
    bottom: 85px;
  }
`;

const DanzziRight = styled.img`
  width: ${changeRem(110)};
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
  background: ${({ theme }) => theme.colors.white};
  background-color: ${props => props.theme.colors.AccessibilityGreen};
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
