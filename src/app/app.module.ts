import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Moduels
 */
import { HomeModule } from './container/home/home.module';

/**
 * Router
 */
import { RootRouter } from './app.routes';

/**
 * Service
 */
import { FirebaseService } from './service/firebase.service';

/**
 * Redux
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducer';
import { UserEffect } from './effect/user.effect';

/**
 * Component
 */
import { LoginComponent } from './container/login/login.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './component/error/page-not-found.component';
import { LogoService } from './service/logo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      UserEffect
    ]),
    RootRouter
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    FirebaseService,
    LogoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
