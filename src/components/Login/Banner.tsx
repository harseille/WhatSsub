import Span from '@components/Common/UI/Span';
import Wrapper from '@components/Common/UI/Wrapper';
import danzziAnnung from '@assets/images/danzzi/danzzi_annung1.webp';
import confettiGreen from '@assets/icons/confetti_green.svg';
import confettiOrange from '@assets/icons/confetti_orange.svg';
import confettiYellow from '@assets/icons/confetti_yellow.svg';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import theme from '@styles/theme';
import { autoMargin, changeRem } from '@styles/mixin';

function BannerContainer() {
  return (
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
  );
}

export default BannerContainer;

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
