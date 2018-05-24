import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Toast } from '@ionic-native/toast';
import { MyApp } from './app.component';

import { ComponentsModule } from '../components/components.module';
import { ManageNotificationProvider } from '../providers/manage-notification/manage-notification';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ShowNotificationDetailPage } from '../pages/show-notification-detail/show-notification-detail';
import { IonicStorageModule } from '@ionic/storage';

import { Clipboard } from '@ionic-native/clipboard'
import { HomePage } from '../pages/admin-pages/admin-home/home';
import { TeachCoursPage } from '../pages/teacher-pages/teach-cours/teach-cours';
import { TeachChangementSallePage } from '../pages/teacher-pages/teach-changement-salle/teach-changement-salle';
import { TeachEmploieTempsPage } from '../pages/teacher-pages/teach-emploie-temps/teach-emploie-temps';
import { TeachNotePage } from '../pages/teacher-pages/teach-note/teach-note';
import { TeachOffreStagePage } from '../pages/teacher-pages/teach-offre-stage/teach-offre-stage';
import { TeachRepartitionExamensPage } from '../pages/teacher-pages/teach-repartition-examens/teach-repartition-examens';
import { SendNotificationFormPage } from '../pages/send-notification-form/send-notification-form';
import { TeachActualitesPage } from '../pages/teacher-pages/teach-actualites/teach-actualites';
import { TeacherHomePage } from '../pages/teacher-pages/teach-home/teach-home';
import { StudentPage } from '../pages/admin-pages/admin-student/student';
import { TeacherPage } from '../pages/admin-pages/admin-teacher/teacher';
import { RepartitionExamensPage } from '../pages/admin-pages/admin-repartition-examens/repartition-examens';
import { EmploieTempsPage } from '../pages/admin-pages/admin-emploie-temps/emploie-temps';
import { CalendrierScolairePage } from '../pages/admin-pages/admin-calendrier-scolaire/calendrier-scolaire';
import { AddUserPage } from '../pages/admin-pages/add-user/add-user';
import { UserPage } from '../pages/admin-pages/admin-user/user';
import { ModifUserPage } from '../pages/modif-user/modif-user';
import { EtudiantActualitesPage } from '../pages/student-pages/etudiant-actualites/etudiant-actualites';
import { EtudiantChangementSallePage } from '../pages/student-pages/etudiant-changement-salle/etudiant-changement-salle';
import { EtudiantCoursPage } from '../pages/student-pages/etudiant-cours/etudiant-cours';
import { EtudiantEmploiDeTempsPage } from '../pages/student-pages/etudiant-emploi-de-temps/etudiant-emploi-de-temps';
import { EtudiantHomePage } from '../pages/student-pages/etudiant-home/etudiant-home';
import { EtudiantNotePage } from '../pages/student-pages/etudiant-note/etudiant-note';
import { EtudiantOffreDeStagePage } from '../pages/student-pages/etudiant-offre-de-stage/etudiant-offre-de-stage';
import { EtudiantRepartitionDesExamensPage } from '../pages/student-pages/etudiant-repartition-des-examens/etudiant-repartition-des-examens';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { AuthentificationProvider } from '../providers/authentification/authentification';
import { RecieveNotificationProvider } from '../providers/recieve-notification/recieve-notification';

const firebase = {
  apiKey: "AIzaSyBfoDjoEb5vYygLRSk7Ga7R-Tq4TrY0TQ8",
  authDomain: "pfaensit-cde3a.firebaseapp.com",
  databaseURL: "https://pfaensit-cde3a.firebaseio.com",
  projectId: "pfaensit-cde3a",
  storageBucket: "pfaensit-cde3a.appspot.com",
  messagingSenderId: "211344616641"
}
@NgModule({
  declarations: [
    MyApp,
    TeacherHomePage,
    TeachCoursPage,
    TeachChangementSallePage,
    TeachEmploieTempsPage,
    TeachNotePage,
    TeachOffreStagePage,
    TeachRepartitionExamensPage,
    SendNotificationFormPage,
    TeachActualitesPage,
    ShowNotificationDetailPage,
    //Admin side pages
    HomePage,
    StudentPage,
    TeacherPage,
    RepartitionExamensPage,
    EmploieTempsPage,
    CalendrierScolairePage,
    AddUserPage,
    UserPage,
    ModifUserPage,
    SendNotificationFormPage,
    //Student side pages
    EtudiantActualitesPage,
    EtudiantChangementSallePage,
    EtudiantCoursPage,
    EtudiantEmploiDeTempsPage,
    EtudiantHomePage,
    EtudiantNotePage,
    EtudiantOffreDeStagePage,
    EtudiantRepartitionDesExamensPage,
    AuthenticationPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp,{
      scrollAssist: true,
      autoFocusAssist: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeacherHomePage,
    TeachCoursPage,
    TeachChangementSallePage,
    TeachEmploieTempsPage,
    TeachNotePage,
    TeachOffreStagePage,
    TeachRepartitionExamensPage,
    SendNotificationFormPage,
    TeachActualitesPage,
    ShowNotificationDetailPage,
    //Admin side pages
    HomePage,
    StudentPage,
    TeacherPage,
    RepartitionExamensPage,
    EmploieTempsPage,
    CalendrierScolairePage,
    AddUserPage,
    UserPage,
    ModifUserPage,
    SendNotificationFormPage,
    //Student side pages
    EtudiantActualitesPage,
    EtudiantChangementSallePage,
    EtudiantCoursPage,
    EtudiantEmploiDeTempsPage,
    EtudiantHomePage,
    EtudiantNotePage,
    EtudiantOffreDeStagePage,
    EtudiantRepartitionDesExamensPage,
    AuthenticationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    Firebase,
    Clipboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ManageNotificationProvider,
    AuthentificationProvider,
    RecieveNotificationProvider
  ]
})
export class AppModule {}
