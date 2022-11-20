import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import { 메뉴정보 } from '@constants/constants';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import mediaQuery from '@styles/media-queries';
import { changeRem, buttonNone } from '@styles/mixin';
import { auth } from '../firebase.config';

function HeaderItemsWrap() {
  const isLoggedin = useRecoilValue(isLoggedInState);

  const 로그아웃 = () => {
    auth.signOut();
  };

  return (
    <HeaderItemsWrapComponent>
      <Nav>
        <ul>
          {메뉴정보.map(메뉴 => {
            if (메뉴.로그인상관여부 === true && !isLoggedin) return;
            return (
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
            );
          })}
        </ul>
      </Nav>
      {isLoggedin ? (
        <HeaderLogInOut onClick={로그아웃}>로그아웃</HeaderLogInOut>
      ) : (
        <HeaderLogInOut>
          <NavLink to="/login">로그인 </NavLink>
        </HeaderLogInOut>
      )}
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
