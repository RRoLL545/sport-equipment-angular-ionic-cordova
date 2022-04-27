webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDataStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDataStorageProvider = /** @class */ (function () {
    function ItemDataStorageProvider(http) {
        this.http = http;
    }
    /**
     * Возвращает промис, который получает данные по товарам из json, присваивает свойству класса
     * @returns {Observable<any>}
     */
    ItemDataStorageProvider.prototype.getItems = function () {
        var _this = this;
        var url = 'assets/items.json';
        return new Promise(function (resolve, reject) {
            _this.http.get(url).subscribe(function (result) {
                _this.items = result;
                resolve(result);
            }, function (error) {
                reject();
            });
        });
    };
    /**
     * Возвращает массив с данными о товарах
     * @returns {Item[]}
     */
    ItemDataStorageProvider.prototype.returnItems = function () {
        return this.items;
    };
    ItemDataStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ItemDataStorageProvider);
    return ItemDataStorageProvider;
}());

//# sourceMappingURL=item-data-storage.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/filter/filter.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_item_data_storage_item_data_storage__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, ItemDataStorageProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.ItemDataStorageProvider = ItemDataStorageProvider;
        this.modalCtrl = modalCtrl;
        if (this.ItemDataStorageProvider.returnItems()) {
            this.dataError = null;
        }
        else {
            this.dataError = 'Данные о товарах ещё незагружены,подождите.';
        }
    }
    /**
     * При загрузке компонента проверяет загружены ли уже данные по товарам в сервис,
     * если загружены, берёт их из сервиса,
     * если нет, загружает
     */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var fetchedData = this.ItemDataStorageProvider.returnItems();
        if (!fetchedData) {
            this.ItemDataStorageProvider.getItems().then(function (result) {
                _this.items = result;
                _this.dataError = null;
            }, function (error) { return _this.dataError = 'Возникла ошибка при загрузке товаров.'; });
        }
        else {
            this.items = fetchedData;
        }
    };
    /**
     * Переход на страницу с детальными данными выбранного товара
     * @param {Item} chosenItem - выбранный товар
     */
    HomePage.prototype.goItemDetail = function (chosenItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], { chosenItem: chosenItem });
    };
    /**
     * Открывает окно с фильтром
     */
    HomePage.prototype.openFilter = function () {
        var _this = this;
        if (!this.filterData) {
            var types = this.items
                .map(function (item) { return item.type; })
                .filter(function (item, pos, arr) { return arr.indexOf(item) === pos; });
            var maxPrice = Math.max.apply(Math, this.items.map(function (item) { return item.price; }));
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
                        upper: maxPrice
                    }
                },
                types: types,
                maxPrice: maxPrice
            };
        }
        var filter = this.modalCtrl.create('FilterPage', { dataToFilter: this.filterData });
        filter.present();
        filter.onWillDismiss(function (dataFromFilter) {
            if (dataFromFilter) {
                _this.filterData = dataFromFilter;
                _this.filterItems();
            }
        });
    };
    /**
     * Фильтрование товаров по заданным параметрам
     */
    HomePage.prototype.filterItems = function () {
        var _this = this;
        var allItems = this.ItemDataStorageProvider.returnItems();
        this.items = allItems.filter(function (item) {
            return (_this.filterData.values.type ? item.type === _this.filterData.values.type : true)
                &&
                    _this.filterBySeason(item.season, _this.filterData.values.season)
                &&
                    (_this.filterData.values.availability ? item.availability === _this.filterData.values.availability : true)
                &&
                    item.price >= _this.filterData.values.priceRange.lower && item.price <= _this.filterData.values.priceRange.upper;
        });
        if (!this.items.length) {
            this.dataError = 'Нет товаров с выбранными условиями';
        }
        else {
            this.dataError = null;
        }
    };
    /**
     * Возвращает результат проверки наличия отмеченных сезонов в фильтре в характеристике товара
     * @param {string[]} itemSeasons - массив значений сезонов товара
     * @param {Seasons} filterSeasons - объект с выбранными значениями сезонов в фильтре
     * @returns {boolean} - true/false - все значения фильтра есть в товаре/хотя бы одного нет
     */
    HomePage.prototype.filterBySeason = function (itemSeasons, filterSeasons) {
        var seasonsArr = [];
        for (var seasonKey in filterSeasons) {
            if (filterSeasons[seasonKey] === true) {
                seasonsArr.push(seasonKey);
            }
        }
        if (!seasonsArr.length) {
            return true;
        }
        var result = seasonsArr.map(function (item) { return itemSeasons.indexOf(item); });
        return result.indexOf(-1) === -1;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle color="perfect-brown">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center text-uppercase>\n\n      Спортивные товары\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button float-right (click)="openFilter()" small icon-only clear>\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-wrap>\n\n  <ion-item *ngIf="dataError" padding color="danger">\n\n    <p>{{dataError}}</p>\n\n  </ion-item>\n\n\n\n  <p *ngIf="!dataError" text-right class="help-info">Нажмите на товар, чтобы посмотреть/зарезервировать</p>\n\n\n\n  <item-card *ngFor="let item of items" [itemCardData]="item" (click)="goItemDetail(item)"></item-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_item_data_storage_item_data_storage__["a" /* ItemDataStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_booking_item_booking__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_native_storage_data_native_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams, dataNativeStorageProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataNativeStorageProvider = dataNativeStorageProvider;
        this.chosenItem = this.navParams.get('chosenItem');
        this.dataNativeStorageProvider.getBookedItems().then(function (result) {
            var chosenItemBookData = result.filter(function (item) { return item.id === _this.chosenItem.id; });
            if (chosenItemBookData.length) {
                _this.bookedDates = chosenItemBookData[0].dates;
                _this.isBooked = true;
            }
            else {
                _this.isBooked = false;
            }
        }, function () {
            _this.isBooked = false;
        });
    }
    /**
     * Переход на страницу резервирования
     * @param {Item} bookItem - товар для резервирования
     */
    ItemDetailsPage.prototype.goItemBook = function (bookItem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_booking_item_booking__["a" /* ItemBookingPage */], { bookItem: bookItem });
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Детальная информация</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-5>\n\n        <ion-thumbnail item-start>\n\n          <img [src]="chosenItem.imgUrl" alt="фото"/>\n\n        </ion-thumbnail>\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <ion-list>\n\n          <ion-item text-wrap>\n\n            <h4>Наименование</h4>\n\n            <p>{{chosenItem.title}}</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <h4>Тип</h4>\n\n            <p>{{chosenItem.type}}</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <h4>Сезон</h4>\n\n            <p *ngFor="let season of chosenItem.season">{{season}}</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <h4>Наличие</h4>\n\n            <p *ngIf="chosenItem.availability">Есть в наличии</p>\n\n            <p *ngIf="!chosenItem.availability">Нет в наличии</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <h4>Цена</h4>\n\n            <p>{{chosenItem.price}}, руб/день</p>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-item *ngIf="!chosenItem.availability" color="danger" text-center text-wrap>\n\n    <div>Нельзя забронировать, нет в наличии</div>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="chosenItem.availability">\n\n    <h4 *ngIf="isBooked">Товар забронирован на</h4>\n\n    <h4 *ngIf="!isBooked">Товар ещё не забронирован</h4>\n\n\n\n    <ion-item *ngFor="let date of bookedDates">\n\n      {{dataNativeStorageProvider.showDate(date)}}\n\n    </ion-item>\n\n    <button ion-button full margin-top (click)="goItemBook(chosenItem)">Забронировать</button>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_native_storage_data_native_storage__["a" /* DataNativeStorageProvider */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_native_storage_data_native_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemBookingPage = /** @class */ (function () {
    function ItemBookingPage(navParams, dataNativeStorageProvider) {
        var _this = this;
        this.navParams = navParams;
        this.dataNativeStorageProvider = dataNativeStorageProvider;
        var today = new Date();
        this.currentDate = today.toLocaleDateString().split('.').reverse().join('-');
        this.bookDate = this.currentDate;
        this.bookItem = this.navParams.get('bookItem');
        this.bookingMessage = {
            messageText: '',
            isWarning: false
        };
        this.dataNativeStorageProvider.getBookedItems().then(function (result) {
            _this.currentStorage = result;
        }, function () { });
    }
    /**
     * Бронирование товара
     */
    ItemBookingPage.prototype.bookProcess = function () {
        var _this = this;
        if (!this.currentStorage) {
            this.currentStorage = [
                {
                    id: this.bookItem.id,
                    dates: [this.bookDate]
                }
            ];
            this.dataNativeStorageProvider.setBookedItems(this.currentStorage)
                .then(function () { return _this.setMessage("\u0422\u043E\u0432\u0430\u0440 " + _this.bookItem.title + " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D \u043D\u0430 " + _this.bookDate + "!", false); }, function () { return _this.setMessage("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438! \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E.", true); });
            return;
        }
        var itemIndex = this.currentStorage.findIndex(function (item) { return item.id === _this.bookItem.id; });
        if (itemIndex === -1) {
            this.currentStorage.push({
                id: this.bookItem.id,
                dates: [this.bookDate]
            });
            this.dataNativeStorageProvider.setBookedItems(this.currentStorage)
                .then(function () { return _this.setMessage("\u0422\u043E\u0432\u0430\u0440 " + _this.bookItem.title + " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D \u043D\u0430 " + _this.bookDate + "!", false); }, function () { return _this.setMessage("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438! \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E.", true); });
        }
        else {
            var bookedDates = this.currentStorage[itemIndex].dates;
            var dateIndex = bookedDates.findIndex(function (item) { return item === _this.bookDate; });
            if (dateIndex === -1) {
                this.currentStorage[itemIndex].dates.push(this.bookDate);
                this.dataNativeStorageProvider.setBookedItems(this.currentStorage)
                    .then(function () { return _this.setMessage("\u0422\u043E\u0432\u0430\u0440 " + _this.bookItem.title + " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D \u043D\u0430 " + _this.bookDate + "!", false); }, function () { return _this.setMessage("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438! \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E.", true); });
            }
            else {
                this.setMessage("\u0422\u043E\u0432\u0430\u0440 " + this.bookItem.title + " \u043D\u0430 " + this.bookDate + " \u0443\u0436\u0435 \u0431\u044B\u043B \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D \u0440\u0430\u043D\u0435\u0435!", true);
            }
        }
    };
    /**
     * Сообщает предупреждающее ли сообщение пользователю, чтобы повесить на элемент DOM соответствующий класс
     * @returns {boolean} - true/false - да/нет
     */
    ItemBookingPage.prototype.isWarningMessage = function () {
        return this.bookingMessage.isWarning;
    };
    /**
     * Устанавливает значение текста сообщения пользователю
     * @param {string} messageText - текст сообщения
     * @param {boolean} warning - true/false - предупреждающее/нет
     */
    ItemBookingPage.prototype.setMessage = function (messageText, warning) {
        this.bookingMessage.messageText = messageText;
        this.bookingMessage.isWarning = warning;
    };
    ItemBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item-booking',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\pages\item-booking\item-booking.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{bookItem.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-label>Выберите дату</ion-label>\n\n    <ion-datetime displayFormat="DD-MMM-YYYY"\n\n                  pickerFormat="DD MMMM YYYY"\n\n                  [(ngModel)]="bookDate"\n\n                  cancelText="Отмена"\n\n                  doneText="Выбрать"\n\n                  [min]="currentDate"\n\n                  max="2071">\n\n    </ion-datetime>\n\n  </ion-item>\n\n\n\n  <button ion-button full margin-top (click)="bookProcess()">Забронировать</button>\n\n\n\n  <div class="booking-help-info"\n\n       [class.booking-help-info_warning]="isWarningMessage()"\n\n       margin-top>\n\n    {{bookingMessage.messageText}}\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\pages\item-booking\item-booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_native_storage_data_native_storage__["a" /* DataNativeStorageProvider */]])
    ], ItemBookingPage);
    return ItemBookingPage;
}());

//# sourceMappingURL=item-booking.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_item_data_storage_item_data_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_native_storage_data_native_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookedPage = /** @class */ (function () {
    function BookedPage(alertCtrl, itemDataStorageProvider, dataNativeStorageProvider) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.itemDataStorageProvider = itemDataStorageProvider;
        this.dataNativeStorageProvider = dataNativeStorageProvider;
        /**
         * Сообщение, если забронированных товаров нет
         * @type {string}
         */
        this.noBookedItemsInfo = 'Забронированных товаров нет!';
        this.items = this.itemDataStorageProvider.returnItems();
        this.dataNativeStorageProvider.getBookedItems().then(function (result) {
            _this.bookedItems = result;
            _this.areBookedItemsInStorage = true;
        }, function () {
            _this.areBookedItemsInStorage = false;
        });
    }
    /**
     * Процесс отмены бронирования выбранного товара с выбранной даты после подтверждения
     * @param {number} id - идентификатор товара
     * @param {string} date - дата бронирования
     */
    BookedPage.prototype.confirmedUnBook = function (id, date) {
        var _this = this;
        var itemIndex = this.bookedItems.findIndex(function (item) { return item.id === id; });
        var dateIndex = this.bookedItems[itemIndex].dates.findIndex(function (item) { return item === date; });
        this.bookedItems[itemIndex].dates.splice(dateIndex, 1);
        if (!this.bookedItems[itemIndex].dates.length) {
            this.bookedItems.splice(itemIndex, 1);
        }
        if (!this.bookedItems.length) {
            this.areBookedItemsInStorage = false;
        }
        this.dataNativeStorageProvider.setBookedItems(this.bookedItems).then(function () {
        }, function () {
            _this.bookedItems[itemIndex].dates.push(date);
            var alert = _this.alertCtrl.create({
                title: 'Ошибка удаления!',
                subTitle: 'Попробуйте ещё раз позже.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    /**
     * Отмена бронирования выбранного товара с выбранной даты
     * @param {number} id - идентификатор товара
     * @param {string} date - дата бронирования
     */
    BookedPage.prototype.unBook = function (id, date) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Подтвердите',
            message: 'Вы действительно хотите отменить бронирование?',
            buttons: [
                {
                    text: 'Да',
                    handler: function () {
                        _this.confirmedUnBook(id, date);
                    }
                },
                {
                    text: 'Нет',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * Получает строку со значением ключа из объекта с товарами по идентификатору товара
     * @param {number} id - идентификатор товара
     * @param {string} key - значение ключа, данные которого нужно получить
     * @returns {string} - строка со значением ключа
     */
    BookedPage.prototype.getItemKeyValue = function (id, key) {
        var itemIndex = this.items.findIndex(function (item) { return item.id === id; });
        return this.items[itemIndex][key];
    };
    BookedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-booked',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\pages\booked\booked.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Забронированные товары</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item *ngIf="!areBookedItemsInStorage" color="danger">\n\n    <div>{{noBookedItemsInfo}}</div>\n\n  </ion-item>\n\n  <ion-card *ngFor="let bookedItem of bookedItems">\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img [src]="getItemKeyValue(bookedItem.id, \'imgUrl\')" alt="item photo">\n\n      </ion-avatar>\n\n\n\n      <ion-card-header text-wrap>\n\n        {{getItemKeyValue(bookedItem.id, \'title\')}}\n\n      </ion-card-header>\n\n    </ion-item>\n\n\n\n    <ion-card-content>\n\n      <div>Забронирован на:</div>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-row *ngFor="let date of bookedItem.dates">\n\n\n\n            <ion-col class="booked-item__date">\n\n              <div>{{dataNativeStorageProvider.showDate(date)}}</div>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n              <button ion-button color="danger" (click)="unBook(bookedItem.id, date)">Отменить</button>\n\n            </ion-col>\n\n\n\n          </ion-row>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\pages\booked\booked.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_item_data_storage_item_data_storage__["a" /* ItemDataStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_native_storage_data_native_storage__["a" /* DataNativeStorageProvider */]])
    ], BookedPage);
    return BookedPage;
}());

//# sourceMappingURL=booked.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactInfoPage = /** @class */ (function () {
    function ContactInfoPage() {
        this.phoneNumber = '+7 (123) 45-67-89';
        this.purePhoneNumber = this.phoneNumber.replace(/[- ()]/g, '');
        this.isVisible = true;
        this.schedule = [
            {
                day: 'ВС',
                openTime: '09:00',
                closeTime: '21:00',
                isDayOff: false
            },
            {
                day: 'ПН',
                openTime: '10:00',
                closeTime: '20:00',
                isDayOff: false
            },
            {
                day: 'ВТ',
                openTime: '08:00',
                closeTime: '20:00',
                isDayOff: false
            },
            {
                day: 'СР',
                openTime: '-',
                closeTime: '-',
                isDayOff: true
            },
            {
                day: 'ЧТ',
                openTime: '-',
                closeTime: '-',
                isDayOff: true
            },
            {
                day: 'ПТ',
                openTime: '08:00',
                closeTime: '20:00',
                isDayOff: false
            },
            {
                day: 'СБ',
                openTime: '09:00',
                closeTime: '21:00',
                isDayOff: false
            }
        ];
        this.today = {
            currentTime: new Date(Date.now()),
            openTime: '',
            closeTime: '',
            weekDayId: 0,
            nextWorkingDayId: 1,
            nextWorkingDayDate: '',
            openTimeIfClosed: '',
            isOpened: false
        };
        this.today.weekDayId = this.today.currentTime.getDay();
        this.today.nextWorkingDayId = this.getNextDayId(this.today.weekDayId);
        this.today.openTime = this.schedule[this.today.weekDayId].openTime;
        this.today.closeTime = this.schedule[this.today.weekDayId].closeTime;
        var todayDate = this.today.currentTime.getDate();
        var daysIdGap = this.today.nextWorkingDayId - this.today.weekDayId;
        var daysGap = daysIdGap >= 1 ? daysIdGap : daysIdGap + 7;
        var nextWorkDayDate = new Date(this.today.currentTime);
        nextWorkDayDate.setDate(todayDate + daysGap);
        this.today.nextWorkingDayDate = nextWorkDayDate.toLocaleDateString();
        if (this.schedule[this.today.weekDayId].isDayOff) {
            this.today.isOpened = false;
            this.today.openTimeIfClosed = this.schedule[this.today.nextWorkingDayId].openTime;
        }
        else {
            var currentMinutes = this.getMinutes(this.today.currentTime);
            var beginMinutes = this.getMinutes(this.today.openTime);
            var endMinutes = this.getMinutes(this.today.closeTime);
            if (currentMinutes < beginMinutes) {
                this.today.isOpened = false;
                this.today.openTimeIfClosed = this.today.openTime;
                this.today.nextWorkingDayDate = '';
            }
            else if (currentMinutes >= endMinutes) {
                this.today.isOpened = false;
                this.today.openTimeIfClosed = this.schedule[this.today.nextWorkingDayId].openTime;
            }
            else {
                this.today.isOpened = true;
            }
        }
    }
    /**
     * Возвращает переведённое в минуты значение времени
     * @param {Date | string} time - строка со временем вида чч:мм
     * @returns {number} - количество минут
     */
    ContactInfoPage.prototype.getMinutes = function (time) {
        var timeArr;
        if (typeof time === 'string') {
            timeArr = time.split(':');
        }
        else {
            timeArr = time
                .toLocaleTimeString('ru-Ru', { hour12: false })
                .split(':');
        }
        return parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10);
    };
    /**
     * Возвращает идентификатор следующего за сегодняшним рабочего дня
     * @param {number} todayId - идентификатор сегодняшнего дня
     * @returns {number} - идентификатор следующего рабочего дня
     */
    ContactInfoPage.prototype.getNextDayId = function (todayId) {
        var nextDayId = todayId + 1;
        while (true) {
            if (nextDayId === 7) {
                nextDayId = 0;
            }
            if (this.schedule[nextDayId].isDayOff) {
                nextDayId++;
            }
            else {
                return nextDayId;
            }
        }
    };
    ContactInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact-info',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\pages\contact-info\contact-info.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Контакты</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-divider>Организация</ion-item-divider>\n\n    <ion-item>\n\n      <div item-right>\n\n        ACME sport inc.\n\n      </div>\n\n    </ion-item>\n\n\n\n    <ion-item-divider>Телефон</ion-item-divider>\n\n    <ion-item>\n\n      <a href="tel:{{purePhoneNumber}}">\n\n        <ion-icon name="call"></ion-icon>\n\n      </a>\n\n      <div item-right>\n\n        {{phoneNumber}}\n\n      </div>\n\n    </ion-item>\n\n\n\n    <ion-item-divider>\n\n      Часы работы\n\n      <ion-buttons item-right>\n\n        <button ion-button icon-only text-center small color="secondary" class="schedule__button"\n\n                (click)="isVisible = !isVisible">\n\n          <ion-icon name="add" *ngIf="isVisible"></ion-icon>\n\n          <ion-icon name="close-outline" *ngIf="!isVisible"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <div *ngIf="!isVisible" margin-bottom class="schedule__full-schedule">\n\n        <div *ngFor="let day of schedule">{{day.day}}\n\n          : {{day.isDayOff === true ? \'Выходной\' : day.openTime + \' - \' + day.closeTime }}</div>\n\n      </div>\n\n\n\n      <div>\n\n        <div *ngIf="today.isOpened">\n\n          <div class="schedule__status_opened">Открыто</div>\n\n          <div>Закроется в {{today.closeTime}}</div>\n\n        </div>\n\n\n\n        <div *ngIf="!today.isOpened">\n\n          <div class="schedule__status_closed">Закрыто</div>\n\n          <div>Откроется {{today.nextWorkingDayDate}} в {{today.openTimeIfClosed}}</div>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\pages\contact-info\contact-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContactInfoPage);
    return ContactInfoPage;
}());

