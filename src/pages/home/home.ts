import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts: Array<any>; 

  constructor(public navCtrl: NavController, private restProvider : RestProvider,public loading: LoadingController) {

  }

  getPosts() {
    {
        this.restProvider.getData().subscribe(
            data => {
                this.posts = data.posts; 
                console.log(data); 
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
       this.restProvider.getData().subscribe(
        data => {
           this.posts = data.posts; 
          console.log(data); 
     });
    
     });
   
   //  loader.dismiss();

  }

}
