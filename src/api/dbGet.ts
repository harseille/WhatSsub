import { get, Query, DataSnapshot } from 'firebase/database';

const dbGet = async (query: Query): Promise<DataSnapshot> => {
  const response = await get(query);
  return response;
};

export default dbGet;
