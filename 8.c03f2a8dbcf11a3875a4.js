(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GCp2:function(e,t,r){"use strict";r.r(t),r.d(t,"AdminModule",function(){return oe});var i=r("ofXK"),a=r("bTqV"),o=r("tyNb"),n=r("0IaG"),s=r("3Pt+"),c=r("GsRD"),l=r("fXoL"),d=r("AytR"),u=r("+l69"),b=r("lJxs"),m=r("tk/3");let f=(()=>{class e{constructor(e){this.http=e,this.urlUser=`${d.a.apiUrl+u.a.USER}`}createUser(e){return this.http.post(this.urlUser+"/createUsuario",e).pipe(Object(b.a)(e=>e))}getAllUsers(){return this.http.get(this.urlUser+"/getUsuarios").pipe(Object(b.a)(e=>e))}updateUser(e){return console.log(e),this.http.post(this.urlUser+"/updateUsuario",e).pipe(Object(b.a)(e=>e))}deleteUser(e){return this.http.post(this.urlUser+"/deleteUsuario",e).pipe(Object(b.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(l.Xb(m.b))},e.\u0275prov=l.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class p extends class{}{}var g=r("NFeN"),h=r("kmnG"),_=r("qFsG"),w=r("WtDq");function C(e,t){if(1&e){const e=l.Ub();l.Tb(0,"mat-form-field",7),l.Tb(1,"mat-label"),l.xc(2,"Contrase\xf1a"),l.Sb(),l.Ob(3,"input",16),l.Tb(4,"button",17),l.ac("click",function(){l.qc(e);const t=l.ec();return t.hide=!t.hide}),l.Tb(5,"mat-icon",18),l.xc(6),l.Sb(),l.Sb(),l.Sb()}if(2&e){const e=l.ec();l.Cb(3),l.kc("type",e.hide?"password":"text"),l.Cb(1),l.Db("aria-label","Hide password")("aria-pressed",e.hide),l.Cb(2),l.yc(e.hide?"visibility_off":"visibility")}}function S(e,t){if(1&e){const e=l.Ub();l.Tb(0,"mat-form-field",7),l.Tb(1,"mat-label"),l.xc(2,"Confirmar contrase\xf1a"),l.Sb(),l.Ob(3,"input",19),l.Tb(4,"button",17),l.ac("click",function(){l.qc(e);const t=l.ec();return t.hide=!t.hide}),l.Tb(5,"mat-icon",18),l.xc(6),l.Sb(),l.Sb(),l.Sb()}if(2&e){const e=l.ec();l.Cb(3),l.kc("type",e.hide?"password":"text"),l.Cb(1),l.Db("aria-label","Hide password")("aria-pressed",e.hide),l.Cb(2),l.yc(e.hide?"visibility_off":"visibility")}}let x=(()=>{class e{constructor(e,t,r,i,a){this.dialogRef=e,this.data=t,this.dialog=r,this.userService=i,this.formBuilder=a,this.testMessage="",this.hide=!0}ngOnInit(){this.form=this.formBuilder.group({name:[this.data.name,[s.r.required,s.r.pattern("[A-Za-z\xf1\xd1 ]+")]],lastname:[this.data.lastname,[s.r.required,s.r.pattern("[A-Za-z\xf1\xd1 ]+")]],document:[this.data.document,[s.r.required,s.r.minLength(5),s.r.maxLength(12)]],username:[this.data.username,[s.r.required]],password:[this.data.password,[s.r.required]],confirm:[this.data.password,[s.r.required]]},{validators:s.r.compose([this.samePassword,s.r.required])})}samePassword(e){return e.get("password").value!=e.get("confirm").value?{noMatch:!0}:null}createUser(){this.data.id?(this.data.name=this.form.value.name,this.data.lastname=this.form.value.lastname,this.data.document=this.form.value.document,this.data.username=this.form.value.username,this.userService.updateUser(this.data).subscribe(e=>this.msmResponse(e))):(this.data=this.form.value,this.data.creationDate=Date.now(),this.data.state=!0,this.userService.createUser(this.data).subscribe(e=>this.msmResponse(e)))}msmResponse(e){e&&(this.dialogRef.close(e.data),this.dialog.open(c.a,{data:{message:e.mensaje,icon:"check",button:"\xa1Listo!"}}))}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(n.d),l.Nb(n.a),l.Nb(n.b),l.Nb(f),l.Nb(s.d))},e.\u0275cmp=l.Hb({type:e,selectors:[["app-user-form"]],decls:33,vars:5,consts:[[1,"form"],[1,"form-product"],[1,"form-product-title"],[1,"register"],[1,"register_square_r"],[1,"register_square_r-title"],[1,"register_square_r_form",3,"formGroup","ngSubmit"],["appearance","legacy"],["matInput","","type","letter","placeholder","Nombres","formControlName","name","required",""],["matInput","","type","letter","placeholder","Apellidos","formControlName","lastname","required",""],["matInput","","type","number","placeholder","C\xe9dula","formControlName","document","required",""],["matInput","","type","user","placeholder","Usuario","formControlName","username","required",""],["appearance","legacy",4,"ngIf"],[1,"register_square_r_form_b"],["mat-raised-button","","type","submit","color","primary",1,"register_square_r_form_b-principal",3,"disabled"],["mat-raised-button","","type","button","color","warn",1,"register_square_r_form_b-principal",3,"click"],["matInput","","placeholder","Ingrese su contrase\xf1a","formControlName","password","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["color","primary"],["matInput","","placeholder","Ingrese su contrase\xf1a","formControlName","confirm","required","",3,"type"]],template:function(e,t){1&e&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"div",2),l.xc(3),l.Sb(),l.Tb(4,"mat-icon"),l.xc(5,"add_circle"),l.Sb(),l.Sb(),l.Tb(6,"div",3),l.Tb(7,"div",4),l.Ob(8,"h1",5),l.Tb(9,"form",6),l.ac("ngSubmit",function(){return t.createUser()}),l.Tb(10,"mat-form-field",7),l.Tb(11,"mat-label"),l.xc(12,"Nombre"),l.Sb(),l.Ob(13,"input",8),l.Sb(),l.Tb(14,"mat-form-field",7),l.Tb(15,"mat-label"),l.xc(16,"Apellido"),l.Sb(),l.Ob(17,"input",9),l.Sb(),l.Tb(18,"mat-form-field",7),l.Tb(19,"mat-label"),l.xc(20,"Cedula"),l.Sb(),l.Ob(21,"input",10),l.Sb(),l.Tb(22,"mat-form-field",7),l.Tb(23,"mat-label"),l.xc(24,"Usuario"),l.Sb(),l.Ob(25,"input",11),l.Sb(),l.wc(26,C,7,4,"mat-form-field",12),l.wc(27,S,7,4,"mat-form-field",12),l.Tb(28,"div",13),l.Tb(29,"button",14),l.xc(30,"Guardar"),l.Sb(),l.Tb(31,"button",15),l.ac("click",function(){return t.dialogRef.close()}),l.xc(32,"Cancelar"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()),2&e&&(l.Cb(3),l.yc((t.data.id?"Editar ":"Crear ")+"usuario"),l.Cb(6),l.kc("formGroup",t.form),l.Cb(17),l.kc("ngIf",!t.data.id),l.Cb(1),l.kc("ngIf",!t.data.id),l.Cb(2),l.kc("disabled",t.form.invalid))},directives:[g.a,s.s,s.m,s.h,h.b,h.e,_.b,s.c,w.a,s.l,s.g,s.q,s.o,i.l,a.a,h.f],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap");.register[_ngcontent-%COMP%]{flex-direction:column;width:100%;height:100%;align-items:end;justify-content:space-around;overflow:hidden}.register[_ngcontent-%COMP%], .register_square[_ngcontent-%COMP%]{display:flex;background-color:#fff}.register_square[_ngcontent-%COMP%]{position:relative;width:70vmax;height:40vmax;border-radius:1rem;margin-right:10%;box-shadow:5px 0 20px 0 rgba(0,0,0,.1411764705882353)}.register_square_r[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;align-items:center}.register_square_r-title[_ngcontent-%COMP%]{color:#47cbea;font-weight:700;font-size:2.55vmax;margin:3rem 0}.register_square_r_form[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:1vmax;align-items:center;overflow:hidden;height:100%;width:60%}.register_square_r_form_b[_ngcontent-%COMP%]{margin-top:3rem;display:flex;flex-direction:row;align-items:start}.register_square_r_form_b[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1vmax}.register_square_r_form_b-principal[_ngcontent-%COMP%]{width:10rem;margin-bottom:1rem;margin-left:1rem;height:3vmax}.register_square-lottie[_ngcontent-%COMP%]{position:absolute;bottom:-12%;right:-25%} .mat-checkbox-frame,  .mat-form-field-flex:hover .mat-form-field-outline-end,  .mat-form-field-flex:hover .mat-form-field-outline-gap,  .mat-form-field-flex:hover .mat-form-field-outline-start,  .mat-form-field-outline:hover .mat-form-field-outline-end,  .mat-form-field-outline:hover .mat-form-field-outline-gap,  .mat-form-field-outline:hover .mat-form-field-outline-start{border-color:#47cbea} .mat-form-field{width:100%}.form[_ngcontent-%COMP%]{width:70vw;position:relative}.form-product[_ngcontent-%COMP%]{background:#47cbea;margin:-24px -24px 0;padding:24px;color:#fff;text-transform:uppercase;font-size:20px;display:flex;justify-content:space-between}.form-product-title[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.form-product-data[_ngcontent-%COMP%]{margin-top:30px;width:80%}.form-product-data--input-c[_ngcontent-%COMP%]{width:80%}.form-product-data--input[_ngcontent-%COMP%]{width:35%;margin-right:10%}.form-product[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fed300;font-size:7em;padding-right:1em;position:absolute;top:-2rem;right:0}.form-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child{margin-right:1em}mat-dialog-actions[_ngcontent-%COMP%]{justify-content:flex-end}']}),e})();class v{}var y=r("+0xr"),T=r("M9IT"),O=r("HwDB"),k=r("Dh3D");let P=(()=>{class e{constructor(e){this.http=e,this.urlProfile=`${d.a.apiUrl+u.a.ROL}`}getAllProfiles(){return this.http.get(this.urlProfile+"/getPerfiles").pipe(Object(b.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(l.Xb(m.b))},e.\u0275prov=l.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var M=r("sKum"),q=r("QXT1"),U=r("d3UM"),D=r("FKr1"),N=r("VtFq");function I(e,t){if(1&e&&(l.Tb(0,"mat-option",32),l.xc(1),l.Sb()),2&e){const e=t.$implicit;l.kc("value",e),l.Cb(1),l.zc(" ",e.detalle,"")}}function R(e,t){if(1&e&&(l.Rb(0),l.Tb(1,"div"),l.xc(2,"Agregar otro perfil al usuario "),l.Tb(3,"mat-icon"),l.xc(4,"plus"),l.Sb(),l.Sb(),l.Tb(5,"mat-form-field",29),l.Tb(6,"mat-label"),l.xc(7,"Perfil"),l.Sb(),l.Tb(8,"mat-select",30),l.wc(9,I,2,2,"mat-option",31),l.Sb(),l.Sb(),l.Qb()),2&e){const e=l.ec();l.Cb(8),l.kc("formControl",e.rol),l.Cb(1),l.kc("ngForOf",e.roles)}}function j(e,t){1&e&&(l.Rb(0),l.Tb(1,"div",33),l.Tb(2,"div",34),l.fc(3,"images"),l.Sb(),l.Tb(4,"h1",35),l.xc(5,"Selecciona un usuario para asignar sus roles"),l.Sb(),l.Sb(),l.Qb()),2&e&&(l.Cb(2),l.tc("background-image",l.hc(3,2,"select_user","image")))}function F(e,t){if(1&e){const e=l.Ub();l.Tb(0,"div",38),l.Tb(1,"div"),l.xc(2),l.Sb(),l.Tb(3,"button",39),l.ac("click",function(){l.qc(e);const r=t.$implicit;return l.ec(2).deleteUserProfile(r.id)}),l.Tb(4,"mat-icon"),l.xc(5,"delete"),l.Sb(),l.Sb(),l.Sb()}if(2&e){const e=t.$implicit;l.Cb(2),l.yc(e.detalle)}}function A(e,t){if(1&e&&(l.Tb(0,"div",36),l.wc(1,F,6,1,"div",37),l.Sb()),2&e){const e=l.ec();l.Cb(1),l.kc("ngForOf",e.user.roles)}}function z(e,t){1&e&&(l.Tb(0,"th",40),l.xc(1,"Fecha ingreso"),l.Sb())}function G(e,t){if(1&e&&(l.Tb(0,"td",41),l.xc(1),l.fc(2,"date"),l.Sb()),2&e){const e=t.$implicit;l.Cb(1),l.yc(l.hc(2,1,e.creationDate,"mediumDate"))}}function $(e,t){1&e&&l.Ob(0,"th",40)}function L(e,t){if(1&e){const e=l.Ub();l.Tb(0,"td",42),l.Tb(1,"button",43),l.ac("click",function(){l.qc(e);const r=t.$implicit;return l.ec().openDialog(r)}),l.Tb(2,"mat-icon"),l.xc(3,"edit"),l.Sb(),l.Sb(),l.Tb(4,"button",39),l.ac("click",function(){l.qc(e);const r=t.$implicit;return l.ec().deleteUser(r)}),l.Tb(5,"mat-icon"),l.xc(6,"delete"),l.Sb(),l.Sb(),l.Sb()}}function H(e,t){1&e&&l.Ob(0,"tr",44)}const B=function(e){return{"table_column-selected":e}};function J(e,t){if(1&e){const e=l.Ub();l.Tb(0,"tr",45),l.ac("click",function(){l.qc(e);const r=t.$implicit;return l.ec().getSelectedUser(r)}),l.Sb()}if(2&e){const e=t.$implicit,r=l.ec();l.kc("ngClass",l.mc(1,B,e.id===r.user.id))}}function K(e,t){if(1&e&&(l.Tb(0,"tr",46),l.Tb(1,"td",47),l.xc(2),l.Sb(),l.Sb()),2&e){l.ec();const e=l.oc(14);l.Cb(2),l.zc('No data matching the filter "',e.value,'"')}}const Q=function(){return[5,10,20]},X=[{path:"",component:(()=>{class e{constructor(e,t,r,i){this.dialog=e,this.userService=t,this.profileService=r,this.formBuilder=i,this.displayedColumns=["name","lastname","username","document","creationDate","action"],this.dataSource=new y.l,this.user=new p,this.rol=new s.e,this.roles=[new v],this.form=this.formBuilder.group({profile:this.rol})}ngOnInit(){this.profileService.getAllProfiles().subscribe(e=>this.roles=e.response),this.userService.getAllUsers().subscribe(e=>{const t=e.response.filter(e=>!0===e.state);this.dataSource=new y.l(t)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}getSelectedUser(e){this.user=e}updateUserProfiles(){this.user.roles.find(e=>e.id===this.rol.value.id)?this.dialog.open(c.a,{data:{message:"Este usuario ya cuenta con el perfil seleccionado",icon:"failure-error",button:"\xa1Oops!"}}):(this.user.roles.push(this.rol.value),this.userService.updateUser(this.user).subscribe())}deleteUserProfile(e){this.user.roles=this.user.roles.filter(t=>t.id!==e),this.userService.updateUser(this.user)}deleteUser(e){this.dialog.open(O.a,{data:"\xbfEst\xe1 seguro que desea desactivar el usuario?, una vez desactivado no podr\xe1 visualizarlo"}).afterClosed().subscribe(t=>{t&&this.userService.deleteUser(e).subscribe(t=>{this.dialog.open(c.a,{data:{message:t.mensaje,icon:"check",button:"\xa1Listo!"}}),this.dataSource=new y.l(this.dataSource.data.filter(t=>t.id!==e.id))})})}openDialog(e=new p){this.dialog.open(x,{data:e}).afterClosed().subscribe(e=>{e&&this.dataSource.data.push(e)})}applyFilter(e){this.dataSource.filter=e.target.value.trim(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(n.b),l.Nb(f),l.Nb(P),l.Nb(s.d))},e.\u0275cmp=l.Hb({type:e,selectors:[["app-user-admin"]],viewQuery:function(e,t){if(1&e&&(l.Ac(T.a,1),l.Ac(k.a,1)),2&e){let e;l.nc(e=l.bc())&&(t.paginator=e.first),l.nc(e=l.bc())&&(t.sort=e.first)}},decls:36,vars:9,consts:[[1,"container"],[1,"profile"],["title","Perfiles del usuario","icon","profile",3,"formGroup","submit"],[4,"ngIf"],["class","profile_user",4,"ngIf"],[1,"users"],["title","Usuarios del sistema","icon","system_user","color","blue"],[1,"users_table"],[1,"users_table_top"],[1,"users_table_top-filter"],["matInput","","placeholder","Filtro por id",3,"keyup"],["input",""],["matSuffix","","color","primary"],["mat-button","",3,"click"],["color","primary",2,"padding-left","1rem"],["mat-table","",1,"users_table_content",3,"dataSource"],["name","name","headerText","Nombre"],["name","lastname","headerText","Apellido"],["name","username","headerText","Usuario"],["name","document","headerText","Documento"],["matColumnDef","creationDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","action"],["mat-cell","","class","users_table_content-actions",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["appearance","legacy"],["required","",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[2,"display","flex","align-items","center","padding","1rem 0","flex-direction","column"],[1,"profile_user-image"],[2,"color","#777777","text-align","center"],[1,"profile_user"],["class","profile_user-current",4,"ngFor","ngForOf"],[1,"profile_user-current"],["mat-icon-button","","color","warn",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"users_table_content-actions"],["mat-icon-button","","color","accent",3,"click"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"ngClass","click"],[1,"mat-row"],["colspan","6",1,"mat-cell"]],template:function(e,t){1&e&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"app-info-panel",2),l.ac("submit",function(){return t.updateUserProfiles()}),l.wc(3,R,10,2,"ng-container",3),l.wc(4,j,6,5,"ng-container",3),l.Sb(),l.wc(5,A,2,1,"div",4),l.Sb(),l.Tb(6,"div",5),l.Ob(7,"app-title-bar",6),l.Tb(8,"div",7),l.Tb(9,"div",8),l.Tb(10,"mat-form-field",9),l.Tb(11,"mat-label"),l.xc(12,"Filter"),l.Sb(),l.Tb(13,"input",10,11),l.ac("keyup",function(e){return t.applyFilter(e)}),l.Sb(),l.Tb(15,"mat-icon",12),l.xc(16,"filter_alt"),l.Sb(),l.Sb(),l.Tb(17,"button",13),l.ac("click",function(){return t.openDialog()}),l.xc(18,"Adicionar nuevo usuario al sistema "),l.Tb(19,"mat-icon",14),l.xc(20,"add_circle"),l.Sb(),l.Sb(),l.Sb(),l.Tb(21,"table",15),l.Ob(22,"mat-text-column",16),l.Ob(23,"mat-text-column",17),l.Ob(24,"mat-text-column",18),l.Ob(25,"mat-text-column",19),l.Rb(26,20),l.wc(27,z,2,0,"th",21),l.wc(28,G,3,4,"td",22),l.Qb(),l.Rb(29,23),l.wc(30,$,1,0,"th",21),l.wc(31,L,7,0,"td",24),l.Qb(),l.wc(32,H,1,0,"tr",25),l.wc(33,J,1,3,"tr",26),l.wc(34,K,3,1,"tr",27),l.Sb(),l.Ob(35,"mat-paginator",28),l.Sb(),l.Sb(),l.Sb()),2&e&&(l.Cb(2),l.kc("formGroup",t.user.id?t.form:void 0),l.Cb(1),l.kc("ngIf",t.user.id),l.Cb(1),l.kc("ngIf",!t.user.id),l.Cb(1),l.kc("ngIf",t.user.roles),l.Cb(16),l.kc("dataSource",t.dataSource),l.Cb(11),l.kc("matHeaderRowDef",t.displayedColumns),l.Cb(1),l.kc("matRowDefColumns",t.displayedColumns),l.Cb(2),l.kc("pageSizeOptions",l.lc(8,Q)))},directives:[M.a,s.m,s.h,i.l,q.a,h.b,h.e,_.b,w.a,g.a,h.f,a.a,y.k,y.n,y.c,y.e,y.b,y.g,y.j,y.h,T.a,U.a,s.q,s.l,s.f,i.k,D.j,y.d,y.a,y.f,y.i,i.j],pipes:[N.a,i.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap");tr.example-element-row[_ngcontent-%COMP%]{cursor:pointer;transition:background .5s}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active{background:#efefef}.table_column-selected[_ngcontent-%COMP%]{transition:background .2s;background:#efefef}.container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.profile[_ngcontent-%COMP%]{width:25%}.profile_user[_ngcontent-%COMP%]{margin-top:1rem;border-top:2px solid #d5d5d5}.profile_user-current[_ngcontent-%COMP%]{border:2px solid #d5d5d5;border-top:0 solid #d5d5d5;background-color:#fff;display:flex;justify-content:space-between;height:2.5rem;align-items:center;padding:0 1.5rem}.profile_user-image[_ngcontent-%COMP%]{width:12rem;height:12rem;background-repeat:no-repeat;background-size:contain;background-position:50%}.users[_ngcontent-%COMP%]{width:70%}.users_table[_ngcontent-%COMP%]{border:2px solid #d5d5d5;background-color:#fff}.users_table_top[_ngcontent-%COMP%]{border-bottom:2px solid #d5d5d5;background-color:#fff;display:flex;align-items:center;padding:.5rem 1rem;justify-content:space-between}.users_table_top-filter[_ngcontent-%COMP%]{width:30%}.users_table_content[_ngcontent-%COMP%]{width:100%}.users_table_content-actions[_ngcontent-%COMP%]{text-align:end;width:5rem}']}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[o.c.forChild(X)],o.c]}),e})();var V=r("bSwM"),W=r("DPnb"),Z=r("lBUW"),Y=r("PCNd"),ee=r("c70J"),te=r("7llJ"),re=r("cKN5"),ie=r("i0eD"),ae=r("cqX/");let oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[Y.a,i.c,W.b.forRoot({player:Z.playerFactory}),a.b,n.c,_.c,E,g.b,s.p,h.d,V.b,ee.a,te.a,D.k,U.b,y.m,T.b,re.a,ie.a,ae.a]]}),e})()}}]);