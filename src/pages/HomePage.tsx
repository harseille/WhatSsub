import { Link } from 'react-router-dom';
import Wrapper from '@components/Common/UI/Wrapper';
import danzziHome from '@assets/images/danzzi/danzzi_home.png';
import deco1 from '@assets/icons/home_bg_left_top.svg';
import deco2 from '@assets/icons/home_bg_right_top.svg';
import deco3 from '@assets/icons/home_bg_left_bottom.svg';
import bestLink from '@assets/icons/home_link_best_combination.svg';
import bgText from '@assets/icons/home_bg_text.svg';
import ramdomLink from '@assets/icons/home_link_random.svg';
import styled from '@emotion/styled';
import { flexbox, changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function HomePage() {
  return (
    <HomeWrapper>
      <Visual>
        <Wrapper>
          <Title>
            <TitleSpan>
              <StrongSpan>생각</StrongSpan>이 안날땐
            </TitleSpan>
            <TitleSpan>
              <StrongSpan>왔썹</StrongSpan>으로 고르자
            </TitleSpan>
          </Title>
          <VisualImg src={danzziHome} alt="샌드위치 먹는 단지" />
        </Wrapper>
      </Visual>
      <Wrapper>
        <LinkGroup>
          <ALink to="/best-combination-pick">
            <LinkTitle>
              <span>꿀 조합</span>
            </LinkTitle>
            <LinkSub>BEST 메뉴</LinkSub>
            <LinkImg src={bestLink} alt="꿀 조합 아이콘" />
          </ALink>
          <ALink to="/random-pick">
            <LinkTitle>
              <span>랜덤 조합</span>
            </LinkTitle>
            <LinkSub>랜덤으로 즐기는 메뉴</LinkSub>
            <LinkImg src={ramdomLink} alt="룰렛" />
          </ALink>
        </LinkGroup>
      </Wrapper>
    </HomeWrapper>
  );
}

export default HomePage;

const HomeWrapper = styled.div`
  padding: 0 0 50px;
  background: #f9f9f9;
`;

const Visual = styled.section`
  overflow: hidden;
  height: 447px;
  text-align: right;
  background-color: ${({ theme }) => theme.colors.primaryGreen};

  & > div {
    padding-top: 50px;
    height: calc(100% - 50px);
    background-image: url(${deco3}), url(${bgText});
    background-repeat: no-repeat;
    background-size: auto, 100%;
    background-position: left 34px bottom 60px, right -30px bottom 30%;
  }

  ${mediaQuery} {
    position: relative;
    height: calc(100vh - 98px);

    & > div {
      position: relative;
      height: calc(100% - 100px);
      background-size: 20%, 80%;
      background-position: left -5% bottom 10%, right 25px bottom 35%;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: ${({ theme }) => theme.colors.primaryYellow};
    }
  }
`;

const Title = styled.h2`
  padding: 0 45px;
  color: #fff;
  font-size: ${changeRem(36)};
  font-weight: 400;
  text-align: right;
  background-image: url(${deco1}), url(${deco2});
  background-repeat: no-repeat;
  background-position: left 14% center, right 30px top -15px;
  transform: skewY(7deg);

  ${mediaQuery} {
    width: 558px;
    padding-top: 20px;
    text-align: left;
    font-size: ${changeRem(64)};
    background-size: 23%, 10%;
    background-position: left -8% center, right 30px top -15px;
    transform: skewY(7deg) translateY(20%);
  }
`;

const TitleSpan = styled.span`
  display: block;

  &:first-of-type {
    text-align: right;
  }
`;

const StrongSpan = styled.span`
  color: ${({ theme }) => theme.colors.primaryYellow};
  font-size: ${changeRem(48)};
  font-weight: bold;

  ${mediaQuery} {
    font-size: ${changeRem(84)};
  }
`;

const VisualImg = styled.img`
  width: ${changeRem(280)};
  margin-right: 56px;

  ${mediaQuery} {
    position: absolute;
    right: 30px;
    bottom: -20%;
    width: 35%;
    margin: 0;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 70px);
  margin: -55px auto 0;

  ${mediaQuery} {
    ${flexbox('row', 'end', 'center')}
    position: relative;
    z-index: 1;
    margin-top: -145px;
  }
`;

const ALink = styled(Link)`
  flex-basis: 50%;
  padding: 45px 0 35px;
  border-radius: 0 0 30px 0;
  background: #fff;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #252525;

  &:first-of-type {
    position: relative;
    border-radius: 30px 0 0 0;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 1px;
      height: calc(100% - 70px);
      background: #eee;
      transform: translate3d(0, -50%, 0);
    }
  }

  ${mediaQuery} {
    ${flexbox('row-reverse', 'center', 'center')}
    gap: 15px;
    padding: 25px 0;
    flex-basis: 374px;

    &:first-of-type::after {
      height: calc(100% - 54px)
    }
  }
  }
`;

const LinkImg = styled.img`
  width: auto;

  ${mediaQuery} {
    height: 45px;
  }
`;

const LinkTitle = styled.span`
  position: relative;
  font-size: ${changeRem(16)};

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    left: -21px;
    top: -9px;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 15px 15px 0 15px;
    background: ${({ theme }) => theme.colors.primaryYellow};
  }

  span {
    position: relative;
    z-index: 1;
  }

  ${mediaQuery} {
    font-size: ${changeRem(24)};

    &::before {
      content: none;
    }
  }
`;

const LinkSub = styled.span`
  display: block;
  margin: 4px 0 10px;
  color: #979797;
  font-size: ${changeRem(12)};

  ${mediaQuery} {
    display: none;
  }
`;
