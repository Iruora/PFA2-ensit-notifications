import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowNotificationDetailPage } from './show-notification-detail';

@NgModule({
  declarations: [
    ShowNotificationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowNotificationDetailPage),
  ],
})
export class ShowNotificationDetailPageModule {}
