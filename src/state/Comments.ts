import { atom } from 'recoil';
import { 인터페이스_댓글 } from '../types/IComment';

export default atom<인터페이스_댓글[] | undefined>({
  key: 'Comments',
  default: undefined,
});
