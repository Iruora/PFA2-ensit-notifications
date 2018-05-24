import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from 'ionic-angular';



@Injectable()
export class RecieveNotificationProvider {

  constructor(public firebase: Firebase, public afs: AngularFirestore, public platform: Platform) {
  }
  async getToken(userID) {
    let token;
    if (this.platform.is("android")) {
      token = await this.firebase.getToken()
    }
    if (this.platform.is("ios")) {
      token = await this.firebase.getToken()
    }
    return this.saveTokenFirestore(token, userID);
    
  }
 /*********************************** */
  private saveTokenFirestore(token, userID) {
    if (!token) return
    let data = {
      token: token,
      userID: userID
    }
    return this.afs.collection('devices').doc(token).set(data);
  }
  /*********************************** */
  ListenToNotification(){
    return this.firebase.onNotificationOpen();
  }
  /*********************************** */
  showNotificationsHistory(option: string,userID: string){
    console.log(option)
    if(option!="all")
      return this.afs.collection("notificationsStudent",ref =>ref.where("content.about","==",option).where("studentID","==",userID).orderBy("content.date",'desc')).valueChanges();
    else
      return this.afs.collection("notificationsStudent",ref =>ref.where("studentID","==",userID).orderBy("content.date",'desc')).valueChanges();
  }
  /*********************************** */
  removeNotification(id: string){
    return this.afs.doc("notificationsStudent/"+id).delete();
  }
  /*********************************** */
  clickedNotif(notifId: string) {
    return this.afs.doc("notificationsStudent/"+notifId).update({
      isClicked: true
    });
  }
}
