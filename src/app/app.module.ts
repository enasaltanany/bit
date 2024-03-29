import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesPage} from "../pages/categories/categories";
import { SubCategoriesPage } from "../pages/sub-categories/sub-categories";
import { SubCategoryProvider } from '../providers/sub-category/sub-category';
import { DetailsPage  } from "../pages/details/details";
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    SubCategoriesPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    SubCategoriesPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SubCategoryProvider
  ]
})
export class AppModule {}
