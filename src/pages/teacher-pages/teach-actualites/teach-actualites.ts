import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachActualitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-actualites',
  templateUrl: 'teach-actualites.html',
})
export class TeachActualitesPage {
  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Actualité"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachActualitesPage');
  }

}
