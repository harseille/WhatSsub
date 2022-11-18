import { ref, push, ThenableReference } from 'firebase/database';
import { db } from '../firebase.config';

const dbPush = async (url: string, payload: object): Promise<ThenableReference> => {
  const reseponse = await push(ref(db, url), payload);
  return reseponse;
};

export default dbPush;
