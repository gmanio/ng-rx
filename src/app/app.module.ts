import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducer';
import { UserEffect } from './effect/user.effect';
import { APP_BASE_HREF } from '@angular/common';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      UserEffect
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
