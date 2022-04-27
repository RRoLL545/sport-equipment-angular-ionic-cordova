webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
        this.filterData = this.navParams.get('dataToFilter');
    }
    /**
     * Закрывает окно с фильтром
     */
    FilterPage.prototype.closeFilter = function () {
        this.view.dismiss();
    };
    /**
     * Закрывает окно с фильтром и передаёт данные о выбранных настройках
     */
    FilterPage.prototype.applyFilter = function () {
        this.view.dismiss(this.filterData);
    };
    /**
     * Применяет к фильтру значения по умолчанию
     */
    FilterPage.prototype.clearFilter = function () {
        this.filterData = {
            values: {
                type: null,
                season: {
                    'весна': false,
                    'лето': false,
                    'осень': false,
                    'зима': false
                },
                availability: false,
                priceRange: {
                    lower: 0,
                    upper: this.filterData.maxPrice
                }
            },
            types: this.filterData.types,
            maxPrice: this.filterData.maxPrice
        };
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\pages\filter\filter.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Фильтр</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button small icon-only clear (click)="closeFilter()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="clearFilter()">Очистить</button>\n\n  </ion-buttons>\n\n\n\n  <ion-item-group>\n\n    <ion-item>\n\n      <ion-label>Тип</ion-label>\n\n      <ion-select [(ngModel)]="filterData.values.type">\n\n        <ion-option *ngFor="let type of filterData.types" value="{{type}}">{{type}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item-divider>\n\n      Сезон\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Весна</ion-label>\n\n      <ion-checkbox checked="false" [(ngModel)]="filterData.values.season[\'весна\']"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Лето</ion-label>\n\n      <ion-checkbox checked="false" [(ngModel)]="filterData.values.season[\'лето\']"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Осень</ion-label>\n\n      <ion-checkbox checked="false" [(ngModel)]="filterData.values.season[\'осень\']"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Зима</ion-label>\n\n      <ion-checkbox checked="false" [(ngModel)]="filterData.values.season[\'зима\']"></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item-divider>\n\n      Наличие\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Есть на складе</ion-label>\n\n      <ion-checkbox checked="false" [(ngModel)]="filterData.values.availability"></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item-divider>\n\n      Цена\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <div>от {{filterData.values.priceRange.lower}} до {{filterData.values.priceRange.upper}}\n\n           &#8381;/сутки\n\n      </div>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-range min="0" [max]=filterData.maxPrice step="1" dualKnobs="true" pin="true"\n\n                 [(ngModel)]="filterData.values.priceRange" color="dark">\n\n        <ion-label range-left class="small-text">&#8381;</ion-label>\n\n        <ion-label range-right>&#8381;</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n\n\n  <ion-buttons>\n\n    <button ion-button full (click)="applyFilter()">Применить</button>\n\n  </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=0.js.map