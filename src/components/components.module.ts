import { NgModule } from '@angular/core';
import { FabSendBtnComponent } from './fab-send-btn/fab-send-btn';
import { IonicModule } from 'ionic-angular';
import { NotificationsListComponent } from './notifications-list/notifications-list';
import { FabPlusBtnComponent } from './fab-plus-btn/fab-plus-btn';
import { UserListComponent } from './user-list/user-list';
import { StrudentNotificationsListComponent } from './student-notifications-list/student-notifications-list';
@NgModule({
	declarations: [FabSendBtnComponent,
		NotificationsListComponent,
		FabPlusBtnComponent,
		UserListComponent,
		StrudentNotificationsListComponent],
	imports: [IonicModule],
	exports: [FabSendBtnComponent,
		NotificationsListComponent,
		FabPlusBtnComponent,
		UserListComponent,
		StrudentNotificationsListComponent]
})
export class ComponentsModule { }
