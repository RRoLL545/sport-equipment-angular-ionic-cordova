import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { FilterData } from '../../app/models/filterData';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
  /**
   * Данные фильтра
   * @type {FilterData}
   */
  public filterData: FilterData;

  constructor(public navParams: NavParams, private view: ViewController) {
    this.filterData = this.navParams.get('dataToFilter');
  }

  /**
   * Закрывает окно с фильтром
   */
  closeFilter(): void {
    this.view.dismiss();
  }

  /**
   * Закрывает окно с фильтром и передаёт данные о выбранных настройках
   */
  applyFilter(): void {
    this.view.dismiss(this.filterData);
  }

  /**
   * Применяет к фильтру значения по умолчанию
   */
  clearFilter(): void {
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
  }
}
