import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifUserPage } from './modif-user';

@NgModule({
  declarations: [
    ModifUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifUserPage),
  ],
})
export class ModifUserPageModule {}
