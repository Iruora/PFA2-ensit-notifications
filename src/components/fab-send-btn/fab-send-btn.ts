import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendNotificationFormPage } from '../../pages/send-notification-form/send-notification-form';

/**
 * Generated class for the FabSendBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fab-send-btn',
  templateUrl: 'fab-send-btn.html'
})
export class FabSendBtnComponent {

  constructor(public navCtrl: NavController) {

  }
  goToNotificationForm() {
   this.navCtrl.push(SendNotificationFormPage);
  }
}
