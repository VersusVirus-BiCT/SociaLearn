import {User} from '../../user/models/user';
import {Vote} from './vote';

export interface Answer {
  answer: string,
  accepted: boolean,
  votes: Vote[],
  user: User
}
