import { ADD_FRIEND } from './types';
import Friends from './Friends';

export const addFriend = friendIndex => (
  {
    type: ADD_FRIEND,
    payload: friendIndex,
  }
);