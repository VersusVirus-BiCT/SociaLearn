import {Task} from './task';

export interface TaskGroup {

  id: number;
  title: string;
  purpose: string;
  tasks: Array<Task>;

}
