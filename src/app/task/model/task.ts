import { TaskType } from './task-type';

export interface Task {

  id: number;
  name: string;
  description: string;
  question: string;
  solution: string;
  points: number;
  type: TaskType

}
