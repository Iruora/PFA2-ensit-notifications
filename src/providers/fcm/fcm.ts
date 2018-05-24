

import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform
  ) {

  }
  //================Get permission from the user===================
  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
      alert(token);
    }

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }
    return this.saveTokenToFirestore(token)
  }

  //=====================Save the token to firestore======================
  private saveTokenToFirestore(token) {
    if (!token) return;

    const devicesRef = this.afs.collection('devices')

    const docData = {
      token: token,
      userId: 'testUser'
    }

    return devicesRef.doc(token).set(docData)
  }
  //======================Send Notif from sender To reciever========
  sendNotificationFromTo(sender, receiver, content) {
    let data = {
      senderName: sender,
      receiver: receiver,
      content: content
    }
    this.afs.collection("notificationsStudent").add(data).then(docRef => {
      this.afs.collection("notificationsStudent").doc(docRef.id).update({
        notificationId: docRef.id
      })
    });
    return this.afs.collection("notifications").add(data).then(docRef => {
      this.afs.collection("notifications").doc(docRef.id).update({
        notificationId: docRef.id
      })
    });
  }
  //=================== Listen to incoming FCM messages=============
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }
  //===============Show notifications History===============
  showNotificationsHistory(option: string) {
    console.log(option)
    if (option != "all")
      return this.afs.collection("notifications", ref => ref.where("content.about", "==", option).orderBy("content.date", "desc")).valueChanges();
    else
      return this.afs.collection("notifications", ref => ref.orderBy("content.date", "desc")).valueChanges();
  }
  //================Remove Notification==============
  removeNotification(id: string) {
    return this.afs.doc("notifications/" + id).delete();
  }
  //=============save user to fireStore==============================
  public saveUserToFireStore(docData, collectionName) {
    if (docData == null || docData == {}) return;
    const collectionRef = this.afs.collection(collectionName)


    return collectionRef.add(docData).then(docref => {
      collectionRef.doc(docref.id).update({
        userid: docref.id
      })
    })

  }
  //==================Delete User From FireStore =======================
  public deleteUserFromFireStore(id, collectionName) {
    if (id == null || id == "") return;

    return this.afs.collection(collectionName).doc(id).delete();

  }
  //===================Modify user in FireStore ================
  public updateUserFromFireStore(id, collectionName, data) {
    if (id == null || id == "") return;

    return this.afs.collection(collectionName).doc(id).update(data);

  }

  //================== get Users From FireStore =================
  public getUsersFromFireStore(collectionName) {
    var collectionRef = this.afs.collection(collectionName)

    return collectionRef.valueChanges()
  }
}
