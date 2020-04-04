import { Achievement } from '../../achievement/achievement.model';
import { User } from '../models/user';
const ctx = '[UserState] ';

export namespace UserActions {
  export class Login {
    public static readonly type = ctx + 'login';
    constructor(public user: User) { }
  }

  export class EarnAchievement {
    public static readonly type = ctx + 'earn achievement';
    constructor(public achievement: Achievement) { }
  }
}
