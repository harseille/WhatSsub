import CommentItem, { 인터페이스_댓글 } from '@components/CommentItem';

// const 리뷰리스트: 리뷰프로퍼티[] = [
//   {
//     id: 'r1',
//     작성자: 'test1',
//     프로필이미지: '아마 경로',
//     등록날짜: '2시간',
//     본문: '고소~고소~ 짭짤~짭짤~ 매워~매워~',
//   },
//   {
//     id: 'r2',
//     작성자: 'test2',
//     프로필이미지: '아마 경로',
//     등록날짜: '3시간',
//     본문: '고소~고소~ 짭짤~짭짤~ 매워~매워~',
//   },
//   {
//     id: 'r3',
//     작성자: 'test3',
//     프로필이미지: '아마 경로',
//     등록날짜: '4시간',
//     본문: '고소~고소~ 짭짤~짭짤~ 매워~매워~',
//   },
// ];

function CommentList(props: { commentList: 인터페이스_댓글[] }) {
  const { commentList } = props;
  // commentList.map(리뷰 => (
  //   <li key={리뷰.id}>
  //     <CommentItem comment={{ 작성자: 리뷰.작성자, 등록날짜: 리뷰.등록날짜, 본문: 리뷰.본문 }} />
  //   </li>
  // ));

  const 댓글JSX = commentList.map(댓글 => {
    // TODO: Data가공 리펙토링 필요
    const [댓글id] = Object.keys(댓글);
    const [댓글_정보] = Object.values(댓글);

    return (
      <li key={댓글id}>
        <CommentItem comment={댓글_정보} />
      </li>
    );
  });

  return <ul>{댓글JSX}</ul>;
}

export default CommentList;
