import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowNotificationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-notification-detail',
  templateUrl: 'show-notification-detail.html',
})
export class ShowNotificationDetailPage {
  private notification: any;
  private receiver: string;
  private about: string;
  private message: string;
  private time: string;
  private link: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notification = navParams.get("notification")
    console.log(this.notification.allContent.receiver.receiverbyClass);
    if (this.notification.allContent.receiver.receiverAll != null)
      this.receiver = "Tout le monde"
    else {
      console.log(this.notification.allContent.receiver.receiverbyClass.classe)
      this.receiver = this.notification.allContent.receiver.receiverbyClass.niveau + ": " + this.notification.allContent.receiver.receiverbyClass.classe
    }
    this.message = this.notification.allContent.content.message;
    this.about = this.notification.allContent.content.about;
    this.time = this.notification.time.replace("<br>",", ");
    this.link = this.notification.allContent.content.link;
  }

  ionViewDidLoad() {

  }

}
