import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtudiantNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etudiant-note',
  templateUrl: 'etudiant-note.html',
})
export class EtudiantNotePage {

  public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Note";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtudiantNotePage');
  }

}
