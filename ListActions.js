import { LIST_FRIEND} from './types';

export const listFriend = friend => (
  {
    type: LIST_FRIEND,
    payload: friend,
  }
);