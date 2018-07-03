import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShoppinglistPage } from '../pages/shoppinglist/shoppinglist';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipePage } from '../pages/recipe/recipe';
import { EditrecipePage } from '../pages/editrecipe/editrecipe';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListService } from '../services/shopping-list';
import { SignupPage } from '../pages/signup/signup';
import { SinginPage } from '../pages/singin/singin';
import { AuthService } from '../services/auth';


@NgModule({
  declarations: [
    MyApp,
    ShoppinglistPage,
    RecipesPage,
    RecipePage,
    EditrecipePage,
    TabsPage,
    SignupPage,
    SinginPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppinglistPage,
    RecipesPage,
    RecipePage,
    EditrecipePage,
    TabsPage,
    SignupPage,
    SinginPage
    
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    AuthService
  ]
})
export class AppModule {}
