import { User } from '../models/user';
import { AchievementType } from '../../achievement/enums/achievement-type';

const ctx = '[UserState] ';

export namespace UserActions {
  export class Login {
    public static readonly type = ctx + 'login';
    constructor(public user: User) { }
  }

  export class EarnAchievement {
    public static readonly type = ctx + 'earn achievement';
    constructor(public type: AchievementType) { }
  }
}
