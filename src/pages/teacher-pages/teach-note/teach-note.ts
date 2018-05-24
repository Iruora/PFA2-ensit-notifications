import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teach-note',
  templateUrl: 'teach-note.html',
})
export class TeachNotePage {
  public optionIn: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Note"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachNotePage');
  }

}
