import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtudiantOffreDeStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etudiant-offre-de-stage',
  templateUrl: 'etudiant-offre-de-stage.html',
})
export class EtudiantOffreDeStagePage {

  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Offre de stage";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtudiantOffreDeStagePage');
  }

}
