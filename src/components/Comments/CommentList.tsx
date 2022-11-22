import CommentItem from '@components/Comments/CommentItem';
import { 인터페이스_댓글_읽기 } from '../../types/IComment';

function CommentList({ commentList }: { commentList: 인터페이스_댓글_읽기[] }) {
  const 댓글목록 = commentList.map(댓글 => (
    <li key={댓글.댓글id}>
      <CommentItem comment={댓글} />
    </li>
  ));

  return <ul>{댓글목록}</ul>;
}

export default CommentList;
