import { Enseignant } from './../../../classes/Enseignant';
import { FcmProvider } from './../../../providers/fcm/fcm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {
  public teachers: any = [];
  public myInput: string = '';

  public collectionNameIn = Enseignant.collectionName;

  constructor(public navCtrl: NavController, public navParams: NavParams, fcm: FcmProvider, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    //this.filterItems(this.myInput);
    console.log('ionViewDidLoad TeacherPage');
  }

  

}
