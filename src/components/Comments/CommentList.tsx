import CommentItem from '@components/Comments/CommentItem';
import { 인터페이스_댓글 } from '../../types/IComment';

function CommentList({ commentList }: { commentList: 인터페이스_댓글[] }) {
  const 댓글목록 = commentList.map(댓글 => {
    const [[댓글id, 댓글_정보]] = Object.entries(댓글);

    return (
      <li key={댓글id}>
        <CommentItem comment={댓글_정보} />
      </li>
    );
  });

  return <ul>{댓글목록}</ul>;
}

export default CommentList;
