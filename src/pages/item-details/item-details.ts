import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Item } from '../../app/models/Item';
import { ItemBookingPage } from '../item-booking/item-booking';
import { ItemBookingData } from '../../app/models/ItemBookingData';
import { DataNativeStorageProvider } from '../../providers/data-native-storage/data-native-storage';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  /**
   * Переданные данные о выбранном товаре
   * @type {Item}
   */
  public chosenItem: Item;

  /**
   * Массив со строками дат, на которые забронирован выбранный товар
   * @type {string[]}
   */
  public bookedDates: string[];

  /**
   * Забронирован ли товар true/false да/нет
   * @type {boolean}
   */
  public isBooked: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataNativeStorageProvider: DataNativeStorageProvider) {
    this.chosenItem = this.navParams.get('chosenItem');

    this.dataNativeStorageProvider.getBookedItems().then(
      result => {
        const chosenItemBookData: ItemBookingData[] = result.filter(item => item.id === this.chosenItem.id);
        if (chosenItemBookData.length) {
          this.bookedDates = chosenItemBookData[0].dates;
          this.isBooked = true;
        } else {
          this.isBooked = false;
        }
      },
      () => {
        this.isBooked = false;
      }
    );
  }

  /**
   * Переход на страницу резервирования
   * @param {Item} bookItem - товар для резервирования
   */
  goItemBook(bookItem: Item): void {
    this.navCtrl.push(ItemBookingPage, {bookItem: bookItem});
  }
}
