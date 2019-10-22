(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-approval/admin-approval.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-approval/admin-approval.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFwcHJvdmFsL2FkbWluLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-approval/admin-approval.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-approval/admin-approval.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Admin approval section start-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <div class=\"card\" style=\"width:200px; height: 400px;\">\n        <img class=\"card-img-top\" src=\"../../../assets/img/user.jfif\" alt=\"Card image\" style=\"width:100%\">\n      </div>\n    </div>\n    <div class=\"col-sm-10\">\n      <div class=\"container\">\n        <h4>Customer Claim Details</h4>\n        <table class=\"table table-bordered table-dark table-striped\">\n          <thead>\n            <tr>\n              <th>Patient Name</th>\n              <th>Diseas Name</th>\n              <th>Limit Amount</th>\n              <th>Admission Date</th>\n              <th>Discharge Date</th>\n              <th>Claim Amount</th>\n              <th colspan=\"2\" style=\"text-align: center;\">Actions</th>\n              <th>Comments</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let claimDetail of claimDetails\">\n              <td>{{claimDetail.patientName}}</td>\n              <td>{{claimDetail.diseaseName}}</td>\n              <td>{{claimDetail.limitAmount}}</td>\n              <td>{{claimDetail.admissionDate}}</td>\n              <td>{{claimDetail.dischargedDate}}</td>\n              <td>{{claimDetail.claimAmount}}</td>\n              <td><button type=\"button\" (click)=\"approvalStatus('APPROVED', claimDetail.claimId)\"\n                  class=\"btn btn-primary\">Approve</button>\n              </td>\n              <td><button type=\"button\" (click)=\"approvalStatus('REJECTED', claimDetail.claimId)\"\n                  class=\"btn btn-primary\">Reject</button>\n              </td>\n              <!-- <td><button type=\"button\" (click)=\"approvalStatus('APPROVED')\" class=\"btn btn-primary\">Refer Back</button></td> -->\n              <td><textarea [(ngModel)]=\"approverComment\" class=\"form-control\" rows=\"2\" id=\"comment\"></textarea></td>\n              <td>{{claimDetail.apprStatus}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Admin approval section end-->"

/***/ }),

/***/ "./src/app/admin/admin-approval/admin-approval.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-approval/admin-approval.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminApprovalComponent", function() { return AdminApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _claim_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../claim-data.service */ "./src/app/claim-data.service.ts");



