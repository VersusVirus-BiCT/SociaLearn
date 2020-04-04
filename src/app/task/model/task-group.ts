import {Task} from "./task";

export interface TaskGroup {

  id: number;
  name: string;
  purpose: string;
  tasks: Array<Task>;

}
