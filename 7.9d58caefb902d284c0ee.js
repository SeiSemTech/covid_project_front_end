(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/2RN":function(t,n,o){"use strict";o.r(n),o.d(n,"DashboardModule",function(){return b});var r=o("ofXK"),c=o("bTqV"),s=o("tyNb"),a=o("il5i"),e=o("fXoL");const i=[{path:"",component:(()=>{class t{constructor(t){this.router=t,this.paths=a.a}ngOnInit(){}closeSession(){this.router.navigate([a.a.AUTHENTICATION.PRINCIPAL])}goTo(t){this.router.navigate([t])}}return t.\u0275fac=function(n){return new(n||t)(e.Lb(s.a))},t.\u0275cmp=e.Fb({type:t,selectors:[["app-dashboard"]],decls:8,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,n){1&t&&(e.Qb(0,"button",0),e.Xb("click",function(){return n.goTo(n.paths.ADMIN.PRINCIPAL)}),e.pc(1,"administrador"),e.Pb(),e.Qb(2,"button",0),e.Xb("click",function(){return n.goTo(n.paths.LOGISTICS.PRINCIPAL+"/"+n.paths.LOGISTICS.VACCINE_LOTS)}),e.pc(3,"Log\xedstica lotes vacunas"),e.Pb(),e.Qb(4,"button",0),e.Xb("click",function(){return n.goTo(n.paths.LOGISTICS.PRINCIPAL+"/"+n.paths.LOGISTICS.VACCINES_SHIPMENT)}),e.pc(5,"Log\xedstica envi\xf3 vacunas"),e.Pb(),e.Qb(6,"button",1),e.Xb("click",function(){return n.closeSession()}),e.pc(7,"Cerrar sesi\xf3n"),e.Pb())},directives:[c.a],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Jb({type:t}),t.\u0275inj=e.Ib({imports:[[s.b.forChild(i)],s.b]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Jb({type:t}),t.\u0275inj=e.Ib({imports:[[r.b,c.b,u]]}),t})()}}]);