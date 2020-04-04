import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@NgModule({
  declarations: [LeaderboardComponent],
  imports: [
    CommonModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
