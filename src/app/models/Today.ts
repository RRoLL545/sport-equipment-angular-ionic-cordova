/**
 * Данные по работе организации на сегодня и следующий рабочий день
 */
export interface Today {
  /**
   * Время открытия сегодня
   */
  openTime: string;

  /**
   * Время закрытия сегодня
   */
  closeTime: string;

  /**
   * Время сейчас
   */
  currentTime: Date;

  /**
   * Идентификатор сегодняшнего дня
   */
  weekDayId: number;

  /**
   * Идентификатор следующего рабочего дня
   */
  nextWorkingDayId: number;

  /**
   * Дата следующего рабочего дня
   */
  nextWorkingDayDate: string;

  /**
   * Время открытия организации, если на текущий момент она закрыта
   */
  openTimeIfClosed: string;

  /**
   * Работает ли сейчас организация
   */
  isOpened: boolean;
}
