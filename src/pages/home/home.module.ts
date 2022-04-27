import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ItemCardComponentModule } from '../../components/item.card.component.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    ItemCardComponentModule
  ]
})
export class HomePageModule {
}
