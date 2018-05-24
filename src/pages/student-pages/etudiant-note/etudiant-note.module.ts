import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtudiantNotePage } from './etudiant-note';

@NgModule({
  declarations: [
    EtudiantNotePage,
  ],
  imports: [
    IonicPageModule.forChild(EtudiantNotePage),
  ],
})
export class EtudiantNotePageModule {}
