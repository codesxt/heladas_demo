webpackJsonp(["landing.module"],{

/***/ "../../../../../src/app/landing/landing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_component__["a" /* LandingComponent */],
        data: {
            title: 'Inicio'
        }
    }
];
var LandingRoutingModule = (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
        })
    ], LandingRoutingModule);
    return LandingRoutingModule;
}());

//# sourceMappingURL=landing-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"splash-background\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container text-center\">\n      <h1 class=\"display-3\">Predicción de Heladas</h1>\n      <p class=\"lead\">Proyecto FIC, Transferencia Sistema de Alerta Temprana y Sectorizada de Heladas</p>\n      <a type=\"button\" class=\"btn btn-primary\" href=\"#content\" pageScroll pageScrollDuration=\"300\">¡Conoce el proyecto!</a>\n\n      <div class=\"animated fadeIn m-5\">\n        <div class=\"card\">\n          <div class=\"card-body\" id=\"content\">\n            <h1 class=\"display-4 text-primary text-center\">Heladas</h1>\n            <div class=\"row\">\n              <div class=\"col-6 text-justify\">\n                <p>Una de las variables térmicas de más riesgo que los agricultores enfrentan son las heladas de invierno y las primaverales. Un evento de heladas puede hacer perder la cosecha de un año entero y comprometer los ingresos del siguiente, sobre todo para fruticultores y viticultores.</p>\n                <p>Este proyecto considera el desarrollo un sistema de alerta temprana de eventos de heladas basado en un modelo de predicción que utiliza técnicas de Inteligencia Artificial. Lo que resulta importante para reducir daños en los cultivos de la pequeña y mediana agricultura de la Región.</p>\n              </div>\n              <div class=\"col-6 text-justify\">\n                <p>Este sistema emplea información agroclimatológica histórica de carácter local y está enfocado en la predicción de ocurrencia de fenómenos o sucesos de heladas puntuales, es decir, si un determinado día ocurrirá o no una helada.</p>\n                <p>A partir de esta información y utilizando algoritmos de inteligencia Artificial del tipo clasificación y Redes Neuronales Artificiales, se implementará un sistema que entregará una alerta temprana hasta 12 horas antes de la ocurrencia de un evento de helada, indicando además la intensidad que tendrá la helada, todo esto de manera online para los usuarios.</p>\n              </div>\n            </div>\n            <p class=\"text-center text-primary\"><i class=\"fa fa-snowflake-o fa-5x\"></i></p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_routing_module__ = __webpack_require__("../../../../../src/app/landing/landing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__landing_routing_module__["a" /* LandingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__landing_component__["a" /* LandingComponent */]]
        })
    ], LandingModule);
    return LandingModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ })

});
//# sourceMappingURL=landing.module.chunk.js.map