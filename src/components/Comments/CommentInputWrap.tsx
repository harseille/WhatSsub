import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import 새_댓글_추가하기 from '@api/pushNewComment';
import { userState } from '@state/index';
import { User } from 'firebase/auth';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_댓글_추가 } from '@typings/IComment';
import theme from '@styles/theme';

type TProps = {
  getCommentListCount: Function;
};

function CommentInputWrap({ getCommentListCount }: TProps) {
  const commentInputRef = useRef<HTMLInputElement>(null);
  const { combinationId } = useParams();
  const 유저정보: User | null = useRecoilValue(userState);

  const 서브밋핸들러_댓글_쓰기 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const 댓글내용 = commentInputRef.current?.value;
    if (!유저정보) alert('로그인 후 댓글을 작성할 수 있습니다.');
    else if (!댓글내용) alert('댓글을 입력해주세요.');
    else if (유저정보 && 댓글내용 && combinationId) {
      const 댓글_정보: 인터페이스_댓글_추가 = {
        꿀조합id: combinationId,
        작성자id: 유저정보.uid,
        작성자이름: 유저정보.displayName,
        작성자프로필이미지: 유저정보.photoURL,
        내용: commentInputRef.current?.value,
        작성일: Date.now(),
      };
      try {
        await 새_댓글_추가하기(댓글_정보);
        await getCommentListCount(combinationId);
        commentInputRef.current.value = '';
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Wrapper>
      <Profile>{유저정보 && <ProfileImg src={유저정보.photoURL!} alt={유저정보.displayName!} />}</Profile>
      <Form onSubmit={서브밋핸들러_댓글_쓰기}>
        <Input id="comment" maxLength={120} ref={commentInputRef} />
        <Submit type="submit" value="게시" />
      </Form>
    </Wrapper>
  );
}

export default CommentInputWrap;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 16px;
  background: #ffffff;
  display: flex;
  align-items: center;
  /* box-shadow: 0px -4px 10px rgba(213, 213, 213, 0.25), 0px 4px 10px rgba(213, 213, 213, 0.25);*/
  border-bottom: 1px solid ${theme.colors.grayDDD};

  ${mediaQuery} {
    justify-content: center;
    height: ${changeRem(80)};
  }
`;

const Profile = styled.div`
  display: none;
  width: ${changeRem(30)};
  height: ${changeRem(30)};
  border-radius: 50%;
  background: #ccc;

  ${mediaQuery} {
    display: block;
    width: ${changeRem(48)};
    height: ${changeRem(48)};
  }
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  background: #ccc;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  width: 100%;
  ${mediaQuery} {
    max-width: ${changeRem(1200)};
  }
`;

const Input = styled.input`
  flex-shrink: 0;
  flex-basis: 100%;
  border: 0;
  padding: 13px;
  border-radius: 6px;
  background: #f5f5f5;
  font-size: ${changeRem(14)};

  ${mediaQuery} {
    flex-basis: ${`calc(100% - ${changeRem(80)})`};
  }
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
