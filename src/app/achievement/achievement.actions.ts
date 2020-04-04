import { Achievement } from './achievement.model';


export namespace AchievementActions {

  export class AddAchievement {
    public static readonly type = '[AchievementState] add achievement';
    constructor(public achievement: Achievement) { }
  }

}
