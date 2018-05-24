import { Etudiant } from './../../../classes/Etudiant';
import { FcmProvider } from './../../../providers/fcm/fcm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  public students: any = [];
  public collectionNameIn = Etudiant.collectionName;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fcm: FcmProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }
  
}
