import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from '../../app/models/Item';

@Injectable()
export class ItemDataStorageProvider {
  /**
   * Список товаров
   * @type {Item[]}
   */
  public items: Item[];

  constructor(public http: HttpClient) {
  }

  /**
   * Возвращает промис, который получает данные по товарам из json, присваивает свойству класса
   * @returns {Observable<any>}
   */
  getItems(): Promise<Item[]> {
    const url: string = 'assets/items.json';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (result: Item[]) => {
          this.items = result;
          resolve(result);
        },
        error => {
          reject();
        }
      );
    });
  }

  /**
   * Возвращает массив с данными о товарах
   * @returns {Item[]}
   */
  returnItems(): Item[] {
    return this.items;
  }
}
