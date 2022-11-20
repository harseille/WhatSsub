import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@state/index';
import { User } from 'firebase/auth';
import { 새_댓글_추가하기 } from '@api/index';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_댓글프로퍼티 } from '../../types/IComment';

function CommentInputWrap() {
  const commentInputRef = useRef<HTMLInputElement>(null);

  const { combinationId } = useParams();
  const 유저정보: User | null = useRecoilValue(userState);

  const 서브밋핸들러_댓글_쓰기 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const 댓글내용 = commentInputRef.current?.value;
    if (!유저정보) alert('로그인 후 댓글을 작성할 수 있습니다.');
    else if (!댓글내용) alert('댓글을 입력해주세요.');
    else if (유저정보 && 댓글내용 && combinationId) {
      const 댓글_정보: 인터페이스_댓글프로퍼티 = {
        꿀조합id: combinationId,
        작성자id: 유저정보.uid,
        작성자이름: 유저정보.displayName,
        작성자프로필이미지: 유저정보.photoURL,
        내용: commentInputRef.current?.value,
        작성일: Date.now(),
      };
      await 새_댓글_추가하기(댓글_정보);
      // console.log('댓글 성공');
    }
  };

  return (
    <Wrapper>
      <ProfileImg />
      <Form onSubmit={서브밋핸들러_댓글_쓰기}>
        <Input id="comment" maxLength={120} ref={commentInputRef} />
        <Submit type="submit" value="게시" />
      </Form>
    </Wrapper>
  );
}

export default CommentInputWrap;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 80px;
  width: 100%;
  padding: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px -4px 10px rgba(213, 213, 213, 0.25);
`;

const ProfileImg = styled.div`
  width: ${changeRem(30)};
  height: ${changeRem(30)};
  border-radius: 50%;
  background: #ccc;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
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
const Submit = styled.input`
  border: 0;
  flex-basis: ${changeRem(40)};
  flex-shrink: 0;
  background: transparent;
  color: ${props => props.theme.colors.primaryBlue};
  font-size: ${changeRem(14)};
  font-weight: bold;
`;
