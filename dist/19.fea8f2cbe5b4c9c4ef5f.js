(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Yj9t:function(e,t,o){"use strict";o.r(t);var n=o("Valr"),r=o("QJY3"),i=o("oW1M"),s=o("R/Hu"),a=o("DUip"),c=o("imvL"),b=o("dICO"),g=o("TYT/");function u(e,t){if(1&e&&(g.Vb(0,"div"),g.Vb(1,"p",24),g.Vb(2,"span"),g.Hc(3),g.Ub(),g.Ub(),g.Ub()),2&e){var o=g.hc().$implicit;g.Cb(3),g.Ic(o.message)}}function l(e,t){if(1&e&&(g.Tb(0),g.Fc(1,u,4,1,"div",23),g.Sb()),2&e){var o=t.$implicit,n=g.hc();g.Cb(1),g.nc("ngIf",n.resetForm.get("email").hasError(o.type)&&(n.resetForm.get("email").dirty||n.resetForm.get("email").touched))}}var m=function(e){return{focused:e}};function p(e,t){if(1&e&&(g.Vb(0,"div"),g.Vb(1,"p",31),g.Vb(2,"span"),g.Hc(3),g.Ub(),g.Ub(),g.Ub()),2&e){var o=g.hc().$implicit;g.Cb(3),g.Ic(o.message)}}function d(e,t){if(1&e&&(g.Tb(0),g.Fc(1,p,4,1,"div",30),g.Sb()),2&e){var o=t.$implicit,n=g.hc();g.Cb(1),g.nc("ngIf",n.loginForm.get("username").hasError(o.type)&&(n.loginForm.get("username").dirty||n.loginForm.get("username").touched))}}function f(e,t){if(1&e&&(g.Vb(0,"div"),g.Vb(1,"p",31),g.Vb(2,"span"),g.Hc(3),g.Ub(),g.Ub(),g.Ub()),2&e){var o=g.hc().$implicit;g.Cb(3),g.Ic(o.message)}}function h(e,t){if(1&e&&(g.Tb(0),g.Fc(1,f,4,1,"div",30),g.Sb()),2&e){var o=t.$implicit,n=g.hc();g.Cb(1),g.nc("ngIf",n.loginForm.get("password").hasError(o.type)&&(n.loginForm.get("password").dirty||n.loginForm.get("password").touched))}}var v=function(e){return{focused:e}};function U(e,t){if(1&e&&(g.Vb(0,"div"),g.Vb(1,"p",36),g.Vb(2,"span"),g.Hc(3),g.Ub(),g.Ub(),g.Ub()),2&e){var o=g.hc().$implicit;g.Cb(3),g.Ic(o.message)}}function V(e,t){if(1&e&&(g.Tb(0),g.Fc(1,U,4,1,"div",35),g.Sb()),2&e){var o=t.$implicit,n=g.hc();g.Cb(1),g.nc("ngIf",n.registerForm.get("username").hasError(o.type)&&(n.registerForm.get("username").dirty||n.registerForm.get("username").touched))}}function y(e,t){if(1&e&&(g.Vb(0,"div"),g.Vb(1,"p",36),g.Vb(2,"span"),g.Hc(3),g.Ub(),g.Ub(),g.Ub()),2&e){var o=g.hc().$implicit;g.Cb(3),g.Ic(o.message)}}function C(e,t){if(1&e&&(g.Tb(0),g.Fc(1,y,4,1,"div",35),g.Sb()),2&e){var o=t.$implicit,n=g.hc();g.Cb(1),g.nc("ngIf",n.registerForm.get("password1").hasError(o.type)&&(n.registerForm.get("password1").dirty||n.registerForm.get("password1").touched))}}function w(e,t){if(1&e&&(g.Vb(0,"div"),g.Vb(1,"p",36),g.Vb(2,"span"),g.Hc(3),g.Ub(),g.Ub(),g.Ub()),2&e){var o=g.hc().$implicit;g.Cb(3),g.Ic(o.message)}}function P(e,t){if(1&e&&(g.Tb(0),g.Fc(1,w,4,1,"div",35),g.Sb()),2&e){var o=t.$implicit,n=g.hc();g.Cb(1),g.nc("ngIf",n.registerForm.get("password2").hasError(o.type)&&(n.registerForm.get("password2").dirty||n.registerForm.get("password2").touched))}}var x=function(e){return{focused:e}},F=[{path:"",children:[{path:"forgot",component:function(){function e(e,t,o,n,r){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=n,this.router=r,this.imgLogo="assets/img/logo/akpk-logo.png",this.resetFormMessages={email:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}]}}return e.prototype.ngOnInit=function(){this.resetForm=this.formBuilder.group({email:new r.d("",r.t.compose([r.t.required,r.t.email]))})},e.prototype.reset=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage()},e.prototype.navigatePage=function(e){if("login"==e)return this.router.navigate(["/auth/login"])},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","A reset link has been sent to your email")},e.\u0275fac=function(t){return new(t||e)(g.Pb(c.a),g.Pb(b.a),g.Pb(r.c),g.Pb(s.c),g.Pb(a.d))},e.\u0275cmp=g.Jb({type:e,selectors:[["app-forgot"]],decls:27,vars:6,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",3,"src"],[1,"h2","text-default","mt-3","mb-0"],[3,"formGroup"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","email",1,"form-control","text-dark",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"text-center"],["type","button",1,"btn","btn-primary","btn-block","my-4",3,"click"],["type","button",1,"btn","btn-icon","btn-outline-primary","btn-block","my-2",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-angle-left"],[1,"btn-inner--text"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Qb(0,"ngx-loading-bar"),g.Vb(1,"div",0),g.Vb(2,"div",1),g.Vb(3,"div",2),g.Vb(4,"div",3),g.Vb(5,"div",4),g.Vb(6,"div",5),g.Vb(7,"div",6),g.Qb(8,"img",7),g.Vb(9,"h6",8),g.Hc(10,"Reset password"),g.Ub(),g.Ub(),g.Vb(11,"form",9),g.Vb(12,"div",10),g.Vb(13,"div",11),g.Vb(14,"div",12),g.Vb(15,"span",13),g.Qb(16,"i",14),g.Ub(),g.Ub(),g.Vb(17,"input",15),g.dc("focus",(function(e){return t.focusEmail=!0}))("blur",(function(e){return t.focusEmail=!1})),g.Ub(),g.Ub(),g.Fc(18,l,2,1,"ng-container",16),g.Ub(),g.Vb(19,"div",17),g.Vb(20,"button",18),g.dc("click",(function(e){return t.reset()})),g.Hc(21," Reset Password "),g.Ub(),g.Vb(22,"button",19),g.dc("click",(function(e){return t.navigatePage("login")})),g.Vb(23,"span",20),g.Qb(24,"i",21),g.Ub(),g.Vb(25,"span",22),g.Hc(26,"Login"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e&&(g.Cb(8),g.nc("src",t.imgLogo,g.Ac),g.Cb(3),g.nc("formGroup",t.resetForm),g.Cb(1),g.nc("ngClass",g.qc(4,m,!0===t.focusEmail)),g.Cb(6),g.nc("ngForOf",t.resetFormMessages.email))},directives:[s.a,r.v,r.n,r.g,n.j,r.b,r.m,r.e,n.k,n.l],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}"]}),e}()},{path:"login",component:function(){function e(e,t,o,n,r){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=n,this.router=r,this.imgLogo="assets/img/logo/akpk-logo.png",this.loginFormMessages={username:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}],password:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}]}}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:new r.d("",r.t.compose([r.t.required,r.t.email])),password:new r.d("",r.t.compose([r.t.required,r.t.minLength(8)]))})},e.prototype.login=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage(),"admin"==this.loginForm.value.username?(this.authService.userRole=1,this.navigatePage("dashboard-admin")):"user"==this.loginForm.value.username&&(this.authService.userRole=2,this.navigatePage("dashboard-user"))},e.prototype.navigatePage=function(e){return"login"==e?this.router.navigate(["/auth/login"]):"forgot"==e?this.router.navigate(["/auth/forgot"]):"register"==e?this.router.navigate(["/auth/register"]):"dashboard-admin"==e?this.router.navigate(["/admin/dashboard"]):"dashboard-user"==e?this.router.navigate(["/user/dashboard"]):void 0},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","Logging in right now")},e.\u0275fac=function(t){return new(t||e)(g.Pb(c.a),g.Pb(b.a),g.Pb(r.c),g.Pb(s.c),g.Pb(a.d))},e.\u0275cmp=g.Jb({type:e,selectors:[["app-login"]],decls:42,vars:10,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",3,"src"],[3,"formGroup"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","username",1,"form-control",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"form-group",3,"ngClass"],[1,"fas","fa-lock","text-white"],["placeholder","Password","type","password","formControlName","password",1,"form-control",3,"focus","blur"],[1,"validation-errors"],[1,"row"],[1,"col-6"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckLogin","type","checkbox",1,"custom-control-input"],["for","customCheckLogin",1,"custom-control-label"],[1,"col-6","text-right"],[1,"forget-label",3,"click"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4","btn-block",3,"click"],["type","button",1,"btn","btn-outline-primary","btn-block","my-2",3,"click"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Qb(0,"ngx-loading-bar"),g.Vb(1,"div",0),g.Vb(2,"div",1),g.Vb(3,"div",2),g.Vb(4,"div",3),g.Vb(5,"div",4),g.Vb(6,"div",5),g.Vb(7,"div",6),g.Qb(8,"img",7),g.Ub(),g.Vb(9,"form",8),g.Vb(10,"div",9),g.Vb(11,"div",10),g.Vb(12,"div",11),g.Vb(13,"span",12),g.Qb(14,"i",13),g.Ub(),g.Ub(),g.Vb(15,"input",14),g.dc("focus",(function(e){return t.focusUsername=!0}))("blur",(function(e){return t.focusUsername=!1})),g.Ub(),g.Ub(),g.Fc(16,d,2,1,"ng-container",15),g.Ub(),g.Vb(17,"div",16),g.Vb(18,"div",10),g.Vb(19,"div",11),g.Vb(20,"span",12),g.Qb(21,"i",17),g.Ub(),g.Ub(),g.Vb(22,"input",18),g.dc("focus",(function(e){return t.focusPassword=!0}))("blur",(function(e){return t.focusPassword=!1})),g.Ub(),g.Ub(),g.Vb(23,"div",19),g.Fc(24,h,2,1,"ng-container",15),g.Ub(),g.Ub(),g.Vb(25,"div",20),g.Vb(26,"div",21),g.Vb(27,"div",22),g.Qb(28,"input",23),g.Vb(29,"label",24),g.Vb(30,"span"),g.Hc(31,"Remember me?"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Vb(32,"div",25),g.Vb(33,"label",26),g.dc("click",(function(e){return t.navigatePage("forgot")})),g.Vb(34,"span"),g.Hc(35,"Forgot password"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Vb(36,"div",27),g.Vb(37,"button",28),g.dc("click",(function(e){return t.login()})),g.Hc(38," Sign in "),g.Ub(),g.Ub(),g.Vb(39,"div"),g.Vb(40,"button",29),g.dc("click",(function(e){return t.navigatePage("register")})),g.Hc(41," Register "),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e&&(g.Cb(8),g.nc("src",t.imgLogo,g.Ac),g.Cb(1),g.nc("formGroup",t.loginForm),g.Cb(1),g.nc("ngClass",g.qc(6,v,!0===t.focusUsername)),g.Cb(6),g.nc("ngForOf",t.loginFormMessages.username),g.Cb(1),g.nc("ngClass",g.qc(8,v,!0===t.focusPassword)),g.Cb(7),g.nc("ngForOf",t.loginFormMessages.password))},directives:[s.a,r.v,r.n,r.g,n.j,r.b,r.m,r.e,n.k,n.l],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}"]}),e}()},{path:"register",component:function(){function e(e,t,o,n,r){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=n,this.router=r,this.imgLogo="assets/img/logo/akpk-logo.png",this.registerFormMessages={username:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}],password1:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}],password2:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}]}}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({username:new r.d("",r.t.compose([r.t.required,r.t.email])),password1:new r.d("",r.t.compose([r.t.required,r.t.minLength(8)])),password2:new r.d("",r.t.compose([r.t.required,r.t.minLength(8)]))})},e.prototype.login=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage()},e.prototype.navigatePage=function(e){if("login"==e)return this.router.navigate(["/auth/login"])},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","Loging in right now")},e.\u0275fac=function(t){return new(t||e)(g.Pb(c.a),g.Pb(b.a),g.Pb(r.c),g.Pb(s.c),g.Pb(a.d))},e.\u0275cmp=g.Jb({type:e,selectors:[["app-register"]],decls:55,vars:14,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",3,"src"],[1,"h2","text-default","mt-3","mb-0"],[3,"formGroup"],[1,"form-group",3,"ngClass"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","username",1,"form-control",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"fas","fa-lock","text-white"],["placeholder","Password","type","password","formControlName","password1",1,"form-control",3,"focus","blur"],[1,"input-group","input-group-alternative"],["placeholder","Confirm password","type","password","formControlName","password2",1,"form-control",3,"focus","blur"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],["href","javascript:void(0)"],[1,"text-center"],["type","button",1,"btn","btn-primary","mt-4","btn-block"],["type","button",1,"btn","btn-icon","btn-outline-primary","btn-block","my-2",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-angle-left"],[1,"btn-inner--text"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Qb(0,"ngx-loading-bar"),g.Vb(1,"div",0),g.Vb(2,"div",1),g.Vb(3,"div",2),g.Vb(4,"div",3),g.Vb(5,"div",4),g.Vb(6,"div",5),g.Vb(7,"div",6),g.Qb(8,"img",7),g.Vb(9,"h6",8),g.Hc(10,"Register account"),g.Ub(),g.Ub(),g.Vb(11,"form",9),g.Vb(12,"div",10),g.Vb(13,"div",11),g.Vb(14,"div",12),g.Vb(15,"span",13),g.Qb(16,"i",14),g.Ub(),g.Ub(),g.Vb(17,"input",15),g.dc("focus",(function(e){return t.focusUsername=!0}))("blur",(function(e){return t.focusUsername=!1})),g.Ub(),g.Ub(),g.Fc(18,V,2,1,"ng-container",16),g.Ub(),g.Vb(19,"div",10),g.Vb(20,"div",11),g.Vb(21,"div",12),g.Vb(22,"span",13),g.Qb(23,"i",17),g.Ub(),g.Ub(),g.Vb(24,"input",18),g.dc("focus",(function(e){return t.focusPassword=!0}))("blur",(function(e){return t.focusPassword=!1})),g.Ub(),g.Ub(),g.Fc(25,C,2,1,"ng-container",16),g.Ub(),g.Vb(26,"div",10),g.Vb(27,"div",19),g.Vb(28,"div",12),g.Vb(29,"span",13),g.Qb(30,"i",17),g.Ub(),g.Ub(),g.Vb(31,"input",20),g.dc("focus",(function(e){return t.focusConfirmPassword=!0}))("blur",(function(e){return t.focusConfirmPassword=!1})),g.Ub(),g.Ub(),g.Fc(32,P,2,1,"ng-container",16),g.Ub(),g.Vb(33,"div",21),g.Vb(34,"small"),g.Hc(35,"password strength: "),g.Vb(36,"span",22),g.Hc(37,"strong"),g.Ub(),g.Ub(),g.Ub(),g.Vb(38,"div",23),g.Vb(39,"div",24),g.Vb(40,"div",25),g.Qb(41,"input",26),g.Vb(42,"label",27),g.Vb(43,"span"),g.Hc(44,"I agree with the "),g.Vb(45,"a",28),g.Hc(46,"Privacy Policy"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Vb(47,"div",29),g.Vb(48,"button",30),g.Hc(49," Create account "),g.Ub(),g.Vb(50,"button",31),g.dc("click",(function(e){return t.navigatePage("login")})),g.Vb(51,"span",32),g.Qb(52,"i",33),g.Ub(),g.Vb(53,"span",34),g.Hc(54,"Login"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&e&&(g.Cb(8),g.nc("src",t.imgLogo,g.Ac),g.Cb(3),g.nc("formGroup",t.registerForm),g.Cb(1),g.nc("ngClass",g.qc(8,x,!0===t.focusUsername)),g.Cb(6),g.nc("ngForOf",t.registerFormMessages.username),g.Cb(1),g.nc("ngClass",g.qc(10,x,!0===t.focusPassword)),g.Cb(6),g.nc("ngForOf",t.registerFormMessages.password1),g.Cb(1),g.nc("ngClass",g.qc(12,x,!0===t.focusConfirmPassword)),g.Cb(6),g.nc("ngForOf",t.registerFormMessages.password2))},directives:[s.a,r.v,r.n,r.g,n.j,r.b,r.m,r.e,n.k,n.l],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}.strength-bar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-of-type{margin:0!important}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:62px}"]}),e}()}]}];o.d(t,"AuthModule",(function(){return k}));var k=function(){function e(){}return e.\u0275mod=g.Nb({type:e}),e.\u0275inj=g.Mb({factory:function(t){return new(t||e)},imports:[[n.c,r.h,r.s,i.d.forRoot(),i.i.forRoot(),i.m.forRoot(),s.b,a.g.forChild(F)]]}),e}()}}]);