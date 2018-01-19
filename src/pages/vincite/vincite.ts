import { Component,ViewChild } from '@angular/core';
import { NavController,LoadingController,Slides } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InfoPage } from '../info/info';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-vincite',
  templateUrl: 'vincite.html',
})
export class VincitePage {    
  
  @ViewChild(Slides) slides: Slides;
    
  constructor(public navCtrl: NavController, private restProvider : RestProvider,public loading: LoadingController,private sanitizer: DomSanitizer) {

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

}
