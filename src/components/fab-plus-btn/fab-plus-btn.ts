import { AddUserPage } from '../../pages/admin-pages/add-user/add-user';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the FabPlusBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fab-plus-btn',
  templateUrl: 'fab-plus-btn.html'
})
export class FabPlusBtnComponent {

  text: string;

  constructor(public navCtrl : NavController) {
    console.log('Hello FabPlusBtnComponent Component');
    this.text = 'Hello World';
  }

  goToAddUser() {
    this.navCtrl.push(AddUserPage);
  }
}
