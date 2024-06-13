"use strict";(self.webpackChunkProject=self.webpackChunkProject||[]).push([[969],{7969:(ee,f,l)=>{l.r(f),l.d(f,{AdminModule:()=>W});var d=l(6895),_=l(371),m=l(7579),c=l(8505),u=l(2722),h=l(590),p=l(5412),a=l(433),e=l(1571),g=l(6581);function b(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"At least 3 letters and only letters"),e.qZA())}function O(o,s){if(1&o&&(e.TgZ(0,"div",0),e.YNc(1,b,2,0,"div",7),e.qZA()),2&o){const t=e.oxw();e.Q6J("ngClass","error"),e.xp6(1),e.Q6J("ngIf",t.validateInput("userName","pattern"))}}let x=(()=>{class o{ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}constructor(t,n,i,r){this.dialogRef=t,this.data=n,this.formBuilder=i,this.userService=r,this.submitted=!1,this.unsubscribeAll=new m.x,this.form=this.formBuilder.group({userName:["",a.kI.pattern("^[a-zA-Z]{3,}$")]}),this.userNameControl=this.form.get("userName")}validateInput(t,n){return this.form.controls[t].hasError(n)}ngOnInit(){}getGenerateValue(){this.userService.resetUserPassword(this.data.id).pipe((0,c.b)(()=>{console.log("Reset user password attempt")}),(0,u.R)(this.unsubscribeAll)).subscribe({next:t=>{this.generatedValue=t.password,console.log("User password reset")},error:t=>{console.error("Reset user password failed",t)}})}onSubmit(){this.submitted=!0,!this.form.invalid&&this.userNameControl.value!=this.data.name&&this.dialogRef.close(this.userNameControl.value)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.so),e.Y36(p.WI),e.Y36(a.qu),e.Y36(g.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal"]],decls:15,vars:13,consts:[[3,"ngClass"],[1,"form",3,"formGroup","ngSubmit"],["id","userName","formControlName","userName",3,"ngClass","placeholder"],[3,"ngClass",4,"ngIf"],[1,"error-placeholder"],["placeholder","Generated Password","disabled","disabled",3,"ngClass","ngModel","value","ngModelChange"],[3,"ngClass","click"],[4,"ngIf"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",0)(2,"h2"),e._uU(3,"Edit User"),e.qZA(),e.TgZ(4,"form",1),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(5,"div",0),e._UZ(6,"input",2),e.TgZ(7,"button",0),e._uU(8,"Save"),e.qZA()(),e.YNc(9,O,2,2,"div",3),e._UZ(10,"div",4),e.qZA(),e.TgZ(11,"div",0)(12,"input",5),e.NdJ("ngModelChange",function(r){return n.generatedValue=r}),e.qZA(),e.TgZ(13,"button",6),e.NdJ("click",function(){return n.getGenerateValue()}),e._uU(14,"Generate"),e.qZA()()()()),2&t&&(e.Q6J("ngClass","modal-dialog-container"),e.xp6(1),e.Q6J("ngClass","modal-dialog-content"),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(1),e.Q6J("ngClass","newUserName"),e.xp6(1),e.s9C("placeholder",n.data.name),e.Q6J("ngClass","newUserNameInput"),e.xp6(1),e.Q6J("ngClass","saveBtn"),e.xp6(2),e.Q6J("ngIf",(null==n.userNameControl?null:n.userNameControl.touched)&&(null==n.userNameControl?null:n.userNameControl.invalid)),e.xp6(2),e.Q6J("ngClass","passwordGenerate"),e.xp6(1),e.Q6J("ngClass","password")("ngModel",n.generatedValue)("value",n.generatedValue?n.generatedValue:"Generate new Password"),e.xp6(1),e.Q6J("ngClass","generate"))},dependencies:[d.mk,d.O5,a._Y,a.Fj,a.JJ,a.JL,a.On,a.sg,a.u],styles:[".modal-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:20px;overflow:auto}.modal-dialog-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{position:fixed;font-size:12px;color:red}.modal-dialog-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .error-placeholder[_ngcontent-%COMP%]{height:15px}.modal-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%;margin-left:10px;border-radius:6px;padding:7.5px 0;border:none;color:#fff;background:#1f5192;cursor:pointer;transition:all .2s ease-in-out}.modal-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:rgba(31,81,146,.85)}.modal-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background:#184b87;transform:scale(.98);box-shadow:0 0 5px #0000004d}.modal-dialog-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:6px;border:1px solid rgba(169,169,169,.5);padding:7.5px;margin:5px 0;width:200px}.modal-dialog-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#6669}.modal-dialog-content[_ngcontent-%COMP%]   .newUserName[_ngcontent-%COMP%], .modal-dialog-content[_ngcontent-%COMP%]   .passwordGenerate[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:10px}.modal-dialog-content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal-dialog-content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]{width:80%;padding:7.5px 0;color:#fff;background:#0E2443;border-radius:40px;cursor:pointer;border:none;transition:all .2s ease-in-out}.modal-dialog-content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:hover{background:#1f5192}.modal-dialog-content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:active{background:#0b1f36;transform:scale(.98);box-shadow:0 0 5px #0000004d}"]}),o})();const P=o=>{const s=o.get("password")?.value,t=o.get("confPassword")?.value;return s===t?null:{notmatched:!0}};var v=l(1997);function A(o,s){if(1&o&&(e.TgZ(0,"option",2),e._uU(1),e.qZA()),2&o){const t=s.$implicit,n=e.oxw();e.Q6J("selected",t.id===n.defaultItem)("value",t.id),e.xp6(1),e.Oqu(t.rank)}}let w=(()=>{class o{constructor(){this.items=[],this.valueEmitter=new e.vpe}ngOnInit(){}onSelectionChange(t){this.valueEmitter.emit(parseInt(t.target.value))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-role-dropDown"]],inputs:{items:"items",defaultItem:"defaultItem"},outputs:{valueEmitter:"valueSelected"},decls:2,vars:2,consts:[[3,"ngClass","change"],[3,"selected","value",4,"ngFor","ngForOf"],[3,"selected","value"]],template:function(t,n){1&t&&(e.TgZ(0,"select",0),e.NdJ("change",function(r){return n.onSelectionChange(r)}),e.YNc(1,A,2,3,"option",1),e.qZA()),2&t&&(e.Q6J("ngClass","roleDropdown"),e.xp6(1),e.Q6J("ngForOf",n.items))},dependencies:[d.mk,d.sg,a.YN,a.Kr],styles:[".roleDropdown[_ngcontent-%COMP%]{border-radius:6px;border:1px solid rgba(169,169,169,.5);background-color:#f8f8fa;padding:4px 0 4px 4px;width:100%}.roleDropdown[_ngcontent-%COMP%]:focus{outline:none}"]}),o})();function Z(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function T(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"Email format is incorrect"),e.qZA())}function J(o,s){if(1&o&&(e.TgZ(0,"div",14),e.YNc(1,Z,2,0,"div",15),e.YNc(2,T,2,0,"div",15),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.validateInput("email","required")),e.xp6(1),e.Q6J("ngIf",t.validateInput("email","pattern"))}}function D(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function N(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"At least 3 letters and only letters"),e.qZA())}function R(o,s){if(1&o&&(e.TgZ(0,"div",0),e.YNc(1,D,2,0,"div",15),e.YNc(2,N,2,0,"div",15),e.qZA()),2&o){const t=e.oxw();e.Q6J("ngClass","error"),e.xp6(1),e.Q6J("ngIf",t.validateInput("userName","required")),e.xp6(1),e.Q6J("ngIf",t.validateInput("userName","pattern"))}}function Q(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function I(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"At least 1 special, capital, lowercase, number (15)"),e.qZA())}function y(o,s){if(1&o&&(e.TgZ(0,"div",14),e.YNc(1,Q,2,0,"div",15),e.YNc(2,I,2,0,"div",15),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.validateInput("password","required")),e.xp6(1),e.Q6J("ngIf",t.validateInput("password","pattern"))}}function S(o,s){1&o&&(e.TgZ(0,"div"),e._uU(1,"Passwords not matching"),e.qZA())}function k(o,s){if(1&o&&(e.TgZ(0,"div",14),e.YNc(1,S,2,0,"div",15),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form.hasError("notmatched"))}}let q=(()=>{class o{ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}constructor(t,n,i,r){this.dialogRef=t,this.data=n,this.formBuilder=i,this.userService=r,this.submitted=!1,this.selectedRole=4,this.roles=v.JE,this.unsubscribeAll=new m.x,this.form=this.formBuilder.group({userName:["",[a.kI.required,a.kI.pattern("^[a-zA-Z]{3,}$")]],email:["",[a.kI.required,a.kI.pattern("^[a-zA-Z0-9._%+-]+@(?:multilaneinc\\.com|htpsal\\.com|hazenlabs\\.com)$")]],password:["",[a.kI.required,a.kI.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^\\w\\d\\s]).{15,}$")]],confPassword:["",a.kI.required]},{validators:P}),this.userNameControl=this.form.get("userName"),this.emailControl=this.form.get("email"),this.passwordControl=this.form.get("password"),this.confPasswordControl=this.form.get("confPassword")}validateInput(t,n){return this.form.controls[t].hasError(n)}onSelectionChange(t){this.selectedRole=t}onSubmit(){this.submitted=!0,this.form.invalid||this.userService.addUser({name:this.userNameControl.value,email:this.emailControl.value,password:this.passwordControl.value,confirmPassword:this.confPasswordControl.value,permissionsId:this.selectedRole?this.selectedRole:4}).pipe((0,h.P)(),(0,c.b)(n=>{console.log("Adding user...")})).subscribe({next:n=>{console.log("User added"),this.dialogRef.close(n)},error:n=>{console.error("Add user failed",n)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.so),e.Y36(p.WI),e.Y36(a.qu),e.Y36(g.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-user-modal"]],decls:27,vars:15,consts:[[3,"ngClass"],[1,"form",3,"formGroup","ngSubmit"],[1,"emailInput"],["type","text","placeholder","Email","id","email","formControlName","email",3,"ngClass"],["class","error",4,"ngIf"],[1,"error-placeholder"],["id","userName","formControlName","userName","placeholder","Username",3,"ngClass"],[3,"ngClass",4,"ngIf"],[1,"passwordInput"],["type","password","autocomplete","your-password","placeholder","Password","id","password","formControlName","password",3,"ngClass"],["type","password","autocomplete","your-password","placeholder","Confirm Password","id","confPassword","formControlName","confPassword",3,"ngClass"],[1,"rankInput"],[3,"ngClass","items","valueSelected"],[1,"card-bottom"],[1,"error"],[4,"ngIf"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",0)(2,"h2"),e._uU(3,"Add User"),e.qZA(),e.TgZ(4,"form",1),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(5,"div",2),e._UZ(6,"input",3),e.qZA(),e.YNc(7,J,3,2,"div",4),e._UZ(8,"div",5),e.TgZ(9,"div",0),e._UZ(10,"input",6),e.qZA(),e.YNc(11,R,3,3,"div",7),e._UZ(12,"div",5),e.TgZ(13,"div",8),e._UZ(14,"input",9),e.qZA(),e.YNc(15,y,3,2,"div",4),e._UZ(16,"div",5),e.TgZ(17,"div",8),e._UZ(18,"input",10),e.qZA(),e.YNc(19,k,2,1,"div",4),e._UZ(20,"div",5),e.TgZ(21,"div",11)(22,"app-role-dropDown",12),e.NdJ("valueSelected",function(r){return n.onSelectionChange(r)}),e.qZA()(),e._UZ(23,"div",5),e.TgZ(24,"div",13)(25,"button",0),e._uU(26,"Add User"),e.qZA()()()()()),2&t&&(e.Q6J("ngClass","add-modal-dialog-container"),e.xp6(1),e.Q6J("ngClass","modal-dialog-content"),e.xp6(3),e.Q6J("formGroup",n.form),e.xp6(2),e.Q6J("ngClass","email-input"),e.xp6(1),e.Q6J("ngIf",n.submitted||(null==n.emailControl?null:n.emailControl.touched)&&(null==n.emailControl?null:n.emailControl.invalid)),e.xp6(2),e.Q6J("ngClass","newUserName"),e.xp6(1),e.Q6J("ngClass","newUserNameInput"),e.xp6(1),e.Q6J("ngIf",(null==n.userNameControl?null:n.userNameControl.touched)&&(null==n.userNameControl?null:n.userNameControl.invalid)),e.xp6(3),e.Q6J("ngClass","password-input"),e.xp6(1),e.Q6J("ngIf",n.submitted||(null==n.passwordControl?null:n.passwordControl.touched)&&(null==n.passwordControl?null:n.passwordControl.invalid)),e.xp6(3),e.Q6J("ngClass","password-input"),e.xp6(1),e.Q6J("ngIf",n.submitted||(null==n.passwordControl?null:n.passwordControl.touched)&&(null==n.passwordControl?null:n.passwordControl.invalid)),e.xp6(3),e.Q6J("ngClass","addRoleDropdown")("items",n.roles),e.xp6(3),e.Q6J("ngClass","addUser"))},dependencies:[d.mk,d.O5,a._Y,a.Fj,a.JJ,a.JL,w,a.sg,a.u],styles:[".modal-dialog-content[_ngcontent-%COMP%]{height:80%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px}.modal-dialog-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{margin-bottom:15px}.modal-dialog-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{position:fixed;font-size:12px;color:red}.modal-dialog-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .error-placeholder[_ngcontent-%COMP%]{height:20px}.modal-dialog-content[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:30%}.modal-dialog-content[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%]{width:80%;padding:10px 0;color:#fff;background:#0E2443;border-radius:40px;cursor:pointer;border:none;transition:all .2s ease-in-out}.modal-dialog-content[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%]:hover{background:#1f5192}.modal-dialog-content[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%]:active{background:#0b1f36;transform:scale(.98);box-shadow:0 0 5px #0000004d}.modal-dialog-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:6px;border:1px solid rgba(169,169,169,.5);padding:7.5px;margin:5px 0;width:200px}.modal-dialog-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#6669}.modal-dialog-content[_ngcontent-%COMP%]   .newUserName[_ngcontent-%COMP%]{display:flex;align-items:center}.modal-dialog-content[_ngcontent-%COMP%]   .passwordGenerate[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:10px}.modal-dialog-content[_ngcontent-%COMP%]   .addRoleDropdown[_ngcontent-%COMP%]{width:200px;margin:5px 0}"]}),o})();var M=l(6845),Y=l(8816),U=l(266),G=l(344);function E(o,s){1&o&&e._UZ(0,"img",6),2&o&&e.Q6J("ngClass","userDeactivate")}function L(o,s){1&o&&e._UZ(0,"img",7),2&o&&e.Q6J("ngClass","userActivate")}const F=function(o,s){return{active:o,inactive:s}};let j=(()=>{class o{constructor(){this.roles=v.uJ,this.popUp=new e.vpe,this.activateDeactivate=new e.vpe,this.updateRank=new e.vpe}onSelectionChange(t){this.item.permissionsId=t,this.updateRank.emit(this.item)}openDialog(){this.popUp.emit(this.item)}activateDeactivateUser(){this.activateDeactivate.emit(this.item)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-row"]],inputs:{item:"item"},outputs:{popUp:"popUp",activateDeactivate:"activateDeactivate",updateRank:"updateRank"},decls:11,vars:15,consts:[[3,"ngClass"],[3,"items","defaultItem","valueSelected"],[3,"ngClass","click"],["src","assets/edit-user-6-svgrepo-com.png","alt","user image",3,"ngClass"],["src","assets/circle-cancel-svgrepo-com.png","alt","deactivate image",3,"ngClass",4,"ngIf"],["src","assets/circle-success-svgrepo-com.png","alt","activate image",3,"ngClass",4,"ngIf"],["src","assets/circle-cancel-svgrepo-com.png","alt","deactivate image",3,"ngClass"],["src","assets/circle-success-svgrepo-com.png","alt","activate image",3,"ngClass"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._uU(1),e.qZA(),e.TgZ(2,"div",0),e._uU(3),e.qZA(),e.TgZ(4,"div",0)(5,"app-role-dropDown",1),e.NdJ("valueSelected",function(r){return n.onSelectionChange(r)}),e.qZA(),e.TgZ(6,"button",2),e.NdJ("click",function(){return n.openDialog()}),e._UZ(7,"img",3),e.qZA(),e.TgZ(8,"button",2),e.NdJ("click",function(){return n.activateDeactivateUser()}),e.YNc(9,E,1,1,"img",4),e.YNc(10,L,1,1,"img",5),e.qZA()()),2&t&&(e.Q6J("ngClass","userName"),e.xp6(1),e.Oqu(n.item.name),e.xp6(1),e.Q6J("ngClass",e.WLB(12,F,!n.item.isDeleted,n.item.isDeleted)),e.xp6(1),e.Oqu(n.item.isDeleted?"Inactive":"Active"),e.xp6(1),e.Q6J("ngClass","userActions"),e.xp6(1),e.Q6J("items",n.roles)("defaultItem",n.item.permissionsId),e.xp6(1),e.Q6J("ngClass","btn btn-edit"),e.xp6(1),e.Q6J("ngClass","userLogOut"),e.xp6(1),e.Q6J("ngClass","btn btn-danger"),e.xp6(1),e.Q6J("ngIf",!n.item.isDeleted),e.xp6(1),e.Q6J("ngIf",n.item.isDeleted))},dependencies:[d.mk,d.O5,w],styles:[".userName[_ngcontent-%COMP%]{font-weight:700;font-size:16px;width:90px}.active[_ngcontent-%COMP%]{color:green}.inactive[_ngcontent-%COMP%]{color:red}.btn[_ngcontent-%COMP%]{border:none;cursor:pointer;transition:all .3s ease-in-out}.btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.btn-edit[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]{background-color:#fff;width:38px}.btn-edit[_ngcontent-%COMP%]   .userLogOut[_ngcontent-%COMP%], .btn-edit[_ngcontent-%COMP%]   .userDeactivate[_ngcontent-%COMP%], .btn-edit[_ngcontent-%COMP%]   .userActivate[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]   .userLogOut[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]   .userDeactivate[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]   .userActivate[_ngcontent-%COMP%]{background:white;width:100%}.userActions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:250px}"]}),o})();function B(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"app-user-row",1),e.NdJ("popUp",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.openDialog(i))})("activateDeactivate",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.activateDeactivateUser(i))})("updateRank",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.onSelectionChange(i))}),e.qZA()()}if(2&o){const t=s.$implicit;e.xp6(1),e.Q6J("item",t)}}let z=(()=>{class o{constructor(t){this.authService=t,this.userId=this.authService.userValue?.id,this.items=[],this.popUp=new e.vpe,this.activateDeactivate=new e.vpe,this.updateRank=new e.vpe}openDialog(t){this.popUp.emit(t)}activateDeactivateUser(t){this.activateDeactivate.emit(t)}onSelectionChange(t){this.updateRank.emit(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-rows"]],inputs:{items:"items"},outputs:{popUp:"popUp",activateDeactivate:"activateDeactivate",updateRank:"updateRank"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"item","popUp","activateDeactivate","updateRank"]],template:function(t,n){1&t&&e.YNc(0,B,2,1,"div",0),2&t&&e.Q6J("ngForOf",n.items)},dependencies:[d.sg,j],styles:["app-user-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;border:1px solid #DCDCDC;border-radius:10px;padding:15px;margin:0 10px 15px}"]}),o})();const V=[{path:"Grid",component:(()=>{class o{constructor(t,n,i){this.authService=t,this.userService=n,this.dialog=i,this.showDeleted=null,this.unsubscribeAll=new m.x,this.user=this.authService.userValue}ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}ngOnInit(){this.getUsers()}getUsers(){this.userService.getUsersList().pipe((0,c.b)(()=>{console.log("Get all users attempt")}),(0,u.R)(this.unsubscribeAll)).subscribe({next:t=>{this.data=t,this.usersList=this.data,this.usersTitle="Users ("+this.usersList?.length+")"},error:t=>{console.error("Get users failed",t)}})}onSelectionChange(t){this.userService.updateUserPermission({id:t.id,permissionsId:t.permissionsId}).pipe((0,h.P)(),(0,c.b)(()=>{console.log("Updating rank...")})).subscribe({next:i=>{console.log("Rank updated"),this.getUsers()},error:i=>{console.log("Updating rank failed",i)}})}openDialog(t){this.dialog.open(x,{width:"400px",panelClass:"modal-dialog-container",data:t}).afterClosed().subscribe(i=>{i&&(this.userService.updateUserName({id:t.id,name:i}).pipe((0,c.b)(()=>{console.log("Update user attempt")}),(0,u.R)(this.unsubscribeAll)).subscribe({next:C=>{console.log("User updated",C),this.getUsers()},error:C=>{console.error("Update user failed",C)}}),console.log("The dialog was closed ",t))})}activateDeactivateUser(t){console.log("Activate/Deactivate user ",t),t.isDeleted&&this.userService.activateUser(t.id).pipe((0,c.b)(()=>{console.log("Activate user attempt")}),(0,u.R)(this.unsubscribeAll)).subscribe({next:n=>{console.log("User activated",n),this.getUsers()},error:n=>{console.error("Activate user failed",n)}}),this.userService.deactivateUser(t.id).pipe((0,c.b)(()=>{console.log("Deactivate user attempt")}),(0,u.R)(this.unsubscribeAll)).subscribe({next:n=>{console.log("User deactivated"),this.getUsers()},error:n=>{console.error("Deactivate user failed",n)}})}onSearchChange(t){this.usersList=this.data?.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())),this.usersTitle="Users ("+this.usersList?.length+")"}logOut(){this.authService.logout()}openAddDialog(){this.dialog.open(q,{width:"400px",height:"500px",panelClass:"add-modal-dialog-container",autoFocus:!1,data:{id:0,name:""}}).afterClosed().subscribe(n=>{n&&(console.log("The dialog was closed "),this.getUsers())})}toggleShowDeleted(){this.usersList=!0===this.showDeleted?this.data?.filter(t=>t.isDeleted):!1===this.showDeleted?this.data?.filter(t=>!t.isDeleted):this.data}filterUsers(){this.showDeleted=!0!==this.showDeleted&&(!1!==this.showDeleted||null),this.toggleShowDeleted()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.e),e.Y36(g.K),e.Y36(p.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-admin-grid"]],decls:21,vars:18,consts:[[3,"ngClass"],["src","assets/ML_Logo_Original.png","alt","LOGO",3,"ngClass"],[3,"user","logOutEvent"],[3,"search"],["matTooltip","Filter by status",3,"ngClass","matTooltipPosition","click"],["src","assets/filter-svgrepo-com.png","alt","Add user image",3,"ngClass"],["matTooltip","Add User",3,"ngClass","matTooltipPosition","click"],["src","assets/profile-plus-round-1343-svgrepo-com.png","alt","Add user image",3,"ngClass"],[3,"items","popUp","activateDeactivate","updateRank"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"app-user-options",2),e.NdJ("logOutEvent",function(){return n.logOut()}),e.qZA()(),e.TgZ(3,"app-search",3),e.NdJ("search",function(r){return n.onSearchChange(r)}),e.qZA(),e.TgZ(4,"div",0)(5,"p",0),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"p",0),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"div",0)(10,"p",0),e._uU(11,"Role"),e.qZA()()(),e.TgZ(12,"div",0)(13,"h2"),e._uU(14),e.qZA(),e.TgZ(15,"div",0)(16,"button",4),e.NdJ("click",function(){return n.filterUsers()}),e._UZ(17,"img",5),e.qZA(),e.TgZ(18,"button",6),e.NdJ("click",function(){return n.openAddDialog()}),e._UZ(19,"img",7),e.qZA()()(),e.TgZ(20,"app-user-rows",8),e.NdJ("popUp",function(r){return n.openDialog(r)})("activateDeactivate",function(r){return n.activateDeactivateUser(r)})("updateRank",function(r){return n.onSelectionChange(r)}),e.qZA()),2&t&&(e.Q6J("ngClass","header"),e.xp6(1),e.Q6J("ngClass","logo"),e.xp6(1),e.Q6J("user",n.user),e.xp6(2),e.Q6J("ngClass","user-row-header"),e.xp6(1),e.Q6J("ngClass","userName"),e.xp6(2),e.Q6J("ngClass","status"),e.xp6(2),e.Q6J("ngClass","userActions"),e.xp6(1),e.Q6J("ngClass","role"),e.xp6(2),e.Q6J("ngClass","users-options-header"),e.xp6(2),e.Oqu(n.usersTitle),e.xp6(1),e.Q6J("ngClass","user-actions"),e.xp6(1),e.Q6J("ngClass","filterActive")("matTooltipPosition","below"),e.xp6(1),e.Q6J("ngClass","filter"),e.xp6(1),e.Q6J("ngClass","addUser")("matTooltipPosition","below"),e.xp6(1),e.Q6J("ngClass","userAdd"),e.xp6(1),e.Q6J("items",n.usersList))},dependencies:[d.mk,Y.N,U.gM,G.X,z],styles:[".logo[_ngcontent-%COMP%]{font-weight:400;margin-left:15px;width:400px}h2[_ngcontent-%COMP%]{margin-left:20px;padding:0}.userName[_ngcontent-%COMP%], .status[_ngcontent-%COMP%], .role[_ngcontent-%COMP%]{padding:12px 0;margin:0;font-weight:700;font-size:16px}.userActions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:210px}.user-row-header[_ngcontent-%COMP%]{background-color:#d9d9d980;border-radius:10px;padding:0 15px;margin:0 10px 15px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}app-search[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:30px}.users-options-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.users-options-header[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%], .users-options-header[_ngcontent-%COMP%]   .filterActive[_ngcontent-%COMP%]{border:none;cursor:pointer;background-color:#fff;width:38px;margin-right:20px;transition:all .3s ease-in-out}.users-options-header[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%]:hover, .users-options-header[_ngcontent-%COMP%]   .filterActive[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.users-options-header[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%]   .userAdd[_ngcontent-%COMP%], .users-options-header[_ngcontent-%COMP%]   .addUser[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%], .users-options-header[_ngcontent-%COMP%]   .filterActive[_ngcontent-%COMP%]   .userAdd[_ngcontent-%COMP%], .users-options-header[_ngcontent-%COMP%]   .filterActive[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{background:white;width:100%}"]}),o})()}];let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(V),_.Bz]}),o})();var K=l(5175),$=l(8361),H=l(7158);let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[g.K],imports:[d.ez,X,a.u5,K.X,$.B,p.Is,a.UX,U.AV,H.$]}),o})()}}]);