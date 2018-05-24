import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachCoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-cours',
  templateUrl: 'teach-cours.html',
})
export class TeachCoursPage {
  public optionIn: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Cours"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachCoursPage');
  }

}
