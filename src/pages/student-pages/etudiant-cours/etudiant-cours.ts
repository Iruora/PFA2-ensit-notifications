import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtudiantCoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etudiant-cours',
  templateUrl: 'etudiant-cours.html',
})
export class EtudiantCoursPage {

  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Cours";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtudiantCoursPage');
  }

}
