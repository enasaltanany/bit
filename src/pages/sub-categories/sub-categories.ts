import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SubCategoryProvider } from "../../providers/sub-category/sub-category";
/**
 * Generated class for the SubCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sub-categories',
  templateUrl: 'sub-categories.html',
})
export class SubCategoriesPage {
  public categoryData:any;
  loading :boolean = true;
  public data :any

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service :SubCategoryProvider,
    public http: HttpClient) {
    }
    
    ngOnInit(){
      this.dataService();
    }

    async dataService(){
      this.data = await this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').toPromise();
      this.loading= false;
      console.log("data",this.data)
    return this.data;
    }
    
  
    // populate(){
      //   this.service.dataService().then((allCategories) => {
        //     allCategories.forEach((category) => {
          //       this.categoryData=category
    //       console.log("catDataaaaaaaaa",this.categoryData)
    //       this.loading=false;
    //     })
    //   });
    // }

}