var AdminApprovalComponent = /** @class */ (function () {
    function AdminApprovalComponent(claimDataService) {
        this.claimDataService = claimDataService;
    }
    AdminApprovalComponent.prototype.ngOnInit = function () {
        this.claimApprovalDetails(2);
    };
    /* Customer claim details method start */
    AdminApprovalComponent.prototype.claimApprovalDetails = function (id) {
        var _this = this;
        console.log('Admin Data', id);
        this.claimDataService.claimApprover(id)
            .subscribe(function (data) {
            _this.claimDetails = data;
            console.log('Claim Details', _this.claimDetails);
        }, function (error) { return console.log('Error...', error); });
    };
    /* Customer claim details method end */
    AdminApprovalComponent.prototype.approvalStatus = function (apprStatus, claimId) {
        var _this = this;
        console.log('Approva Status', apprStatus, claimId);
        // let approverId = this.claimDetails.approverId;
        this.claimDataService.getApprovalStatus(apprStatus, this.approverComment, 2, claimId)
            .subscribe(function (data) {
            // this.claimDetails = data;
            // console.log('Claim Details', this.claimDetails);
            _this.claimApprovalDetails(2);
        }, function (error) { return console.log('Error...', error); });
    };
    AdminApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-approval',
            template: __webpack_require__(/*! ./admin-approval.component.html */ "./src/app/admin/admin-approval/admin-approval.component.html"),
            styles: [__webpack_require__(/*! ./admin-approval.component.css */ "./src/app/admin/admin-approval/admin-approval.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_claim_data_service__WEBPACK_IMPORTED_MODULE_2__["ClaimDataService"]])
    ], AdminApprovalComponent);
    return AdminApprovalComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Container start-->\n<div class=\"container py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2 class=\"text-center text-white mb-4\">Login Form</h2>\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n\n          <!-- Login form start -->\n          <div class=\"card rounded-0\">\n            <div class=\"card-header\">\n              <h3 class=\"mb-0\">Login Here</h3>\n            </div>\n            <div class=\"card-body\">\n              <form class=\"form\" role=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"adminLogin(loginForm.value)\"\n                autocomplete=\"off\" id=\"formLogin\" novalidate=\"\" method=\"POST\">\n                <div class=\"form-group\"\n                  [ngClass]=\"{'has-error': loginForm.get('adminName').errors && (loginForm.get('adminName').touched || loginForm.get('adminName').dirty)}\">\n                  <label for=\"uname1\" for=\"adminName\">Username</label>\n                  <input type=\"text\" formControlName=\"adminName\" class=\"form-control form-control-lg rounded-0\"\n                    id=\"adminName\">\n                  <span class=\"help-block\"\n                    *ngIf=\"loginForm.get('adminName').errors && (loginForm.get('adminName').touched || loginForm.get('adminName').dirty)\">\n                    <span style=\"color: red;\" *ngIf=\"loginForm.get('adminName').errors.required\"> Full name is\n                      required</span>\n                  </span>\n                </div>\n                <div class=\"form-group\"\n                  [ngClass]=\"{'has-error': loginForm.get('adminName').errors && (loginForm.get('adminName').touched || loginForm.get('adminName').dirty)}\">\n                  <label>Password</label>\n                  <input type=\"password\" formControlName=\"adminPassword\" class=\"form-control form-control-lg rounded-0\"\n                    autocomplete=\"new-password\">\n                  <span class=\"help-block\"\n                    *ngIf=\"loginForm.get('adminPassword').errors && (loginForm.get('adminPassword').touched || loginForm.get('adminPassword').dirty)\">\n                    <span style=\"color: red;\" *ngIf=\"loginForm.get('adminPassword').errors.required\"> Password\n                      required</span>\n                    <span style=\"color: red;\" *ngIf=\"loginForm.get('adminPassword').errors.minlegth\"> Minimum length is\n                      6\n                      characters </span>\n                  </span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-success btn-lg float-right\" id=\"btnLogin\">Login</button>\n              </form>\n            </div>\n          </div>\n          <!-- Login form end -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Container end-->\n\n<div class=\"alert alert-success alert-dismissible\" *ngIf=\"showAlert\">\n  <strong>Success alert!</strong>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\n    ×\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _claim_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../claim-data.service */ "./src/app/claim-data.service.ts");





var AdminLoginComponent = /** @class */ (function () {
    /* Reactive form admin login form end*/
    function AdminLoginComponent(claimDataService, router) {
        this.claimDataService = claimDataService;
        this.router = router;
        this.showAlert = false;
        /* Reactive form admin login form start*/
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            adminName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            adminPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
        });
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    /* Admin login start */
    AdminLoginComponent.prototype.adminLogin = function (adminCredentials) {
        var _this = this;
        console.log('Admin Data', adminCredentials);
        this.claimDataService.login(adminCredentials)
            .subscribe(function (data) {
            _this.adminDetails = data;
            console.log('User Form Data', _this.adminDetails);
            _this.showAlert = !_this.showAlert;
            if (_this.loginForm.value.adminName == "Mahesh" && _this.loginForm.value.adminPassword == "mahesh") {
                alert('Logged in Successfully');
                _this.router.navigateByUrl("/adminApproval");
            }
            else {
                alert('Login failed');
            }
        }, function (error) { return console.log('Given Details Not Matching...'); });
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin/admin-login/admin-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_claim_data_service__WEBPACK_IMPORTED_MODULE_4__["ClaimDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _claim_claim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./claim/claim.component */ "./src/app/claim/claim.component.ts");
/* harmony import */ var _registerclaim_registerclaim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registerclaim/registerclaim.component */ "./src/app/registerclaim/registerclaim.component.ts");
/* harmony import */ var _claimstatus_claimstatus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claimstatus/claimstatus.component */ "./src/app/claimstatus/claimstatus.component.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-approval/admin-approval.component */ "./src/app/admin/admin-approval/admin-approval.component.ts");








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'claim', component: _claim_claim_component__WEBPACK_IMPORTED_MODULE_3__["ClaimComponent"] },
    { path: 'register', component: _registerclaim_registerclaim_component__WEBPACK_IMPORTED_MODULE_4__["RegisterclaimComponent"] },
    { path: 'status', component: _claimstatus_claimstatus_component__WEBPACK_IMPORTED_MODULE_5__["ClaimstatusComponent"] },
    { path: 'adminLogin', component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__["AdminLoginComponent"] },
    { path: 'adminApproval', component: _admin_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_7__["AdminApprovalComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'claimprocessing';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _claim_claim_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./claim/claim.component */ "./src/app/claim/claim.component.ts");
/* harmony import */ var _registerclaim_registerclaim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registerclaim/registerclaim.component */ "./src/app/registerclaim/registerclaim.component.ts");
/* harmony import */ var _claimstatus_claimstatus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./claimstatus/claimstatus.component */ "./src/app/claimstatus/claimstatus.component.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-approval/admin-approval.component */ "./src/app/admin/admin-approval/admin-approval.component.ts");
/* harmony import */ var _common_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/alerts/alerts.component */ "./src/app/common/alerts/alerts.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _claim_claim_component__WEBPACK_IMPORTED_MODULE_9__["ClaimComponent"],
                _registerclaim_registerclaim_component__WEBPACK_IMPORTED_MODULE_10__["RegisterclaimComponent"],
                _claimstatus_claimstatus_component__WEBPACK_IMPORTED_MODULE_11__["ClaimstatusComponent"],
                _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
                _admin_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_13__["AdminApprovalComponent"],
                _common_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__["AlertsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/claim-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/claim-data.service.ts ***!
  \***************************************/
/*! exports provided: ClaimDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDataService", function() { return ClaimDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");






var ClaimDataService = /** @class */ (function () {
    function ClaimDataService(http) {
        this.http = http;
    }
    /*Claim amount service method start*/
    ClaimDataService.prototype.claimAmount = function (policyDetails) {
        console.log('Policy Details---Service', policyDetails);
        return this.http.post('http://10.117.189.192:9093/MedicalClaim/api/policies', policyDetails);
    };
    /*Claim amount service method end*/
    /* admin login service method start*/
    ClaimDataService.prototype.login = function (adminCredentials) {
        return this.http.post('http://10.117.189.254:9093/MedicalClaim/api/login', adminCredentials);
        // .map((res: Response) => res.json())
        // .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    };
    /* admin login service method end*/
    /*Get List of Hospitals service method start*/
    ClaimDataService.prototype.getListOfHospitals = function () {
        return this.http.get('http://10.117.189.47:9093/MedicalClaim/api/hospitals');
    };
    /*Get List of Hospitals service method end*/
    /*Get List of Diseas service method start*/
    ClaimDataService.prototype.getListOfDiseas = function () {
        return this.http.get('http://10.117.189.47:9093/MedicalClaim/api/diseases');
    };
    /*Get List of Diseas service method end*/
    /*Claim policy details service method start*/
    ClaimDataService.prototype.policyClaimRegister = function (policyRegisterDetails) {
        console.log('Policy Details---Service', policyRegisterDetails);
        return this.http.post('http://10.117.189.94:9093/MedicalClaim/api/claims', policyRegisterDetails);
    };
    ;
    /*Claim policy details service method end*/
    ClaimDataService.prototype.claimApprover = function (approverId) {
        console.log('Policy Approver---Service', approverId);
        return this.http.get('http://10.117.189.254:9093/MedicalClaim/api/approvers/' + approverId + '/claims');
    };
    ClaimDataService.prototype.getApprovalStatus = function (apprStatus, comment, approverId, claimId) {
        console.log(apprStatus, approverId, comment, claimId);
        console.log('Approval Status', apprStatus);
        var obj = {
            'status': apprStatus,
            'comment': comment,
            'claimId': claimId,
            'approverId': approverId
        };
        console.log('Aprrover Object', obj);
        return this.http.post('http://10.117.189.254:9093/MedicalClaim/api/approvers/', obj);
    };
    ClaimDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClaimDataService);
    return ClaimDataService;
}());



/***/ }),

/***/ "./src/app/claim/claim.component.css":
/*!*******************************************!*\
  !*** ./src/app/claim/claim.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltL2NsYWltLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/claim/claim.component.html":
/*!********************************************!*\
  !*** ./src/app/claim/claim.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Enter Policy ID start -->\n<div class=\"container-fluid h-100 bg-light text-dark\">\n  <div class=\"row justify-content-center align-items-center\">\n    <h3>Enter Your Details</h3>\n  </div>\n  <hr />\n  <div class=\"row justify-content-center align-items-center h-100\">\n    <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\n      <form action=\"\" [formGroup]=\"policyDetails\" (ngSubmit)=\"policyClaim(policyDetails.value)\">\n        <div class=\"form-group\">\n          <label>Policy Number:</label>\n          <input type=\"text\" formControlName=\"policyNo\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Aadhar Number:</label>\n          <input type=\"number\" formControlName=\"aadharNo\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Date Of Birth:</label>\n          <input type=\"date\" data-date-format=\"YYYY/MM/DD\" formControlName=\"dob\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col\"><button class=\"col-6 btn btn-primary btn-sm float-right\">Submit</button></div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- Enter Policy ID end -->"

/***/ }),

/***/ "./src/app/claim/claim.component.ts":
/*!******************************************!*\
  !*** ./src/app/claim/claim.component.ts ***!
  \******************************************/
/*! exports provided: ClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimComponent", function() { return ClaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _claim_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../claim-data.service */ "./src/app/claim-data.service.ts");





