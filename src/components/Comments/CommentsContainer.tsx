import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import useComments from '@hooks/useComments';
import CommentList from '@components/Comments/CommentList';
import CommentInputWrap from '@components/Comments/CommentInputWrap';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function CommentsContainer() {
  const { combinationId } = useParams();
  const { 댓글_목록, 댓글_개수, listRef, 댓글_수_가져오기 } = useComments(combinationId!);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Comments>
      <CommentHeader>
        <h2>
          리뷰 <span>{댓글_개수}</span>
        </h2>
      </CommentHeader>
      {isLoggedIn && <CommentInputWrap getCommentListCount={댓글_수_가져오기} />}
      {댓글_목록.length !== 0 && <CommentList commentList={댓글_목록} target={listRef} />}
    </Comments>
  );
}

export default CommentsContainer;

const Comments = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 0 32px;
  padding-bottom: ${changeRem(60)};
  box-shadow: 0px -4px 10px rgba(213, 213, 213, 0.25);

  ${mediaQuery} {
    padding-bottom: ${changeRem(80)};
  }
`;

const CommentHeader = styled.div`
  ${flexbox('row', undefined, 'center')}
  height: ${changeRem(60)};

  box-shadow: 0px 1px 1px #eee;

  & h2 {
    font-weight: 500;
    font-size: ${changeRem(14)};

    & span {
      color: ${({ theme }) => theme.colors.primaryYellow};
    }
  }
`;
