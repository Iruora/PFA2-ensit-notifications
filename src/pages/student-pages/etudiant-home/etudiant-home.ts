import { Component } from '@angular/core';
import { Token } from '@angular/compiler';
import { NavController } from 'ionic-angular';
//import { RecieveNotificationProvider } from '../providers'

@Component({
  selector: 'etudiant-home',
  templateUrl: 'etudiant-home.html'
})
export class EtudiantHomePage {
  public optionIn: string;
  constructor(private navCtrl: NavController) {
    this.optionIn = "all";
  }
}