var ClaimComponent = /** @class */ (function () {
    function ClaimComponent(router, claimDataService) {
        this.router = router;
        this.claimDataService = claimDataService;
        this.showAlert = false;
        this.policyDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            policyNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            aadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    ClaimComponent.prototype.ngOnInit = function () {
    };
    /* Claim method start */
    ClaimComponent.prototype.policyClaim = function (policyDetails) {
        var _this = this;
        this.showAlert = !this.showAlert;
        this.claimDataService.claimAmount(policyDetails).subscribe(function (response) {
            console.log('repsonse ', response);
            _this.router.navigateByUrl("/register");
        });
    };
    ClaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claim',
            template: __webpack_require__(/*! ./claim.component.html */ "./src/app/claim/claim.component.html"),
            styles: [__webpack_require__(/*! ./claim.component.css */ "./src/app/claim/claim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _claim_data_service__WEBPACK_IMPORTED_MODULE_4__["ClaimDataService"]])
    ], ClaimComponent);
    return ClaimComponent;
}());



/***/ }),

/***/ "./src/app/claimstatus/claimstatus.component.css":
/*!*******************************************************!*\
  !*** ./src/app/claimstatus/claimstatus.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYWltc3RhdHVzL2NsYWltc3RhdHVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/claimstatus/claimstatus.component.html":
/*!********************************************************!*\
  !*** ./src/app/claimstatus/claimstatus.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  claimstatus works!\n</p>\n"

/***/ }),

