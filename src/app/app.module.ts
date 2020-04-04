import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslationModule, HttpLoaderFactory } from './core/translation/translation.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AchievementState } from './achievement/achievement.state';
import { UserState } from './user/state/user.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
    TranslationModule.forRoot(),
    HttpClientModule,
    NgxsModule.forRoot([AchievementState, UserState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
