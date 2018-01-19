import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';

import { PronosticiPage } from '../pages/pronostici/pronostici';
import { MultiplePage } from '../pages/multiple/multiple';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { BasketPage } from '../pages/basket/basket';
import{ProgressionePage} from '../pages/progressione/progressione';
import{VincitePage} from '../pages/vincite/vincite';
import{BonusPage} from '../pages/bonus/bonus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { Settings } from '../pages/settings/settings';
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';


@NgModule({
  declarations: [
    MyApp,
    PronosticiPage,
    MultiplePage,
    HomePage,
    TabsPage,
    InfoPage,
    BasketPage,
    Settings,
    ProgressionePage,
    VincitePage,
    BonusPage,
    ScrollableTabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back' ,
      backButtonText: '',
      pageTransition: 'md-transition',
      activator: 'ripple',
      mode: 'md',
      tabsPlacement: 'top', 
      tabsHideOnSubPages: true,
      tabsHighlight : true
    }),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PronosticiPage,
    MultiplePage,
    HomePage,
    TabsPage,
    InfoPage,
    BasketPage,
    ProgressionePage,
    VincitePage,
    BonusPage,
    Settings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
