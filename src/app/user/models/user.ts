import { Achievement } from '../../achievement/achievement.model';
import { Task } from '../../task/model/task';

export interface User {
  username: string;
  role: string;
  achievements: Achievement[];
  tasks: Task[];
}
