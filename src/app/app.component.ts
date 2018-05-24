import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ManageNotificationProvider } from '../providers/manage-notification/manage-notification';
import { tap } from 'rxjs/operators'
import { TeacherHomePage } from '../pages/teacher-pages/teach-home/teach-home';
import { TeachCoursPage } from '../pages/teacher-pages/teach-cours/teach-cours';
import { TeachChangementSallePage } from '../pages/teacher-pages/teach-changement-salle/teach-changement-salle';
import { TeachEmploieTempsPage } from '../pages/teacher-pages/teach-emploie-temps/teach-emploie-temps';
import { TeachRepartitionExamensPage } from '../pages/teacher-pages/teach-repartition-examens/teach-repartition-examens';
import { TeachNotePage } from '../pages/teacher-pages/teach-note/teach-note';
import { TeachOffreStagePage } from '../pages/teacher-pages/teach-offre-stage/teach-offre-stage';
import { TeachActualitesPage } from '../pages/teacher-pages/teach-actualites/teach-actualites';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { EtudiantHomePage } from '../pages/student-pages/etudiant-home/etudiant-home';
import { EtudiantCoursPage } from '../pages/student-pages/etudiant-cours/etudiant-cours';
import { EtudiantChangementSallePage } from '../pages/student-pages/etudiant-changement-salle/etudiant-changement-salle';
import { EtudiantEmploiDeTempsPage } from '../pages/student-pages/etudiant-emploi-de-temps/etudiant-emploi-de-temps';
import { EtudiantRepartitionDesExamensPage } from '../pages/student-pages/etudiant-repartition-des-examens/etudiant-repartition-des-examens';
import { EtudiantNotePage } from '../pages/student-pages/etudiant-note/etudiant-note';
import { EtudiantOffreDeStagePage } from '../pages/student-pages/etudiant-offre-de-stage/etudiant-offre-de-stage';
import { EtudiantActualitesPage } from '../pages/student-pages/etudiant-actualites/etudiant-actualites';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = AuthenticationPage;
  public pages: any;
  private nomEtPrenom: string
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    private manageNotification: ManageNotificationProvider,
    public event: Events,
    public storage: Storage,
    private manageNotif: ManageNotificationProvider) {

    /*this.pages = [
      { title: 'Home', component: TeacherHomePage },
      { title: 'Cours', component: TeachCoursPage },
      { title: 'Changement de salle', component: TeachChangementSallePage },
      { title: 'Emploie du temps', component: TeachEmploieTempsPage },
      { title: 'Répartition des examens', component: TeachRepartitionExamensPage },
      { title: 'Notes', component: TeachNotePage },
      { title: 'Offre de stage', component: TeachOffreStagePage },
      { title: 'Actualités', component: TeachActualitesPage },
    ];*/


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //manageNotification.getToken("2 ème année#Groupe A")
    });

  }
  ngOnInit() {
    this.storage.get("StudentData").then(data => {
      console.log("student dataaa: " + data);
      if (data != null) {
        //console.log("dataaa " + data.userid)
        var coursBadge;
        //alert(data.userid)
        this.manageNotif.getBadges("Cours", data.userid).subscribe(e => {
          console.log("courssss....: " + e.length)
          coursBadge = e.length;
        })
        var chngmtSalleBadge;
        this.manageNotif.getBadges("Changement de salle", data.userid).subscribe(e => {
          chngmtSalleBadge = e.length;
        })
        var tempsBadge;
        this.manageNotif.getBadges("Emploie du temps", data.userid).subscribe(e => {
          tempsBadge = e.length;
        })
        var repExamBadge;
        this.manageNotif.getBadges("Répartition des examens", data.userid).subscribe(e => {
          repExamBadge = e.length;
        })
        var noteBadge;
        this.manageNotif.getBadges("Notes", data.userid).subscribe(e => {
          noteBadge = e.length;
        })
        var stageBadge;
        this.manageNotif.getBadges("Offre de stage", data.userid).subscribe(e => {
          stageBadge = e.length;
        })
        var acctBadge;
        this.manageNotif.getBadges("Actualités", data.userid).subscribe(e => {
          acctBadge = e.length;
        })
        alert()
        this.pages = [
          { title: 'Home', badge: "", component: EtudiantHomePage },
          { title: 'Cours', badge: coursBadge, component: EtudiantCoursPage },
          { title: 'Changement de salle', badge: chngmtSalleBadge, component: EtudiantChangementSallePage },
          { title: 'Emploie du temps', badge: tempsBadge, component: EtudiantEmploiDeTempsPage },
          { title: 'Répartition des examens', badge: repExamBadge, component: EtudiantRepartitionDesExamensPage },
          { title: 'Notes', badge: noteBadge, component: EtudiantNotePage },
          { title: 'Offre de stage', badge: stageBadge, component: EtudiantOffreDeStagePage },
          { title: 'Actualités', badge: acctBadge, component: EtudiantActualitesPage },
        ];
        console.log("pagesss: " + JSON.stringify(this.pages))
        this.platform.ready().then(() => {
          this.manageNotification.getToken(data.userid)
        })
        this.nomEtPrenom = data.nom + " " + data.prenom
        console.log("this daata:" + data)
        //this.storage.clear();
        this.storage.set("StudentData", data);
      } else {

        this.event.subscribe("StudentMenu", data => {
          console.log("student dataaa: " + data);
          if (data != null) {
            //console.log("dataaa " + data.userid)
            var coursBadge;
            alert(data.userid)
            this.manageNotif.getBadges("Cours", data.userid).subscribe(e => {
              console.log("courssss....: " + e.length)
              coursBadge = e.length;
            })
            var chngmtSalleBadge;
            this.manageNotif.getBadges("Changement de salle", data.userid).subscribe(e => {
              chngmtSalleBadge = e.length;
            })
            var tempsBadge;
            this.manageNotif.getBadges("Emploie du temps", data.userid).subscribe(e => {
              tempsBadge = e.length;
            })
            var repExamBadge;
            this.manageNotif.getBadges("Répartition des examens", data.userid).subscribe(e => {
              repExamBadge = e.length;
            })
            var noteBadge;
            this.manageNotif.getBadges("Notes", data.userid).subscribe(e => {
              noteBadge = e.length;
            })
            var stageBadge;
            this.manageNotif.getBadges("Offre de stage", data.userid).subscribe(e => {
              stageBadge = e.length;
            })
            var acctBadge;
            this.manageNotif.getBadges("Actualités", data.userid).subscribe(e => {
              acctBadge = e.length;
            })
            alert()
            this.pages = [
              { title: 'Home', badge: "", component: EtudiantHomePage },
              { title: 'Cours', badge: coursBadge, component: EtudiantCoursPage },
              { title: 'Changement de salle', badge: chngmtSalleBadge, component: EtudiantChangementSallePage },
              { title: 'Emploie du temps', badge: tempsBadge, component: EtudiantEmploiDeTempsPage },
              { title: 'Répartition des examens', badge: repExamBadge, component: EtudiantRepartitionDesExamensPage },
              { title: 'Notes', badge: noteBadge, component: EtudiantNotePage },
              { title: 'Offre de stage', badge: stageBadge, component: EtudiantOffreDeStagePage },
              { title: 'Actualités', badge: acctBadge, component: EtudiantActualitesPage },
            ];
            console.log("pagesss: " + JSON.stringify(this.pages))
            this.platform.ready().then(() => {
              this.manageNotification.getToken(data.userid)
            })
            this.nomEtPrenom = data.nom + " " + data.prenom
            console.log("this daata:" + data)
            this.storage.clear();
            this.storage.set("StudentData", data);
          }
        })
      }
    })
    this.storage.get("TeacherData").then(data => {
      console.log("student dataaa: " + data);
      if (data != null) {
        this.event.subscribe("TeacherMenu", data => {
          console.log("teacher dataaa: " + data);
          if (data != null) {
            console.log("dataaa " + data.userid)
            this.pages = [
              { title: 'Home', component: TeacherHomePage },
              { title: 'Cours', component: TeachCoursPage },
              { title: 'Changement de salle', component: TeachChangementSallePage },
              { title: 'Emploie du temps', component: TeachEmploieTempsPage },
              { title: 'Répartition des examens', component: TeachRepartitionExamensPage },
              { title: 'Notes', component: TeachNotePage },
              { title: 'Offre de stage', component: TeachOffreStagePage },
              { title: 'Actualités', component: TeachActualitesPage },
            ];

            this.nomEtPrenom = data.nom + " " + data.prenom
          }
        })
      } else {
        this.event.subscribe("TeacherMenu", data => {
          console.log("teacher dataaa: " + data);
          if (data != null) {
            console.log("dataaa " + data.userid)
            this.pages = [
              { title: 'Home', component: TeacherHomePage },
              { title: 'Cours', component: TeachCoursPage },
              { title: 'Changement de salle', component: TeachChangementSallePage },
              { title: 'Emploie du temps', component: TeachEmploieTempsPage },
              { title: 'Répartition des examens', component: TeachRepartitionExamensPage },
              { title: 'Notes', component: TeachNotePage },
              { title: 'Offre de stage', component: TeachOffreStagePage },
              { title: 'Actualités', component: TeachActualitesPage },
            ];

            this.nomEtPrenom = data.nom + " " + data.prenom
          }
        })
      }
    })
  }
  openPage(p) {
    this.nav.setRoot(p.component)
  }

}

