import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform, LoadingController } from 'ionic-angular';

/*
  Generated class for the SendNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ManageNotificationProvider {

	constructor(public firebase: Firebase, public afs: AngularFirestore, public platform: Platform, public loadingCtrl: LoadingController) {

	}
	async getToken(userID) {
		let token;
		if (this.platform.is("android")) {
			token = await this.firebase.getToken()
		}
		if (this.platform.is("ios")) {
			token = await this.firebase.getToken()
		}
		return this.saveTokenToFirestore(token, userID);
	}

	private saveTokenToFirestore(token, userID) {
		if (!token) return
		let data = {
			token: token,
			userID: userID
		}
		return this.afs.collection('devices').doc(token).set(data);
	}

	async sendNotificationFromTo(sender, receiver, content) {
		var data = {
			senderName: sender,
			receiver: receiver,
			content: content,
			isClicked: false,
			studentID: null
		}
		var dataSet: any
		dataSet = new Array<any>()
		var rslt
		if (receiver.receiverAll == null) {
			if (receiver.receiverbyClass.classe == "Les deux groupes") {
				var query1 = this.afs.collection("etudiant").ref.where("niveauEtude", "==", receiver.receiverbyClass.niveau);
				query1.get().then(snapshot => {
						var i = 0;
						snapshot.forEach(e => {
							console.log(e.data().userid);
							data.studentID = e.data().userid;
							dataSet[i] = data;
							console.log("datasettttttt:" + JSON.stringify(dataSet[i]))
							rslt = this.afs.collection("notificationsStudent").add(dataSet[i]).then(docRef => {
								this.afs.collection("notificationsStudent").doc(docRef.id).update({
									notificationId: docRef.id
								})
							});
							//delete dataSet[0]["studentID"]

							i++;
							console.log("----------------------------------");
						})
						rslt = this.afs.collection("notifications").add(dataSet[0]).then(docRef => {
							this.afs.collection("notifications").doc(docRef.id).update({
								notificationId: docRef.id
							})
						});
						return rslt
					})
			} else {
				this.afs.collection("etudiant").ref.where("groupe", "==", receiver.receiverbyClass.classe).where("niveauEtude", "==", receiver.receiverbyClass.niveau)
					.get().then(snapshot => {
						var i = 0;
						snapshot.forEach(e => {
							console.log(e.data().userid);
							data.studentID = e.data().userid;
							dataSet[i] = data;
							console.log("datasettttttt:" + JSON.stringify(dataSet[i]))
							rslt = this.afs.collection("notificationsStudent").add(dataSet[i]).then(docRef => {
								this.afs.collection("notificationsStudent").doc(docRef.id).update({
									notificationId: docRef.id
								})
							});
							//delete dataSet[0]["studentID"]

							i++;
							console.log("----------------------------------");
						})
						rslt = this.afs.collection("notifications").add(dataSet[0]).then(docRef => {
							this.afs.collection("notifications").doc(docRef.id).update({
								notificationId: docRef.id
							})
						});
						return rslt
					})
			}
		} else {
			var i = 0;
			this.afs.collection("etudiant").ref
				.get().then(snapshot => {
					snapshot.forEach(e => {
						console.log(e.data());
						data.studentID = e.data().userid
						dataSet.push(data)
						rslt = this.afs.collection("notificationsStudent").add(dataSet[i]).then(docRef => {
							this.afs.collection("notificationsStudent").doc(docRef.id).update({
								notificationId: docRef.id
							})
						});
						i++;
						console.log("----------------------------------");
					})
					delete dataSet[0]["studentID"]
					rslt = this.afs.collection("notifications").add(dataSet[0]).then(docRef => {
						this.afs.collection("notifications").doc(docRef.id).update({
							notificationId: docRef.id
						})
					});
					return rslt
				})
		}
	}
	listenToNotification() {
		return this.firebase.onNotificationOpen()
	}
	showNotificationsHistory(option: string,sender: string) {
		console.log(option)
		if (option != "all")
			return this.afs.collection("notifications", ref => ref.where("content.about", "==", option).where("senderName","==",sender).orderBy("content.date", "desc")).valueChanges();
		else
			return this.afs.collection("notifications", ref => ref.where("senderName", "==", sender).orderBy("content.date", "desc")).valueChanges();
	}
	getBadges(option: string,sender: string) {
		return this.afs.collection("notificationsStudent", ref => ref.where("content.about", "==", option).where("studentID", "==", sender).where("isClicked","==",false)).valueChanges();
	}
	removeNotification(id: string) {
		return this.afs.doc("notifications/" + id).delete();
	}
}
