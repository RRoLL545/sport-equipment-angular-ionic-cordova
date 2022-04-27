import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DataNativeStorageProvider } from '../providers/data-native-storage/data-native-storage';
import { ItemDataStorageProvider } from '../providers/item-data-storage/item-data-storage';
import { HomePageModule } from '../pages/home/home.module';
import { BookedPage } from '../pages/booked/booked';
import { ContactInfoPage } from '../pages/contact-info/contact-info';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ItemBookingPage } from '../pages/item-booking/item-booking';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    BookedPage,
    ContactInfoPage,
    ItemDetailsPage,
    ItemBookingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь' ],
      monthShortNames: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек' ],
      dayNames: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье' ],
      dayShortNames: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс' ],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookedPage,
    ContactInfoPage,
    ItemDetailsPage,
    ItemBookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemDataStorageProvider,
    NativeStorage,
    DataNativeStorageProvider
  ]
})
export class AppModule {
}