/***/ "./src/app/claimstatus/claimstatus.component.ts":
/*!******************************************************!*\
  !*** ./src/app/claimstatus/claimstatus.component.ts ***!
  \******************************************************/
/*! exports provided: ClaimstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimstatusComponent", function() { return ClaimstatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClaimstatusComponent = /** @class */ (function () {
    function ClaimstatusComponent() {
    }
    ClaimstatusComponent.prototype.ngOnInit = function () {
    };
    ClaimstatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claimstatus',
            template: __webpack_require__(/*! ./claimstatus.component.html */ "./src/app/claimstatus/claimstatus.component.html"),
            styles: [__webpack_require__(/*! ./claimstatus.component.css */ "./src/app/claimstatus/claimstatus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClaimstatusComponent);
    return ClaimstatusComponent;
}());



/***/ }),

/***/ "./src/app/common/alerts/alerts.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/alerts/alerts.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/alerts/alerts.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/alerts/alerts.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-success\">\n    <strong>Success!</strong> This alert box could indicate a successful or positive action.\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"alert alert-info\">\n    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"alert alert-warning\">\n    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"alert alert-danger\">\n    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/common/alerts/alerts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/alerts/alerts.component.ts ***!
  \***************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/common/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.css */ "./src/app/common/alerts/alerts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer start-->\n<div class=\"footer navbg\">\n  <p>Copyright@2020</p>\n</div>\n<!-- Footer end-->"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation header start-->\n<div class=\"bs-example\">\n  <nav class=\"navbar navbar-expand-md navbar-dark navbg\">\n    <a href=\"#\" class=\"navbar-brand\">\n      <img src=\"assets/img/logo.png\" style=\"width: 80px; height: 50px;\" alt=\"\">\n    </a>\n    <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <div class=\"navbar-nav\">\n        <a href=\"#\" class=\"nav-item nav-link active\">Home</a>\n        <a href=\"#\" routerLink=\"claim\" class=\"nav-item nav-link\" style=\"width:50%\">Claim</a>\n        <a href=\"#\" class=\"nav-item nav-link\" routerLink=\"adminLogin\">Admin</a>\n      </div>\n      <form class=\"form-inline ml-auto\">\n        <div class=\"navbar-nav\">\n          <a href=\"#\" class=\"nav-item nav-link\" (click)=\"claimStatus()\" routerLink=\"/status\">Check Claim Status</a>\n        </div>\n      </form>\n    </div>\n  </nav>\n</div>\n<!-- Navigation header end-->"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/registerclaim/registerclaim.component.css":
