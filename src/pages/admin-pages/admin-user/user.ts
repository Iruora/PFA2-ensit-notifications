import { ModifUserPage } from './../../modif-user/modif-user';
import { Enseignant } from './../../../classes/Enseignant';
import { Etudiant } from './../../../classes/Etudiant';
import { FcmProvider } from './../../../providers/fcm/fcm';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  private birthday: string;
  private userType: boolean = true;

  private collectionName: String = "";
  //=====================================================================================
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public fcm: FcmProvider,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {
    console.log("cinConstruct$" + this.navParams.get("cin") + "*");
  }
  //======================================================================================
  ionViewDidLoad() {
    console.log("cinViewDidLoad$" + this.navParams.get("cin") + "*");
    console.log('ionViewDidLoad UserPage');
    this.birthday = this.navParams.get('birthday');
    let date = this.birthday.split('-');
    this.birthday = date[2] + "/" + date[1] + "/" + date[0];
    console.log("birthday : " + this.navParams.get('niveauEtude'));
    if (this.navParams.get('niveauEtude')) {
      this.userType = true;
      this.collectionName = Etudiant.collectionName;
    }
    else {
      this.userType = false;
      this.collectionName = Enseignant.collectionName;
    }
  }
  //====================================================
  ngOnInit() {
    console.log("cinNgOnInit$" + this.navParams.get("cin") + "*");
  }
  //=====================================================

  public closeModal() {
    this.viewCtrl.dismiss();
  }
  //=====================================================
  public removeUser(user) {
    console.log(user.get("userid") + " " + this.collectionName);
    /********************** */
    let alert = this.alertCtrl.create({
      title: 'Confirmer la supression',
      message: 'Etes-vous sur de supprimer \n' + user.get("nom") + " " + user.get("prenom") + "\n" + user.get("cin"),
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            this.toastCtrl.create({
              message: 'Suppression Annulée',
              duration: 3000,
              position: 'top'
            }).present();
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            let loading = this.loadingCtrl.create({
              spinner: 'bubbles',
              content: 'Please wait...'
            });
            loading.present();
            this.fcm.deleteUserFromFireStore(user.get("userid"), this.collectionName)
              .then(
                e => {
                  //alert("Supprimer avec Succé");
                  loading.dismiss();
                  this.toastCtrl.create({
                    message: 'Supprimer avec succés',
                    duration: 4000,
                    position: 'top'
                  }).present();
                  this.viewCtrl.dismiss();
                }
              )
              .catch(
                e => {
                  //alert("Erreur de suppression");
                  loading.dismiss();
                  this.toastCtrl.create({
                    message: 'Erreur de suppression',
                    duration: 4000,
                    position: 'top'
                  }).present();
                  this.viewCtrl.dismiss();
                }
              );
          }
        }
      ]
    });
    alert.present();
    /********************* *
    if (confirm('Etes-vous sur de supprimer \n' + user.get("nom") + " " + user.get("prenom") + "\n" + user.get("cin"))) {
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Please wait...'
      });
      loading.present();
      this.fcm.deleteUserFromFireStore(user.get("userid"), this.collectionName)
        .then(
          e => {
            //alert("Supprimer avec Succé");
            loading.dismiss();
            this.toastCtrl.create({
              message: 'Supprimer avec succés',
              duration: 4000,
              position: 'top'
            }).present();
            this.viewCtrl.dismiss();
          }
        )
        .catch(
          e => {
            //alert("Erreur de suppression");
            loading.dismiss();
            this.toastCtrl.create({
              message: 'Erreur de suppression',
              duration: 4000,
              position: 'top'
            }).present();
            this.viewCtrl.dismiss();
          }
        );
    }
    /*********************************** */
  }
  //===================================================
  public openModifModal(user) {
    let data = user;
    //var modalPage = this.modalCtrl.create(ModifUserPage,data); 
    //modalPage.present();
    this.navCtrl.push(ModifUserPage, user);
  }
}
