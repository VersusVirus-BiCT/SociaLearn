import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MaterialModule } from '../core/material/material.module';


@NgModule({
  declarations: [LeaderboardComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    MaterialModule,
  ]
})
export class RankingModule { }
