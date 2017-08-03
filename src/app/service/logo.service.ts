import { Injectable } from '@angular/core';

@Injectable()
export class LogoService {
  constructor() {
    var c111 = 'background:#201611;', c6 = 'background:#201817;', c54 = 'background:#211611;', c137 = 'background:#221711;',
      c219 = 'background:#231811;', c204 = 'background:#241912;', c159 = 'background:#251911;', c62 = 'background:#302012;',
      c171 = 'background:#302928;', c119 = 'background:#312113;', c103 = 'background:#322213;', c63 = 'background:#332213;',
      c168 = 'background:#342312;', c51 = 'background:#342313;', c165 = 'background:#342413;', c223 = 'background:#352413;',
      c94 = 'background:#352513;', c64 = 'background:#362513;', c47 = 'background:#372513;', c61 = 'background:#382614;',
      c150 = 'background:#383130;', c226 = 'background:#392714;', c107 = 'background:#473014;', c66 = 'background:#484241;',
      c157 = 'background:#493115;', c90 = 'background:#513615;', c30 = 'background:#543816;', c151 = 'background:#624117;',
      c174 = 'background:#634316;', c31 = 'background:#654316;', c120 = 'background:#664418;', c180 = 'background:#694717;',
      c156 = 'background:#696362;', c215 = 'background:#696463;', c201 = 'background:#757070;', c58 = 'background:#757170;',
      c195 = 'background:#777272;', c48 = 'background:#785019;', c80 = 'background:#795019;', c212 = 'background:#797473;',
      c102 = 'background:#825719;', c73 = 'background:#848080;', c234 = 'background:#858080;', c128 = 'background:#875919;',
      c231 = 'background:#888484;', c1 = 'background:#949190;', c173 = 'background:#979493;', c0 = '', c2 = 'background:#1a1211;',
      c3 = 'background:#1f1716;', c4 = 'background:#c3c1c1;', c5 = 'background:#c6c4c4;', c7 = 'background:#908c8c;',
      c8 = 'background:#1d1514;', c9 = 'background:#5a3d17;', c10 = 'background:#8d5d1b;', c11 = 'background:#81561a;',
      c12 = 'background:#3d2914;', c13 = 'background:#1e1615;', c14 = 'background:#3a2713;', c15 = 'background:#80551a;',
      c16 = 'background:#8e5e1b;', c17 = 'background:#5d3e17;', c18 = 'background:#1c1413;', c19 = 'background:#5f4016;',
      c20 = 'background:#ca8620;', c21 = 'background:#583b16;', c22 = 'background:#ebeaea;', c23 = 'background:#e5e4e4;',
      c24 = 'background:#807b7b;', c25 = 'background:#37302f;', c26 = 'background:#352d2c;', c27 = 'background:#7f7a7a;',
      c28 = 'background:#e4e3e3;', c29 = 'background:#f1f0f0;', c32 = 'background:#fafafa;', c33 = 'background:#c9851f;',
      c34 = 'background:#98651b;', c35 = 'background:#1b1211;', c36 = 'background:#1d1411;', c37 = 'background:#2e1f12;',
      c38 = 'background:#4b3314;', c39 = 'background:#86591a;', c40 = 'background:#c2801f;', c41 = 'background:#c3811f;',
      c42 = 'background:#895a1a;', c43 = 'background:#4c3415;', c44 = 'background:#93621b;', c45 = 'background:#422d14;',
      c46 = 'background:#7a5119;', c49 = 'background:#c1801f;', c50 = 'background:#7b5219;', c52 = 'background:#908d8c;',
      c53 = 'background:#b87a1e;', c55 = 'background:#7d5319;', c56 = 'background:#1f1511;', c57 = 'background:#b4781e;',
      c59 = 'background:#56504f;', c60 = 'background:#291c12;', c65 = 'background:#2d1f13;', c67 = 'background:#9f9c9c;',
      c68 = 'background:#2c1e12;', c69 = 'background:#1a1311;', c70 = 'background:#bf7e1f;', c71 = 'background:#bf7f1f;',
      c72 = 'background:#2a1d12;', c74 = 'background:#3c2813;', c75 = 'background:#3e2a14;', c76 = 'background:#fcfcfc;',
      c77 = 'background:#1c1311;', c78 = 'background:#fbfbfb;', c79 = 'background:#e3e2e2;', c81 = 'background:#dbd9d9;',
      c82 = 'background:#f1f1f1;', c83 = 'background:#a36c1c;', c84 = 'background:#ac721d;', c85 = 'background:#f0f0f0;',
      c86 = 'background:#b0761d;', c87 = 'background:#b87b1e;', c88 = 'background:#6e6968;', c89 = 'background:#4a3115;',
      c91 = 'background:#645f5e;', c92 = 'background:#c8851f;', c93 = 'background:#2d1f12;', c95 = 'background:#d1cfcf;',
      c96 = 'background:#8a5c1a;', c97 = 'background:#92611b;', c98 = 'background:#8f5f1b;', c99 = 'background:#9c681c;',
      c100 = 'background:#dcdada;', c101 = 'background:#7c5319;', c104 = 'background:#1b1312;', c105 = 'background:#8b8786;',
      c106 = 'background:#905f1b;', c108 = 'background:#8c5c1a;', c109 = 'background:#726d6c;', c110 = 'background:#a26c1c;',
      c112 = 'background:#714b18;', c113 = 'background:#754d18;', c114 = 'background:#1f1611;', c115 = 'background:#9e691c;',
      c116 = 'background:#8d5e1a;', c117 = 'background:#c9c7c6;', c118 = 'background:#bcbab9;', c121 = 'background:#6e4918;',
      c122 = 'background:#97641b;', c123 = 'background:#5d3e16;', c124 = 'background:#a16b1c;', c125 = 'background:#a46d1c;',
      c126 = 'background:#9b671c;', c127 = 'background:#8e5e1a;', c129 = 'background:#93611b;', c130 = 'background:#4d3415;',
      c131 = 'background:#2b1d12;', c132 = 'background:#6b4717;', c133 = 'background:#714c18;', c134 = 'background:#2a1c12;',
      c135 = 'background:#563a16;', c136 = 'background:#3f3837;', c138 = 'background:#261a12;', c139 = 'background:#3c3534;',
      c140 = 'background:#eae9e9;', c141 = 'background:#e0dfdf;', c142 = 'background:#4c3315;', c143 = 'background:#af741d;',
      c144 = 'background:#a76e1d;', c145 = 'background:#c7831f;', c146 = 'background:#5a3c16;', c147 = 'background:#cfcdcd;',
      c148 = 'background:#c07f1f;', c149 = 'background:#c1bfbf;', c152 = 'background:#423b39;', c153 = 'background:#efefef;',
      c154 = 'background:#f3f2f2;', c155 = 'background:#f9f9f9;', c158 = 'background:#2e2726;', c160 = 'background:#c5c2c1;',
      c161 = 'background:#bfbcbb;', c162 = 'background:#2e1f13;', c163 = 'background:#4b3214;', c164 = 'background:#402c13;',
      c166 = 'background:#1b1311;', c167 = 'background:#3f2a13;', c169 = 'background:#c6831f;', c170 = 'background:#261f1e;',
      c172 = 'background:#c7841f;', c175 = 'background:#271b11;', c176 = 'background:#d4d1d1;', c177 = 'background:#261e1c;',
      c178 = 'background:#f5f5f5;', c179 = 'background:#f4f3f3;', c181 = 'background:#7f7b7a;', c182 = 'background:#c07f1e;',
      c183 = 'background:#734d18;', c184 = 'background:#704a18;', c185 = 'background:#c2811f;', c186 = 'background:#bbb9b9;',
      c187 = 'background:#c78420;', c188 = 'background:#895c1a;', c189 = 'background:#754f19;', c190 = 'background:#a46c1d;',
      c191 = 'background:#7f5519;', c192 = 'background:#6f4a18;', c193 = 'background:#bc7c1e;', c194 = 'background:#a9a7a6;',
      c196 = 'background:#c98520;', c197 = 'background:#716b6b;', c198 = 'background:#7d7978;', c199 = 'background:#a66e1d;',
      c200 = 'background:#ad731d;', c202 = 'background:#dfdede;', c203 = 'background:#1a1312;', c205 = 'background:#d5d4d4;',
      c206 = 'background:#514a49;', c207 = 'background:#2f2012;', c208 = 'background:#443d3c;', c209 = 'background:#fefefe;',
      c210 = 'background:#ab721d;', c211 = 'background:#352f2e;', c213 = 'background:#b3761e;', c214 = 'background:#b7791e;',
      c216 = 'background:#fdfdfd;', c217 = 'background:#5a5453;', c218 = 'background:#8b5d1b;', c220 = 'background:#554f4e;',
      c221 = 'background:#dddcdc;', c222 = 'background:#352d2d;', c224 = 'background:#c88420;', c225 = 'background:#94621b;',
      c227 = 'background:#d9d7d7;', c228 = 'background:#e9e8e8;', c229 = 'background:#e5e4e3;', c230 = 'background:#c5c3c3;',
      c232 = 'background:#3e3837;', c233 = 'background:#3d3736;', c235 = 'background:#c4c2c2;', c236 = 'background:#f8f8f8;';
    console.log('%c                        %c %c         %c %c %c                                                %c %c %c         %c %c                        \n%c                     %c %c      %c %c %c %c %c      %c %c                                          %c %c      %c %c %c %c %c      %c %c                     \n%c                   %c %c   %c %c            %c %c    %c %c  %c %c %c %c                          %c %c %c %c  %c %c    %c %c            %c %c   %c %c                   \n%c                 %c %c   %c %c              %c %c %c %c          %c %c %c %c %c %c            %c %c %c %c %c %c           %c %c %c              %c %c   %c %c                 \n%c                 %c   %c %c           %c %c        %c %c %c                                  %c %c %c        %c %c           %c %c   %c                 \n%c                %c %c   %c       %c %c %c      %c %c                                                %c %c      %c %c %c       %c   %c %c                \n%c                %c %c  %c %c    %c %c     %c %c                                                          %c %c     %c %c    %c %c  %c %c                \n%c                %c %c   %c %c %c    %c %c %c                                                                %c %c %c    %c %c %c   %c %c                \n%c                 %c      %c %c                                                                        %c %c      %c                 \n%c               %c %c    %c %c                                                                              %c %c    %c %c               \n%c             %c %c    %c %c                                                                                  %c %c    %c %c             \n%c           %c %c    %c %c                                                                                      %c %c    %c %c           \n%c          %c    %c %c                                                                                          %c %c    %c          \n%c        %c %c   %c %c                                                                                              %c %c   %c %c        \n%c       %c    %c %c                                                                                                %c %c    %c       \n%c      %c   %c %c                                                                                                    %c %c   %c      \n%c    %c %c   %c %c                                                                                                      %c %c   %c %c    \n%c   %c %c   %c %c                                                                                                        %c %c   %c %c   \n%c   %c   %c %c                                                                                                          %c %c   %c   \n%c  %c %c  %c %c                                                                                                            %c %c  %c %c  \n%c %c %c   %c                  %c %c                      %c %c                          %c %c                      %c %c                  %c   %c %c \n%c %c   %c %c                   %c %c %c                  %c %c %c                            %c %c %c                  %c %c %c                   %c %c   %c \n%c %c   %c                                                                                                                %c   %c \n%c   %c %c                                                                                                                %c %c   \n%c   %c %c                                                                                                                %c %c   \n%c   %c %c                             %c %c     %c %c                                        %c %c     %c %c                             %c %c   \n%c   %c %c                            %c %c       %c                                        %c       %c %c                            %c %c   \n%c   %c %c                             %c %c     %c %c                                        %c %c     %c %c                             %c %c   \n%c %c  %c %c                                                                                                                %c %c  %c \n%c %c   %c                                                                                                                %c   %c \n%c %c   %c %c                                               %c %c  %c %c        %c %c  %c %c                                               %c %c   %c \n%c %c %c   %c %c                                       %c %c                            %c %c                                       %c %c   %c %c \n%c  %c %c   %c                                     %c %c    %c %c %c     %c %c        %c %c     %c %c %c    %c %c                                     %c   %c %c  \n%c   %c   %c %c                                   %c   %c %c           %c %c    %c %c           %c %c   %c                                   %c %c   %c   \n%c    %c   %c %c                                 %c %c   %c                              %c   %c %c                                 %c %c   %c    \n%c     %c %c  %c %c                                %c %c   %c                              %c   %c %c                                %c %c  %c %c     \n%c      %c %c   %c %c                               %c   %c %c                            %c %c   %c                               %c %c   %c %c      \n%c       %c %c   %c %c                               %c %c    %c %c        %c %c     %c %c       %c %c    %c %c                               %c %c   %c %c       \n%c         %c    %c %c                               %c %c             %c %c %c             %c %c                               %c %c    %c         \n%c          %c %c    %c                                   %c %c %c %c %c %c          %c %c %c %c %c %c                                   %c    %c %c          \n%c            %c %c   %c %c %c                                                                                    %c %c %c   %c %c            \n%c              %c %c    %c %c                                                                                %c %c    %c %c              \n%c                %c %c %c   %c %c %c                                                                          %c %c %c   %c %c %c                \n%c                   %c %c    %c %c                                                                      %c %c    %c %c                   \n%c                     %c %c %c    %c %c %c                                                              %c %c %c    %c %c %c                     \n%c                         %c %c      %c %c                                                      %c %c      %c %c                         \n%c                            %c %c %c      %c %c %c                                            %c %c %c      %c %c %c                            \n%c                                 %c %c %c        %c %c %c %c                            %c %c %c %c        %c %c %c                                 \n%c                                       %c %c %c                                      %c %c %c                                       \n%c                                               %c %c %c %c %c                  %c %c %c %c %c                                               \n', c0, c1, c2, c3, c4, c0, c5, c6, c2, c7, c0, c0, c8, c2, c9, c10, c11, c12, c2, c13, c0, c3, c2, c14, c15, c16, c17, c2, c18, c0, c0, c8, c2, c19, c20, c21, c2, c22, c0, c23, c24, c25, c2, c26, c27, c28, c0, c29, c2, c30, c20, c31, c2, c18, c0, c0, c32, c2, c14, c20, c33, c34, c35, c2, c36, c37, c38, c39, c40, c20, c41, c42, c43, c37, c36, c2, c44, c33, c20, c45, c2, c32, c0, c0, c2, c46, c20, c47, c2, c48, c49, c20, c40, c50, c2, c51, c20, c11, c2, c0, c0, c52, c2, c20, c53, c54, c2, c46, c20, c55, c2, c56, c57, c20, c2, c58, c0, c0, c59, c2, c60, c20, c61, c2, c62, c20, c63, c2, c64, c20, c65, c2, c66, c0, c0, c67, c2, c20, c68, c2, c69, c70, c20, c71, c69, c2, c72, c20, c2, c73, c0, c0, c2, c74, c20, c75, c2, c0, c0, c76, c2, c77, c20, c77, c2, c78, c0, c0, c79, c2, c80, c20, c55, c2, c81, c0, c0, c82, c2, c83, c20, c84, c2, c85, c0, c0, c2, c86, c20, c87, c2, c0, c0, c88, c2, c89, c20, c90, c2, c91, c0, c0, c2, c92, c20, c33, c2, c0, c0, c2, c93, c20, c94, c2, c0, c0, c95, c2, c96, c20, c97, c2, c4, c0, c0, c23, c2, c98, c20, c99, c2, c100, c0, c0, c2, c101, c20, c102, c2, c0, c0, c18, c2, c103, c20, c51, c2, c104, c0, c0, c105, c2, c20, c106, c2, c12, c20, c107, c2, c108, c20, c2, c109, c0, c0, c2, c101, c20, c110, c111, c2, c69, c112, c20, c113, c69, c2, c114, c115, c20, c116, c2, c0, c117, c2, c20, c2, c118, c2, c60, c20, c119, c2, c2, c120, c20, c121, c2, c2, c122, c20, c123, c2, c124, c20, c125, c2, c21, c20, c126, c2, c2, c127, c20, c108, c2, c20, c2, c128, c20, c129, c2, c2, c130, c20, c131, c2, c132, c20, c133, c2, c134, c20, c135, c2, c136, c2, c137, c20, c138, c2, c139, c140, c2, c20, c2, c141, c0, c2, c142, c20, c92, c20, c143, c2, c144, c20, c145, c20, c146, c2, c0, c0, c147, c2, c148, c20, c49, c2, c53, c20, c41, c2, c149, c0, c0, c150, c2, c20, c151, c2, c152, c153, c0, c32, c2, c154, c0, c155, c156, c2, c157, c20, c2, c158, c0, c0, c2, c159, c20, c2, c18, c0, c160, c2, c161, c0, c3, c2, c20, c72, c2, c0, c0, c2, c162, c20, c163, c2, c0, c2, c164, c20, c165, c2, c0, c0, c104, c2, c166, c20, c167, c2, c0, c2, c168, c20, c166, c2, c104, c0, c0, c8, c2, c169, c20, c2, c170, c0, c171, c2, c20, c172, c2, c18, c0, c0, c173, c2, c174, c20, c175, c2, c176, c0, c177, c2, c178, c0, c179, c2, c56, c20, c180, c2, c181, c0, c0, c2, c182, c20, c39, c2, c111, c183, c2, c184, c20, c185, c2, c0, c0, c186, c2, c20, c187, c188, c133, c189, c190, c20, c87, c191, c192, c15, c193, c20, c2, c194, c0, c0, c195, c2, c77, c196, c20, c196, c77, c2, c197, c0, c0, c198, c2, c199, c20, c200, c2, c201, c0, c0, c202, c203, c2, c54, c92, c20, c33, c204, c2, c203, c205, c0, c0, c206, c2, c207, c20, c103, c2, c208, c0, c0, c209, c139, c2, c35, c199, c20, c210, c166, c2, c211, c209, c0, c0, c212, c2, c213, c20, c214, c2, c215, c0, c0, c216, c217, c2, c137, c218, c20, c97, c219, c2, c220, c76, c0, c0, c221, c222, c2, c223, c97, c224, c20, c224, c225, c226, c2, c171, c227, c0, c0, c228, c13, c2, c8, c229, c0, c0, c155, c230, c231, c232, c2, c233, c234, c235, c236, c0);
  }

}