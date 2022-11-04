import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logoImg from '@assets//images/logo.svg';
import HeaderItemsWrap from './HeaderItemsWrap';
import mediaQuery from '../styles/media-queries';

function Header() {
  return (
    <HeaderWrap>
      <HeaderInner>
        <HeaderLogo>
          <NavLink to="/">
            <img src={logoImg} alt="logo이미지" />
          </NavLink>
        </HeaderLogo>
        <HeaderItemsWrap />
      </HeaderInner>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  z-index: 3;
  min-width: 375px;
  background: #fff;
  box-shadow: 0px 2px 2px #eee;
`;

const HeaderInner = styled.div`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.5s;

  ${mediaQuery} {
    padding: 24px 36px;
  }
`;

const HeaderLogo = styled.h1`
  margin: 0;
`;
