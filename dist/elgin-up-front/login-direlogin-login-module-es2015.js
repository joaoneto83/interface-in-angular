(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-direlogin-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/login/direlogin/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/login/direlogin/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/main/login/direlogin/login-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/login/direlogin/login-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DireLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireLoginRoutingModule", function() { return DireLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/main/login/direlogin/login.component.ts");




const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["DireLoginComponent"] }];
let DireLoginRoutingModule = class DireLoginRoutingModule {
};
DireLoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DireLoginRoutingModule);



/***/ }),

/***/ "./src/app/main/login/direlogin/login.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/login/direlogin/login.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 375px) {\n  .login {\n    width: 300px !important;\n  }\n}\n.has-danger .ng-invalid {\n  border-bottom: 0.5px solid red;\n}\n.login {\n  width: 350px;\n  border-radius: 10px !important;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n}\n.login .elgin-up-logo {\n  text-align: center;\n}\n.login .elgin-up-logo img {\n  max-width: 226px;\n  height: auto;\n}\n.login form label {\n  color: #9B9A9A;\n  font-size: var(--default-text);\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n.login form input {\n  border-radius: 10px;\n}\n.login form button[type=submit] {\n  margin: 1rem 0;\n  padding: 0.575rem 0.75rem;\n  background-color: var(--primary);\n  font-size: var(--default-text);\n  text-transform: uppercase;\n  width: 100%;\n  border: 1px solid #E5E5E5;\n  border-radius: 25px;\n  transition: 0.3s;\n}\n.login form button[type=submit]:hover {\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n}\n.login a {\n  display: block;\n  text-align: center;\n  margin: 1rem 0;\n  font-size: var(--default-text);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpbi9kaXJlbG9naW4vQzpcXFByb2pldG9Gcm9udEVuZC9zcmNcXGFwcFxcbWFpblxcbG9naW5cXGRpcmVsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naW4vZGlyZWxvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSx1QkFBQTtFQ0RGO0FBQ0Y7QURHQTtFQUNFLDhCQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FDREY7QURHRTtFQUNFLGtCQUFBO0FDREo7QURHSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FETUk7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSk47QURPSTtFQUNFLG1CQUFBO0FDTE47QURRSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFFNO0VBQ0UsMkNBQUE7QUNOUjtBRFdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naW4vZGlyZWxvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gIC5sb2dpbiB7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmhhcy1kYW5nZXIgLm5nLWludmFsaWR7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmVkO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbiAgLmVsZ2luLXVwLWxvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMjI2cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogIzlCOUE5QTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgcGFkZGluZzogLjU3NXJlbSAuNzVyZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAubG9naW4ge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4uaGFzLWRhbmdlciAubmctaW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJlZDtcbn1cblxuLmxvZ2luIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ubG9naW4gLmVsZ2luLXVwLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4gLmVsZ2luLXVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyMjZweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmxvZ2luIGZvcm0gbGFiZWwge1xuICBjb2xvcjogIzlCOUE5QTtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubG9naW4gZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubG9naW4gZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDAuNTc1cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmxvZ2luIGZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ubG9naW4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/login/direlogin/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/login/direlogin/login.component.ts ***!
  \*********************************************************/
/*! exports provided: DireLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireLoginComponent", function() { return DireLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shered_service_adm_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shered/service/adm-usuario.service */ "./src/app/_shered/service/adm-usuario.service.ts");
/* harmony import */ var src_app_shered_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shered/service/loading.service */ "./src/app/_shered/service/loading.service.ts");
/* harmony import */ var src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_core/services/token.service */ "./src/app/_core/services/token.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shered_validators_password_password_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_shered/validators/password/password.validator */ "./src/app/_shered/validators/password/password.validator.ts");









let DireLoginComponent = class DireLoginComponent {
    constructor(loadingService, tokenService, usuarioService, formBuilder, activatedRoute, router) {
        this.loadingService = loadingService;
        this.tokenService = tokenService;
        this.usuarioService = usuarioService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.passo = 1;
    }
    ngOnInit() {
        this.router.navigate(["/login"]);
    }
    login() {
        if (this.formLogin.valid && !this.formLogin.pending) {
            this.loadingService.show();
            //  let senha = CryptoJS.HmacSHA1(this.formLogin.controls["senha"].value, 'PorElg2ER019intal').toString();
            let senha = this.formLogin.controls["senha"].value;
            this.tokenService
                .setToken(this.formLogin.controls["login"].value, senha)
                .subscribe(res => this.loginSuccess(res), err => this.loginError(err));
        }
        else {
            this.loginvazio();
            Object.keys(this.formLogin.controls).forEach(key => {
                this.formLogin.get(key).markAsTouched();
            });
            return;
        }
    }
    initFormNovaSenha() {
        this.formNovaSenha = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.formNovaSenha.setValidators([src_app_shered_validators_password_password_validator__WEBPACK_IMPORTED_MODULE_8__["PasswordValidation"].MatchPassword]);
    }
    hasErrorLogin(id) {
        return this.formLogin.get(id).invalid && (this.formLogin.get(id).dirty || this.formLogin.get(id).touched);
    }
    loginError(err) {
        console.log(err);
        this.loadingService.hide();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'Login/Senha inválidos.', 'warning');
    }
    loginvazio() {
        this.loadingService.hide();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'por favor, informe usuário e senha.', 'warning');
    }
    loginSuccess(res) {
        let rest = JSON.parse(res);
        let token = rest.result.data['token'].toString();
        console.log("res", token);
        this.loadingService.hide();
        this.tokenService.getTokenSuccess(token);
        this.router.navigate(["/inicio"]);
    }
    enviarCodigo() {
        if (this.formResetar.controls["codigo"].valid) {
            this.loadingService.show();
            this.usuarioService.validarCodigo(this.formLogin.controls["login"].value, this.formResetar.controls["codigo"].value).subscribe(res => this.validarSuccess(res), err => this.validarError(err));
        }
    }
    validarError(err) {
        console.log(err);
        this.loadingService.hide();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'Código inválido.', 'warning');
    }
    validarSuccess(res) {
        this.loadingService.hide();
        if (res) {
            this.passo = 3;
            this.initFormNovaSenha();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'Código inválido.', 'warning');
        }
    }
};
DireLoginComponent.ctorParameters = () => [
    { type: src_app_shered_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
    { type: src_app_shered_service_adm_usuario_service__WEBPACK_IMPORTED_MODULE_4__["AdmUsuarioService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DireLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direlogin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/login/direlogin/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/main/login/direlogin/login.component.scss")).default]
    })
], DireLoginComponent);



/***/ }),

/***/ "./src/app/main/login/direlogin/login.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/login/direlogin/login.module.ts ***!
  \******************************************************/
/*! exports provided: DireLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireLoginModule", function() { return DireLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/main/login/direlogin/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/main/login/direlogin/login-routing.module.ts");








let DireLoginModule = class DireLoginModule {
};
DireLoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_6__["DireLoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_7__["DireLoginRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_6__["DireLoginComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], DireLoginModule);



/***/ })

}]);
//# sourceMappingURL=login-direlogin-login-module-es2015.js.map