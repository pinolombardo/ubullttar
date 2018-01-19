import { Component } from '@angular/core';
import { PronosticiPage } from '../pronostici/pronostici';
import { MultiplePage } from '../multiple/multiple';
import { HomePage } from '../home/home';
import { BasketPage} from '../basket/basket';
import {ProgressionePage} from'../progressione/progressione';
import{VincitePage} from '../vincite/vincite';
import{BonusPage} from '../bonus/bonus';
import { ScrollableTabs } from '../../components/scrollable-tabs/scrollable-tabs';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PronosticiPage;
  tab3Root = MultiplePage; 
  tab4Root=  BasketPage;
  tab5Root= ProgressionePage;
  tab6Root=VincitePage;
  tab7Root=BonusPage;
  tabsColor: string = "Default";
  tabsMode: string = "ios";
  tabsPlacement: string = "top";

  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};

  constructor(private toastCtrl: ToastController) {
  }

  ionViewDidEnter() {

  }

  refreshScrollbarTabs() {
    this.scrollableTabsopts = { refresh: true };    
  }

  presentChangeOrendationToast() {
    let toast = this.toastCtrl.create({
      message: 'Rotate screen to rerendering.',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
