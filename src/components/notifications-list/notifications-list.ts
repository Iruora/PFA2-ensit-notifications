import { Component, Input } from '@angular/core';
import { ManageNotificationProvider } from '../../providers/manage-notification/manage-notification';
import { Observable } from 'rxjs/Observable';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { ShowNotificationDetailPage } from '../../pages/show-notification-detail/show-notification-detail';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the NotificationsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notifications-list',
  templateUrl: 'notifications-list.html',
})
export class NotificationsListComponent {
  @Input() optionOut: string;
  notificationsList: Array<{ sender: string, receiver: string, time: string, about: string, allContent: any }>;
  listNotif: Observable<any>;
  //text: string;
  constructor(public manageNotif: ManageNotificationProvider,
    public loadingCtrl: LoadingController, public navCtrl: NavController,
    public alert: AlertController,
    public storage: Storage) {

    this.notificationsList = new Array<{ sender: string, receiver: string, time: string, about: string, allContent: any }>();
    console.log('Hello NotificationsListComponent Component');

  }
  ngOnInit() {
    console.log(this.optionOut)
    if (this.optionOut) {//if option is selected (all or others)
      let loading = this.loadingCtrl.create({ content: "Chargement en cours" })
      loading.present()
      this.storage.get("TeacherData").then(data => {
        this.listNotif = this.manageNotif.showNotificationsHistory(this.optionOut ,data.prenom+" "+data.nom);
        this.listNotif.subscribe(e => {
          console.log(e)
          this.notificationsList = []
          for (let i = 0; i < e.length; i++) {
            //console.log(e[i])
            let date
            let hours = e[i].content.date.getHours()
            let minutes = e[i].content.date.getMinutes()
            if (e[i].content.date.getHours() < 10)
              hours = "0" + e[i].content.date.getHours()
            if (e[i].content.date.getMinutes() < 10)
              minutes = "0" + e[i].content.date.getMinutes()
            date = hours + ":" + minutes + "<br>" + e[i].content.date.toLocaleDateString("en-US");
            if (e[i].receiver.receiverAll != null)
              this.notificationsList.push({ sender: e[i].senderName, receiver: "tout le monde", time: date, about: e[i].content.about, allContent: e[i] });
            else {
              let reciver = "la classe " + e[i].receiver.receiverbyClass.niveau + " " + e[i].receiver.receiverbyClass.classe
              this.notificationsList.push({ sender: e[i].senderName, receiver: reciver, time: date, about: e[i].content.about, allContent: e[i] });
            }
            //console.log(this.notificationsList);
          }
          loading.dismiss()
        });
      })
    }
  }
  showNotif(notif) {
    console.log(notif);
    this.navCtrl.push(ShowNotificationDetailPage, {
      notification: notif
    });
  }
  removeNotification(notif) {
    if (this.manageNotif.removeNotification(notif.allContent.notificationId))
      this.alert.create({
        message: "Supression avec succès",
        buttons: ['ok']
      }).present()
    else {
      this.alert.create({
        message: "Erreur de suppression",
        buttons: ['ok']
      }).present()
    }
  }
}
