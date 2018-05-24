import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'teach-home',
  templateUrl: 'teach-home.html'
})
export class TeacherHomePage {
  public optionIn: string
  constructor(public navCtrl: NavController) {
    this.optionIn = "all"
  }

}
