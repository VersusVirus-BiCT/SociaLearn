import { Task } from '../../task/model/task';
import { Achievement } from '../../achievement/models/achievement';
import { Karma } from '../../ranking/models/karma';

export interface User {
  id: number;
  username: string;
  role: string;
  achievements: Achievement[];
  tasks: Task[];
  karma: Karma;
}
