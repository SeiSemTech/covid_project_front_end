(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/2RN":function(t,o,c){"use strict";c.r(o),c.d(o,"DashboardModule",function(){return C});var i=c("ofXK"),n=c("bTqV"),e=c("tyNb"),r=c("il5i"),a=c("fXoL"),l=c("QXT1"),s=c("VtFq");let u=(()=>{class t{constructor(){this.colors=l.a}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["app-card"]],inputs:{titulo:"titulo",icon:"icon",subtitulo:"subtitulo",color:"color"},decls:8,vars:9,consts:[[1,"card"],[1,"card-circle"],[1,"card-circle-image"]],template:function(t,o){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.fc(3,"images"),a.Sb(),a.Sb(),a.Tb(4,"h3"),a.xc(5),a.Sb(),a.Tb(6,"h5"),a.xc(7),a.Sb(),a.Sb()),2&t&&(a.tc("background-color",o.colors[o.color]),a.Cb(2),a.tc("background-image",a.hc(3,6,o.icon,"image")),a.Cb(3),a.yc(o.titulo),a.Cb(2),a.yc(o.subtitulo))},pipes:[s.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap");.card[_ngcontent-%COMP%]{position:relative;width:150px;height:110px;border-radius:.3rem;background:#007ab7;flex-direction:column;margin:20px;cursor:pointer;padding-left:60px;padding-top:15px}.card[_ngcontent-%COMP%], .card-circle[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card-circle[_ngcontent-%COMP%]{position:absolute;top:-10px;left:-10px;width:60px;height:60px;border-radius:50%;background:#f3f3f3}.card-circle-image[_ngcontent-%COMP%]{width:38px;height:38px;padding-bottom:5px;background-repeat:no-repeat}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff;margin:-11px 0 16px}.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{align-self:stretch}']}),t})();function d(t,o){if(1&t){const t=a.Ub();a.Tb(0,"app-card",8),a.ac("click",function(){a.qc(t);const o=a.ec();return o.goTo(o.paths.ADMIN.PRINCIPAL)}),a.Sb()}}function p(t,o){if(1&t){const t=a.Ub();a.Tb(0,"app-card",9),a.ac("click",function(){a.qc(t);const o=a.ec();return o.goTo(o.paths.LOGISTICS.PRINCIPAL+"/"+o.paths.LOGISTICS.VACCINE_LOTS)}),a.Sb()}}function b(t,o){if(1&t){const t=a.Ub();a.Tb(0,"app-card",10),a.ac("click",function(){a.qc(t);const o=a.ec();return o.goTo(o.paths.LOGISTICS.PRINCIPAL+"/"+o.paths.LOGISTICS.VACCINES_SHIPMENT)}),a.Sb()}}function g(t,o){if(1&t){const t=a.Ub();a.Tb(0,"app-card",11),a.ac("click",function(){a.qc(t);const o=a.ec();return o.goTo(o.paths.MINISTRY_HEALTH.PRINCIPAL+"/"+o.paths.MINISTRY_HEALTH.BUSINESS_RULES)}),a.Sb()}}function f(t,o){if(1&t){const t=a.Ub();a.Tb(0,"app-card",12),a.ac("click",function(){a.qc(t);const o=a.ec();return o.goTo(o.paths.MINISTRY_HEALTH.PRINCIPAL+"/"+o.paths.MINISTRY_HEALTH.POPULATION_TO_VACCINE)}),a.Sb()}}const h=[{path:"",component:(()=>{class t{constructor(t){this.router=t,this.paths=r.a}ngOnInit(){this.roles=JSON.parse(localStorage.getItem("roles")),this.roles.forEach(t=>console.log(t.name))}isRole(t){return!!this.roles.filter(o=>o.name===t).length}closeSession(){localStorage.clear(),this.router.navigate([r.a.AUTHENTICATION.PRINCIPAL])}goTo(t){this.router.navigate([t])}profile(t){const o=JSON.parse(localStorage.getItem("roles"));return console.log(o.find(o=>o===t)),!0}}return t.\u0275fac=function(o){return new(o||t)(a.Nb(e.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-dashboard"]],decls:11,vars:10,consts:[["mat-raised-button","","color","warn",3,"click"],[1,"body-home"],["icon","profile_admin","color","blue","titulo","Administraci\xf3n de usuarios y perfiles","subtitulo","Administrador",3,"click",4,"ngIf"],["icon","profile_lots","color","yellow","titulo","Lotes de vacunas disponibles","subtitulo","Auxiliar de log\xedstica",3,"click",4,"ngIf"],["icon","profile_lots","color","yellow","titulo","Env\xedo de vacunas","subtitulo","Auxiliar de log\xedstica",3,"click",4,"ngIf"],["icon","profile_nurse","color","light","titulo","Reglas de decision","subtitulo","Ministerio de salud",3,"click",4,"ngIf"],["icon","profile_nurse","color","light","titulo","Poblaci\xf3n a vacunar","subtitulo","Ministerio de salud",3,"click",4,"ngIf"],[1,"body-home-image"],["icon","profile_admin","color","blue","titulo","Administraci\xf3n de usuarios y perfiles","subtitulo","Administrador",3,"click"],["icon","profile_lots","color","yellow","titulo","Lotes de vacunas disponibles","subtitulo","Auxiliar de log\xedstica",3,"click"],["icon","profile_lots","color","yellow","titulo","Env\xedo de vacunas","subtitulo","Auxiliar de log\xedstica",3,"click"],["icon","profile_nurse","color","light","titulo","Reglas de decision","subtitulo","Ministerio de salud",3,"click"],["icon","profile_nurse","color","light","titulo","Poblaci\xf3n a vacunar","subtitulo","Ministerio de salud",3,"click"]],template:function(t,o){1&t&&(a.Tb(0,"button",0),a.ac("click",function(){return o.closeSession()}),a.xc(1,"Cerrar sesi\xf3n"),a.Sb(),a.Tb(2,"div",1),a.wc(3,d,1,0,"app-card",2),a.wc(4,p,1,0,"app-card",3),a.wc(5,b,1,0,"app-card",4),a.wc(6,g,1,0,"app-card",5),a.wc(7,f,1,0,"app-card",6),a.Sb(),a.Tb(8,"div",1),a.Tb(9,"div",7),a.fc(10,"images"),a.Sb(),a.Sb()),2&t&&(a.Cb(3),a.kc("ngIf",o.isRole("ROLE_ADMIN")),a.Cb(1),a.kc("ngIf",o.isRole("ROLE_AUXILIAR")),a.Cb(1),a.kc("ngIf",o.isRole("ROLE_AUXILIAR")),a.Cb(1),a.kc("ngIf",o.isRole("ROLE_PERSONAL")),a.Cb(1),a.kc("ngIf",o.isRole("ROLE_PERSONAL")),a.Cb(2),a.tc("background-image",a.hc(10,7,"background_dashboard","image")))},directives:[n.a,i.l,u],pipes:[s.a],styles:[".body-home[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.body-home-image[_ngcontent-%COMP%]{width:25vmax;height:35vmax;background-repeat:no-repeat;position:absolute;bottom:2vmax;filter:opacity(.7);z-index:-1;right:7vmax}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[e.c.forChild(h)],e.c]}),t})();var I=c("cqX/");let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[i.c,n.b,m,I.a]]}),t})()},QXT1:function(t,o,c){"use strict";c.d(o,"b",function(){return e}),c.d(o,"a",function(){return r});var i=c("fXoL"),n=c("VtFq");let e=(()=>{class t{constructor(){this.colors=r}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-title-bar"]],inputs:{title:"title",icon:"icon",color:"color"},decls:5,vars:8,consts:[[1,"title_bar"],[1,"title_bar-icon"]],template:function(t,o){1&t&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.fc(2,"images"),i.Sb(),i.Tb(3,"div"),i.xc(4),i.Sb(),i.Sb()),2&t&&(i.tc("background-color",o.colors[o.color]),i.Cb(1),i.tc("background-image",i.hc(2,5,o.icon,"image")),i.Cb(3),i.yc(o.title))},pipes:[n.a],styles:[".title_bar[_ngcontent-%COMP%]{height:3rem;border-radius:.3rem;margin-bottom:1rem;position:relative;display:flex;justify-content:center;align-items:center;color:#fff;font-size:1.5vmax}.title_bar-icon[_ngcontent-%COMP%]{width:5rem;height:5rem;background-repeat:no-repeat;background-size:contain;background-position:50%;position:absolute;left:3rem;bottom:0}"]}),t})();var r=function(t){return t.blue="#007AB7",t.yellow="#D69400",t.light="#3CB6D2",t.red="#E52131",t}({})}}]);