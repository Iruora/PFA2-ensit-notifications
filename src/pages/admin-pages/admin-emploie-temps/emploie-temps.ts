import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmploieTempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emploie-temps',
  templateUrl: 'emploie-temps.html',
})
export class EmploieTempsPage {
  public optionIn: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Emploie du temps"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmploieTempsPage');
  }

}
