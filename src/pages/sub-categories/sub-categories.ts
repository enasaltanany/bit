import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SubCategoryProvider } from "../../providers/sub-category/sub-category";
import { DetailsPage } from "../details/details";
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
  food: string 
  added: boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service :SubCategoryProvider,
    public http: HttpClient) {
      this.food = "Meats";
    }
    
    ngOnInit(){
      this.dataService();
    }

    /**
     * calling the endpoint
     * close the loading when data is ready to be displayed
     * return endpoind data
     */
    async dataService(){
      this.data = await this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').toPromise();
      this.loading= false;
      return this.data;
    }

    /**
     * switch between add icon and "added" icon
     */
    toggleAdded(): void {
      this.added = !this.added;
    }
    
    /**
     * 
     * @param clickedProduct 
     * navigates to details page case click
     */
    cardClicked(clickedProduct){
      this.navCtrl.push(DetailsPage,{item:clickedProduct})
    }


  // populate(){
  //   this.service.dataService().then((allCategories) => {
  //   allCategories.forEach((category) => {
  //     this.categoryData=category
  //     this.loading=false;
  //     })
  //   });
  // }

}
