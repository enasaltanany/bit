import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SubCategoriesPage} from "../sub-categories/sub-categories";
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  goToSubCat(){
   this.navCtrl.push(SubCategoriesPage)
  }

}
