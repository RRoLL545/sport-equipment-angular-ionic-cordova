import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

import { ItemBookingData } from '../../app/models/ItemBookingData';

@Injectable()
export class DataNativeStorageProvider {
  /**
   * Имя ключа для хранения данных в nativeStorage
   * @type {string}
   * @private
   */
  private storageDataKey: string = 'booked-items';

  constructor(public http: HttpClient,
              private nativeStorage: NativeStorage) {
  }

  /**
   * Возвращает Promise, который устанавливает данные о забронированных товарах в хранилище
   * @param {ItemBookingData[]} data - данные о забронированных товарах для установки в хранилище
   * @returns {Promise<void>} - Promise
   */
  setBookedItems(data: ItemBookingData[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.nativeStorage.setItem(this.storageDataKey, data)
        .then(
          () => {
            resolve();
          },
          () => {
            reject();
          }
        );
    });
  }

  /**
   * Возвращает Promise, который забирает данные о забронированных товарах из хранилища
   * @returns {Promise<ItemBookingData[]>} - Promise
   */
  getBookedItems(): Promise<ItemBookingData[]> {
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(this.storageDataKey)
        .then(
          data => {
            resolve(data);
          },
          () => {
            reject();
          }
        );
    });
  }

  /**
   * Возвращает строку с датой в более удобочитаемом виде (дд.ммм.гггг)
   * @param {string} date - строка с датой (гггг-мм-дд)
   * @returns {string} - строка с датой (дд.ммм.гггг)
   */
  showDate(date: string): string {
    const monthNames: string[] = [
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
    const dateArr = date.split('-');
    return `${dateArr[2]}.${monthNames[parseInt(dateArr[1], 10) - 1]}.${dateArr[0]}`;
  }
}
