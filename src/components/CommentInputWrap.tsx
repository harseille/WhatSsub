import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';

function CommentInputWrap() {
  return (
    <Wrapper>
      <ProfileImg />
      <Input />
      <Button>게시</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 80px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0px -4px 10px rgba(213, 213, 213, 0.25);
`;

const ProfileImg = styled.div`
  width: ${changeRem(30)};
  height: ${changeRem(30)};
  border-radius: 50%;
  background: #ccc;
`;
const Input = styled.input`
  flex-shrink: 0;
  flex-basis: ${`calc(100% - ${changeRem(135)})`};
  border: 0;
  padding: 13px;
  border-radius: 6px;
  background: #f5f5f5;
  font-size: ${changeRem(14)};
`;
const Button = styled.button`
  border: 0;
  flex-basis: ${changeRem(40)};
  flex-shrink: 0;
  background: transparent;
  color: ${props => props.theme.colors.primaryBlue};
  font-size: ${changeRem(14)};
  font-weight: bold;
`;

export default CommentInputWrap;
