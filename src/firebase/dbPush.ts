import { ref, push } from 'firebase/database';
import { db } from '../firebase.config';

const dbPush = async (url: string, payload: object): Promise<DataSnapshot> => await push(ref(db, url), payload);

export default dbPush;
