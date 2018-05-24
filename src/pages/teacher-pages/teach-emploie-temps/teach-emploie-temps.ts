import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachEmploieTempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-emploie-temps',
  templateUrl: 'teach-emploie-temps.html',
})
export class TeachEmploieTempsPage {
  public optionIn: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Emploie du temps"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachEmploieTempsPage');
  }

}
