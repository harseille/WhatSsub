import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '@state/index';
import CommentList from '@components/Comments/CommentList';
import CommentInputWrap from '@components/Comments/CommentInputWrap';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import useGetComments from '@hooks/useGetComments';

function CommentsContainer() {
  const { combinationId } = useParams();
  const { comments } = useGetComments(combinationId);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Comments>
      <CommentHeader>
        <h2>
          리뷰 <span>{comments.length}</span>
        </h2>
      </CommentHeader>
      <CommentList commentList={comments} />
      {isLoggedIn && <CommentInputWrap />}
    </Comments>
  );
}

export default CommentsContainer;

const Comments = styled.div`
  background: #fff;
  padding: 0 32px;
  padding-bottom: 64px;
  box-shadow: 0px -4px 10px rgba(213, 213, 213, 0.25);
`;

const CommentHeader = styled.div`
  ${flexbox('row', undefined, 'center')}
  height: ${changeRem(60)};

  box-shadow: 0px 1px 1px #eee;

  & h2 {
    font-weight: 500;
    font-size: ${changeRem(14)};

    & span {
      color: ${props => props.theme.colors.primaryYellow};
    }
  }
`;
