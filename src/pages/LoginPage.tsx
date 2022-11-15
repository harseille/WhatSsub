import Button from '@components/UI/Button/Button';
import Span from '@components/UI/Span';
import danzziAnnung from '@assets/images/danzzi/danzzi_annung.png';
import iconFacebook from '@assets/icons/facebook.svg';
import iconGmail from '@assets/icons/gmail.svg';
import confettiGreen from '@assets/icons/confetti_green.svg';
import confettiOrange from '@assets/icons/confetti_orange.svg';
import confettiYellow from '@assets/icons/confetti_yellow.svg';
import styled from '@emotion/styled';
import Wrapper from '@components/UI/Wrapper';
import mediaQuery from '@styles/media-queries';
import theme from '@styles/theme';
import { autoMargin, changeRem, flexbox } from '@styles/mixin';
import { setPersistence, browserSessionPersistence, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.config';

function LoginPage() {
  const googleLoginHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    setPersistence(auth, browserSessionPersistence).then(() => {
      console.log(auth);
      return signInWithPopup(auth, provider)
        .then(() => {
          // navigate('/main');
        })
        .catch(error => {
          alert(error.message);
        });
    });
  };

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
          <VisualImg src={danzziAnnung} alt="안눙이라고 말하는 단찌" />
        </Visual>
      </Banner>
      <ButtonList>
        <Button designType="social" width={changeRem(360)} height={changeRem(54)} borderRadius="6px">
          <img src={iconFacebook} alt="facebook 아이콘" width="auto" />
          Continue with Facebook
        </Button>
        <Button
          designType="social"
          width={changeRem(360)}
          height={changeRem(54)}
          borderRadius="6px"
          onClick={googleLoginHandler}>
          <img src={iconGmail} alt="Gmail 아이콘" />
          Continue with Gmail
        </Button>
      </ButtonList>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div``;

const Banner = styled.div`
  background-color: #f2f2f2;
  height: 300px;
  ${mediaQuery} {
    height: 447px;
  }
`;

const Visual = styled(Wrapper)`
  ${autoMargin()}
  overflow: hidden;
  padding: 30px 0 0;
  text-align: center;
  background-image: url(${confettiOrange});
  background-repeat: no-repeat;
  background-position: left 100px bottom 160px, right -30px bottom 100px;
`;

const Title = styled.h2`
  padding: 0 45px;
  color: #000;
  font-size: ${changeRem(24)};
  font-weight: 700;
  text-align: right;
  background-image: url(${confettiGreen}), url(${confettiYellow});
  background-repeat: no-repeat;
  background-position: left 14% center, right 30px top -15px;
  transform: skewY(7deg);

  ${mediaQuery} {
    font-size: ${changeRem(36)};
  }
`;

const VisualImg = styled.img`
  width: ${changeRem(200)};
  margin-top: -30px;
  ${mediaQuery} {
    width: ${changeRem(280)};
  }
`;

const ButtonList = styled(Wrapper)`
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
  margin-top: 80px;
  & img {
    width: auto;
  }
`;

export default LoginPage;
