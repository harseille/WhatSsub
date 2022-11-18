import CommentItem from '@components/Comments/CommentItem';
import { 인터페이스_댓글 } from '../../types/IComment';

function CommentList(props: { commentList: 인터페이스_댓글[] }) {
  const { commentList } = props;

  const 댓글목록 = commentList.map(댓글 => {
    // TODO: Data가공 리펙토링 필요
    const [댓글id] = Object.keys(댓글);
    const [댓글_정보] = Object.values(댓글);

    return (
      <li key={댓글id}>
        <CommentItem comment={댓글_정보} />
      </li>
    );
  });

  return <ul>{댓글목록}</ul>;
}

export default CommentList;
