import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public inAppBrowser: InAppBrowser,
  ) {

  }

  launch(url) {
    this.platform.ready().then(() => {
      this.inAppBrowser.create(url, '_system');
    });
  }
}
