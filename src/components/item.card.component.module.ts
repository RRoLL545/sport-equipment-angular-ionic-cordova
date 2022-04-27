import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ItemCardComponent],
  imports: [IonicPageModule.forChild(ItemCardComponent)],
  exports: [ItemCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemCardComponentModule {
}
