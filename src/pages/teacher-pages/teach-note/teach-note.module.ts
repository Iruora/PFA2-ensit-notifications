import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeachNotePage } from './teach-note';

@NgModule({
  declarations: [
    TeachNotePage,
  ],
  imports: [
    IonicPageModule.forChild(TeachNotePage),
  ],
})
export class TeachNotePageModule {}
