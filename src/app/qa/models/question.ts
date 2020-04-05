import {Answer} from './answer';

export interface Question {
  question: string;
  answers: Array<Answer>;
}
