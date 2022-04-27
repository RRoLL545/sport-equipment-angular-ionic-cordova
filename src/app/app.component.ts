import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BookedPage } from '../pages/booked/booked';
import { ContactInfoPage } from '../pages/contact-info/contact-info';

interface Page {
  title: string;
  component: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  /**
   * Корневая страница - страница, которая будет показана при загрузке приложения
   * @type {any}
   */
  rootPage: any = HomePage;

  /**
   * Список страниц - список страниц, которые участвуют в навигации по бургер-меню
   * @type {Page[]}
   */
  pages: Page[];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController) {

    this.pages = [
      {title: 'Домашняя', component: HomePage},
      {title: 'Забронированные товары', component: BookedPage},
      {title: 'Контакты', component: ContactInfoPage}
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * Закрывает меню и переходит на выбранную страницу приложения
   * @param {Page} page - страница на которую будет осуществлён переход
   */
  navTo(page: Page): void {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
