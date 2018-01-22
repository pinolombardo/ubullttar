import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';


@Injectable()
export class RestProvider {

  constructor(private http: Http) {
    
  }

  getData() {
    var url = 'https://www.ubullttar.it/?json=get_posts&count=20';
    var response = this.http.get(url).map(res => res.json());
    console.log(response);
    return response;    
      }     

  getDataProno() {
     var url = 'https://www.ubullttar.it/?json=get_category_posts&category_id=31&count=20';
     var response = this.http.get(url).map(res => res.json());
     console.log(response);
     return response;   
      }
            
   getDataMultiple() {
        var url = 'https://www.ubullttar.it/?json=get_category_posts&category_id=32&count=20';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;   
      }

    getDataBasket() {
        var url = 'https://www.ubullttar.it/?json=get_category_posts&category_id=36&count=20';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;   
      }
      
      getDataProgressione() {
        var url = 'https://www.ubullttar.it/?json=get_category_posts&category_id=405&count=20';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;
      }

      getDataVincite() {
        var url = 'https://www.ubullttar.it/?json=get_page&page_id=1815'; 
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;
      }

      getDataBonus() {
        var url = 'https://www.ubullttar.it/?json=get_page&page_id=1815';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response; 
      }

}


 