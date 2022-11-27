import Button from '@components/Common/UI/Button';
import Wrapper from '@components/Common/UI/Wrapper';
import getOAuthProvider from '@services/Firebase/Auth/getOAuthProvider';
import iconFacebook from '@assets/icons/facebook.svg';
import iconGmail from '@assets/icons/gmail.svg';
import styled from '@emotion/styled';
import { flexbox, changeRem } from '@styles/mixin';

function ButtonListContainer() {
  const 클릭핸들러_구글_로그인 = getOAuthProvider('google');
  const 클릭핸들러_페이스북_로그인 = getOAuthProvider('facebook');

  return (
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
  );
}

export default ButtonListContainer;

const ButtonList = styled(Wrapper)`
  ${flexbox('column', 'center', 'center')}
  gap: 16px;
  margin-top: 80px;
  & img {
    width: auto;
  }
`;
