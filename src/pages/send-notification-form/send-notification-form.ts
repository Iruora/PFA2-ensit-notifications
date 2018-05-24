import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, AlertController, Slides, LoadingController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast'
import { ManageNotificationProvider } from '../../providers/manage-notification/manage-notification';
import { Clipboard } from '@ionic-native/clipboard';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SendNotificationFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-send-notification-form',
  templateUrl: 'send-notification-form.html',
})
export class SendNotificationFormPage {
  @ViewChild('slides') slides: Slides;
  about: string = "";
  receiver: string = "";
  niveau: string = "";
  classe: string = "";
  contenu: string = "";
  links: string = "";
  public niveauDisabled: boolean = true;
  public groupDisabled: boolean = true;
  public showSendBtn: boolean;
  public nextActive: boolean = true;
  public expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
  public pattern = new RegExp(this.expression);
  constructor(private manageNotif: ManageNotificationProvider,
    public platform: Platform,
    public toastCtrl: ToastController,
    private toast: Toast,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private clipboard: Clipboard,
    private loadingCtrl: LoadingController,
    private storage: Storage) {

  }
  ngOnInit() {
    this.slides.lockSwipes(true);

  }
  activateNextBtn() {
    if (this.about == "" || (this.receiver != "all" && this.receiver == "") || this.receiver == "" || (this.receiver == "byClass" && this.niveau == "") || (this.receiver == "byClass" && this.niveau != "" && this.classe == "")) {
      this.nextActive = true;
    } else {
      this.nextActive = false;
    }
  }
  /***************Slide controllers**************/
  slideChanged() {
    this.showSendBtn = this.slides.isEnd()
  }
  nextSlide($event) {
    $event.preventDefault();
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  backSlide($event) {
    $event.preventDefault();
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
  pastURL($event) {
    $event.preventDefault();
    cordova.plugins.clipboard.paste((text) => {
      if (!this.pattern.test(text)) {
        this.alertCtrl.create({
          message: text + ": n'est pas un url valide!",
          buttons: ['Ok'],
          title: "Erreur"
        }).present()
      } else {
        this.links = text;
      }
    });
  }
  /*********************************************/
  ionViewDidLoad() {
    console.log('ionViewDidLoad SendNotificationFormPage');
  }
  sendNotification() {
    if (this.about == "" || this.contenu == "" || (this.receiver != "all" && this.receiver == "") || this.receiver == "" || (this.receiver == "byClass" && this.niveau == "") || (this.receiver == "byClass" && this.niveau != "" && this.classe == "")) {
      /*this.toastCtrl.create({
        message: "Il faut remplir tous les champs",
        duration: 2000,
        position: "bottom"
      }).present();*/
      this.platform.ready().then(() => {
        this.toast.showWithOptions({
          message: "Il faut remplir tous les champs",
          duration: 3000,
          position: "center",
          styling: {
            backgroundColor: "#7B5362",
            opacity: 0.6,
            cornerRadius: 10,
            horizontalPadding: 150,
            verticalPadding: 35,
          },
          addPixelsY: 500
        }).subscribe((toast) => {
          console.log(toast);
        })
        /*this.toast.show("Il faut remplir tous les champs","3000","top").subscribe((toast)=> {
          console.log(toast);
        })*/
      });
    } else {
      let receiver
      if (this.receiver == "all") {
        receiver = {
          receiverAll: "all",
          receiverbyClass: {
            niveau: null,
            classe: null
          }
        }
      } else {
        receiver = {
          receiverAll: null,
          receiverbyClass: {
            niveau: this.niveau,
            classe: this.classe
          }
        }
      }

      let data = {
        date: new Date(),
        about: this.about,
        message: this.contenu,
        link: this.links
      }
      var sended;
      var loading = this.loadingCtrl.create({ content: "Envoi en cours..." })
      loading.present()
      this.storage.get("TeacherData").then(e => {
        
        sended = this.manageNotif.sendNotificationFromTo(e.prenom+" "+e.nom, receiver, data).then(e => {
          sended = e;
        })
        loading.dismiss()
        if (sended) {
          this.alertCtrl.create({
            message: "envoyé avec succès",
            buttons: [{
              text: "Ok",
              handler: () => {
                this.navCtrl.pop();
              }
            }],
            title: "Info"
          }).present()
        } else {
          this.alertCtrl.create({
            message: "échec d'envoi, réessayer plus tard",
            buttons: ["ok"],
            title: "Erreur"
          }).present()
        }
      })
    }
  }
  goBack(event: Event) {
    event.preventDefault();
    this.navCtrl.pop();
  }
  changeByClassElements() {
    if (this.receiver == "all") {
      this.niveauDisabled = true;
      this.groupDisabled = true;
    } else {
      if (this.receiver == "byClass") {
        this.niveauDisabled = false;
      }
      if (this.niveau != "") {
        this.groupDisabled = false;
      }
    }
  }
}
