import { getCountFromServer, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';

const getCommentListCount = async (꿀조합id: string) => {
  try {
    const querySnapshot = await getCountFromServer(
      query(collection(db, '댓글_꿀조합'), where('bestCombinationId', '==', 꿀조합id))
    );
    console.log('댓글수가져오기', querySnapshot.data().count);
    return querySnapshot.data().count;
  } catch (error) {
    console.error(error);
    console.log('댓글 수 가져오기 실패');
  }
};

export default getCommentListCount;
