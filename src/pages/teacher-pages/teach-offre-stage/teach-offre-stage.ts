import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachOffreStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-offre-stage',
  templateUrl: 'teach-offre-stage.html',
})
export class TeachOffreStagePage {
  public optionIn: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Offre de stage"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachOffreStagePage');
  }

}
