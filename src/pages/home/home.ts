import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';

import { Item } from '../../app/models/Item';
import { ItemDetailsPage } from '../item-details/item-details';
import { ItemDataStorageProvider } from '../../providers/item-data-storage/item-data-storage';
import { FilterData, Seasons } from '../../app/models/filterData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * Список товаров
   * @type {Item[]}
   */
  public items: Item[];

  /**
   * Сообщение об ошибке
   * @type {string | null}
   */
  public dataError: string | null;

  /**
   * Данные для фильтра
   * @type {FilterData}
   */
  public filterData: FilterData;

  constructor(public navCtrl: NavController,
              public ItemDataStorageProvider: ItemDataStorageProvider,
              private modalCtrl: ModalController) {
    if (this.ItemDataStorageProvider.returnItems()) {
      this.dataError = null;
    } else {
      this.dataError = 'Данные о товарах ещё незагружены,подождите.';
    }
  }

  /**
   * При загрузке компонента проверяет загружены ли уже данные по товарам в сервис,
   * если загружены, берёт их из сервиса,
   * если нет, загружает
   */
  ngOnInit(): void {
    const fetchedData: Item[] | undefined = this.ItemDataStorageProvider.returnItems();
    if (!fetchedData) {
      this.ItemDataStorageProvider.getItems().then(
        result => {
          this.items = result;
          this.dataError = null;
        },
        error => this.dataError = 'Возникла ошибка при загрузке товаров.'
      );
    } else {
      this.items = fetchedData;
    }
  }

  /**
   * Переход на страницу с детальными данными выбранного товара
   * @param {Item} chosenItem - выбранный товар
   */
  goItemDetail(chosenItem: Item): void {
    this.navCtrl.push(ItemDetailsPage, {chosenItem: chosenItem});
  }

  /**
   * Открывает окно с фильтром
   */
  openFilter(): void {
    if (!this.filterData) {
      const types: string[] = this.items
        .map(item => item.type)
        .filter((item, pos, arr) => arr.indexOf(item) === pos);
      const maxPrice: number = Math.max(...this.items.map(item => item.price));

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

    const filter: Modal = this.modalCtrl.create('FilterPage', {dataToFilter: this.filterData});

    filter.present();

    filter.onWillDismiss((dataFromFilter: FilterData | undefined) => {
      if (dataFromFilter) {
        this.filterData = dataFromFilter;
        this.filterItems();
      }
    });
  }

  /**
   * Фильтрование товаров по заданным параметрам
   */
  filterItems(): void {
    const allItems = this.ItemDataStorageProvider.returnItems();
    this.items = allItems.filter(item =>
      (this.filterData.values.type ? item.type === this.filterData.values.type : true)
      &&
      this.filterBySeason(item.season, this.filterData.values.season)
      &&
      (this.filterData.values.availability ? item.availability === this.filterData.values.availability : true)
      &&
      item.price >= this.filterData.values.priceRange.lower && item.price <= this.filterData.values.priceRange.upper
    );

    if (!this.items.length) {
      this.dataError = 'Нет товаров с выбранными условиями';
    } else {
      this.dataError = null;
    }
  }

  /**
   * Возвращает результат проверки наличия отмеченных сезонов в фильтре в характеристике товара
   * @param {string[]} itemSeasons - массив значений сезонов товара
   * @param {Seasons} filterSeasons - объект с выбранными значениями сезонов в фильтре
   * @returns {boolean} - true/false - все значения фильтра есть в товаре/хотя бы одного нет
   */
  filterBySeason(itemSeasons: string[], filterSeasons: Seasons): boolean {
    const seasonsArr = [];
    for (let seasonKey in filterSeasons) {
      if (filterSeasons[seasonKey] === true) {
        seasonsArr.push(seasonKey);
      }
    }
    if (!seasonsArr.length) {
      return true;
    }
    const result = seasonsArr.map(item => itemSeasons.indexOf(item));
    return result.indexOf(-1) === -1;
  }
}
