import styled from '@emotion/styled';
import logoImg from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <HeaderInner>
        <HeaderLogo>
          <HeaderLogoImg src={logoImg} alt="logo이미지" />
        </HeaderLogo>
      </HeaderInner>
    </header>
  );
}

export default Header;

const HeaderInner = styled.div`
  padding: 20px 20px;
  background-color: yellow;
`;

const HeaderLogo = styled.h1`
  margin: 0;
`;
const HeaderLogoImg = styled.img`
  max-width: 100%;
`;
