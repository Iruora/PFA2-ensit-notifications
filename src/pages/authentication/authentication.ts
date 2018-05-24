import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Events, LoadingController } from 'ionic-angular';
import { AuthentificationProvider } from '../../providers/authentification/authentification';
import { EtudiantHomePage } from '../student-pages/etudiant-home/etudiant-home';
import { TeacherHomePage } from '../teacher-pages/teach-home/teach-home';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';
import { delay } from 'rxjs/operators';

/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  @ViewChild('AuthSlides') slides: Slides;
  public loginTeacher: string;
  public pwdTeacher: string;
  public loginStudent: string;
  public pwdStudent: string;
  public isShowenMenu: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authProvider: AuthentificationProvider,
    public event: Events,
    public loadingCtrl: LoadingController,
    public storage: Storage) {

  }
  ngOnInit() {
    var nbr;
    this.storage.length().then(e => nbr = e).then(()=>{
    if(nbr)
    this.storage.get("StudentData").then(e => {
      //alert(JSON.stringify(e))
      if(e!=null)
      this.navCtrl.setRoot(EtudiantHomePage)
    })
    this.storage.get("TeacherData").then(e => {
      //alert(JSON.stringify(e))
      if (e != null)
        this.navCtrl.setRoot(TeacherHomePage)
    })
  })
    this.slides.lockSwipes(true);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticationPage');
  }
  showStudentAuth() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(2)
    this.slides.lockSwipes(true);
  }
  showTeacherAuth() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1)
    this.slides.lockSwipes(true);
  }
  annuler($event) {
    $event.preventDefault();
    this.slides.lockSwipes(false);
    this.slides.slideTo(0)
    this.slides.lockSwipes(true);
  }
  teacherAuth($event) {
    $event.preventDefault()
    console.log(this.loginTeacher)
    var loading = this.loadingCtrl.create({ content: "en cours de connexion...." })
    loading.present()
    var rslt = this.authProvider.teacherAuth(this.loginTeacher, this.pwdTeacher).then(snapshot => {
      console.log(snapshot.size)
      if (snapshot.size == 0) {
        alert("no user")
        loading.dismiss()
      } else {
        var data;
        snapshot.forEach(e => {
          data = e.data()
        });
        this.storage.set("TeacherData", data);
        this.event.publish("TeacherMenu", data);
        loading.dismiss();
        this.navCtrl.setRoot(TeacherHomePage);
      }
    })
  }
    studentAuth($event) {
    $event.preventDefault()
    var loading = this.loadingCtrl.create({ content: "en cours de connexion...." })
    loading.present()
      var rslt = this.authProvider.studentAuth(this.loginStudent, this.pwdStudent).then(snapshot => {
      console.log(snapshot.empty)
      if (snapshot.size == 0) {
        alert("no user")
        loading.dismiss()
      } else {
        var data;
        snapshot.forEach(e => {
          data = e.data()
        });
        this.storage.set("StudentData", data);
        this.event.publish("StudentMenu",data);
        loading.dismiss();
        this.navCtrl.setRoot(EtudiantHomePage);
      }

    })
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
