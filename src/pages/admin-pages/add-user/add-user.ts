import { Enseignant } from './../../../classes/Enseignant';
import { Etudiant } from './../../../classes/Etudiant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FcmProvider } from '../../../providers/fcm/fcm';


/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



/********************** */
@IonicPage()
@Component({
	selector: 'page-add-user',
	templateUrl: 'add-user.html',
})

export class AddUserPage {
	todo = {}
	userType: String;
	user: any;
	/********************** */
	fcm: FcmProvider;

	submitAttempt: boolean = false;
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
	/********************* */
	isAdmin : boolean;
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
		fcm: FcmProvider,
		public loadingCtrl: LoadingController,
		public toastCtrl: ToastController
	) {
		this.fcm = fcm;
		//================================




	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddUserPage');
	}
	//========================================Add a Student========================================
	addStudent() {
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
		let loading = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: 'Please wait...'
		});
		loading.present();
		this.user.addUser(this.fcm).then(
			e => {
				//alert("Etudiant Ajouté avec succée");
				//this.navCtrl.setRoot(StudentPage);
				loading.dismiss();
				this.toastCtrl.create({
					message: 'Etudiant Ajouté avec succés',
					duration: 3000,
					position: 'top'
				}).present();
				//this.navCtrl.setRoot(TeacherPage);
				this.navCtrl.pop();
			}
		).catch(
			e => {
				//alert("Un probléme est survenu !\nEtudiant non ajouté");
				loading.dismiss();
				this.toastCtrl.create({
					message: 'Un probléme est survenu !\nEtudiant non ajouté',
					duration: 3000,
					position: 'top'
				}).present();
				//this.navCtrl.setRoot(TeacherPage);
				this.navCtrl.pop();
			}
		);;
		console.log(this.user);

	}
	//========================================Add a Teacher========================================
	addTeacher() {
		this.user = new Enseignant(
			this.cin,
			this.nom,
			this.prenom,
			this.birthday,
			this.login,
			this.password,

			this.speciality
		);
		let loading = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: 'Please wait...'
		});
		loading.present();
		this.user.addUser(this.fcm).then(
			e => {
				//alert("Enseignant Ajouté avec succée");
				loading.dismiss();
				this.toastCtrl.create({
					message: 'Enseignant Ajouté avec succés',
					duration: 4000,
					position: 'top'
				}).present();
				//this.navCtrl.setRoot(TeacherPage);
				this.navCtrl.pop();
			}
		).catch(
			e => {
				alert("Un probléme est survenu !\nEnseignant non ajouté");
				loading.dismiss();
				this.toastCtrl.create({
					message: 'Un probléme est survenu !\nEnseignant non ajouté',
					duration: 4000,
					position: 'top'
				}).present();
				//this.navCtrl.setRoot(TeacherPage);
				//this.navCtrl.pop();
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
			//alert("Remplissez tout les champs SVP !");
			this.toastCtrl.create({
				message: 'Remplissez tout les champs SVP !',
				duration: 4000,
				position: 'top'
			}).present();
			return false;
		}
		
		return true;
	}
}