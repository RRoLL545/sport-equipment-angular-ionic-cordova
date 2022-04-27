import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { ItemDataStorageProvider } from '../../providers/item-data-storage/item-data-storage';
import { ItemBookingData } from '../../app/models/ItemBookingData';
import { Item } from '../../app/models/Item';
import { DataNativeStorageProvider } from '../../providers/data-native-storage/data-native-storage';

@Component({
  selector: 'page-booked',
  templateUrl: 'booked.html'
})
export class BookedPage {
  /**
   * Список товаров
   * @type {Item[]}
   */
  public items: Item[];

  /**
   * Забронированные товары
   * @type {ItemBookingData[]}
   */
  public bookedItems: ItemBookingData[];

  /**
   * Есть ли в localeStorage товары
   * @type {boolean}
   */
  public areBookedItemsInStorage: boolean;

  /**
   * Сообщение, если забронированных товаров нет
   * @type {string}
   */
  public noBookedItemsInfo: string = 'Забронированных товаров нет!';

  constructor(public alertCtrl: AlertController,
              public itemDataStorageProvider: ItemDataStorageProvider,
              public dataNativeStorageProvider: DataNativeStorageProvider) {

    this.items = this.itemDataStorageProvider.returnItems();

    this.dataNativeStorageProvider.getBookedItems().then(
      result => {
        this.bookedItems = result;
        this.areBookedItemsInStorage = true;
      },
      () => {
        this.areBookedItemsInStorage = false;
      }
    );
  }

  /**
   * Процесс отмены бронирования выбранного товара с выбранной даты после подтверждения
   * @param {number} id - идентификатор товара
   * @param {string} date - дата бронирования
   */
  confirmedUnBook(id: number, date: string): void {
    const itemIndex = this.bookedItems.findIndex(item => item.id === id);
    const dateIndex: number = this.bookedItems[itemIndex].dates.findIndex(item => item === date);
    this.bookedItems[itemIndex].dates.splice(dateIndex, 1);
    if (!this.bookedItems[itemIndex].dates.length) {
      this.bookedItems.splice(itemIndex, 1);
    }
    if (!this.bookedItems.length) {
      this.areBookedItemsInStorage = false;
    }
    this.dataNativeStorageProvider.setBookedItems(this.bookedItems).then(
      () => {
      },
      () => {
        this.bookedItems[itemIndex].dates.push(date);
        const alert = this.alertCtrl.create({
          title: 'Ошибка удаления!',
          subTitle: 'Попробуйте ещё раз позже.',
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  /**
   * Отмена бронирования выбранного товара с выбранной даты
   * @param {number} id - идентификатор товара
   * @param {string} date - дата бронирования
   */
  unBook(id: number, date: string): void {
    const confirm = this.alertCtrl.create({
      title: 'Подтвердите',
      message: 'Вы действительно хотите отменить бронирование?',
      buttons: [
        {
          text: 'Да',
          handler: () => {
            this.confirmedUnBook(id, date);
          }
        },
        {
          text: 'Нет',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * Получает строку со значением ключа из объекта с товарами по идентификатору товара
   * @param {number} id - идентификатор товара
   * @param {string} key - значение ключа, данные которого нужно получить
   * @returns {string} - строка со значением ключа
   */
  getItemKeyValue(id: number, key: string): string {
    const itemIndex = this.items.findIndex(item => item.id === id);
    return this.items[itemIndex][key];
  }
}
