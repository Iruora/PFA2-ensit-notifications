import { FcmProvider } from './../../providers/fcm/fcm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { Etudiant } from '../../classes/Etudiant';

import { Enseignant } from '../../classes/Enseignant';


/**
 * Generated class for the ModifUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modif-user',
  templateUrl: 'modif-user.html',
})
export class ModifUserPage {
  
  /********************** */
  cin: number;
  nom: String;
  prenom: String;
  birthday: Date;
  login: String;
  password: String;
  niveauEtude: String;
  groupe: String;
  speciality: String;

  userid : any;
  /********************* */
  userType: boolean = true;
  user: any;

  data : any = {}
  /********************* */
  public bools = [true, true, true, true, true, true, true, true];

  public regex = [
    /^[0-9]{8}$/ //CIN
    , /^[A-Za-z]{2,20}$/ //Nom
    , /^.+$/ //required
    , /^[a-z.]+$/ //login
    , /^(.){8}$/ //passwd
  ];
  /********************* */
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fcm: FcmProvider,
    public loadingCtrl :LoadingController,
    public toastCtrl : ToastController
  ) {

  }
  //=========================================================================
  ngOnInit() {

    if (this.navParams.get("niveauEtude")) {
      this.userType = true;
      console.log("userType = " + this.userType);
    }
    else {
      this.userType = false;
      console.log("userType = " + this.userType);
    }
    console.log(this.navParams);
    this.cin = this.navParams.get("cin");
    this.nom = this.navParams.get("nom");
    this.prenom = this.navParams.get("prenom");
    this.birthday = this.navParams.get("birthday");
    this.login = this.navParams.get("login");
    this.password = this.navParams.get("password");

    this.niveauEtude = this.navParams.get("niveauEtude");
    this.groupe = this.navParams.get("groupe");

    this.speciality = this.navParams.get("speciality");

    this.userid = this.navParams.get("userid");

  }
  //==========================================================================
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifUserPage');
    console.log(this.navParams.get("cin"));
  }
  //===========================================================================
  close() {
    console.log(this.data);
    if (this.userType) {
      console.log("log"+"$");
      //this.navCtrl.popTo(this.navCtrl.first());
      this.navCtrl.popAll();
      
    }
      
    else {
      console.log("log"+this.navCtrl.first.name+"$");
      this.navCtrl.popAll();
      //this.navCtrl.goToRoot(null);
    }
      
  }
  //===========================================================================
  modify() {
    if (this.userType) {
      this.modifyStudent();
    }
    else {
      this.modifyTeacher();
    }
  }
  //========================================Add a Student========================================
  modifyStudent() {
    this.user = new Etudiant(
      this.cin,
      this.nom,
      this.prenom,
      this.birthday,
      this.login,
      this.password,

      this.niveauEtude,
      this.groupe
    );

    console.log(Etudiant.collectionName);
    //this.fcm.saveUserToFireStore(this.user.getDocData(),this.user.cin,Etudiant.collectionName);

    //this.user.addUser(this.fcm).then(
      this.data = {
        cin: this.cin,
        nom: this.nom,
        prenom: this.prenom,
        birthday: this.birthday,
        login: this.login,
        password: this.password,
        niveauEtude: this.niveauEtude,
        groupe: this.groupe,
        userid: this.userid
      }
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Please wait...'
      });
      loading.present();
    this.fcm.updateUserFromFireStore(this.userid,Etudiant.collectionName,this.data).then(
      e => {
        loading.dismiss();
        
        this.toastCtrl.create({
          message: 'Etudiant màj avec succés',
          duration: 4000,
          position: 'top'
        }).present();
        
        this.close();
      }
    ).catch(
      e => {
        loading.dismiss();
        this.toastCtrl.create({
          message: 'Erreur pendant la màj !',
          duration: 4000,
          position: 'top'
        }).present();
      }
    );;
    console.log(this.user);

  }
  //========================================Add a Teacher========================================
  modifyTeacher() {
    this.user = new Enseignant(
      this.cin,
      this.nom,
      this.prenom,
      this.birthday,
      this.login,
      this.password,

      this.speciality
    );
    this.data = {
      cin: this.cin,
      nom: this.nom,
      prenom: this.prenom,
      birthday: this.birthday,
      login: this.login,
      speciality: this.speciality,
      
      userid: this.userid
    }
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please wait...'
    });
    loading.present();
    this.fcm.updateUserFromFireStore(this.userid,Enseignant.collectionName,this.data).then(
      e => {
        //alert("Enseignant modifié avec succée");
        //this.navCtrl.setRoot(TeacherPage);
        loading.dismiss();
        this.toastCtrl.create({
          message: 'Enseignant màj avec succés',
          duration: 4000,
          position: 'top'
        }).present();
        this.close();
      }
    ).catch(
      e => {
        //alert("Un probléme est survenu !\nEnseignant non modifié");
        loading.dismiss();
        this.toastCtrl.create({
          message: 'Un probléme est survenu !\nEnseignant non modifié',
          duration: 4000,
          position: 'top'
        }).present();
      }
    );
    //this.fcm.saveUserToFireStore(this.user.getDocData(),this.user.cin,Enseignant.collectionName);
    console.log(this.user);
    console.log(Enseignant.collectionName);
  }
  //====================================Verify whether a field correspand to a specified pattern========================================
  isValid(indexField, indexRegExp, text) {
    let b: boolean;
    text = "" + text;
    b = this.regex[indexRegExp].test(text);
    if (b) this.bools[indexField] = true;
    else this.bools[indexField] = false;
    //this.bools.push(b);
    console.log(this.bools);
    //alert(b);
    return b;
  }
  //===========================Makes the button disabled or enabled depending on fields content=====================================
  checkSubmit() {
    let b: boolean;
    b = this.bools[0];
    for (let i = 1; i < this.bools.length; i++) {
      b = this.bools[i] && b;
    }
    //alert(b);
    return b;
  }
  //==============================Verify whether all fields are filled or not (Student Form)=============================
  verifyNotEmptyStudent() {
    if (
      this.cin == null ||
      this.nom == null || this.nom == "" ||
      this.prenom == null || this.prenom == "" ||
      this.birthday == null ||
      this.login == null || this.login == "" ||
      this.password == null || this.password == "" ||
      this.niveauEtude == null || this.niveauEtude == "" ||
      this.groupe == null || this.groupe == ""
    ) {
      alert("Remplissez tout les champs SVP !");
      return false;
    }
    //alert("cv");
    return true;
  }
  //===========================Verify whether all fields are filled or not (Teacher Form)===========================
  verifyNotEmptyTeacher() {
    if (
      this.cin == null ||
      this.nom == null || this.nom == "" ||
      this.prenom == null || this.prenom == "" ||
      this.birthday == null ||
      this.login == null || this.login == "" ||
      this.password == null || this.password == "" ||
      this.speciality == null || this.speciality == ""
    ) {
      alert("Remplissez tout les champs SVP !");
      return false;
    }
    //alert("cv");
    return true;
  }
}