/*!***********************************************************!*\
  !*** ./src/app/registerclaim/registerclaim.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyY2xhaW0vcmVnaXN0ZXJjbGFpbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/registerclaim/registerclaim.component.html":
/*!************************************************************!*\
  !*** ./src/app/registerclaim/registerclaim.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Reister Claim start-->\n<div class=\"container py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-10 mx-auto\">\n      <h4> Enter The Details To Register Your Claim</h4>\n      <hr>\n      <form [formGroup]=\"claimDetails\" (ngSubmit)=\"policyClaimInitiate(claimDetails.value)\">\n        <div class=\"form-group row\">\n          <div class=\"col-sm-6\">\n            <label for=\"inputLastname\">User ID</label>\n            <input type=\"text\" formControlName=\"userId\" class=\"form-control\" id=\"userId\" placeholder=\"User ID\">\n          </div>\n          <div class=\"col-sm-6\">\n            <label for=\"admissiondate\">Date of Admission</label>\n            <input type=\"date\" data-date-format=\"YYYY/MM/DD\" formControlName=\"admissionDate\" class=\"form-control\"\n              id=\"admissiondate\" placeholder=\"Admission Date\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-6\">\n            <label for=\"name\">Patient Name</label>\n            <input type=\"text\" formControlName=\"patientName\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n          </div>\n          <div class=\"col-sm-6\">\n            <label for=\"discharge\">Discharge Date</label>\n            <input type=\"date\" data-date-format=\"YYYY/MM/DD\" formControlName=\"dischargedDate\" class=\"form-control\"\n              id=\"discharge\" placeholder=\"Discharge Date\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-6\">\n            <label for=\"diagnosis\">Diagnosis</label>\n            <select class=\"form-control\" formControlName=\"diseaseId\" id=\"diagnosis\">\n              <!-- <option>1</option>\n              <option>2</option>\n              <option>3</option> -->\n              <option *ngFor=\"let dises of diseasList\" [value]=\"dises.diseaseId\">{{dises.diseaseName}}</option>\n            </select>\n          </div>\n          <div class=\"col-sm-6\">\n            <label for=\"amount\">Total Claim Amount</label>\n            <input type=\"number\" formControlName=\"claimAmount\" class=\"form-control\" id=\"amount\"\n              placeholder=\"Claim Amount\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-6\">\n            <label for=\"inputState\">Hospital Name</label>\n            <select class=\"form-control\" formControlName=\"hospitalId\" id=\"hospitalId\">\n              <option *ngFor=\"let hospitals of hospitalsListData\" [value]=\"hospitals.hospitalId\">\n                {{hospitals.hospitalName}}\n              </option>\n            </select>\n          </div>\n          <!-- <div class=\"col-sm-6\">\n            <label for=\"summary\">Upload Documents</label>\n            <div class=\"custom-file\">\n              <input type=\"file\" formControlName=\"dischargeSummary\" class=\"custom-file-input\" id=\"customFile\">\n              <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"col-sm-6\">\n          <button type=\"button\" class=\"btn btn-primary px-4 float-right\"\n            (click)=\"policyClaimInitiate(claimDetails.value)\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- Reister Claim end-->"

/***/ }),