//# sourceMappingURL=contact-info.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_native_storage_data_native_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_item_data_storage_item_data_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_booked_booked__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_info_contact_info__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_item_details_item_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_item_booking_item_booking__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booked_booked__["a" /* BookedPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_info_contact_info__["a" /* ContactInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_item_booking_item_booking__["a" /* ItemBookingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {
                    monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
                    monthShortNames: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
                    dayNames: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
                    dayShortNames: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                }, {
                    links: [
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booked_booked__["a" /* BookedPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_info_contact_info__["a" /* ContactInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_item_booking_item_booking__["a" /* ItemBookingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_item_data_storage_item_data_storage__["a" /* ItemDataStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_7__providers_data_native_storage_data_native_storage__["a" /* DataNativeStorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_item_card_component_module__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_item_card_component_module__["a" /* ItemCardComponentModule */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_card_item_card__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemCardComponentModule = /** @class */ (function () {
    function ItemCardComponentModule() {
    }
    ItemCardComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__item_card_item_card__["a" /* ItemCardComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__item_card_item_card__["a" /* ItemCardComponent */])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__item_card_item_card__["a" /* ItemCardComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemCardComponentModule);
    return ItemCardComponentModule;
}());

//# sourceMappingURL=item.card.component.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemCardComponent = /** @class */ (function () {
    function ItemCardComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemCardComponent.prototype, "itemCardData", void 0);
    ItemCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'item-card',template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\components\item-card\item-card.html"*/'<ion-card class="item-card">\n\n  <ion-card-header>\n\n    {{itemCardData.title}}\n\n  </ion-card-header>\n\n\n\n  <ion-card-content>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-item class="item-card__image">\n\n          <img src="{{itemCardData.imgUrl}}" alt="item photo">\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-item>\n\n          <h4>Наличие:</h4>\n\n          <p *ngIf="itemCardData.availability">Есть на складе</p>\n\n          <p *ngIf="!itemCardData.availability">Нет на складе</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <h4>Цена:</h4>\n\n          <p>{{itemCardData.price}} руб/сутки</p>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\components\item-card\item-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ItemCardComponent);
    return ItemCardComponent;
}());

//# sourceMappingURL=item-card.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_booked_booked__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_info_contact_info__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        /**
         * Корневая страница - страница, которая будет показана при загрузке приложения
         * @type {any}
         */
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Домашняя', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Забронированные товары', component: __WEBPACK_IMPORTED_MODULE_5__pages_booked_booked__["a" /* BookedPage */] },
            { title: 'Контакты', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_info_contact_info__["a" /* ContactInfoPage */] }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    /**
     * Закрывает меню и переходит на выбранную страницу приложения
     * @param {Page} page - страница на которую будет осуществлён переход
     */
    MyApp.prototype.navTo = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\work\r-style\test\sport-equipment\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Перейти на</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let page of pages" (click)="navTo(page)" text-wrap>{{page.title}}</button>\n\n      <button ion-item menuClose detail-none>Закрыть</button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\work\r-style\test\sport-equipment\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataNativeStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataNativeStorageProvider = /** @class */ (function () {
    function DataNativeStorageProvider(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        /**
         * Имя ключа для хранения данных в nativeStorage
         * @type {string}
         * @private
         */
        this.storageDataKey = 'booked-items';
    }
    /**
     * Возвращает Promise, который устанавливает данные о забронированных товарах в хранилище
     * @param {ItemBookingData[]} data - данные о забронированных товарах для установки в хранилище
     * @returns {Promise<void>} - Promise
     */
    DataNativeStorageProvider.prototype.setBookedItems = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.setItem(_this.storageDataKey, data)
                .then(function () {
                resolve();
            }, function () {
                reject();
            });
        });
    };
    /**
     * Возвращает Promise, который забирает данные о забронированных товарах из хранилища
     * @returns {Promise<ItemBookingData[]>} - Promise
     */
    DataNativeStorageProvider.prototype.getBookedItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.getItem(_this.storageDataKey)
                .then(function (data) {
                resolve(data);
            }, function () {
                reject();
            });
        });
    };
    /**
     * Возвращает строку с датой в более удобочитаемом виде (дд.ммм.гггг)
     * @param {string} date - строка с датой (гггг-мм-дд)
     * @returns {string} - строка с датой (дд.ммм.гггг)
     */
    DataNativeStorageProvider.prototype.showDate = function (date) {
        var monthNames = [
            'янв',
            'фев',
            'март',
            'апр',
            'май',
            'июнь',
            'июль',
            'авг',
            'сен',
            'окт',
            'ноя',
            'дек'
        ];
        var dateArr = date.split('-');
        return dateArr[2] + "." + monthNames[parseInt(dateArr[1], 10) - 1] + "." + dateArr[0];
    };
    DataNativeStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], DataNativeStorageProvider);
    return DataNativeStorageProvider;
}());

//# sourceMappingURL=data-native-storage.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map