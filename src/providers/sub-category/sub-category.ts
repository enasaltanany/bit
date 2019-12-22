import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SubCategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubCategoryProvider {
  public data :any
  constructor(public http: HttpClient) {
  }

//  async dataService(){
//     this.data = await this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').toPromise();
//   return this.data;
//   }
  
}
