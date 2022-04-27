/**
 * Структура расписания работы организации
 */
export interface Schedule {
  /**
   * Сокращённое название дня недели
   */
  day: string;

  /**
   * Время открытия в этот день
   */
  openTime: string;

  /**
   * Время закрытия в этот день
   */
  closeTime: string;

  /**
   * Выходной день в этот день
   */
  isDayOff: boolean;
}
