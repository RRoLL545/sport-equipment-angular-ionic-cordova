import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Item } from '../../app/models/Item';
import { Message } from '../../app/models/Message';
import { ItemBookingData } from '../../app/models/ItemBookingData';
import { DataNativeStorageProvider } from '../../providers/data-native-storage/data-native-storage';

@Component({
  selector: 'page-item-booking',
  templateUrl: 'item-booking.html'
})
export class ItemBookingPage {
  /**
   * Текущая дата
   * @type {string}
   */
  public currentDate: string;

  /**
   * Дата для бронирования
   * @type {string}
   */
  public bookDate: string;

  /**
   * Товар для бронирования
   * @type {Item}
   */
  public bookItem: Item;

  /**
   * Информация о результатах действий при бронировании
   * @type {Message}
   */
  public bookingMessage: Message;

  /**
   * Массив забронированных товаров
   * @type {ItemBookingData}
   */
  public currentStorage: ItemBookingData[] | undefined;

  constructor(public navParams: NavParams,
              public dataNativeStorageProvider: DataNativeStorageProvider) {

    const today: Date = new Date();
    this.currentDate = today.toLocaleDateString().split('.').reverse().join('-');
    this.bookDate = this.currentDate;

    this.bookItem = this.navParams.get('bookItem');

    this.bookingMessage = {
      messageText: '',
      isWarning: false
    };

    this.dataNativeStorageProvider.getBookedItems().then(
      result => {
        this.currentStorage = result;
      },
      () => {}
    );
  }

  /**
   * Бронирование товара
   */
  bookProcess(): void {
    if (!this.currentStorage) {
      this.currentStorage = [
        {
          id: this.bookItem.id,
          dates: [this.bookDate]
        }
      ];
      this.dataNativeStorageProvider.setBookedItems(this.currentStorage)
        .then(
          () => this.setMessage(
            `Товар ${this.bookItem.title} успешно забронирован на ${this.bookDate}!`,
            false
          ),
          () => this.setMessage(
            `Ошибка при бронировании! Повторите операцию.`,
            true
          )
        );
      return;
    }

    const itemIndex = this.currentStorage.findIndex(item => item.id === this.bookItem.id);
    if (itemIndex === -1) {
      this.currentStorage.push({
        id: this.bookItem.id,
        dates: [this.bookDate]
      });
      this.dataNativeStorageProvider.setBookedItems(this.currentStorage)
        .then(
          () => this.setMessage(
            `Товар ${this.bookItem.title} успешно забронирован на ${this.bookDate}!`,
            false
          ),
          () => this.setMessage(
            `Ошибка при бронировании! Повторите операцию.`,
            true
          )
        );
    } else {
      const bookedDates: string[] = this.currentStorage[itemIndex].dates;
      const dateIndex: number = bookedDates.findIndex(item => item === this.bookDate);
      if (dateIndex === -1) {
        this.currentStorage[itemIndex].dates.push(this.bookDate);
        this.dataNativeStorageProvider.setBookedItems(this.currentStorage)
          .then(
            () => this.setMessage(
              `Товар ${this.bookItem.title} успешно забронирован на ${this.bookDate}!`,
              false
            ),
            () => this.setMessage(
              `Ошибка при бронировании! Повторите операцию.`,
              true
            )
          );

      } else {
        this.setMessage(
          `Товар ${this.bookItem.title} на ${this.bookDate} уже был забронирован ранее!`,
          true
        );
      }
    }
  }

  /**
   * Сообщает предупреждающее ли сообщение пользователю, чтобы повесить на элемент DOM соответствующий класс
   * @returns {boolean} - true/false - да/нет
   */
  isWarningMessage(): boolean {
    return this.bookingMessage.isWarning;
  }

  /**
   * Устанавливает значение текста сообщения пользователю
   * @param {string} messageText - текст сообщения
   * @param {boolean} warning - true/false - предупреждающее/нет
   */
  setMessage(messageText: string, warning: boolean): void {
    this.bookingMessage.messageText = messageText;
    this.bookingMessage.isWarning = warning;
  }
}
