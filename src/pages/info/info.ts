import { Component,PipeTransform, Pipe } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
 
    post: {};  
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.post = navParams.get('post');
    }
 
}