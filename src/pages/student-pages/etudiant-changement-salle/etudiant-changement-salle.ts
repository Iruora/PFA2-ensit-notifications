import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtudiantChangementSallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etudiant-changement-salle',
  templateUrl: 'etudiant-changement-salle.html',
})
export class EtudiantChangementSallePage {

 public optionIn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.optionIn = "Changement de salle";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtudiantChangementSallePage');
    
  }

}
