import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmploieTempsPage } from './emploie-temps';

@NgModule({
  declarations: [
    EmploieTempsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmploieTempsPage),
  ],
})
export class EmploieTempsPageModule {}
