import Button from '@components/UI/Button';
import Span from '@components/UI/Span';
import danzziAnnung from '@assets/images/danzzi/danzzi_annung.png';
import iconFacebook from '@assets/icons/facebook.svg';
import iconGmail from '@assets/icons/gmail.svg';
import confettiGreen from '@assets/icons/confetti_green.svg';
import confettiOrange from '@assets/icons/confetti_orange.svg';
import confettiYellow from '@assets/icons/confetti_yellow.svg';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import { autoMargin, changeRem, flexbox } from '../styles/mixin';

function LoginPage() {
  return (
    <LoginWrapper>
      <Banner>
        <Visual>
          <Title>
            <Span display="block">
              여러분의 <Span color={theme.colors.primaryGreen}>왔</Span>
              <Span color={theme.colors.primaryYellow}>썹</Span>
            </Span>
            <Span>
              <Span color={theme.colors.primaryYellow}>꿀조합</Span>을 공유해보세요.
            </Span>
          </Title>
          <VisualImg src={danzziAnnung} alt="안눙이라고 말하는 단지" />
        </Visual>
      </Banner>
      <ButtonList>
        <Button designType="social" width={changeRem(360)} height={changeRem(54)} borderRadius="6px">
          <img src={iconFacebook} alt="facebook 아이콘" />
          Continue with Facebook
        </Button>
        <Button designType="social" width={changeRem(360)} height={changeRem(54)} borderRadius="6px">
          <img src={iconGmail} alt="Gmail 아이콘" />
          Continue with Gmail
        </Button>
      </ButtonList>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
  height: 100vh;
`;

const Banner = styled.div`
  background-color: #f2f2f2;
  height: 447px;
`;

const Visual = styled.section`
  ${autoMargin()}
  overflow: hidden;
  padding: 30px 0 0;
  max-width: 800px;
  text-align: center;
  background-image: url(${confettiOrange});
  background-repeat: no-repeat;
  background-position: left 100px bottom 160px, right -30px bottom 100px;
`;

const Title = styled.h2`
  padding: 0 45px;
  color: #000;
  font-size: ${changeRem(36)};
  font-weight: 700;
  text-align: right;
  background-image: url(${confettiGreen}), url(${confettiYellow});
  background-repeat: no-repeat;
  background-position: left 14% center, right 30px top -15px;
  transform: skewY(7deg);
`;

const VisualImg = styled.img`
  width: ${changeRem(280)};
  margin-top: -30px;
`;

const ButtonList = styled.div`
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
  margin-top: 80px;
`;

export default LoginPage;
