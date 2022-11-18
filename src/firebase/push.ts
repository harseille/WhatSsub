import { ref, push } from 'firebase/database';
import { db } from '../firebase.config';

const firebaseDBPush = async (url: string, payload: o <any
  push(ref(db, url), payload);
  return response
};

export default firebaseDBPush;
