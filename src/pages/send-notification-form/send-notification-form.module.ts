import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendNotificationFormPage } from './send-notification-form';

@NgModule({
  declarations: [
    SendNotificationFormPage,
  ],
  imports: [
    IonicPageModule.forChild(SendNotificationFormPage),
  ],
})
export class SendNotificationFormPageModule {}
