import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachChangementSallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-changement-salle',
  templateUrl: 'teach-changement-salle.html',
})
export class TeachChangementSallePage {
  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Changement de salle";
  }

  ionViewDidLoad() {
    
  }

}
