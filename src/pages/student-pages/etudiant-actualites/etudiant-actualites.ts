import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtudiantActualitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etudiant-actualites',
  templateUrl: 'etudiant-actualites.html',
})
export class EtudiantActualitesPage {

  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Actualité";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtudiantActualitesPage');
  }

}
