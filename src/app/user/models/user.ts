import { Task } from '../../task/model/task';
import { Achievement } from '../../achievement/models/achievement';

export interface User {
  username: string;
  role: string;
  achievements: Achievement[];
  tasks: Task[];
}
