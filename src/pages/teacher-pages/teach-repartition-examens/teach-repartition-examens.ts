import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachRepartitionExamensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-repartition-examens',
  templateUrl: 'teach-repartition-examens.html',
})
export class TeachRepartitionExamensPage {
  public optionIn: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Répartition des examens"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachRepartitionExamensPage');
  }

}
