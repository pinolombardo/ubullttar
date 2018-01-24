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

  posts: Array<any>;
    
  constructor(public navCtrl: NavController, private restProvider : RestProvider,public loading: LoadingController,private sanitizer: DomSanitizer) {

  }

  goToSlide() {
    this.slides.slideTo(2, 500); 
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  getPosts() { 
    {
        this.restProvider.getDataVincite().subscribe(
            data => {
                this.posts = data.page.attachments; 
                console.log(data.page.attachments); 
            },
            err => {
                console.log(err);
            },
            () => console.log('Fc Search Complete')
        );
    }
  }

  ionViewDidLoad() {  
   
    let loader = this.loading.create({
      content: '',
      duration: 3000
     });
   
   
     loader.present().then(() => { 
       this.restProvider.getDataVincite().subscribe(
        data => {
          this.posts = data.page.attachments; 
          console.log(data.page.attachments); 
     });
    
     });
   
   //  loader.dismiss();
   }

}
