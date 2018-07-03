import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SinginPage } from '../pages/singin/singin';
import { SignupPage } from '../pages/signup/signup';
import firebase from 'firebase';
import { AuthService } from '../services/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  signinPage = SinginPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService: AuthService) {
      firebase.initializeApp({
       
        apiKey: "AIzaSyD80jwlDBeRJ6wqq2ZibuvGV1Zm1Y2MUWQ",
        authDomain: "week6-69d3f.firebaseapp.com"
       
      })
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.isAuthenticated = true;
          this.rootPage = TabsPage;
        }else{
          this.isAuthenticated =false;
          this.rootPage = SinginPage;
        }
      });
    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SinginPage);
  }
}

