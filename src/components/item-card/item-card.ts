import { Component, Input } from '@angular/core';
import { Item } from '../../app/models/Item';

@Component({
  selector: 'item-card',
  templateUrl: 'item-card.html'
})
export class ItemCardComponent {
  /**
   * Данные о товаре для отображения в карточке
   * @type {Item}
   */
  @Input() itemCardData: Item;

  constructor() {
  }
}
