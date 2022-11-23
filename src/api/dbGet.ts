import { getDocs, Query, QuerySnapshot } from 'firebase/firestore';

const dbGet = async (query: Query): Promise<QuerySnapshot> => {
  const querySnapshot = await getDocs(query);
  return querySnapshot;
};

export default dbGet;
