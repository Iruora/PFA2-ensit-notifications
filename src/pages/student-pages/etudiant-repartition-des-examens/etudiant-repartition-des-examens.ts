import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtudiantRepartitionDesExamensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etudiant-repartition-des-examens',
  templateUrl: 'etudiant-repartition-des-examens.html',
})
export class EtudiantRepartitionDesExamensPage {

  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Répartition des examens";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtudiantRepartitionDesExamensPage');
  }

}
