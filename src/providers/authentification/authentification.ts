import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
/*
  Generated class for the AuthentificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthentificationProvider {

  constructor(private firebase: Firebase, private afs: AngularFirestore) {

  }
  teacherAuth(login: string, pwd: string) {
    return this.afs.collection("enseignant").ref.where("login", "==", login).where("password", "==", pwd).get()
  }

  studentAuth(login: string, pwd: string) {
    return this.afs.collection("etudiant").ref.where("login", "==", login).where("password", "==", pwd).get()
  }
}
