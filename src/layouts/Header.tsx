import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderItemsWrap from '@layouts/HeaderItemsWrap';
import logoImg from '@assets/icons/logo.svg';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function Header() {
  return (
    <HeaderWrap>
      <HeaderInner>
        <h1 className="logo">
          <NavLink to="/">
            <img src={logoImg} alt="logo이미지" />
          </NavLink>
        </h1>
        <HeaderItemsWrap />
      </HeaderInner>
    </HeaderWrap>
  );
}

export default memo(Header);

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  z-index: 3;
  min-width: 35px;
  background: #fff;
  box-shadow: 0px 2px 2px #eee;
`;

const HeaderInner = styled.div`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s;

  & .logo {
    display: flex;
    align-items: center;

    & img {
      display: block;
      height: 100%;
    }
  }

  ${mediaQuery} {
    padding: 24px 36px;
  }
`;
