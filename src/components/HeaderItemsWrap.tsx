import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import homeImg from '@assets//images/home.svg';
import rankingImg from '@assets//images/ranking.svg';
import customImg from '@assets//images/custom.svg';
import myPageImg from '@assets//images/myPage.svg';
import { changeRem, buttonNone } from '../styles/mixin';
import mediaQuery from '../styles/media-queries';

interface 인터페이스_메뉴 {
  메뉴명: string;
  이동링크: string;
  아이콘: any;
  아이콘설명: string;
}

const 메뉴정보: 인터페이스_메뉴[] = [
  { 메뉴명: '홈', 이동링크: '/', 아이콘: homeImg, 아이콘설명: '홈 아이콘' },
  { 메뉴명: '맛잘알랭킹', 이동링크: '/best-combination/ranking', 아이콘: rankingImg, 아이콘설명: '맛잘알랭킹 아이콘' },
  { 메뉴명: '커스텀', 이동링크: '/custom-combination', 아이콘: customImg, 아이콘설명: '커스텀 아이콘' },
  { 메뉴명: '마이페이지', 이동링크: '/myPage', 아이콘: myPageImg, 아이콘설명: '마이페이지 아이콘' },
];

function HeaderItemsWrap() {
  return (
    <HeaderItemsWrapComponent>
      <Nav>
        <ul>
          {메뉴정보.map(메뉴 => (
            <li key={메뉴.메뉴명}>
              <NavLink
                to={메뉴.이동링크}
                css={css`
                  ${링크스타일}
                `}>
                <NavItemTitle>{메뉴.메뉴명}</NavItemTitle>
                <NavItemImg src={메뉴.아이콘} alt={메뉴.아이콘설명} />
              </NavLink>
            </li>
          ))}
        </ul>
      </Nav>
      <HeaderLogInOut>
        <NavLink to="/login">로그인 </NavLink>
      </HeaderLogInOut>
    </HeaderItemsWrapComponent>
  );
}

export default HeaderItemsWrap;

const HeaderItemsWrapComponent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogInOut = styled.button`
  ${buttonNone};
  font-size: ${changeRem(14)};
  color: ${props => props.theme.colors.gray87};
  font-weight: 700;
  flex-shrink: 0;
  cursor: pointer;

  ${mediaQuery} {
    font-size: ${changeRem(15)};
    padding-left: 3px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: #fff;
  /* box-shadow: 0px -2px 10px rgba(213, 213, 213, 0.25); */
  box-shadow: 0px -2px 2px #eee;

  ${mediaQuery} {
    background: none;
    box-shadow: none;
    position: static;
  }

  & ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${mediaQuery} {
      & li {
        :first-of-type {
          display: none;
        }

        padding: 0 6px;
      }
    }
  }
`;

const NavItemTitle = styled.span`
  padding-top: 6px;
  font-size: ${changeRem(8)};
  color: ${props => props.theme.colors.gray87};
  font-weight: 700;

  ${mediaQuery} {
    padding-top: 0;
    font-size: ${changeRem(15)};
  }
`;

const NavItemImg = styled.img`
  width: ${changeRem(26)};
  height: ${changeRem(30)};

  ${mediaQuery} {
    display: none;
  }
`;

const 링크스타일 = `  
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
