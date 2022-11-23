import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import Button from '@components/UI/Button';
import Span from '@components/UI/Span';
import Wrapper from '@components/UI/Wrapper';
import { getOAuthProvider } from '@utils/index';
import iconFacebook from '@assets/icons/facebook.svg';
import iconGmail from '@assets/icons/gmail.svg';
import danzziAnnung from '@assets/images/danzzi/danzzi_annung.png';
import confettiGreen from '@assets/icons/confetti_green.svg';
import confettiOrange from '@assets/icons/confetti_orange.svg';
import confettiYellow from '@assets/icons/confetti_yellow.svg';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import theme from '@styles/theme';
import { autoMargin, changeRem, flexbox } from '@styles/mixin';

function LoginPage() {
  const navigate = useNavigate();
  const isLoggedin = useRecoilValue(isLoggedInState);

  useEffect(() => {
    if (isLoggedin) {
      navigate(-1);
    }
  }, [isLoggedin, navigate]);

  const 클릭핸들러_구글_로그인 = getOAuthProvider('google');
  const 클릭핸들러_페이스북_로그인 = getOAuthProvider('facebook');

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
        <Button
          designType="social"
          width={changeRem(360)}
          height={changeRem(54)}
          borderRadius="6px"
          onClick={클릭핸들러_페이스북_로그인}>
          <img src={iconFacebook} alt="facebook 아이콘" width="auto" />
          Continue with Facebook
        </Button>
        <Button
          designType="social"
          width={changeRem(360)}
          height={changeRem(54)}
          borderRadius="6px"
          onClick={클릭핸들러_구글_로그인}>
          <img src={iconGmail} alt="Gmail 아이콘" />
          Continue with Gmail
        </Button>
      </ButtonList>
    </LoginWrapper>
  );
}

export default LoginPage;

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
