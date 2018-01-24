import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InfoPage } from '../info/info';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-bonus',
  templateUrl: 'bonus.html',
})
export class BonusPage {      
  
  posts: any; 

  constructor(public navCtrl: NavController, private restProvider : RestProvider,public loading: LoadingController,private sanitizer: DomSanitizer) {

  }

  getPosts() {
    {
        this.restProvider.getDataBonus().subscribe(
            data => {
                this.posts =this.sanitizer.bypassSecurityTrustHtml(data.page.content);
                console.log(data); 
                console.log(data.page.content);
            },
            err => {
                console.log(err);
            },
            () => console.log('Data Search Complete')
        );
    }
  }  

  selectPost(event, post) {
    console.log(post);  
    this.navCtrl.push(InfoPage, {
        post: post
    });
  }

  ngOnInit() {
    this.getPosts();
  }
  
  ionViewDidLoad() {
  
   
    let loader = this.loading.create({
      content: '',
      duration: 3000
     });   
   
     loader.present().then(() => {
       this.restProvider.getDataBonus().subscribe(
        data => {
          this.posts =this.sanitizer.bypassSecurityTrustHtml(data.page.content);
          console.log(data); 
          console.log(data.page.content);
     });
    
     });
   
   //  loader.dismiss(); 

  }
}
