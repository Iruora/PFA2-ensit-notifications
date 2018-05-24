import { Component, Input, style } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecieveNotificationProvider } from '../../providers/recieve-notification/recieve-notification';
import { LoadingController, NavController, Events } from 'ionic-angular';
import { ShowNotificationDetailPage } from '../../pages/show-notification-detail/show-notification-detail';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NotificationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'student-notifications-list',
  templateUrl: 'student-notifications-list.html'
})
export class StrudentNotificationsListComponent {
  isClicked: boolean;
  alert: any;
  // isClicked: boolean=false;
  @Input() optionOut: string;
  notificationsList: Array<{ sender: string, receiver: string, time: string, about: string,isClicked: boolean, allContent: any }>;
  ListNotif: Observable<any>;
  // text: string;

  constructor(public manageNotif: RecieveNotificationProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public storage: Storage) {
    this.notificationsList = new Array<{ sender: string, receiver: string, time: string, about: string,isClicked: boolean, allContent: any }>();

    //console.log('Hello NotificationListComponent Component');
    //this.text = 'Hello World';
    
  }
  ngOnInit() {
    
    console.log(this.optionOut)
    if (this.optionOut) {
      var studentID;
      this.storage.get("StudentData").then(e=> {
        studentID = e.userid;
      }).then(()=>{
      let loading = this.loadingCtrl.create({ content: "Chargement en cours" })
      loading.present()
      this.ListNotif = this.manageNotif.showNotificationsHistory(this.optionOut, studentID);
      this.ListNotif.subscribe(e => {
        console.log(e)
        this.notificationsList = []
        for (let i = 0; i < e.length; i++) {
          console.log(e[i].isClicked);
          this.isClicked = e[i].isClicked
          let date
          let hours = e[i].content.date.getHours()
          let minutes = e[i].content.date.getMinutes()
          if (e[i].content.date.getHours() < 10)
            hours = "0" + e[i].content.date.getHours()
          if (e[i].content.date.getMinutes() < 10)
            minutes = "0" + e[i].content.date.getMinutes()
          date = hours + ":" + minutes + "<br>" + e[i].content.date.toLocaleDateString("en-US");
          if (e[i].receiver.receiverAll != null)
            this.notificationsList.push({ sender: e[i].senderName, receiver: "tout le monde", time: date, about: e[i].content.about,isClicked: e[i].isClicked, allContent: e[i] });
          else {
            let reciver = "la classe " + e[i].receiver.receiverbyClass.niveau + " " + e[i].receiver.receiverbyClass.classe
            this.notificationsList.push({ sender: e[i].senderName, receiver: reciver, time: date, about: e[i].content.about,isClicked: e[i].isClicked, allContent: e[i] });
          }
        }
        loading.dismiss()
      });
    })
  }
  }
  showNotif(notif) {
    console.log(notif);
    if (notif.allContent.isClicked) {
      this.isClicked = true;
      this.navCtrl.push(ShowNotificationDetailPage, {
        notification: notif
      })
    }else {
      this.manageNotif.clickedNotif(notif.allContent.notificationId).then(e => {
        this.isClicked = true;
        this.navCtrl.push(ShowNotificationDetailPage, {
          notification: notif
        });
      })
    }
      //alert(notif.isClicked)

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




