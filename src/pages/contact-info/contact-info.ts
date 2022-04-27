import { Component } from '@angular/core';
import { Schedule } from '../../app/models/Schedule';
import { Today } from '../../app/models/Today';

@Component({
  selector: 'page-contact-info',
  templateUrl: 'contact-info.html'
})
export class ContactInfoPage {
  /**
   * Телефонный номер организации
   * @type {string}
   */
  public phoneNumber: string;

  /**
   * Телефонный номер организации для функции звонка
   * @type {string}
   */
  public purePhoneNumber: string;

  /**
   * Виден ли контент
   * @type {boolean}
   */
  public isVisible: boolean;

  /**
   * Режим работы
   * @type {Schedule[]}
   */
  public schedule: Schedule[];

  /**
   * Данные по работе организации на сегодня
   * @type {Today}
   */
  public today: Today;

  constructor() {
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

    const todayDate = this.today.currentTime.getDate();
    const daysIdGap = this.today.nextWorkingDayId - this.today.weekDayId;
    const daysGap = daysIdGap >= 1 ? daysIdGap : daysIdGap + 7;
    const nextWorkDayDate = new Date(this.today.currentTime);
    nextWorkDayDate.setDate(todayDate + daysGap);
    this.today.nextWorkingDayDate = nextWorkDayDate.toLocaleDateString();

    if (this.schedule[this.today.weekDayId].isDayOff) {
      this.today.isOpened = false;
      this.today.openTimeIfClosed = this.schedule[this.today.nextWorkingDayId].openTime;
    } else {
      const currentMinutes = this.getMinutes(this.today.currentTime);
      const beginMinutes = this.getMinutes(this.today.openTime);
      const endMinutes = this.getMinutes(this.today.closeTime);
      if (currentMinutes < beginMinutes) {
        this.today.isOpened = false;
        this.today.openTimeIfClosed = this.today.openTime;
        this.today.nextWorkingDayDate = '';
      } else if (currentMinutes >= endMinutes) {
        this.today.isOpened = false;
        this.today.openTimeIfClosed = this.schedule[this.today.nextWorkingDayId].openTime;
      } else {
        this.today.isOpened = true;
      }
    }
  }

  /**
   * Возвращает переведённое в минуты значение времени
   * @param {Date | string} time - строка со временем вида чч:мм
   * @returns {number} - количество минут
   */
  getMinutes(time: Date | string): number {
    let timeArr: string[];
    if (typeof time === 'string') {
      timeArr = time.split(':');
    } else {
      timeArr = time
        .toLocaleTimeString('ru-Ru', {hour12: false})
        .split(':');
    }
    return parseInt(timeArr[0], 10) * 60 + parseInt(timeArr[1], 10);
  }

  /**
   * Возвращает идентификатор следующего за сегодняшним рабочего дня
   * @param {number} todayId - идентификатор сегодняшнего дня
   * @returns {number} - идентификатор следующего рабочего дня
   */
  getNextDayId(todayId: number): number {
    let nextDayId = todayId + 1;
    while (true) {
      if (nextDayId === 7) {
        nextDayId = 0;
      }
      if (this.schedule[nextDayId].isDayOff) {
        nextDayId++;
      } else {
        return nextDayId;
      }
    }
  }
}
