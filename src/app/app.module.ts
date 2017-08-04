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
    FirebaseService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}

export const printLogo = () => {
  const c112 = 'background:#151414;', c171 = 'background:#162136;', c4 = 'background:#181104;', c138 = 'background:#213050;',
    c127 = 'background:#231805;', c23 = 'background:#231906;', c13 = 'background:#233353;', c49 = 'background:#233454;',
    c9 = 'background:#241906;', c149 = 'background:#243456;', c85 = 'background:#243658;', c11 = 'background:#252525;',
    c97 = 'background:#272828;', c183 = 'background:#302208;', c95 = 'background:#333334;', c113 = 'background:#404040;',
    c89 = 'background:#444444;', c96 = 'background:#454545;', c185 = 'background:#606060;', c170 = 'background:#694911;',
    c157 = 'background:#777777;', c5 = 'background:#785414;', c1 = 'background:#838383;', c143 = 'background:#916518;', c0 = '',
    c2 = 'background:#000000;', c3 = 'background:#3a3a3a;', c6 = 'background:#0d0902;', c7 = 'background:#3c2a0a;',
    c8 = 'background:#402d0a;', c10 = 'background:#0a0a0a;', c12 = 'background:#a2a2a4;', c14 = 'background:#2f4571;',
    c15 = 'background:#2d426d;', c16 = 'background:#dd9b25;', c17 = 'background:#d5c77a;', c18 = 'background:#d1d99c;',
    c19 = 'background:#d2d28f;', c20 = 'background:#daac47;', c21 = 'background:#593e0f;', c22 = 'background:#aa771c;',
    c24 = 'background:#dda231;', c25 = 'background:#d1d89b;', c26 = 'background:#d79624;', c27 = 'background:#a7751c;',
    c28 = 'background:#8d6318;', c29 = 'background:#2e436f;', c30 = 'background:#dc9c28;', c31 = 'background:#d2d497;',
    c32 = 'background:#040300;', c33 = 'background:#5c400f;', c34 = 'background:#0b1019;', c35 = 'background:#bdbdbd;',
    c36 = 'background:#030509;', c37 = 'background:#d1d79a;', c38 = 'background:#029e8c;', c39 = 'background:#009e8c;',
    c40 = 'background:#c9d69b;', c41 = 'background:#50380d;', c42 = 'background:#030200;', c43 = 'background:#bfd49a;',
    c44 = 'background:#a0cb98;', c45 = 'background:#64ba94;', c46 = 'background:#0ba18d;', c47 = 'background:#32ac90;',
    c48 = 'background:#d6c06b;', c50 = 'background:#040508;', c51 = 'background:#a2a2a2;', c52 = 'background:#05070c;',
    c53 = 'background:#70ab84;', c54 = 'background:#20a99a;', c55 = 'background:#2e4470;', c56 = 'background:#d0d89b;',
    c57 = 'background:#cfd89b;', c58 = 'background:#2a3e66;', c59 = 'background:#009d8b;', c60 = 'background:#059f8c;',
    c61 = 'background:#adcf99;', c62 = 'background:#d9ae49;', c63 = 'background:#d39423;', c64 = 'background:#e7faf9;',
    c65 = 'background:#f2ffff;', c66 = 'background:#bbe8e4;', c67 = 'background:#cff1ee;', c68 = 'background:#d7b455;',
    c69 = 'background:#049e8d;', c70 = 'background:#dca73d;', c71 = 'background:#13a28d;', c72 = 'background:#0aa190;',
    c73 = 'background:#d69624;', c74 = 'background:#e7e7e7;', c75 = 'background:#010101;', c76 = 'background:#cfd699;',
    c77 = 'background:#bcd39b;', c78 = 'background:#70bd94;', c79 = 'background:#3bae91;', c80 = 'background:#22a68e;',
    c81 = 'background:#18a48d;', c82 = 'background:#12a28c;', c83 = 'background:#0da18c;', c84 = 'background:#099f8c;',
    c86 = 'background:#090909;', c87 = 'background:#2f2f2e;', c88 = 'background:#2e2e2f;', c90 = 'background:#099d89;',
    c91 = 'background:#9dca98;', c92 = 'background:#d2d08d;', c93 = 'background:#d4d4d4;', c94 = 'background:#020202;',
    c98 = 'background:#020304;', c99 = 'background:#040608;', c100 = 'background:#3f3f3f;', c101 = 'background:#a08f43;',
    c102 = 'background:#0d9786;', c103 = 'background:#009c89;', c104 = 'background:#3cae90;', c105 = 'background:#50b492;',
    c106 = 'background:#039e8b;', c107 = 'background:#815a15;', c108 = 'background:#100b02;', c109 = 'background:#0c121e;',
    c110 = 'background:#8e8e8d;', c111 = 'background:#0b0b0c;', c114 = 'background:#030302;', c115 = 'background:#c08620;',
    c116 = 'background:#d89724;', c117 = 'background:#40af91;', c118 = 'background:#f0fdfb;', c119 = 'background:#e2f8f7;',
    c120 = 'background:#0ea18c;', c121 = 'background:#6abc94;', c122 = 'background:#cad79b;', c123 = 'background:#d3c97e;',
    c124 = 'background:#cf9122;', c125 = 'background:#22211f;', c126 = 'background:#283b61;', c128 = 'background:#0c0802;',
    c129 = 'background:#bad29a;', c130 = 'background:#effcfa;', c131 = 'background:#a8e0d9;', c132 = 'background:#dd9b26;',
    c133 = 'background:#dd9c27;', c134 = 'background:#009584;', c135 = 'background:#1d1405;', c136 = 'background:#000101;',
    c137 = 'background:#030406;', c139 = 'background:#010000;', c140 = 'background:#b27d1d;', c141 = 'background:#2b3f68;',
    c142 = 'background:#080807;', c144 = 'background:#daa83f;', c145 = 'background:#eaf6e9;', c146 = 'background:#090702;',
    c147 = 'background:#1c2841;', c148 = 'background:#2d436e;', c150 = 'background:#8a6017;', c151 = 'background:#dab355;',
    c152 = 'background:#1c2942;', c153 = 'background:#e0e0e0;', c154 = 'background:#030405;', c155 = 'background:#2b3f67;',
    c156 = 'background:#121b2d;', c158 = 'background:#030304;', c159 = 'background:#080b13;', c160 = 'background:#c2c2c2;',
    c161 = 'background:#020303;', c162 = 'background:#030506;', c163 = 'background:#070a0f;', c164 = 'background:#eeeeee;',
    c165 = 'background:#273a5e;', c166 = 'background:#090601;', c167 = 'background:#18233a;', c168 = 'background:#432f0b;',
    c169 = 'background:#1e2d4a;', c172 = 'background:#4c350d;', c173 = 'background:#4d370f;', c174 = 'background:#293d64;',
    c175 = 'background:#050300;', c176 = 'background:#2d426c;', c177 = 'background:#d69623;', c178 = 'background:#e2e2e2;',
    c179 = 'background:#fefefe;', c180 = 'background:#010203;', c181 = 'background:#202f4d;', c182 = 'background:#0f0a02;',
    c184 = 'background:#080c14;', c186 = 'background:#dc9a25;', c187 = 'background:#2e436e;', c188 = 'background:#fafafa;',
    c189 = 'background:#05080c;', c190 = 'background:#26385c;', c191 = 'background:#0f1624;', c192 = 'background:#bfbfbf;',
    c193 = 'background:#2a2a2a;', c194 = 'background:#6f6f6f;', c195 = 'background:#090d15;', c196 = 'background:#040509;',
    c197 = 'background:#c9c9c8;', c198 = 'background:#5b5b5b;', c199 = 'background:#e8e8e8;';
  console.log('%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                   %c %c    %c                              \n%c                               %c %c   %c %c %c   %c %c %c %c %c      %c %c %c  %c %c               \n%c                            %c  %c %c  %c %c  %c  %c %c    %c %c %c   %c %c  %c   %c %c %c              \n%c                           %c %c    %c %c %c %c            %c %c  %c %c %c %c  %c %c  %c            \n%c                          %c %c   %c %c %c %c                %c %c  %c %c %c %c %c %c %c %c           \n%c                         %c %c %c   %c %c %c %c     %c      %c %c      %c  %c %c %c %c   %c %c          \n%c                         %c %c   %c %c               %c %c %c %c %c %c %c %c  %c %c %c   %c %c %c         \n%c                         %c %c  %c %c %c    %c  %c                %c   %c %c   %c %c %c         \n%c                         %c %c  %c %c     %c %c %c         %c  %c     %c   %c %c %c   %c %c         \n%c                         %c %c  %c %c      %c %c     %c %c          %c %c  %c %c %c   %c %c         \n%c                         %c %c %c %c %c     %c %c %c  %c %c %c %c %c %c         %c %c   %c %c   %c %c         \n%c                         %c %c %c %c %c     %c %c   %c %c   %c %c         %c %c   %c %c   %c %c         \n%c                         %c %c  %c %c      %c   %c %c %c %c  %c         %c   %c %c %c   %c %c         \n%c        %c %c %c     %c %c    %c %c %c %c %c %c %c %c %c %c                       %c   %c %c %c   %c %c         \n%c    %c %c   %c %c %c %c   %c %c  %c           %c %c %c                     %c %c   %c %c    %c %c         \n%c    %c %c %c %c %c  %c %c %c %c %c %c %c %c        %c %c %c %c        %c %c        %c %c %c    %c %c %c %c %c %c    %c %c         \n%c     %c %c %c %c %c %c %c %c   %c %c     %c %c  %c %c %c           %c %c  %c %c  %c %c %c %c      %c %c  %c     %c %c         \n%c        %c %c %c %c %c %c %c    %c %c %c %c %c %c %c               %c %c %c %c %c          %c   %c    %c %c         \n%c          %c %c      %c  %c %c  %c                 %c %c            %c %c %c      %c %c         \n%c          %c %c     %c %c %c  %c  %c               %c %c %c %c %c       %c %c   %c       %c %c %c         \n%c          %c %c    %c %c %c   %c %c  %c           %c %c %c %c %c  %c %c       %c %c          %c %c %c         \n%c          %c %c   %c %c %c       %c           %c %c %c %c       %c %c              %c %c %c         \n%c         %c %c %c  %c %c %c                     %c %c       %c %c              %c %c %c         \n%c         %c %c %c  %c %c                      %c %c       %c %c              %c %c %c         \n%c         %c %c %c  %c %c        %c %c %c %c  %c         %c %c       %c %c              %c %c          \n%c         %c %c %c %c %c %c       %c %c    %c %c         %c %c       %c %c              %c %c          \n%c          %c %c %c %c %c      %c %c %c    %c %c        %c %c %c       %c %c              %c %c          \n%c          %c %c %c %c %c      %c %c    %c %c        %c %c  %c       %c %c              %c %c          \n%c          %c %c %c %c %c      %c %c   %c %c %c       %c %c %c %c %c       %c %c              %c    %c %c      \n%c          %c %c %c %c %c     %c %c %c   %c %c        %c %c  %c %c       %c %c             %c      %c      \n%c             %c %c  %c %c      %c %c %c       %c %c %c  %c %c       %c %c           %c %c  %c %c          \n%c                        %c %c      %c %c %c   %c %c       %c %c       %c %c   %c %c             \n%c                        %c %c %c    %c %c   %c %c %c %c      %c %c %c    %c %c  %c %c                 \n%c                          %c %c   %c %c     %c %c %c %c   %c %c %c %c %c  %c %c                     \n%c                                       %c %c    %c %c                         \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n%c                                                                      \n', c0, c0, c0, c0, c0, c0, c0, c0, c0, c0, c1, c2, c0, c0, c3, c2, c4, c5, c2, c6, c7, c8, c9, c2, c10, c11, c2, c12, c0, c0, c2, c13, c14, c15, c2, c16, c17, c18, c19, c20, c16, c21, c2, c16, c22, c2, c0, c0, c2, c14, c2, c23, c24, c18, c25, c16, c26, c2, c27, c16, c28, c2, c0, c0, c2, c14, c29, c2, c30, c18, c31, c16, c32, c2, c16, c33, c34, c14, c2, c0, c0, c35, c36, c14, c2, c37, c38, c39, c18, c40, c18, c16, c41, c42, c2, c14, c2, c0, c0, c2, c14, c2, c18, c43, c44, c45, c46, c47, c18, c48, c16, c2, c49, c14, c50, c51, c0, c0, c2, c14, c52, c53, c18, c54, c18, c16, c2, c14, c55, c2, c0, c0, c2, c14, c2, c18, c56, c57, c18, c54, c18, c16, c2, c58, c14, c2, c0, c0, c2, c14, c59, c18, c60, c59, c61, c18, c62, c16, c63, c2, c14, c2, c0, c0, c2, c14, c15, c59, c18, c59, c64, c65, c59, c66, c65, c67, c59, c18, c68, c16, c2, c14, c2, c0, c0, c2, c14, c15, c59, c18, c59, c65, c69, c65, c59, c18, c70, c16, c2, c14, c2, c0, c0, c2, c14, c59, c18, c59, c71, c59, c72, c59, c18, c16, c73, c2, c14, c2, c0, c0, c74, c75, c2, c76, c18, c77, c78, c79, c80, c81, c82, c83, c84, c59, c18, c16, c2, c85, c14, c2, c0, c0, c86, c2, c87, c2, c88, c2, c89, c2, c16, c90, c91, c18, c92, c16, c2, c14, c2, c0, c0, c93, c94, c2, c95, c2, c96, c97, c98, c2, c99, c100, c2, c16, c101, c102, c103, c59, c104, c18, c105, c106, c59, c2, c107, c16, c108, c109, c14, c2, c0, c0, c110, c2, c111, c2, c112, c113, c114, c2, c115, c16, c116, c59, c117, c118, c65, c119, c59, c120, c59, c121, c122, c123, c16, c124, c2, c14, c2, c0, c0, c2, c125, c2, c126, c14, c55, c2, c127, c128, c59, c129, c18, c130, c65, c131, c59, c18, c132, c16, c2, c14, c2, c0, c0, c2, c14, c2, c133, c18, c65, c134, c16, c135, c136, c14, c2, c0, c0, c2, c14, c2, c6, c16, c18, c65, c2, c137, c138, c139, c16, c140, c2, c14, c141, c142, c0, c0, c2, c14, c2, c143, c16, c144, c18, c65, c145, c18, c146, c147, c14, c148, c2, c15, c14, c149, c11, c0, c0, c2, c14, c2, c150, c16, c18, c151, c16, c2, c14, c2, c14, c152, c96, c0, c0, c153, c154, c14, c155, c2, c16, c2, c14, c2, c14, c156, c157, c0, c0, c153, c158, c14, c2, c16, c2, c14, c2, c14, c159, c160, c0, c0, c74, c161, c14, c2, c16, c2, c162, c163, c2, c16, c2, c14, c2, c14, c2, c0, c0, c164, c2, c14, c165, c166, c16, c2, c14, c2, c16, c2, c14, c2, c14, c2, c0, c0, c2, c14, c167, c168, c16, c2, c169, c14, c2, c16, c170, c2, c14, c2, c14, c2, c0, c0, c2, c14, c171, c172, c16, c2, c14, c2, c16, c173, c2, c14, c2, c14, c2, c0, c0, c2, c14, c174, c175, c16, c2, c14, c176, c2, c16, c177, c2, c14, c2, c14, c2, c14, c2, c178, c0, c0, c179, c2, c180, c2, c16, c2, c181, c14, c2, c16, c2, c14, c2, c14, c2, c14, c2, c0, c0, c179, c2, c182, c2, c176, c2, c16, c183, c184, c14, c2, c14, c2, c14, c176, c2, c185, c0, c0, c2, c16, c186, c2, c14, c2, c14, c2, c14, c187, c2, c160, c0, c0, c188, c2, c16, c186, c2, c189, c190, c2, c14, c191, c154, c14, c98, c2, c192, c0, c0, c193, c2, c193, c0, c194, c2, c195, c14, c2, c163, c14, c196, c2, c197, c0, c0, c198, c2, c199, c0, c0, c0, c0, c0, c0, c0, c0, c0);
}
