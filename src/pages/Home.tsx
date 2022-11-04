import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import homeDanji from '@assets/images/home_danji.png';
import deco1 from '@assets/images/home_bg_left_top.svg';
import deco2 from '@assets/images/home_bg_right_top.svg';
import deco3 from '@assets/images/home_bg_left_bottom.svg';
import bestLink from '@assets/images/home_link_best_combination.svg';
import bgText from '@assets/images/home_bg_text.svg';
import ramdomLink from '@assets/images/home_link_random.svg';
import Wrapper from '@components/UI/Wrapper';
import { changeRem } from '../styles/mixin';
import mediaQuery from '../styles/media-queries';

function HomePage() {
  return (
    <HomeWrapper>
      <Visual>
        <Wrapper>
          <Title>
            <TitleSpan>
              <SpanStrong>생각</SpanStrong>이 안날땐
            </TitleSpan>
            <TitleSpan>
              <SpanStrong>왔썹</SpanStrong>으로 고르자
            </TitleSpan>
          </Title>
          <VisualImg src={homeDanji} alt="샌드위치 먹는 단지" />
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

const HomeWrapper = styled.div`
  padding: 0 0 50px;
  background: #f9f9f9;
`;

const Visual = styled.section`
  overflow: hidden;
  height: 447px;
  padding: 30px 0 0;
  text-align: right;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  background-image: url(${deco3}), url(${bgText});
  background-repeat: no-repeat;
  background-position: left 34px bottom 60px, right -30px bottom 90px;

  ${mediaQuery} {
    height: 680px;
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
    text-align: center;
    font-size: ${changeRem(80)};
    transform: skewY(7deg) translateY(20%);
  }
`;

const TitleSpan = styled.span`
  display: block;
`;

const SpanStrong = styled.span`
  color: ${({ theme }) => theme.colors.primaryYellow};
  font-size: ${changeRem(48)};
  font-weight: bold;

  ${mediaQuery} {
    font-size: ${changeRem(100)};
  }
`;

const VisualImg = styled.img`
  width: ${changeRem(280)};
  margin-top: -15px;
  margin-right: 56px;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 70px);
  margin: -55px auto 0;
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
`;

const LinkImg = styled.img`
  width: auto;
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
`;

const LinkSub = styled.span`
  display: block;
  margin: 4px 0 10px;
  color: #979797;
  font-size: ${changeRem(12)};
`;

export default HomePage;
