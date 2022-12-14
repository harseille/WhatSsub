import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import 새_댓글_추가하기 from '@api/pushNewComment';
import { userState } from '@state/index';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_댓글_추가 } from '@typings/IComment';
import { User } from 'firebase/auth';

type TProps = {
  getCommentListCount: Function;
};

function CommentInputWrap({ getCommentListCount }: TProps) {
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const { combinationId } = useParams();
  const 유저정보: User | null = useRecoilValue(userState);

  const 댓글_입력 = async (combinationId: string) => {
    const 댓글내용 = commentInputRef.current?.value.trim();
    if (!유저정보) alert('로그인 후 댓글을 작성할 수 있습니다.');
    else if (!댓글내용) alert('댓글을 입력해주세요.');
    else if (유저정보 && 댓글내용 && combinationId) {
      const 댓글_정보: 인터페이스_댓글_추가 = {
        꿀조합id: combinationId,
        작성자id: 유저정보.uid,
        작성자이름: 유저정보.displayName,
        작성자프로필이미지: 유저정보.photoURL,
        내용: 댓글내용,
        작성일: Date.now(),
      };
      try {
        await 새_댓글_추가하기(댓글_정보);
        await getCommentListCount(combinationId);
        commentInputRef.current!.value = '';
      } catch (error) {
        // console.error(error);
      }
    }
  };

  const 키다운핸들러_댓글_입력 = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.key === 'Enter') {
      댓글_입력(combinationId!);
    }
  };

  const 클릭핸들러_댓글_입력 = (e: React.MouseEvent<HTMLInputElement>) => {
    댓글_입력(combinationId!);
  };

  return (
    <Wrapper>
      <Profile>{유저정보 && <ProfileImg src={유저정보.photoURL!} alt={유저정보.displayName!} />}</Profile>
      <Form>
        <Label htmlFor="comment">댓글</Label>
        <Input id="comment" maxLength={500} ref={commentInputRef} onKeyDown={키다운핸들러_댓글_입력} />
        <Submit type="button" value="게시" onClick={클릭핸들러_댓글_입력} />
      </Form>
    </Wrapper>
  );
}

export default CommentInputWrap;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.white};
  ${flexbox('row', undefined, 'center')}
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDDD};

  ${mediaQuery} {
    justify-content: center;
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
  width: ${changeRem(30)};
  height: ${changeRem(30)};

  ${mediaQuery} {
    width: ${changeRem(48)};
    height: ${changeRem(48)};
  }
`;

const Form = styled.form`
  ${flexbox('row', 'space-evenly', 'center')};
  gap: 10px;
  width: 100%;
  ${mediaQuery} {
    max-width: ${changeRem(1200)};
  }
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.textarea`
  flex-shrink: 0;
  flex-basis: 100%;
  border: 0;
  padding: 13px;
  border-radius: 6px;
  background: #f5f5f5;
  font-size: ${changeRem(14)};
  resize: none;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.primaryYellow};
  }

  ${mediaQuery} {
    flex-basis: ${`calc(100% - ${changeRem(80)})`};
  }
`;
const Submit = styled.input`
  border: 0;
  flex-shrink: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: ${changeRem(18)};
  font-weight: bold;
  cursor: pointer;
`;