/***/ "./src/app/registerclaim/registerclaim.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/registerclaim/registerclaim.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterclaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterclaimComponent", function() { return RegisterclaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _claim_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../claim-data.service */ "./src/app/claim-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterclaimComponent = /** @class */ (function () {
    /*Reactive form to claim details end*/
    function RegisterclaimComponent(claimDataService, router) {
        this.claimDataService = claimDataService;
        this.router = router;
        this.hospitalsListData = [];
        /*Reactive form to claim details start*/
        this.claimDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            diseaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            admissionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dischargedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            hospitalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            claimAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            // dischargeSummary: new FormControl('', [Validators.required]),
        });
    }
    RegisterclaimComponent.prototype.ngOnInit = function () {
        this.getHospitalsList();
        this.getDiseasList();
    };
    /* To get Hospital List method start*/
    RegisterclaimComponent.prototype.getHospitalsList = function () {
        var _this = this;
        this.claimDataService.getListOfHospitals()
            .subscribe(function (data) {
            _this.hospitalsListData = data;
            console.log('hospitalsList---', _this.hospitalsListData);
        }, function (error) { return console.log('Error  getting Hospital List...'); });
    };
    /* To get Hospital List method end*/
    /* To get Diseas List method start*/
    RegisterclaimComponent.prototype.getDiseasList = function () {
        var _this = this;
        this.claimDataService.getListOfDiseas()
            .subscribe(function (data) {
            _this.diseasList = data;
            console.log('getDiseasList---', _this.diseasList);
        }, function (error) { return console.log('Error  getting Diseas List...'); });
    };
    /* To get Diseas List method end*/
    /* Policy Claim Initiate method start*/
    RegisterclaimComponent.prototype.policyClaimInitiate = function (policyRegisterDetails) {
        console.log('claimDetails', this.claimDetails);
        alert('Policy Register');
        var policyDetails = {
            "userId": parseInt(policyRegisterDetails.userId),
            "patientName": policyRegisterDetails.patientName,
            "diseaseId": parseInt(policyRegisterDetails.diseaseId),
            "admissionDate": policyRegisterDetails.admissionDate,
            "dischargedDate": policyRegisterDetails.dischargedDate,
            "hospitalId": parseInt(policyRegisterDetails.hospitalId),
            "claimAmount": policyRegisterDetails.claimAmount
        };
        this.claimDataService.policyClaimRegister(policyDetails).subscribe(function (response) {
            console.log('response ', response);
            // this.router.navigateByUrl("/home");
        });
    };
    RegisterclaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registerclaim',
            template: __webpack_require__(/*! ./registerclaim.component.html */ "./src/app/registerclaim/registerclaim.component.html"),
            styles: [__webpack_require__(/*! ./registerclaim.component.css */ "./src/app/registerclaim/registerclaim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_claim_data_service__WEBPACK_IMPORTED_MODULE_3__["ClaimDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterclaimComponent);
    return RegisterclaimComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User1\Desktop\MyWorkSpace\claimprocessing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map