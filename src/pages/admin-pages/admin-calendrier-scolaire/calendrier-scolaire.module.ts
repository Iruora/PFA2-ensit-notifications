import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendrierScolairePage } from './calendrier-scolaire';

@NgModule({
  declarations: [
    CalendrierScolairePage,
  ],
  imports: [
    IonicPageModule.forChild(CalendrierScolairePage),
  ],
})
export class CalendrierScolairePageModule {}
