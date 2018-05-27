webpackJsonp([25],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { RecieveNotificationProvider } from '../providers'
var EtudiantHomePage = /** @class */ (function () {
    function EtudiantHomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.optionIn = "all";
    }
    EtudiantHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'etudiant-home',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-home\etudiant-home.html"*/'<ion-header >\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >ENSIT Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n \n  \n  <ion-content>\n    <student-notifications-list [optionOut]="optionIn"></student-notifications-list>\n  \n  </ion-content>\n  \n \n\n  \n  \n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-home\etudiant-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], EtudiantHomePage);
    return EtudiantHomePage;
}());

//# sourceMappingURL=etudiant-home.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherHomePage = /** @class */ (function () {
    function TeacherHomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.optionIn = "all";
    }
    TeacherHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'teach-home',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-home\teach-home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="titre">\n      ENSIT\n      <ion-icon md="md-notifications"></ion-icon>\n      Notifications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <notifications-list [optionOut]="optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-home\teach-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TeacherHomePage);
    return TeacherHomePage;
}());

//# sourceMappingURL=teach-home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Enseignant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Etudiant__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/********************** */
var AddUserPage = /** @class */ (function () {
    /********************* */
    function AddUserPage(navCtrl, navParams, fcm, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.todo = {};
        this.submitAttempt = false;
        /********************* */
        this.bools = [true, true, true, true, true, true, true, true];
        this.regex = [
            /^[0-9]{8}$/ //CIN
            ,
            /^[A-Za-z]{2,20}$/ //Nom
            ,
            /^.+$/ //required
            ,
            /^[a-z.]+$/ //login
            ,
            /^(.){8}$/ //passwd
        ];
        this.fcm = fcm;
        //================================
    }
    AddUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUserPage');
    };
    //========================================Add a Student========================================
    AddUserPage.prototype.addStudent = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__classes_Etudiant__["a" /* Etudiant */](this.cin, this.nom, this.prenom, this.birthday, this.login, this.password, this.niveauEtude, this.groupe);
        console.log(__WEBPACK_IMPORTED_MODULE_1__classes_Etudiant__["a" /* Etudiant */].collectionName);
        //this.fcm.saveUserToFireStore(this.user.getDocData(),this.user.cin,Etudiant.collectionName);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        loading.present();
        this.user.addUser(this.fcm).then(function (e) {
            //alert("Etudiant Ajouté avec succée");
            //this.navCtrl.setRoot(StudentPage);
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Etudiant Ajouté avec succés',
                duration: 3000,
                position: 'top'
            }).present();
            //this.navCtrl.setRoot(TeacherPage);
            _this.navCtrl.pop();
        }).catch(function (e) {
            //alert("Un probléme est survenu !\nEtudiant non ajouté");
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Un probléme est survenu !\nEtudiant non ajouté',
                duration: 3000,
                position: 'top'
            }).present();
            //this.navCtrl.setRoot(TeacherPage);
            _this.navCtrl.pop();
        });
        ;
        console.log(this.user);
    };
    //========================================Add a Teacher========================================
    AddUserPage.prototype.addTeacher = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__classes_Enseignant__["a" /* Enseignant */](this.cin, this.nom, this.prenom, this.birthday, this.login, this.password, this.speciality);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        loading.present();
        this.user.addUser(this.fcm).then(function (e) {
            //alert("Enseignant Ajouté avec succée");
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Enseignant Ajouté avec succés',
                duration: 4000,
                position: 'top'
            }).present();
            //this.navCtrl.setRoot(TeacherPage);
            _this.navCtrl.pop();
        }).catch(function (e) {
            alert("Un probléme est survenu !\nEnseignant non ajouté");
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Un probléme est survenu !\nEnseignant non ajouté',
                duration: 4000,
                position: 'top'
            }).present();
            //this.navCtrl.setRoot(TeacherPage);
            //this.navCtrl.pop();
        });
        //this.fcm.saveUserToFireStore(this.user.getDocData(),this.user.cin,Enseignant.collectionName);
        console.log(this.user);
        console.log(__WEBPACK_IMPORTED_MODULE_0__classes_Enseignant__["a" /* Enseignant */].collectionName);
    };
    //====================================Verify whether a field correspand to a specified pattern========================================
    AddUserPage.prototype.isValid = function (indexField, indexRegExp, text) {
        var b;
        text = "" + text;
        b = this.regex[indexRegExp].test(text);
        if (b)
            this.bools[indexField] = true;
        else
            this.bools[indexField] = false;
        //this.bools.push(b);
        console.log(this.bools);
        //alert(b);
        return b;
    };
    //===========================Makes the button disabled or enabled depending on fields content=====================================
    AddUserPage.prototype.checkSubmit = function () {
        var b;
        b = this.bools[0];
        for (var i = 1; i < this.bools.length; i++) {
            b = this.bools[i] && b;
        }
        //alert(b);
        return b;
    };
    //==============================Verify whether all fields are filled or not (Student Form)=============================
    AddUserPage.prototype.verifyNotEmptyStudent = function () {
        if (this.cin == null ||
            this.nom == null || this.nom == "" ||
            this.prenom == null || this.prenom == "" ||
            this.birthday == null ||
            this.login == null || this.login == "" ||
            this.password == null || this.password == "" ||
            this.niveauEtude == null || this.niveauEtude == "" ||
            this.groupe == null || this.groupe == "") {
            alert("Remplissez tout les champs SVP !");
            return false;
        }
        //alert("cv");
        return true;
    };
    //===========================Verify whether all fields are filled or not (Teacher Form)===========================
    AddUserPage.prototype.verifyNotEmptyTeacher = function () {
        if (this.cin == null ||
            this.nom == null || this.nom == "" ||
            this.prenom == null || this.prenom == "" ||
            this.birthday == null ||
            this.login == null || this.login == "" ||
            this.password == null || this.password == "" ||
            this.speciality == null || this.speciality == "") {
            //alert("Remplissez tout les champs SVP !");
            this.toastCtrl.create({
                message: 'Remplissez tout les champs SVP !',
                duration: 4000,
                position: 'top'
            }).present();
            return false;
        }
        return true;
    };
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-user',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\add-user\add-user.html"*/'<!--\n  Generated template for the AddUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="redNNS">\n		<ion-title>Ajouter un utilisateur</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-slides pager="true">\n		<ion-slide>\n\n			<ion-scroll scrollY="true">\n				<h2 style="text-align: center;">Ajouter un Etudiant</h2>\n				<!--form (ngSubmit)="addStudent()" [formGroup]="slideAddStudent"-->\n				<form (ngSubmit)="addStudent()">\n\n					<ion-list>\n						<div class="row" class="err-container">\n							<div *ngIf="!bools[0]" class="error-msg">Error : CIN invalid, 8 chiffres au minimum</div>\n							<div *ngIf="!bools[1]" class="error-msg">Error : nom invlaid , au moins deux lettres alphabetiques</div>\n							<div *ngIf="!bools[2]" class="error-msg">Error : prenom invlaid , au moins deux lettres alphabetiques</div>\n							<div *ngIf="!bools[4]" class="error-msg">Error : login invalid, ex : steve.jobs or steve</div>\n							<div *ngIf="!bools[5]" class="error-msg">Error : password invalid, minmum 8 characteres</div>\n						</div>\n						<ion-item class="row">\n							<ion-label color="primary" floating>CIN</ion-label>\n							<ion-input [(ngModel)]="cin" required name="cin" pattern="[0-9]{8}" type="number" class="form-control" (blur)="isValid(0,0,cin)"></ion-input>\n\n\n						</ion-item>\n\n						<div class="row">\n\n\n							<ion-item class="col">\n								<ion-label color="primary" floating>Nom</ion-label>\n								<ion-input [(ngModel)]="nom" required name="nom" pattern="[A-Za-z]{2,20}" class="form-control" (blur)="isValid(1,1,nom)"></ion-input>\n\n							</ion-item>\n\n\n							<ion-item class="col">\n								<ion-label color="primary" floating>Prenom</ion-label>\n								<ion-input [(ngModel)]="prenom" required name="prenom" pattern="[A-Za-z]{2,20}" class="form-control" (blur)="isValid(2,1,prenom)">\n\n								</ion-input>\n\n							</ion-item>\n\n						</div>\n\n\n\n						<ion-item>\n							<ion-label>Date de Naissance</ion-label>\n							<ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="birthday" required name="birthday"></ion-datetime>\n						</ion-item>\n\n						<div class="row">\n							<ion-item class="col">\n								<ion-label color="primary" floating>Login</ion-label>\n								<ion-input [(ngModel)]="login" required name="login" pattern="[a-z.]+" class="form-control" (blur)="isValid(4,3,login)"></ion-input>\n							</ion-item>\n\n							<ion-item class="col">\n								<ion-label color="primary" floating>Mot de Passe</ion-label>\n								<ion-input type="password" [(ngModel)]="password" required name="password" pattern="(.){8}" class="form-control" (blur)="isValid(5,4,password)">\n\n								</ion-input>\n							</ion-item>\n						</div>\n\n\n						<div class="row">\n							<ion-item class="col">\n								<ion-label>Niveau</ion-label>\n								<ion-select [(ngModel)]="niveauEtude" required name="niveauEtude">\n									<ion-option>1 ére année</ion-option>\n									<ion-option>2 ème année</ion-option>\n									<ion-option>3 ème année</ion-option>\n								</ion-select>\n							</ion-item>\n							<ion-item class="col">\n								<ion-label>Groupe</ion-label>\n								<ion-select [(ngModel)]="groupe" required name="groupe">\n									<ion-option>Groupe A</ion-option>\n									<ion-option>Groupe B</ion-option>\n								</ion-select>\n							</ion-item>\n						</div>\n\n						<button ion-button color="secondary" style="margin-top:2em" type="submit" [disabled]="!checkSubmit()" (click)="verifyNotEmptyStudent()">Ajouter</button>\n						<button ion-button color="danger" style="margin-top:2em" type="reset">Annuler</button>\n\n					</ion-list>\n				</form>\n			</ion-scroll>\n		</ion-slide>\n		<ion-slide>\n			<ion-scroll scrollY="true">\n				<h2 style="text-align: center">Ajouter un Enseignant</h2>\n				<form (ngSubmit)="addTeacher()">\n\n					<ion-list>\n						<div class="row">\n							<div *ngIf="!bools[0]" class="error-msg">Error : CIN invalid, 8 chiffres au minimum</div>\n							<div *ngIf="!bools[1]" class="error-msg">Error : nom invlaid , au moins deux lettres alphabetiques</div>\n							<div *ngIf="!bools[2]" class="error-msg">Error : prenom invlaid , au moins deux lettres alphabetiques</div>\n							<div *ngIf="!bools[4]" class="error-msg">Error : login invalid, ex : steve.jobs or steve</div>\n							<div *ngIf="!bools[5]" class="error-msg">Error : password invalid, minmum 8 characteres</div>\n						</div>\n\n						<ion-item>\n							<ion-label color="primary" floating>CIN</ion-label>\n							<ion-input [(ngModel)]="cin" required name="cin" pattern="[0-9]{8}" type="number" class="form-control" (blur)="isValid(0,0,cin)"></ion-input>\n\n\n						</ion-item>\n						<div class="row">\n\n\n							<ion-item class="col">\n								<ion-label color="primary" floating>Nom</ion-label>\n								<ion-input [(ngModel)]="nom" required name="nom" pattern="[A-Za-z]{2,20}" class="form-control" (blur)="isValid(1,1,nom)"></ion-input>\n							</ion-item>\n\n							<ion-item class="col">\n								<ion-label color="primary" floating>Prenom</ion-label>\n								<ion-input [(ngModel)]="prenom" required name="prenom" pattern="[A-Za-z]{2,20}" class="form-control" (blur)="isValid(2,1,prenom)">\n\n								</ion-input>\n							</ion-item>\n						</div>\n\n\n\n						<ion-item>\n							<ion-label>Date de Naissance</ion-label>\n							<ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="birthday" required name="birthday"></ion-datetime>\n						</ion-item>\n\n						<div class="row">\n							<ion-item class="col">\n								<ion-label color="primary" floating>Login</ion-label>\n								<ion-input [(ngModel)]="login" required name="login" pattern="[a-z.]+" class="form-control" (blur)="isValid(4,3,login)"></ion-input>\n							</ion-item>\n\n							<ion-item class="col">\n								<ion-label color="primary" floating>Mot de Passe</ion-label>\n								<ion-input type="password" [(ngModel)]="password" required name="password" pattern="(.){8}" class="form-control" (blur)="isValid(5,4,password)">\n\n								</ion-input>\n							</ion-item>\n						</div>\n\n\n\n\n\n						<ion-item>\n							<ion-label color="primary" floating>Spécialité</ion-label>\n							<ion-input [(ngModel)]="speciality" required name="speciality" class="form-control"></ion-input>\n						</ion-item>\n\n						<button ion-button color="secondary" style="margin-top:2em" type="submit" [disabled]="!checkSubmit()" (click)="verifyNotEmptyTeacher()">Ajouter</button>\n						<button ion-button color="danger" style="margin-top:2em" type="reset">Annuler</button>\n\n\n					</ion-list>\n				</form>\n			</ion-scroll>\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n<!-- -->'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\add-user\add-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=add-user.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modif_user_modif_user__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Enseignant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Etudiant__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fcm_fcm__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    //=====================================================================================
    function UserPage(navCtrl, navParams, viewCtrl, fcm, modalCtrl, loadingCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fcm = fcm;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.userType = true;
        this.collectionName = "";
        console.log("cinConstruct$" + this.navParams.get("cin") + "*");
    }
    //======================================================================================
    UserPage.prototype.ionViewDidLoad = function () {
        console.log("cinViewDidLoad$" + this.navParams.get("cin") + "*");
        console.log('ionViewDidLoad UserPage');
        this.birthday = this.navParams.get('birthday');
        var date = this.birthday.split('-');
        this.birthday = date[2] + "/" + date[1] + "/" + date[0];
        console.log("birthday : " + this.navParams.get('niveauEtude'));
        if (this.navParams.get('niveauEtude')) {
            this.userType = true;
            this.collectionName = __WEBPACK_IMPORTED_MODULE_2__classes_Etudiant__["a" /* Etudiant */].collectionName;
        }
        else {
            this.userType = false;
            this.collectionName = __WEBPACK_IMPORTED_MODULE_1__classes_Enseignant__["a" /* Enseignant */].collectionName;
        }
    };
    //====================================================
    UserPage.prototype.ngOnInit = function () {
        console.log("cinNgOnInit$" + this.navParams.get("cin") + "*");
    };
    //=====================================================
    UserPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    //=====================================================
    UserPage.prototype.removeUser = function (user) {
        var _this = this;
        console.log(user.get("userid") + " " + this.collectionName);
        /********************** */
        var alert = this.alertCtrl.create({
            title: 'Confirmer la supression',
            message: 'Etes-vous sur de supprimer \n' + user.get("nom") + " " + user.get("prenom") + "\n" + user.get("cin"),
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        _this.toastCtrl.create({
                            message: 'Suppression Annulée',
                            duration: 3000,
                            position: 'top'
                        }).present();
                    }
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: 'Please wait...'
                        });
                        loading.present();
                        _this.fcm.deleteUserFromFireStore(user.get("userid"), _this.collectionName)
                            .then(function (e) {
                            //alert("Supprimer avec Succé");
                            loading.dismiss();
                            _this.toastCtrl.create({
                                message: 'Supprimer avec succés',
                                duration: 4000,
                                position: 'top'
                            }).present();
                            _this.viewCtrl.dismiss();
                        })
                            .catch(function (e) {
                            //alert("Erreur de suppression");
                            loading.dismiss();
                            _this.toastCtrl.create({
                                message: 'Erreur de suppression',
                                duration: 4000,
                                position: 'top'
                            }).present();
                            _this.viewCtrl.dismiss();
                        });
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
    };
    //===================================================
    UserPage.prototype.openModifModal = function (user) {
        var data = user;
        //var modalPage = this.modalCtrl.create(ModifUserPage,data); 
        //modalPage.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__modif_user_modif_user__["a" /* ModifUserPage */], user);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="redNNS">\n    <ion-title>{{navParams.get(\'nom\')}} {{navParams.get(\'prenom\')}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-scroll scrollY="true">\n    <ion-card>\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/profile.png">\n        </ion-avatar>\n        <h2>{{navParams.get(\'nom\')}} {{navParams.get(\'prenom\')}}</h2>\n        <p>Date de Naissance : {{birthday}}</p>\n      </ion-item>\n\n      <!--img src="../../assets/imgs/mdwallpaper.png"-->\n      <ion-item class="row">\n        <h1 *ngIf="userType" text-center>Etudiant(e)</h1>\n        <h1 *ngIf="!userType" text-center>Enseignant(e)</h1>\n      </ion-item>\n      <ion-card-content>\n\n        <ion-item class="row">\n          <b>N° Carte Identité : </b> {{navParams.get(\'cin\')}}\n        </ion-item>\n        <ion-item class="row" *ngIf="userType">\n          <b>Niveau d\'étude : </b> {{navParams.get(\'niveauEtude\')}}\n        </ion-item>\n        <ion-item class="row" *ngIf="userType">\n          <b>Groupe : </b> {{navParams.get(\'groupe\')}}\n        </ion-item>\n\n        <ion-item class="row" *ngIf="!userType">\n          <b>Spécialité : </b> {{navParams.get(\'speciality\')}}\n        </ion-item>\n\n        <ion-item class="row">\n          <b>login : </b> {{navParams.get(\'login\')}}\n        </ion-item>\n\n        <ion-item class="row">\n          <b>Mot de passe : </b> {{navParams.get(\'password\')}}\n        </ion-item>\n\n      </ion-card-content>\n      <ion-row>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear>\n            <ion-icon ios="ios-create" md="md-create" color="warning"></ion-icon>\n            <div color="warning" (click)="openModifModal(navParams)">Modifier</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear (click)="removeUser(navParams)">\n            <ion-icon ios="ios-trash" md="md-trash" color="redNNS"></ion-icon>\n            <div color="redNNS">Delete</div>\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fcm_fcm__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Etudiant__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Enseignant__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModifUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifUserPage = /** @class */ (function () {
    /********************* */
    function ModifUserPage(navCtrl, navParams, fcm, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fcm = fcm;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        /********************* */
        this.userType = true;
        this.data = {};
        /********************* */
        this.bools = [true, true, true, true, true, true, true, true];
        this.regex = [
            /^[0-9]{8}$/ //CIN
            ,
            /^[A-Za-z]{2,20}$/ //Nom
            ,
            /^.+$/ //required
            ,
            /^[a-z.]+$/ //login
            ,
            /^(.){8}$/ //passwd
        ];
    }
    //=========================================================================
    ModifUserPage.prototype.ngOnInit = function () {
        if (this.navParams.get("niveauEtude")) {
            this.userType = true;
            console.log("userType = " + this.userType);
        }
        else {
            this.userType = false;
            console.log("userType = " + this.userType);
        }
        console.log(this.navParams);
        this.cin = this.navParams.get("cin");
        this.nom = this.navParams.get("nom");
        this.prenom = this.navParams.get("prenom");
        this.birthday = this.navParams.get("birthday");
        this.login = this.navParams.get("login");
        this.password = this.navParams.get("password");
        this.niveauEtude = this.navParams.get("niveauEtude");
        this.groupe = this.navParams.get("groupe");
        this.speciality = this.navParams.get("speciality");
        this.userid = this.navParams.get("userid");
    };
    //==========================================================================
    ModifUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifUserPage');
        console.log(this.navParams.get("cin"));
    };
    //===========================================================================
    ModifUserPage.prototype.close = function () {
        console.log(this.data);
        if (this.userType) {
            console.log("log" + "$");
            //this.navCtrl.popTo(this.navCtrl.first());
            this.navCtrl.popAll();
        }
        else {
            console.log("log" + this.navCtrl.first.name + "$");
            this.navCtrl.popAll();
            //this.navCtrl.goToRoot(null);
        }
    };
    //===========================================================================
    ModifUserPage.prototype.modify = function () {
        if (this.userType) {
            this.modifyStudent();
        }
        else {
            this.modifyTeacher();
        }
    };
    //========================================Add a Student========================================
    ModifUserPage.prototype.modifyStudent = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_Etudiant__["a" /* Etudiant */](this.cin, this.nom, this.prenom, this.birthday, this.login, this.password, this.niveauEtude, this.groupe);
        console.log(__WEBPACK_IMPORTED_MODULE_3__classes_Etudiant__["a" /* Etudiant */].collectionName);
        //this.fcm.saveUserToFireStore(this.user.getDocData(),this.user.cin,Etudiant.collectionName);
        //this.user.addUser(this.fcm).then(
        this.data = {
            cin: this.cin,
            nom: this.nom,
            prenom: this.prenom,
            birthday: this.birthday,
            login: this.login,
            password: this.password,
            niveauEtude: this.niveauEtude,
            groupe: this.groupe,
            userid: this.userid
        };
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        loading.present();
        this.fcm.updateUserFromFireStore(this.userid, __WEBPACK_IMPORTED_MODULE_3__classes_Etudiant__["a" /* Etudiant */].collectionName, this.data).then(function (e) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Etudiant màj avec succés',
                duration: 4000,
                position: 'top'
            }).present();
            _this.close();
        }).catch(function (e) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Erreur pendant la màj !',
                duration: 4000,
                position: 'top'
            }).present();
        });
        ;
        console.log(this.user);
    };
    //========================================Add a Teacher========================================
    ModifUserPage.prototype.modifyTeacher = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__classes_Enseignant__["a" /* Enseignant */](this.cin, this.nom, this.prenom, this.birthday, this.login, this.password, this.speciality);
        this.data = {
            cin: this.cin,
            nom: this.nom,
            prenom: this.prenom,
            birthday: this.birthday,
            login: this.login,
            speciality: this.speciality,
            userid: this.userid
        };
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        loading.present();
        this.fcm.updateUserFromFireStore(this.userid, __WEBPACK_IMPORTED_MODULE_4__classes_Enseignant__["a" /* Enseignant */].collectionName, this.data).then(function (e) {
            //alert("Enseignant modifié avec succée");
            //this.navCtrl.setRoot(TeacherPage);
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Enseignant màj avec succés',
                duration: 4000,
                position: 'top'
            }).present();
            _this.close();
        }).catch(function (e) {
            //alert("Un probléme est survenu !\nEnseignant non modifié");
            loading.dismiss();
            _this.toastCtrl.create({
                message: 'Un probléme est survenu !\nEnseignant non modifié',
                duration: 4000,
                position: 'top'
            }).present();
        });
        //this.fcm.saveUserToFireStore(this.user.getDocData(),this.user.cin,Enseignant.collectionName);
        console.log(this.user);
        console.log(__WEBPACK_IMPORTED_MODULE_4__classes_Enseignant__["a" /* Enseignant */].collectionName);
    };
    //====================================Verify whether a field correspand to a specified pattern========================================
    ModifUserPage.prototype.isValid = function (indexField, indexRegExp, text) {
        var b;
        text = "" + text;
        b = this.regex[indexRegExp].test(text);
        if (b)
            this.bools[indexField] = true;
        else
            this.bools[indexField] = false;
        //this.bools.push(b);
        console.log(this.bools);
        //alert(b);
        return b;
    };
    //===========================Makes the button disabled or enabled depending on fields content=====================================
    ModifUserPage.prototype.checkSubmit = function () {
        var b;
        b = this.bools[0];
        for (var i = 1; i < this.bools.length; i++) {
            b = this.bools[i] && b;
        }
        //alert(b);
        return b;
    };
    //==============================Verify whether all fields are filled or not (Student Form)=============================
    ModifUserPage.prototype.verifyNotEmptyStudent = function () {
        if (this.cin == null ||
            this.nom == null || this.nom == "" ||
            this.prenom == null || this.prenom == "" ||
            this.birthday == null ||
            this.login == null || this.login == "" ||
            this.password == null || this.password == "" ||
            this.niveauEtude == null || this.niveauEtude == "" ||
            this.groupe == null || this.groupe == "") {
            alert("Remplissez tout les champs SVP !");
            return false;
        }
        //alert("cv");
        return true;
    };
    //===========================Verify whether all fields are filled or not (Teacher Form)===========================
    ModifUserPage.prototype.verifyNotEmptyTeacher = function () {
        if (this.cin == null ||
            this.nom == null || this.nom == "" ||
            this.prenom == null || this.prenom == "" ||
            this.birthday == null ||
            this.login == null || this.login == "" ||
            this.password == null || this.password == "" ||
            this.speciality == null || this.speciality == "") {
            alert("Remplissez tout les champs SVP !");
            return false;
        }
        //alert("cv");
        return true;
    };
    ModifUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-modif-user',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\modif-user\modif-user.html"*/'<!--\n  Generated template for the ModifUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="redNNS">\n		<ion-title>{{navParams.get(\'nom\')}} {{navParams.get(\'prenom\')}}</ion-title>\n		<ion-buttons end>\n			<button ion-button (click)="close()">Fermer</button>\n		</ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form (ngSubmit)="modify()">\n\n		<ion-list>\n			<div class="row">\n				<div *ngIf="!bools[0]" class="error-msg">Error : CIN invalid, 8 chiffres au minimum</div>\n				<div *ngIf="!bools[1]" class="error-msg">Error : nom invlaid , au moins deux lettres alphabetiques</div>\n				<div *ngIf="!bools[2]" class="error-msg">Error : prenom invlaid , au moins deux lettres alphabetiques</div>\n				<div *ngIf="!bools[4]" class="error-msg">Error : login invalid, ex : steve.jobs or steve</div>\n				<div *ngIf="!bools[5]" class="error-msg">Error : password invalid, minmum 8 characteres</div>\n			</div>\n			<ion-item class="row">\n				<ion-label color="primary" floating>CIN</ion-label>\n				<ion-input [(ngModel)]="cin" required name="cin" pattern="[0-9]{8}" type="number" class="form-control" (blur)="isValid(0,0,cin)"></ion-input>\n\n\n			</ion-item>\n\n			<div class="row">\n\n\n				<ion-item class="col">\n					<ion-label color="primary" floating>Nom</ion-label>\n					<ion-input [(ngModel)]="nom" required name="nom" pattern="[A-Za-z]{2,20}" class="form-control" (blur)="isValid(1,1,nom)">\n\n					</ion-input>\n\n				</ion-item>\n\n\n				<ion-item class="col">\n					<ion-label color="primary" floating>Prenom</ion-label>\n					<ion-input [(ngModel)]="prenom" required name="prenom" pattern="[A-Za-z]{2,20}" class="form-control" (blur)="isValid(2,1,prenom)">\n\n					</ion-input>\n\n				</ion-item>\n\n			</div>\n\n\n\n			<ion-item>\n				<ion-label>Date de Naissance</ion-label>\n				<ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="birthday" required name="birthday"></ion-datetime>\n			</ion-item>\n\n			<div class="row">\n				<ion-item class="col">\n					<ion-label color="primary" floating>Login</ion-label>\n					<ion-input [(ngModel)]="login" required name="login" pattern="[a-z.]+" class="form-control" (blur)="isValid(4,3,login)"></ion-input>\n				</ion-item>\n\n				<ion-item class="col">\n					<ion-label color="primary" floating>Mot de Passe</ion-label>\n					<ion-input type="password" [(ngModel)]="password" required name="password" pattern="(.){8}" class="form-control" (blur)="isValid(5,4,password)">\n\n					</ion-input>\n				</ion-item>\n			</div>\n\n\n			<div class="row" *ngIf="userType">\n				<ion-item class="col">\n					<ion-label>Niveau</ion-label>\n					<ion-select [(ngModel)]="niveauEtude" required name="niveauEtude">\n						<ion-option>1 ère année</ion-option>\n						<ion-option>2 ème année</ion-option>\n						<ion-option>3 ème année</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item class="col">\n					<ion-label>Groupe</ion-label>\n					<ion-select [(ngModel)]="groupe" required name="groupe">\n						<ion-option>Groupe A</ion-option>\n						<ion-option>Groupe B</ion-option>\n					</ion-select>\n				</ion-item>\n			</div>\n\n			<ion-item *ngIf="!userType">\n				<ion-label color="primary" floating>Spécialité</ion-label>\n				<ion-input [(ngModel)]="speciality" required name="speciality" class="form-control"></ion-input>\n			</ion-item>\n			<ion-row>\n				<ion-col col-md-12>\n					<button ion-button color="warning" style="margin-top:2em" type="submit" [disabled]="!checkSubmit()" (click)="verifyNotEmptyStudent()"\n					 *ngIf="userType">Modifier</button>\n					<button ion-button color="warning" style="margin-top:2em" type="submit" [disabled]="!checkSubmit()" (click)="verifyNotEmptyTeacher()"\n					 *ngIf="!userType">Modifier</button>\n				</ion-col>\n			</ion-row>\n\n\n\n\n		</ion-list>\n	</form>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\modif-user\modif-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
    ], ModifUserPage);
    return ModifUserPage;
}());

//# sourceMappingURL=modif-user.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentification_authentification__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_pages_etudiant_home_etudiant_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacher_pages_teach_home_teach_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(navCtrl, navParams, authProvider, event, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.event = event;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.isShowenMenu = false;
    }
    AuthenticationPage.prototype.ngOnInit = function () {
        var _this = this;
        var nbr;
        this.storage.length().then(function (e) { return nbr = e; }).then(function () {
            if (nbr)
                _this.storage.get("StudentData").then(function (e) {
                    //alert(JSON.stringify(e))
                    if (e != null)
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__student_pages_etudiant_home_etudiant_home__["a" /* EtudiantHomePage */]);
                });
            _this.storage.get("TeacherData").then(function (e) {
                //alert(JSON.stringify(e))
                if (e != null)
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__teacher_pages_teach_home_teach_home__["a" /* TeacherHomePage */]);
            });
        });
        this.slides.lockSwipes(true);
    };
    AuthenticationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthenticationPage');
    };
    AuthenticationPage.prototype.showStudentAuth = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    };
    AuthenticationPage.prototype.showTeacherAuth = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    };
    AuthenticationPage.prototype.annuler = function ($event) {
        $event.preventDefault();
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    };
    AuthenticationPage.prototype.teacherAuth = function ($event) {
        var _this = this;
        $event.preventDefault();
        console.log(this.loginTeacher);
        var loading = this.loadingCtrl.create({ content: "en cours de connexion...." });
        loading.present();
        var rslt = this.authProvider.teacherAuth(this.loginTeacher, this.pwdTeacher).then(function (snapshot) {
            console.log(snapshot.size);
            if (snapshot.size == 0) {
                alert("no user");
                loading.dismiss();
            }
            else {
                var data;
                snapshot.forEach(function (e) {
                    data = e.data();
                });
                _this.storage.set("TeacherData", data);
                _this.event.publish("TeacherMenu", data);
                loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__teacher_pages_teach_home_teach_home__["a" /* TeacherHomePage */]);
            }
        });
    };
    AuthenticationPage.prototype.studentAuth = function ($event) {
        var _this = this;
        $event.preventDefault();
        var loading = this.loadingCtrl.create({ content: "en cours de connexion...." });
        loading.present();
        var rslt = this.authProvider.studentAuth(this.loginStudent, this.pwdStudent).then(function (snapshot) {
            console.log(snapshot.empty);
            if (snapshot.size == 0) {
                alert("no user");
                loading.dismiss();
            }
            else {
                var data;
                snapshot.forEach(function (e) {
                    data = e.data();
                });
                _this.storage.set("StudentData", data);
                _this.event.publish("StudentMenu", data);
                loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__student_pages_etudiant_home_etudiant_home__["a" /* EtudiantHomePage */]);
            }
        });
    };
    AuthenticationPage.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('AuthSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], AuthenticationPage.prototype, "slides", void 0);
    AuthenticationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authentication',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\authentication\authentication.html"*/'<!--\n  Generated template for the AuthenticationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Authentification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides #AuthSlides>\n    <ion-slide>\n      <div class="Btn" tabindex="1">\n        <img id="studentimg" src="assets/icon/Student.png" width="10%" (click)="showStudentAuth()" />\n        <p id="StudentLabel">Espace Etudiant</p>\n      </div>\n      <div class="Btn" tabindex="1">\n        <img id="studentimg" src="assets/icon/Teacher.png" width="10%" (click)="showTeacherAuth()" />\n        <p id="StudentLabel">Espace Enseignant</p>\n      </div>\n    </ion-slide>\n    <!--Admin auth slide-->\n\n    <ion-slide>\n      \n      <ion-list>\n        Teacher \n        <form (ngSubmit)="teacherAuth($event)">\n          <ion-item>\n            <ion-label floating>login</ion-label>\n            <ion-input type="text" [(ngModel)]="loginTeacher" name="loginTeacher"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Mot de passe</ion-label>\n            <ion-input type="password" [(ngModel)]="pwdTeacher" name="pwdTeacher"></ion-input>\n          </ion-item>\n            <button ion-button block outline color="redNNS" style="margin-top: 15%">Connexion</button>\n            <button ion-button block outline color="redNNS" style="margin-top: 15%" (click)="annuler($event)">Annuler</button>\n        </form>\n      </ion-list>\n    </ion-slide>\n\n    <!--Student auth slide-->\n\n    <ion-slide>\n      <ion-list>\n         Student\n        <form (ngSubmit)="studentAuth($event)">\n          <ion-item>\n            <ion-label floating>login</ion-label>\n            <ion-input type="text" [(ngModel)]="loginStudent" name="loginStudent"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Mot de passe</ion-label>\n            <ion-input type="password" [(ngModel)]="pwdStudent" name="pwdStudent"></ion-input>\n          </ion-item>\n          <button ion-button block outline color="redNNS" style="margin-top: 15%">Connexion</button>\n          <button ion-button block outline color="redNNS" style="margin-top: 15%" (click)="annuler($event)">Annuler</button>\n        </form>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\authentication\authentication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentification_authentification__["a" /* AuthentificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendNotificationFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_manage_notification_manage_notification__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendNotificationFormPage = /** @class */ (function () {
    function SendNotificationFormPage(manageNotif, platform, toastCtrl, toast, navCtrl, navParams, alertCtrl, clipboard, loadingCtrl, storage) {
        this.manageNotif = manageNotif;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.about = "";
        this.receiver = "";
        this.niveau = "";
        this.classe = "";
        this.contenu = "";
        this.links = "";
        this.niveauDisabled = true;
        this.groupDisabled = true;
        this.nextActive = true;
        this.expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
        this.pattern = new RegExp(this.expression);
    }
    SendNotificationFormPage.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true);
    };
    SendNotificationFormPage.prototype.activateNextBtn = function () {
        if (this.about == "" || (this.receiver != "all" && this.receiver == "") || this.receiver == "" || (this.receiver == "byClass" && this.niveau == "") || (this.receiver == "byClass" && this.niveau != "" && this.classe == "")) {
            this.nextActive = true;
        }
        else {
            this.nextActive = false;
        }
    };
    /***************Slide controllers**************/
    SendNotificationFormPage.prototype.slideChanged = function () {
        this.showSendBtn = this.slides.isEnd();
    };
    SendNotificationFormPage.prototype.nextSlide = function ($event) {
        $event.preventDefault();
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    SendNotificationFormPage.prototype.backSlide = function ($event) {
        $event.preventDefault();
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    };
    SendNotificationFormPage.prototype.pastURL = function ($event) {
        var _this = this;
        $event.preventDefault();
        cordova.plugins.clipboard.paste(function (text) {
            if (!_this.pattern.test(text)) {
                _this.alertCtrl.create({
                    message: text + ": n'est pas un url valide!",
                    buttons: ['Ok'],
                    title: "Erreur"
                }).present();
            }
            else {
                _this.links = text;
            }
        });
    };
    /*********************************************/
    SendNotificationFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendNotificationFormPage');
    };
    SendNotificationFormPage.prototype.sendNotification = function () {
        var _this = this;
        if (this.about == "" || this.contenu == "" || (this.receiver != "all" && this.receiver == "") || this.receiver == "" || (this.receiver == "byClass" && this.niveau == "") || (this.receiver == "byClass" && this.niveau != "" && this.classe == "")) {
            /*this.toastCtrl.create({
              message: "Il faut remplir tous les champs",
              duration: 2000,
              position: "bottom"
            }).present();*/
            this.platform.ready().then(function () {
                _this.toast.showWithOptions({
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
                }).subscribe(function (toast) {
                    console.log(toast);
                });
                /*this.toast.show("Il faut remplir tous les champs","3000","top").subscribe((toast)=> {
                  console.log(toast);
                })*/
            });
        }
        else {
            var receiver_1;
            if (this.receiver == "all") {
                receiver_1 = {
                    receiverAll: "all",
                    receiverbyClass: {
                        niveau: null,
                        classe: null
                    }
                };
            }
            else {
                receiver_1 = {
                    receiverAll: null,
                    receiverbyClass: {
                        niveau: this.niveau,
                        classe: this.classe
                    }
                };
            }
            var data_1 = {
                date: new Date(),
                about: this.about,
                message: this.contenu,
                link: this.links
            };
            var sended;
            var loading = this.loadingCtrl.create({ content: "Envoi en cours..." });
            loading.present();
            this.storage.get("TeacherData").then(function (e) {
                sended = _this.manageNotif.sendNotificationFromTo(e.prenom + " " + e.nom, receiver_1, data_1).then(function (e) {
                    sended = e;
                });
                loading.dismiss();
                if (sended) {
                    _this.alertCtrl.create({
                        message: "envoyé avec succès",
                        buttons: [{
                                text: "Ok",
                                handler: function () {
                                    _this.navCtrl.pop();
                                }
                            }],
                        title: "Info"
                    }).present();
                }
                else {
                    _this.alertCtrl.create({
                        message: "échec d'envoi, réessayer plus tard",
                        buttons: ["ok"],
                        title: "Erreur"
                    }).present();
                }
            });
        }
    };
    SendNotificationFormPage.prototype.goBack = function (event) {
        event.preventDefault();
        this.navCtrl.pop();
    };
    SendNotificationFormPage.prototype.changeByClassElements = function () {
        if (this.receiver == "all") {
            this.niveauDisabled = true;
            this.groupDisabled = true;
        }
        else {
            if (this.receiver == "byClass") {
                this.niveauDisabled = false;
            }
            if (this.niveau != "") {
                this.groupDisabled = false;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], SendNotificationFormPage.prototype, "slides", void 0);
    SendNotificationFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send-notification-form',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\send-notification-form\send-notification-form.html"*/'<!--\n  Generated template for the SendNotificationFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar id="ionNavbar">\n    <h4 id="Header">Envoyer Une Notification</h4>\n\n    <ion-buttons end *ngIf="showSendBtn">\n      <button ion-button icon-only style="margin-top: 0.4em" type="submit" form="notificationForm">\n        <ion-icon md="md-send" style="font-size: 2em;margin-top: -0.2em" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="sendNotification()" id="notificationForm">\n    <ion-slides #slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide>\n        <h5>Objet</h5>\n        <ion-item>\n          <ion-label>À propos</ion-label>\n          <ion-select [(ngModel)]="about" name="about" (ngModelChange)="activateNextBtn()">\n            <ion-option>Cours</ion-option>\n            <ion-option>Changement de salle</ion-option>\n            <ion-option>Emploie du temps</ion-option>\n            <ion-option>Répartition des examens</ion-option>\n            <ion-option>Note</ion-option>\n            <ion-option>Offre de stage</ion-option>\n            <ion-option>Actualité</ion-option>\n          </ion-select>\n        </ion-item>\n        <h5>Destinataire</h5>\n        <ion-list radio-group [(ngModel)]="receiver" (ngModelChange)="activateNextBtn()" (ngModelChange)="changeByClassElements()"\n          name="receiver">\n          <ion-item>\n            <ion-label>Tous</ion-label>\n            <ion-radio value="all"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Selon la classe</ion-label>\n            <ion-radio value="byClass"></ion-radio>\n          </ion-item>\n        </ion-list>\n        <ion-item>\n          <ion-label>Niveau</ion-label>\n          <ion-select [(ngModel)]="niveau" name="niveau" (ngModelChange)="changeByClassElements()" (ngModelChange)="activateNextBtn()"\n            [disabled]="niveauDisabled">\n            <ion-option>1 ére année</ion-option>\n            <ion-option>2 ème année</ion-option>\n            <ion-option>3 ème année</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Classe</ion-label>\n          <ion-select [(ngModel)]="classe" name="classe" [disabled]="groupDisabled" (ngModelChange)="activateNextBtn()">\n            <ion-option>Groupe A</ion-option>\n            <ion-option>Groupe B</ion-option>\n            <ion-option>Les deux groupes</ion-option>\n          </ion-select>\n        </ion-item>\n        <button id="nextBtn" ion-button clear color="redNNS" (click)="nextSlide($event)" [disabled]="nextActive">\n          <p id="nextBtnText">suivant</p>\n          <ion-icon id="nextIcon" md="ios-arrow-dropright-outline"></ion-icon>\n        </button>\n      </ion-slide>\n      <ion-slide id="writingElements">\n        <h5>Message</h5>\n        <ion-item style="width: 100%">\n          <ion-textarea placeholder="Taper votre texte ici" [(ngModel)]="contenu" name="contenu"></ion-textarea>\n        </ion-item>\n        <h5>Lien (optionel)</h5>\n        <ion-item>\n          <ion-input [(ngModel)]="links" [readonly]="true" placeholder="https:// ou http://" name="links"></ion-input>\n        </ion-item>\n        <ion-buttons end>\n          <button icon-end small ion-button outline color="redNNS" (click)="pastURL($event)">\n            Coller\n            <ion-icon md="md-paper"></ion-icon>\n          </button>\n        </ion-buttons>\n        <button id="backBtn" ion-button clear color="redNNS" (click)="backSlide($event)">\n          <ion-icon id="backIcon" md="ios-arrow-dropleft-outline"></ion-icon>\n          <p id="backBtnText">précédent</p>\n        </button>\n      </ion-slide>\n    </ion-slides>\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\send-notification-form\send-notification-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_manage_notification_manage_notification__["a" /* ManageNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SendNotificationFormPage);
    return SendNotificationFormPage;
}());

//# sourceMappingURL=send-notification-form.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantActualitesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantActualitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantActualitesPage = /** @class */ (function () {
    function EtudiantActualitesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Actualité";
    }
    EtudiantActualitesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantActualitesPage');
    };
    EtudiantActualitesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-actualites',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-actualites\etudiant-actualites.html"*/'\n    <ion-header>\n        <ion-navbar color="dark">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Actualités</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n<ion-content>\n  <student-notifications-list [optionOut] = "optionIn"></student-notifications-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-actualites\etudiant-actualites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantActualitesPage);
    return EtudiantActualitesPage;
}());

//# sourceMappingURL=etudiant-actualites.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantChangementSallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantChangementSallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantChangementSallePage = /** @class */ (function () {
    function EtudiantChangementSallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Changement de salle";
    }
    EtudiantChangementSallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantChangementSallePage');
    };
    EtudiantChangementSallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-changement-salle',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-changement-salle\etudiant-changement-salle.html"*/'\n    <ion-header>\n        <ion-navbar color="dark">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Changement de Salle</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content >\n  <student-notifications-list [optionOut] = "optionIn"></student-notifications-list>\n  \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-changement-salle\etudiant-changement-salle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantChangementSallePage);
    return EtudiantChangementSallePage;
}());

//# sourceMappingURL=etudiant-changement-salle.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantCoursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantCoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantCoursPage = /** @class */ (function () {
    function EtudiantCoursPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Cours";
    }
    EtudiantCoursPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantCoursPage');
    };
    EtudiantCoursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-cours',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-cours\etudiant-cours.html"*/'\n    <ion-header>\n        <ion-navbar color="dark">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Cours</ion-title>\n        </ion-navbar>\n      </ion-header>\n      <ion-content>\n        <student-notifications-list [optionOut] = "optionIn"></student-notifications-list>\n        \n      </ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-cours\etudiant-cours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantCoursPage);
    return EtudiantCoursPage;
}());

//# sourceMappingURL=etudiant-cours.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantEmploiDeTempsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantEmploiDeTempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantEmploiDeTempsPage = /** @class */ (function () {
    function EtudiantEmploiDeTempsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Emploie du temps";
    }
    EtudiantEmploiDeTempsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantEmploiDeTempsPage');
    };
    EtudiantEmploiDeTempsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-emploi-de-temps',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-emploi-de-temps\etudiant-emploi-de-temps.html"*/'\n    <ion-header>\n        <ion-navbar color="dark">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Emploie du temps</ion-title>\n        </ion-navbar>\n      </ion-header>\n  <ion-content>\n    <student-notifications-list [optionOut]="optionIn"></student-notifications-list>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-emploi-de-temps\etudiant-emploi-de-temps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantEmploiDeTempsPage);
    return EtudiantEmploiDeTempsPage;
}());

//# sourceMappingURL=etudiant-emploi-de-temps.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantNotePage = /** @class */ (function () {
    function EtudiantNotePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Note";
    }
    EtudiantNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantNotePage');
    };
    EtudiantNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-note',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-note\etudiant-note.html"*/'\n    <ion-header>\n        <ion-navbar color="dark">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Note</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n<ion-content>\n  <ion-content>\n    <student-notifications-list [optionOut]="optionIn"></student-notifications-list>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-note\etudiant-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantNotePage);
    return EtudiantNotePage;
}());

//# sourceMappingURL=etudiant-note.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantOffreDeStagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantOffreDeStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantOffreDeStagePage = /** @class */ (function () {
    function EtudiantOffreDeStagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Offre de stage";
    }
    EtudiantOffreDeStagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantOffreDeStagePage');
    };
    EtudiantOffreDeStagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-offre-de-stage',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-offre-de-stage\etudiant-offre-de-stage.html"*/'\n    <ion-header>\n        <ion-navbar color="dark">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>Offre De Stage</ion-title>\n        </ion-navbar>\n      </ion-header>\n\n  <ion-content>\n    <student-notifications-list [optionOut]="optionIn"></student-notifications-list>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-offre-de-stage\etudiant-offre-de-stage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantOffreDeStagePage);
    return EtudiantOffreDeStagePage;
}());

//# sourceMappingURL=etudiant-offre-de-stage.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantRepartitionDesExamensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EtudiantRepartitionDesExamensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EtudiantRepartitionDesExamensPage = /** @class */ (function () {
    function EtudiantRepartitionDesExamensPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Répartition des examens";
    }
    EtudiantRepartitionDesExamensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtudiantRepartitionDesExamensPage');
    };
    EtudiantRepartitionDesExamensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-repartition-des-examens',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-repartition-des-examens\etudiant-repartition-des-examens.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Repartition Des Examens</ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content>\n    <student-notifications-list [optionOut]="optionIn"></student-notifications-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\student-pages\etudiant-repartition-des-examens\etudiant-repartition-des-examens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EtudiantRepartitionDesExamensPage);
    return EtudiantRepartitionDesExamensPage;
}());

//# sourceMappingURL=etudiant-repartition-des-examens.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachActualitesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachActualitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachActualitesPage = /** @class */ (function () {
    function TeachActualitesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Actualité";
    }
    TeachActualitesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachActualitesPage');
    };
    TeachActualitesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-actualites',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-actualites\teach-actualites.html"*/'<!--\n  Generated template for the TeachActualitesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Actualité</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-actualites\teach-actualites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachActualitesPage);
    return TeachActualitesPage;
}());

//# sourceMappingURL=teach-actualites.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachChangementSallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachChangementSallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachChangementSallePage = /** @class */ (function () {
    function TeachChangementSallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Changement de salle";
    }
    TeachChangementSallePage.prototype.ionViewDidLoad = function () {
    };
    TeachChangementSallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-changement-salle',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-changement-salle\teach-changement-salle.html"*/'<!--\n  Generated template for the TeachChangementSallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>changement de salle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-changement-salle\teach-changement-salle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachChangementSallePage);
    return TeachChangementSallePage;
}());

//# sourceMappingURL=teach-changement-salle.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachCoursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachCoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachCoursPage = /** @class */ (function () {
    function TeachCoursPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Cours";
    }
    TeachCoursPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachCoursPage');
    };
    TeachCoursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-cours',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-cours\teach-cours.html"*/'<!--\n  Generated template for the TeachCoursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cours</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-cours\teach-cours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachCoursPage);
    return TeachCoursPage;
}());

//# sourceMappingURL=teach-cours.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachEmploieTempsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachEmploieTempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachEmploieTempsPage = /** @class */ (function () {
    function TeachEmploieTempsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Emploie du temps";
    }
    TeachEmploieTempsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachEmploieTempsPage');
    };
    TeachEmploieTempsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-emploie-temps',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-emploie-temps\teach-emploie-temps.html"*/'<!--\n  Generated template for the TeachEmploieTempsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Emploie du temps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-emploie-temps\teach-emploie-temps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachEmploieTempsPage);
    return TeachEmploieTempsPage;
}());

//# sourceMappingURL=teach-emploie-temps.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachNotePage = /** @class */ (function () {
    function TeachNotePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Note";
    }
    TeachNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachNotePage');
    };
    TeachNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-note',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-note\teach-note.html"*/'<!--\n  Generated template for the TeachNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-note\teach-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachNotePage);
    return TeachNotePage;
}());

//# sourceMappingURL=teach-note.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachOffreStagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachOffreStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachOffreStagePage = /** @class */ (function () {
    function TeachOffreStagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Offre de stage";
    }
    TeachOffreStagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachOffreStagePage');
    };
    TeachOffreStagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-offre-stage',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-offre-stage\teach-offre-stage.html"*/'<!--\n  Generated template for the TeachOffreStagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offre de stage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-offre-stage\teach-offre-stage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachOffreStagePage);
    return TeachOffreStagePage;
}());

//# sourceMappingURL=teach-offre-stage.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachRepartitionExamensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeachRepartitionExamensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeachRepartitionExamensPage = /** @class */ (function () {
    function TeachRepartitionExamensPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Répartition des examens";
    }
    TeachRepartitionExamensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeachRepartitionExamensPage');
    };
    TeachRepartitionExamensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teach-repartition-examens',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-repartition-examens\teach-repartition-examens.html"*/'<!--\n  Generated template for the TeachRepartitionExamensPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Répartition des examens</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <notifications-list [optionOut] = "optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\teacher-pages\teach-repartition-examens\teach-repartition-examens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeachRepartitionExamensPage);
    return TeachRepartitionExamensPage;
}());

//# sourceMappingURL=teach-repartition-examens.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-pages/add-user/add-user.module": [
		454,
		24
	],
	"../pages/admin-pages/admin-calendrier-scolaire/calendrier-scolaire.module": [
		455,
		23
	],
	"../pages/admin-pages/admin-emploie-temps/emploie-temps.module": [
		456,
		22
	],
	"../pages/admin-pages/admin-repartition-examens/repartition-examens.module": [
		457,
		21
	],
	"../pages/admin-pages/admin-student/student.module": [
		458,
		20
	],
	"../pages/admin-pages/admin-teacher/teacher.module": [
		459,
		19
	],
	"../pages/admin-pages/admin-user/user.module": [
		460,
		18
	],
	"../pages/authentication/authentication.module": [
		461,
		17
	],
	"../pages/modif-user/modif-user.module": [
		462,
		16
	],
	"../pages/send-notification-form/send-notification-form.module": [
		463,
		15
	],
	"../pages/show-notification-detail/show-notification-detail.module": [
		464,
		14
	],
	"../pages/student-pages/etudiant-actualites/etudiant-actualites.module": [
		465,
		13
	],
	"../pages/student-pages/etudiant-changement-salle/etudiant-changement-salle.module": [
		466,
		12
	],
	"../pages/student-pages/etudiant-cours/etudiant-cours.module": [
		467,
		11
	],
	"../pages/student-pages/etudiant-emploi-de-temps/etudiant-emploi-de-temps.module": [
		468,
		10
	],
	"../pages/student-pages/etudiant-note/etudiant-note.module": [
		469,
		9
	],
	"../pages/student-pages/etudiant-offre-de-stage/etudiant-offre-de-stage.module": [
		470,
		8
	],
	"../pages/student-pages/etudiant-repartition-des-examens/etudiant-repartition-des-examens.module": [
		471,
		7
	],
	"../pages/teacher-pages/teach-actualites/teach-actualites.module": [
		472,
		6
	],
	"../pages/teacher-pages/teach-changement-salle/teach-changement-salle.module": [
		473,
		5
	],
	"../pages/teacher-pages/teach-cours/teach-cours.module": [
		474,
		4
	],
	"../pages/teacher-pages/teach-emploie-temps/teach-emploie-temps.module": [
		475,
		3
	],
	"../pages/teacher-pages/teach-note/teach-note.module": [
		476,
		2
	],
	"../pages/teacher-pages/teach-offre-stage/teach-offre-stage.module": [
		477,
		1
	],
	"../pages/teacher-pages/teach-repartition-examens/teach-repartition-examens.module": [
		478,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthentificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthentificationProvider = /** @class */ (function () {
    function AuthentificationProvider(firebase, afs) {
        this.firebase = firebase;
        this.afs = afs;
    }
    AuthentificationProvider.prototype.teacherAuth = function (login, pwd) {
        return this.afs.collection("enseignant").ref.where("login", "==", login).where("password", "==", pwd).get();
    };
    AuthentificationProvider.prototype.studentAuth = function (login, pwd) {
        return this.afs.collection("etudiant").ref.where("login", "==", login).where("password", "==", pwd).get();
    };
    AuthentificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AuthentificationProvider);
    return AuthentificationProvider;
}());

//# sourceMappingURL=authentification.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecieveNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RecieveNotificationProvider = /** @class */ (function () {
    function RecieveNotificationProvider(firebase, afs, platform) {
        this.firebase = firebase;
        this.afs = afs;
        this.platform = platform;
    }
    RecieveNotificationProvider.prototype.getToken = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is("android")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is("ios")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 3:
                        token = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.saveTokenFirestore(token, userID)];
                }
            });
        });
    };
    /*********************************** */
    RecieveNotificationProvider.prototype.saveTokenFirestore = function (token, userID) {
        if (!token)
            return;
        var data = {
            token: token,
            userID: userID
        };
        return this.afs.collection('devices').doc(token).set(data);
    };
    /*********************************** */
    RecieveNotificationProvider.prototype.ListenToNotification = function () {
        return this.firebase.onNotificationOpen();
    };
    /*********************************** */
    RecieveNotificationProvider.prototype.showNotificationsHistory = function (option, userID) {
        console.log(option);
        if (option != "all")
            return this.afs.collection("notificationsStudent", function (ref) { return ref.where("content.about", "==", option).where("studentID", "==", userID).orderBy("content.date", 'desc'); }).valueChanges();
        else
            return this.afs.collection("notificationsStudent", function (ref) { return ref.where("studentID", "==", userID).orderBy("content.date", 'desc'); }).valueChanges();
    };
    /*********************************** */
    RecieveNotificationProvider.prototype.removeNotification = function (id) {
        return this.afs.doc("notificationsStudent/" + id).delete();
    };
    /*********************************** */
    RecieveNotificationProvider.prototype.clickedNotif = function (notifId) {
        return this.afs.doc("notificationsStudent/" + notifId).update({
            isClicked: true
        });
    };
    RecieveNotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */]])
    ], RecieveNotificationProvider);
    return RecieveNotificationProvider;
}());

//# sourceMappingURL=recieve-notification.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendrierScolairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendrierScolairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendrierScolairePage = /** @class */ (function () {
    function CalendrierScolairePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalendrierScolairePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendrierScolairePage');
    };
    CalendrierScolairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendrier-scolaire',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-calendrier-scolaire\calendrier-scolaire.html"*/'<!--\n  Generated template for the CalendrierScolairePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="redNNS">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Calendrier Scolaire</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <fab-send-btn></fab-send-btn>   \n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-calendrier-scolaire\calendrier-scolaire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalendrierScolairePage);
    return CalendrierScolairePage;
}());

//# sourceMappingURL=calendrier-scolaire.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploieTempsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmploieTempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmploieTempsPage = /** @class */ (function () {
    function EmploieTempsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Emploie du temps";
    }
    EmploieTempsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmploieTempsPage');
    };
    EmploieTempsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emploie-temps',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-emploie-temps\emploie-temps.html"*/'<!--\n  Generated template for the EmploieTempsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="redNNS">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Emploie du Temps</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <notifications-list [optionOut] = "optionIn"></notifications-list>\n    <fab-send-btn></fab-send-btn>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-emploie-temps\emploie-temps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EmploieTempsPage);
    return EmploieTempsPage;
}());

//# sourceMappingURL=emploie-temps.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepartitionExamensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RepartitionExamensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepartitionExamensPage = /** @class */ (function () {
    function RepartitionExamensPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionIn = "Répartition des examens";
    }
    RepartitionExamensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepartitionExamensPage');
    };
    RepartitionExamensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repartition-examens',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-repartition-examens\repartition-examens.html"*/'<!--\n  Generated template for the RepartitionExamensPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="redNNS">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Repartition des Examens</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <notifications-list [optionOut] = "optionIn"></notifications-list>\n    <fab-send-btn></fab-send-btn>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-repartition-examens\repartition-examens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RepartitionExamensPage);
    return RepartitionExamensPage;
}());

//# sourceMappingURL=repartition-examens.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Etudiant__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentPage = /** @class */ (function () {
    function StudentPage(navCtrl, navParams, fcm, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fcm = fcm;
        this.loadingCtrl = loadingCtrl;
        this.students = [];
        this.collectionNameIn = __WEBPACK_IMPORTED_MODULE_0__classes_Etudiant__["a" /* Etudiant */].collectionName;
    }
    StudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentPage');
    };
    StudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-student',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-student\student.html"*/'<!--\n  Generated template for the StudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="redNNS">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Etudiant</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <button ion-button outline color="secondary">Import</button>\n    <button ion-button outline color="danger">Export</button>\n  </div>\n\n \n  <user-list [collectionNameOut]="collectionNameIn"></user-list>\n  <fab-plus-btn></fab-plus-btn>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-student\student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], StudentPage);
    return StudentPage;
}());

//# sourceMappingURL=student.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Enseignant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherPage = /** @class */ (function () {
    function TeacherPage(navCtrl, navParams, fcm, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.teachers = [];
        this.myInput = '';
        this.collectionNameIn = __WEBPACK_IMPORTED_MODULE_0__classes_Enseignant__["a" /* Enseignant */].collectionName;
    }
    TeacherPage.prototype.ionViewDidLoad = function () {
        //this.filterItems(this.myInput);
        console.log('ionViewDidLoad TeacherPage');
    };
    TeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-teacher',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-teacher\teacher.html"*/'<!--\n  Generated template for the TeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="redNNS">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Enseignant</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <button ion-button outline color="secondary">Import</button>\n    <button ion-button outline color="danger">Export</button>\n    <br>\n  </div>\n\n  \n  \n  <user-list [collectionNameOut]="collectionNameIn"></user-list>\n  <fab-plus-btn></fab-plus-btn>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-teacher\teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], TeacherPage);
    return TeacherPage;
}());

//# sourceMappingURL=teacher.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(319);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_manage_notification_manage_notification__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_show_notification_detail_show_notification_detail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_pages_admin_home_home__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_teacher_pages_teach_cours_teach_cours__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_teacher_pages_teach_changement_salle_teach_changement_salle__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_teacher_pages_teach_emploie_temps_teach_emploie_temps__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_teacher_pages_teach_note_teach_note__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_teacher_pages_teach_offre_stage_teach_offre_stage__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_teacher_pages_teach_repartition_examens_teach_repartition_examens__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_send_notification_form_send_notification_form__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_teacher_pages_teach_actualites_teach_actualites__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_teacher_pages_teach_home_teach_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_admin_pages_admin_student_student__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_admin_pages_admin_teacher_teacher__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_admin_pages_admin_repartition_examens_repartition_examens__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_admin_pages_admin_emploie_temps_emploie_temps__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_pages_admin_calendrier_scolaire_calendrier_scolaire__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_admin_pages_add_user_add_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_admin_pages_admin_user_user__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_modif_user_modif_user__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_student_pages_etudiant_actualites_etudiant_actualites__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_student_pages_etudiant_changement_salle_etudiant_changement_salle__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_student_pages_etudiant_cours_etudiant_cours__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_student_pages_etudiant_emploi_de_temps_etudiant_emploi_de_temps__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_student_pages_etudiant_home_etudiant_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_student_pages_etudiant_note_etudiant_note__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_student_pages_etudiant_offre_de_stage_etudiant_offre_de_stage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_student_pages_etudiant_repartition_des_examens_etudiant_repartition_des_examens__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_authentication_authentication__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_authentification_authentification__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_recieve_notification_recieve_notification__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var firebase = {
    apiKey: "AIzaSyBfoDjoEb5vYygLRSk7Ga7R-Tq4TrY0TQ8",
    authDomain: "pfaensit-cde3a.firebaseapp.com",
    databaseURL: "https://pfaensit-cde3a.firebaseio.com",
    projectId: "pfaensit-cde3a",
    storageBucket: "pfaensit-cde3a.appspot.com",
    messagingSenderId: "211344616641"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_teacher_pages_teach_home_teach_home__["a" /* TeacherHomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_teacher_pages_teach_cours_teach_cours__["a" /* TeachCoursPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_teacher_pages_teach_changement_salle_teach_changement_salle__["a" /* TeachChangementSallePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_teacher_pages_teach_emploie_temps_teach_emploie_temps__["a" /* TeachEmploieTempsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_teacher_pages_teach_note_teach_note__["a" /* TeachNotePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_teacher_pages_teach_offre_stage_teach_offre_stage__["a" /* TeachOffreStagePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_teacher_pages_teach_repartition_examens_teach_repartition_examens__["a" /* TeachRepartitionExamensPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_send_notification_form_send_notification_form__["a" /* SendNotificationFormPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_teacher_pages_teach_actualites_teach_actualites__["a" /* TeachActualitesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_show_notification_detail_show_notification_detail__["a" /* ShowNotificationDetailPage */],
                //Admin side pages
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_pages_admin_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_pages_admin_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_admin_pages_admin_teacher_teacher__["a" /* TeacherPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_admin_pages_admin_repartition_examens_repartition_examens__["a" /* RepartitionExamensPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_admin_pages_admin_emploie_temps_emploie_temps__["a" /* EmploieTempsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_admin_pages_admin_calendrier_scolaire_calendrier_scolaire__["a" /* CalendrierScolairePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_admin_pages_add_user_add_user__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_admin_pages_admin_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_modif_user_modif_user__["a" /* ModifUserPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_send_notification_form_send_notification_form__["a" /* SendNotificationFormPage */],
                //Student side pages
                __WEBPACK_IMPORTED_MODULE_33__pages_student_pages_etudiant_actualites_etudiant_actualites__["a" /* EtudiantActualitesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_student_pages_etudiant_changement_salle_etudiant_changement_salle__["a" /* EtudiantChangementSallePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_student_pages_etudiant_cours_etudiant_cours__["a" /* EtudiantCoursPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_student_pages_etudiant_emploi_de_temps_etudiant_emploi_de_temps__["a" /* EtudiantEmploiDeTempsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_student_pages_etudiant_home_etudiant_home__["a" /* EtudiantHomePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_student_pages_etudiant_note_etudiant_note__["a" /* EtudiantNotePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_student_pages_etudiant_offre_de_stage_etudiant_offre_de_stage__["a" /* EtudiantOffreDeStagePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_student_pages_etudiant_repartition_des_examens_etudiant_repartition_des_examens__["a" /* EtudiantRepartitionDesExamensPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_authentication_authentication__["a" /* AuthenticationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { loadChildren: '../pages/admin-pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-pages/admin-calendrier-scolaire/calendrier-scolaire.module#CalendrierScolairePageModule', name: 'CalendrierScolairePage', segment: 'calendrier-scolaire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-pages/admin-emploie-temps/emploie-temps.module#EmploieTempsPageModule', name: 'EmploieTempsPage', segment: 'emploie-temps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-pages/admin-repartition-examens/repartition-examens.module#RepartitionExamensPageModule', name: 'RepartitionExamensPage', segment: 'repartition-examens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-pages/admin-student/student.module#StudentPageModule', name: 'StudentPage', segment: 'student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-pages/admin-teacher/teacher.module#TeacherPageModule', name: 'TeacherPage', segment: 'teacher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-pages/admin-user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/authentication.module#AuthenticationPageModule', name: 'AuthenticationPage', segment: 'authentication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modif-user/modif-user.module#ModifUserPageModule', name: 'ModifUserPage', segment: 'modif-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-notification-form/send-notification-form.module#SendNotificationFormPageModule', name: 'SendNotificationFormPage', segment: 'send-notification-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-notification-detail/show-notification-detail.module#ShowNotificationDetailPageModule', name: 'ShowNotificationDetailPage', segment: 'show-notification-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-actualites/etudiant-actualites.module#EtudiantActualitesPageModule', name: 'EtudiantActualitesPage', segment: 'etudiant-actualites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-changement-salle/etudiant-changement-salle.module#EtudiantChangementSallePageModule', name: 'EtudiantChangementSallePage', segment: 'etudiant-changement-salle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-cours/etudiant-cours.module#EtudiantCoursPageModule', name: 'EtudiantCoursPage', segment: 'etudiant-cours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-emploi-de-temps/etudiant-emploi-de-temps.module#EtudiantEmploiDeTempsPageModule', name: 'EtudiantEmploiDeTempsPage', segment: 'etudiant-emploi-de-temps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-note/etudiant-note.module#EtudiantNotePageModule', name: 'EtudiantNotePage', segment: 'etudiant-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-offre-de-stage/etudiant-offre-de-stage.module#EtudiantOffreDeStagePageModule', name: 'EtudiantOffreDeStagePage', segment: 'etudiant-offre-de-stage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student-pages/etudiant-repartition-des-examens/etudiant-repartition-des-examens.module#EtudiantRepartitionDesExamensPageModule', name: 'EtudiantRepartitionDesExamensPage', segment: 'etudiant-repartition-des-examens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-actualites/teach-actualites.module#TeachActualitesPageModule', name: 'TeachActualitesPage', segment: 'teach-actualites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-changement-salle/teach-changement-salle.module#TeachChangementSallePageModule', name: 'TeachChangementSallePage', segment: 'teach-changement-salle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-cours/teach-cours.module#TeachCoursPageModule', name: 'TeachCoursPage', segment: 'teach-cours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-emploie-temps/teach-emploie-temps.module#TeachEmploieTempsPageModule', name: 'TeachEmploieTempsPage', segment: 'teach-emploie-temps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-note/teach-note.module#TeachNotePageModule', name: 'TeachNotePage', segment: 'teach-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-offre-stage/teach-offre-stage.module#TeachOffreStagePageModule', name: 'TeachOffreStagePage', segment: 'teach-offre-stage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teacher-pages/teach-repartition-examens/teach-repartition-examens.module#TeachRepartitionExamensPageModule', name: 'TeachRepartitionExamensPage', segment: 'teach-repartition-examens', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_teacher_pages_teach_home_teach_home__["a" /* TeacherHomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_teacher_pages_teach_cours_teach_cours__["a" /* TeachCoursPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_teacher_pages_teach_changement_salle_teach_changement_salle__["a" /* TeachChangementSallePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_teacher_pages_teach_emploie_temps_teach_emploie_temps__["a" /* TeachEmploieTempsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_teacher_pages_teach_note_teach_note__["a" /* TeachNotePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_teacher_pages_teach_offre_stage_teach_offre_stage__["a" /* TeachOffreStagePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_teacher_pages_teach_repartition_examens_teach_repartition_examens__["a" /* TeachRepartitionExamensPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_send_notification_form_send_notification_form__["a" /* SendNotificationFormPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_teacher_pages_teach_actualites_teach_actualites__["a" /* TeachActualitesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_show_notification_detail_show_notification_detail__["a" /* ShowNotificationDetailPage */],
                //Admin side pages
                __WEBPACK_IMPORTED_MODULE_15__pages_admin_pages_admin_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_pages_admin_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_admin_pages_admin_teacher_teacher__["a" /* TeacherPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_admin_pages_admin_repartition_examens_repartition_examens__["a" /* RepartitionExamensPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_admin_pages_admin_emploie_temps_emploie_temps__["a" /* EmploieTempsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_admin_pages_admin_calendrier_scolaire_calendrier_scolaire__["a" /* CalendrierScolairePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_admin_pages_add_user_add_user__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_admin_pages_admin_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_modif_user_modif_user__["a" /* ModifUserPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_send_notification_form_send_notification_form__["a" /* SendNotificationFormPage */],
                //Student side pages
                __WEBPACK_IMPORTED_MODULE_33__pages_student_pages_etudiant_actualites_etudiant_actualites__["a" /* EtudiantActualitesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_student_pages_etudiant_changement_salle_etudiant_changement_salle__["a" /* EtudiantChangementSallePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_student_pages_etudiant_cours_etudiant_cours__["a" /* EtudiantCoursPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_student_pages_etudiant_emploi_de_temps_etudiant_emploi_de_temps__["a" /* EtudiantEmploiDeTempsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_student_pages_etudiant_home_etudiant_home__["a" /* EtudiantHomePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_student_pages_etudiant_note_etudiant_note__["a" /* EtudiantNotePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_student_pages_etudiant_offre_de_stage_etudiant_offre_de_stage__["a" /* EtudiantOffreDeStagePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_student_pages_etudiant_repartition_des_examens_etudiant_repartition_des_examens__["a" /* EtudiantRepartitionDesExamensPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_authentication_authentication__["a" /* AuthenticationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__["a" /* Clipboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_manage_notification_manage_notification__["a" /* ManageNotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_authentification_authentification__["a" /* AuthentificationProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_recieve_notification_recieve_notification__["a" /* RecieveNotificationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_manage_notification_manage_notification__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_teacher_pages_teach_home_teach_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teacher_pages_teach_cours_teach_cours__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_teacher_pages_teach_changement_salle_teach_changement_salle__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_teacher_pages_teach_emploie_temps_teach_emploie_temps__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_pages_teach_repartition_examens_teach_repartition_examens__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_teacher_pages_teach_note_teach_note__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_teacher_pages_teach_offre_stage_teach_offre_stage__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_teacher_pages_teach_actualites_teach_actualites__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_authentication_authentication__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_student_pages_etudiant_home_etudiant_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_student_pages_etudiant_cours_etudiant_cours__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_student_pages_etudiant_changement_salle_etudiant_changement_salle__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_student_pages_etudiant_emploi_de_temps_etudiant_emploi_de_temps__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_student_pages_etudiant_repartition_des_examens_etudiant_repartition_des_examens__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_student_pages_etudiant_note_etudiant_note__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_student_pages_etudiant_offre_de_stage_etudiant_offre_de_stage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_student_pages_etudiant_actualites_etudiant_actualites__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, loadingCtrl, manageNotification, event, storage, manageNotif) {
        /*this.pages = [
          { title: 'Home', component: TeacherHomePage },
          { title: 'Cours', component: TeachCoursPage },
          { title: 'Changement de salle', component: TeachChangementSallePage },
          { title: 'Emploie du temps', component: TeachEmploieTempsPage },
          { title: 'Répartition des examens', component: TeachRepartitionExamensPage },
          { title: 'Notes', component: TeachNotePage },
          { title: 'Offre de stage', component: TeachOffreStagePage },
          { title: 'Actualités', component: TeachActualitesPage },
        ];*/
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.manageNotification = manageNotification;
        this.event = event;
        this.storage = storage;
        this.manageNotif = manageNotif;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_authentication_authentication__["a" /* AuthenticationPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //manageNotification.getToken("2 ème année#Groupe A")
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("StudentData").then(function (data) {
            console.log("student dataaa: " + data);
            if (data != null) {
                //console.log("dataaa " + data.userid)
                var coursBadge;
                //alert(data.userid)
                _this.manageNotif.getBadges("Cours", data.userid).subscribe(function (e) {
                    console.log("courssss....: " + e.length);
                    coursBadge = e.length;
                });
                var chngmtSalleBadge;
                _this.manageNotif.getBadges("Changement de salle", data.userid).subscribe(function (e) {
                    chngmtSalleBadge = e.length;
                });
                var tempsBadge;
                _this.manageNotif.getBadges("Emploie du temps", data.userid).subscribe(function (e) {
                    tempsBadge = e.length;
                });
                var repExamBadge;
                _this.manageNotif.getBadges("Répartition des examens", data.userid).subscribe(function (e) {
                    repExamBadge = e.length;
                });
                var noteBadge;
                _this.manageNotif.getBadges("Notes", data.userid).subscribe(function (e) {
                    noteBadge = e.length;
                });
                var stageBadge;
                _this.manageNotif.getBadges("Offre de stage", data.userid).subscribe(function (e) {
                    stageBadge = e.length;
                });
                var acctBadge;
                _this.manageNotif.getBadges("Actualités", data.userid).subscribe(function (e) {
                    acctBadge = e.length;
                });
                alert();
                _this.pages = [
                    { title: 'Home', badge: "", component: __WEBPACK_IMPORTED_MODULE_14__pages_student_pages_etudiant_home_etudiant_home__["a" /* EtudiantHomePage */] },
                    { title: 'Cours', badge: coursBadge, component: __WEBPACK_IMPORTED_MODULE_15__pages_student_pages_etudiant_cours_etudiant_cours__["a" /* EtudiantCoursPage */] },
                    { title: 'Changement de salle', badge: chngmtSalleBadge, component: __WEBPACK_IMPORTED_MODULE_16__pages_student_pages_etudiant_changement_salle_etudiant_changement_salle__["a" /* EtudiantChangementSallePage */] },
                    { title: 'Emploie du temps', badge: tempsBadge, component: __WEBPACK_IMPORTED_MODULE_17__pages_student_pages_etudiant_emploi_de_temps_etudiant_emploi_de_temps__["a" /* EtudiantEmploiDeTempsPage */] },
                    { title: 'Répartition des examens', badge: repExamBadge, component: __WEBPACK_IMPORTED_MODULE_18__pages_student_pages_etudiant_repartition_des_examens_etudiant_repartition_des_examens__["a" /* EtudiantRepartitionDesExamensPage */] },
                    { title: 'Notes', badge: noteBadge, component: __WEBPACK_IMPORTED_MODULE_19__pages_student_pages_etudiant_note_etudiant_note__["a" /* EtudiantNotePage */] },
                    { title: 'Offre de stage', badge: stageBadge, component: __WEBPACK_IMPORTED_MODULE_20__pages_student_pages_etudiant_offre_de_stage_etudiant_offre_de_stage__["a" /* EtudiantOffreDeStagePage */] },
                    { title: 'Actualités', badge: acctBadge, component: __WEBPACK_IMPORTED_MODULE_21__pages_student_pages_etudiant_actualites_etudiant_actualites__["a" /* EtudiantActualitesPage */] },
                ];
                console.log("pagesss: " + JSON.stringify(_this.pages));
                _this.platform.ready().then(function () {
                    _this.manageNotification.getToken(data.userid);
                });
                _this.nomEtPrenom = data.nom + " " + data.prenom;
                console.log("this daata:" + data);
                //this.storage.clear();
                _this.storage.set("StudentData", data);
            }
            else {
                _this.event.subscribe("StudentMenu", function (data) {
                    console.log("student dataaa: " + data);
                    if (data != null) {
                        //console.log("dataaa " + data.userid)
                        var coursBadge;
                        alert(data.userid);
                        _this.manageNotif.getBadges("Cours", data.userid).subscribe(function (e) {
                            console.log("courssss....: " + e.length);
                            coursBadge = e.length;
                        });
                        var chngmtSalleBadge;
                        _this.manageNotif.getBadges("Changement de salle", data.userid).subscribe(function (e) {
                            chngmtSalleBadge = e.length;
                        });
                        var tempsBadge;
                        _this.manageNotif.getBadges("Emploie du temps", data.userid).subscribe(function (e) {
                            tempsBadge = e.length;
                        });
                        var repExamBadge;
                        _this.manageNotif.getBadges("Répartition des examens", data.userid).subscribe(function (e) {
                            repExamBadge = e.length;
                        });
                        var noteBadge;
                        _this.manageNotif.getBadges("Notes", data.userid).subscribe(function (e) {
                            noteBadge = e.length;
                        });
                        var stageBadge;
                        _this.manageNotif.getBadges("Offre de stage", data.userid).subscribe(function (e) {
                            stageBadge = e.length;
                        });
                        var acctBadge;
                        _this.manageNotif.getBadges("Actualités", data.userid).subscribe(function (e) {
                            acctBadge = e.length;
                        });
                        alert();
                        _this.pages = [
                            { title: 'Home', badge: "", component: __WEBPACK_IMPORTED_MODULE_14__pages_student_pages_etudiant_home_etudiant_home__["a" /* EtudiantHomePage */] },
                            { title: 'Cours', badge: coursBadge, component: __WEBPACK_IMPORTED_MODULE_15__pages_student_pages_etudiant_cours_etudiant_cours__["a" /* EtudiantCoursPage */] },
                            { title: 'Changement de salle', badge: chngmtSalleBadge, component: __WEBPACK_IMPORTED_MODULE_16__pages_student_pages_etudiant_changement_salle_etudiant_changement_salle__["a" /* EtudiantChangementSallePage */] },
                            { title: 'Emploie du temps', badge: tempsBadge, component: __WEBPACK_IMPORTED_MODULE_17__pages_student_pages_etudiant_emploi_de_temps_etudiant_emploi_de_temps__["a" /* EtudiantEmploiDeTempsPage */] },
                            { title: 'Répartition des examens', badge: repExamBadge, component: __WEBPACK_IMPORTED_MODULE_18__pages_student_pages_etudiant_repartition_des_examens_etudiant_repartition_des_examens__["a" /* EtudiantRepartitionDesExamensPage */] },
                            { title: 'Notes', badge: noteBadge, component: __WEBPACK_IMPORTED_MODULE_19__pages_student_pages_etudiant_note_etudiant_note__["a" /* EtudiantNotePage */] },
                            { title: 'Offre de stage', badge: stageBadge, component: __WEBPACK_IMPORTED_MODULE_20__pages_student_pages_etudiant_offre_de_stage_etudiant_offre_de_stage__["a" /* EtudiantOffreDeStagePage */] },
                            { title: 'Actualités', badge: acctBadge, component: __WEBPACK_IMPORTED_MODULE_21__pages_student_pages_etudiant_actualites_etudiant_actualites__["a" /* EtudiantActualitesPage */] },
                        ];
                        console.log("pagesss: " + JSON.stringify(_this.pages));
                        _this.platform.ready().then(function () {
                            _this.manageNotification.getToken(data.userid);
                        });
                        _this.nomEtPrenom = data.nom + " " + data.prenom;
                        console.log("this daata:" + data);
                        _this.storage.clear();
                        _this.storage.set("StudentData", data);
                    }
                });
            }
        });
        this.storage.get("TeacherData").then(function (data) {
            console.log("student dataaa: " + data);
            if (data != null) {
                _this.event.subscribe("TeacherMenu", function (data) {
                    console.log("teacher dataaa: " + data);
                    if (data != null) {
                        console.log("dataaa " + data.userid);
                        _this.pages = [
                            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_teacher_pages_teach_home_teach_home__["a" /* TeacherHomePage */] },
                            { title: 'Cours', component: __WEBPACK_IMPORTED_MODULE_6__pages_teacher_pages_teach_cours_teach_cours__["a" /* TeachCoursPage */] },
                            { title: 'Changement de salle', component: __WEBPACK_IMPORTED_MODULE_7__pages_teacher_pages_teach_changement_salle_teach_changement_salle__["a" /* TeachChangementSallePage */] },
                            { title: 'Emploie du temps', component: __WEBPACK_IMPORTED_MODULE_8__pages_teacher_pages_teach_emploie_temps_teach_emploie_temps__["a" /* TeachEmploieTempsPage */] },
                            { title: 'Répartition des examens', component: __WEBPACK_IMPORTED_MODULE_9__pages_teacher_pages_teach_repartition_examens_teach_repartition_examens__["a" /* TeachRepartitionExamensPage */] },
                            { title: 'Notes', component: __WEBPACK_IMPORTED_MODULE_10__pages_teacher_pages_teach_note_teach_note__["a" /* TeachNotePage */] },
                            { title: 'Offre de stage', component: __WEBPACK_IMPORTED_MODULE_11__pages_teacher_pages_teach_offre_stage_teach_offre_stage__["a" /* TeachOffreStagePage */] },
                            { title: 'Actualités', component: __WEBPACK_IMPORTED_MODULE_12__pages_teacher_pages_teach_actualites_teach_actualites__["a" /* TeachActualitesPage */] },
                        ];
                        _this.nomEtPrenom = data.nom + " " + data.prenom;
                    }
                });
            }
            else {
                _this.event.subscribe("TeacherMenu", function (data) {
                    console.log("teacher dataaa: " + data);
                    if (data != null) {
                        console.log("dataaa " + data.userid);
                        _this.pages = [
                            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_teacher_pages_teach_home_teach_home__["a" /* TeacherHomePage */] },
                            { title: 'Cours', component: __WEBPACK_IMPORTED_MODULE_6__pages_teacher_pages_teach_cours_teach_cours__["a" /* TeachCoursPage */] },
                            { title: 'Changement de salle', component: __WEBPACK_IMPORTED_MODULE_7__pages_teacher_pages_teach_changement_salle_teach_changement_salle__["a" /* TeachChangementSallePage */] },
                            { title: 'Emploie du temps', component: __WEBPACK_IMPORTED_MODULE_8__pages_teacher_pages_teach_emploie_temps_teach_emploie_temps__["a" /* TeachEmploieTempsPage */] },
                            { title: 'Répartition des examens', component: __WEBPACK_IMPORTED_MODULE_9__pages_teacher_pages_teach_repartition_examens_teach_repartition_examens__["a" /* TeachRepartitionExamensPage */] },
                            { title: 'Notes', component: __WEBPACK_IMPORTED_MODULE_10__pages_teacher_pages_teach_note_teach_note__["a" /* TeachNotePage */] },
                            { title: 'Offre de stage', component: __WEBPACK_IMPORTED_MODULE_11__pages_teacher_pages_teach_offre_stage_teach_offre_stage__["a" /* TeachOffreStagePage */] },
                            { title: 'Actualités', component: __WEBPACK_IMPORTED_MODULE_12__pages_teacher_pages_teach_actualites_teach_actualites__["a" /* TeachActualitesPage */] },
                        ];
                        _this.nomEtPrenom = data.nom + " " + data.prenom;
                    }
                });
            }
        });
    };
    MyApp.prototype.openPage = function (p) {
        this.nav.setRoot(p.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\app\app.html"*/'<ion-menu *ngIf="2==2" side="left" [content]="mycontent">\n    <ion-content>\n        <ion-header class="coverImg" >\n                <div class="avatar"></div>\n                <div class="nomEtPrenom">{{nomEtPrenom}}</div>\n        </ion-header>\n        <ion-list class="menuItems">\n            <p style="margin-left: 10px">Menu</p>\n            <hr class="separator">\n            <button style="margin-left: 10px;font-size: 13px" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                <ion-icon *ngIf="p.title == \'Home\'" md="md-home" style="margin-right:20px"></ion-icon>\n                <ion-icon *ngIf="p.title != \'Home\'" md="md-school" style="margin-right:20px"></ion-icon>\n                {{p.title}}\n                <ion-badge color="redNNS" item-right>{{p.badge}}</ion-badge>\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav #mycontent [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_manage_notification_manage_notification__["a" /* ManageNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_manage_notification_manage_notification__["a" /* ManageNotificationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fab_send_btn_fab_send_btn__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_list_notifications_list__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fab_plus_btn_fab_plus_btn__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_notifications_list_student_notifications_list__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__fab_send_btn_fab_send_btn__["a" /* FabSendBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_3__notifications_list_notifications_list__["a" /* NotificationsListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__fab_plus_btn_fab_plus_btn__["a" /* FabPlusBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_list_user_list__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__student_notifications_list_student_notifications_list__["a" /* StrudentNotificationsListComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__fab_send_btn_fab_send_btn__["a" /* FabSendBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_3__notifications_list_notifications_list__["a" /* NotificationsListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__fab_plus_btn_fab_plus_btn__["a" /* FabPlusBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_list_user_list__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__student_notifications_list_student_notifications_list__["a" /* StrudentNotificationsListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabSendBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_send_notification_form_send_notification_form__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FabSendBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FabSendBtnComponent = /** @class */ (function () {
    function FabSendBtnComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FabSendBtnComponent.prototype.goToNotificationForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_send_notification_form_send_notification_form__["a" /* SendNotificationFormPage */]);
    };
    FabSendBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fab-send-btn',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\fab-send-btn\fab-send-btn.html"*/'<ion-fab bottom right>\n  <button ion-fab color="redNNS" (click)="goToNotificationForm()">\n    <ion-icon ios="ios-send" md="md-send"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\fab-send-btn\fab-send-btn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], FabSendBtnComponent);
    return FabSendBtnComponent;
}());

//# sourceMappingURL=fab-send-btn.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_manage_notification_manage_notification__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_show_notification_detail_show_notification_detail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotificationsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NotificationsListComponent = /** @class */ (function () {
    //text: string;
    function NotificationsListComponent(manageNotif, loadingCtrl, navCtrl, alert, storage) {
        this.manageNotif = manageNotif;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.storage = storage;
        this.notificationsList = new Array();
        console.log('Hello NotificationsListComponent Component');
    }
    NotificationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.optionOut);
        if (this.optionOut) {
            var loading_1 = this.loadingCtrl.create({ content: "Chargement en cours" });
            loading_1.present();
            this.storage.get("TeacherData").then(function (data) {
                _this.listNotif = _this.manageNotif.showNotificationsHistory(_this.optionOut, data.prenom + " " + data.nom);
                _this.listNotif.subscribe(function (e) {
                    console.log(e);
                    _this.notificationsList = [];
                    for (var i = 0; i < e.length; i++) {
                        //console.log(e[i])
                        var date = void 0;
                        var hours = e[i].content.date.getHours();
                        var minutes = e[i].content.date.getMinutes();
                        if (e[i].content.date.getHours() < 10)
                            hours = "0" + e[i].content.date.getHours();
                        if (e[i].content.date.getMinutes() < 10)
                            minutes = "0" + e[i].content.date.getMinutes();
                        date = hours + ":" + minutes + "<br>" + e[i].content.date.toLocaleDateString("en-US");
                        if (e[i].receiver.receiverAll != null)
                            _this.notificationsList.push({ sender: e[i].senderName, receiver: "tout le monde", time: date, about: e[i].content.about, allContent: e[i] });
                        else {
                            var reciver = "la classe " + e[i].receiver.receiverbyClass.niveau + " " + e[i].receiver.receiverbyClass.classe;
                            _this.notificationsList.push({ sender: e[i].senderName, receiver: reciver, time: date, about: e[i].content.about, allContent: e[i] });
                        }
                        //console.log(this.notificationsList);
                    }
                    loading_1.dismiss();
                });
            });
        }
    };
    NotificationsListComponent.prototype.showNotif = function (notif) {
        console.log(notif);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_show_notification_detail_show_notification_detail__["a" /* ShowNotificationDetailPage */], {
            notification: notif
        });
    };
    NotificationsListComponent.prototype.removeNotification = function (notif) {
        if (this.manageNotif.removeNotification(notif.allContent.notificationId))
            this.alert.create({
                message: "Supression avec succès",
                buttons: ['ok']
            }).present();
        else {
            this.alert.create({
                message: "Erreur de suppression",
                buttons: ['ok']
            }).present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NotificationsListComponent.prototype, "optionOut", void 0);
    NotificationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notifications-list',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\notifications-list\notifications-list.html"*/'<ion-list>\n  <!--<button ion-item *ngFor="let notif of notificationsList" (click)="showNotif(notif)">\n    {{notif.text}}\n  </button>-->\n  <ion-item-sliding *ngFor="let notif of notificationsList" #notification>\n    <ion-item text-wrap  (click)="showNotif(notif)" detail-push [style.backgroundColor]="red">\n      <ion-avatar class="iconAbout" item-start >\n        <img  src="assets/icon/{{notif.about}}.png" />\n      </ion-avatar>\n      <p ion-text class="fromTo"><span class="sender">{{notif.sender}}</span> a envoyé une notification à<br/> <span class="receiver">{{notif.receiver}}</span></p>\n      <p item-end class="time" [innerHTML]="notif.time"></p>\n      <sup ion-text>à propos: {{notif.about}}</sup>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="redNNS" (click)="removeNotification(notif)">\n        <ion-icon md="md-trash" style="margin-left: 0.25em"></ion-icon>\n         supprimer\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\notifications-list\notifications-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_manage_notification_manage_notification__["a" /* ManageNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NotificationsListComponent);
    return NotificationsListComponent;
}());

//# sourceMappingURL=notifications-list.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPlusBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_admin_pages_add_user_add_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FabPlusBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FabPlusBtnComponent = /** @class */ (function () {
    function FabPlusBtnComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello FabPlusBtnComponent Component');
        this.text = 'Hello World';
    }
    FabPlusBtnComponent.prototype.goToAddUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_admin_pages_add_user_add_user__["a" /* AddUserPage */]);
    };
    FabPlusBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'fab-plus-btn',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\fab-plus-btn\fab-plus-btn.html"*/'<!-- Generated template for the FabPlusBtnComponent component -->\n<ion-fab bottom right>\n  <button ion-fab color="redNNS" (click)="goToAddUser()">\n    <ion-icon name="md-add"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\fab-plus-btn\fab-plus-btn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], FabPlusBtnComponent);
    return FabPlusBtnComponent;
}());

//# sourceMappingURL=fab-plus-btn.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fcm_fcm__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_admin_pages_admin_user_user__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserListComponent = /** @class */ (function () {
    function UserListComponent(fcm, loadingCtrl, modalCtrl) {
        this.fcm = fcm;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.myInput = '';
        console.log('Hello UserListComponent Component');
        this.text = 'Hello World';
        this.users = new Array();
        this.altUsers = new Array();
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.collectionNameOut) {
            this.collectionName = this.collectionNameOut;
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Please wait...'
            });
            loading_1.present();
            this.fcm.getUsersFromFireStore(this.collectionName).subscribe(function (snapshot) {
                /*snapshot.forEach(doc => {
                  console.log(doc.id, '=>', doc.data());
                  this.users.push(doc.data());
                });
                loading.dismiss();*/
                console.log(snapshot);
                _this.users = [];
                for (var i = 0; i < snapshot.length; i++) {
                    if (snapshot[i]) {
                        _this.users.push(snapshot[i]);
                        _this.altUsers.push(snapshot[i]);
                    }
                }
                //console.log("hedom users: "+ this.users)
                loading_1.dismiss();
            });
            //this.altUsers = this.users;
            //console.log("$ Tab $ ", this.users)
        }
    };
    UserListComponent.prototype.filterItems = function (myInput) {
        return this.users.filter(function (user) {
            //console.log(user);
            //let b: boolean;
            return ("" + user.cin + user.nom + user.prenom + "").toLowerCase().indexOf(myInput.toLowerCase()) > -1;
        });
    };
    /*************************************** */
    UserListComponent.prototype.setFilterItems = function ($event) {
        console.log(this.altUsers);
        this.users = this.altUsers;
        if (this.myInput && this.myInput.trim() != '') {
            this.users = this.filterItems(this.myInput);
        }
    };
    /************************************** */
    UserListComponent.prototype.onCancel = function ($event) {
        this.users = this.altUsers;
        //alert("Canceled");
    };
    /*************************************** */
    UserListComponent.prototype.openModal = function (user) {
        var data = user;
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_admin_pages_admin_user_user__["a" /* UserPage */], data);
        modalPage.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "collectionNameOut", void 0);
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'user-list',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\user-list\user-list.html"*/'<!-- Generated template for the UserListComponent component -->\n<ion-searchbar [(ngModel)]="myInput" (ionInput)="setFilterItems($event)" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)">\n</ion-searchbar>\n\n<ion-scroll scrollY="true" style="height: 80%">\n  <table class="table">\n    <tr class="row">\n      <th class="col">Firstname</th>\n      <th class="col">Lastname</th>\n      <th class="col">CIN</th>\n    </tr>\n    <tr class="row" *ngFor="let user of users" (click)="openModal(user)">\n      <td class="col">{{user.prenom}}</td>\n      <td class="col">{{user.nom}}</td>\n      <td class="col" >{{user.cin}}</td>\n    </tr>\n\n  </table>\n</ion-scroll>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\user-list\user-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], UserListComponent);
    return UserListComponent;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrudentNotificationsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_recieve_notification_recieve_notification__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_show_notification_detail_show_notification_detail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotificationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StrudentNotificationsListComponent = /** @class */ (function () {
    // text: string;
    function StrudentNotificationsListComponent(manageNotif, loadingCtrl, navCtrl, storage) {
        this.manageNotif = manageNotif;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.notificationsList = new Array();
        //console.log('Hello NotificationListComponent Component');
        //this.text = 'Hello World';
    }
    StrudentNotificationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.optionOut);
        if (this.optionOut) {
            var studentID;
            this.storage.get("StudentData").then(function (e) {
                studentID = e.userid;
            }).then(function () {
                var loading = _this.loadingCtrl.create({ content: "Chargement en cours" });
                loading.present();
                _this.ListNotif = _this.manageNotif.showNotificationsHistory(_this.optionOut, studentID);
                _this.ListNotif.subscribe(function (e) {
                    console.log(e);
                    _this.notificationsList = [];
                    for (var i = 0; i < e.length; i++) {
                        console.log(e[i].isClicked);
                        _this.isClicked = e[i].isClicked;
                        var date = void 0;
                        var hours = e[i].content.date.getHours();
                        var minutes = e[i].content.date.getMinutes();
                        if (e[i].content.date.getHours() < 10)
                            hours = "0" + e[i].content.date.getHours();
                        if (e[i].content.date.getMinutes() < 10)
                            minutes = "0" + e[i].content.date.getMinutes();
                        date = hours + ":" + minutes + "<br>" + e[i].content.date.toLocaleDateString("en-US");
                        if (e[i].receiver.receiverAll != null)
                            _this.notificationsList.push({ sender: e[i].senderName, receiver: "tout le monde", time: date, about: e[i].content.about, isClicked: e[i].isClicked, allContent: e[i] });
                        else {
                            var reciver = "la classe " + e[i].receiver.receiverbyClass.niveau + " " + e[i].receiver.receiverbyClass.classe;
                            _this.notificationsList.push({ sender: e[i].senderName, receiver: reciver, time: date, about: e[i].content.about, isClicked: e[i].isClicked, allContent: e[i] });
                        }
                    }
                    loading.dismiss();
                });
            });
        }
    };
    StrudentNotificationsListComponent.prototype.showNotif = function (notif) {
        var _this = this;
        console.log(notif);
        if (notif.allContent.isClicked) {
            this.isClicked = true;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_show_notification_detail_show_notification_detail__["a" /* ShowNotificationDetailPage */], {
                notification: notif
            });
        }
        else {
            this.manageNotif.clickedNotif(notif.allContent.notificationId).then(function (e) {
                _this.isClicked = true;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_show_notification_detail_show_notification_detail__["a" /* ShowNotificationDetailPage */], {
                    notification: notif
                });
            });
        }
        //alert(notif.isClicked)
    };
    StrudentNotificationsListComponent.prototype.removeNotification = function (notif) {
        if (this.manageNotif.removeNotification(notif.allContent.notificationId))
            this.alert.create({
                message: "Supression avec succès",
                buttons: ['ok']
            }).present();
        else {
            this.alert.create({
                message: "Erreur de suppression",
                buttons: ['ok']
            }).present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], StrudentNotificationsListComponent.prototype, "optionOut", void 0);
    StrudentNotificationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'student-notifications-list',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\student-notifications-list\student-notifications-list.html"*/'<ion-list>\n  <!--<button ion-item *ngFor="let notif of notificationsList" (click)="showNotif(notif)">\n    {{notif.text}}\n  </button>-->\n  <ion-item-sliding *ngFor="let notif of notificationsList" #notification >\n    <ion-item text-wrap ion-item (click)="showNotif(notif)" [ngStyle]="{\'background-color\': notif.isClicked ? \'white\' : \'#DCDCDC\'}" >\n      <ion-avatar class="iconAbout" item-start >\n      <img  src="assets/icon/{{notif.about}}.png" />\n      </ion-avatar>\n      <p ion-text class="fromTo"><span class="sender">{{notif.sender}}</span> a envoyé une notification à<br/> <span class="receiver">{{notif.receiver}}</span></p>\n      <p item-end class="time" [innerHTML]="notif.time"></p>\n      <sup ion-text>à propos: {{notif.about}}</sup>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="redNNS" (click)="removeNotification(notif)">\n        <ion-icon md="md-trash" style="margin-left: 0.25em"></ion-icon>\n         supprimer\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\components\student-notifications-list\student-notifications-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_recieve_notification_recieve_notification__["a" /* RecieveNotificationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], StrudentNotificationsListComponent);
    return StrudentNotificationsListComponent;
}());

//# sourceMappingURL=student-notifications-list.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.optionIn = "all";
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-home\home.html"*/'<ion-header>\n  <ion-navbar color ="redNNS">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="titre">\n      ENSIT\n      <ion-icon md="md-notifications"></ion-icon>\n      Notifications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <notifications-list [optionOut]="optionIn"></notifications-list>\n  <fab-send-btn></fab-send-btn>\n</ion-content>'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\admin-pages\admin-home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcmProvider = /** @class */ (function () {
    function FcmProvider(firebaseNative, afs, platform) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
    }
    //================Get permission from the user===================
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        alert(token);
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    //=====================Save the token to firestore======================
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        if (!token)
            return;
        var devicesRef = this.afs.collection('devices');
        var docData = {
            token: token,
            userId: 'testUser'
        };
        return devicesRef.doc(token).set(docData);
    };
    //======================Send Notif from sender To reciever========
    FcmProvider.prototype.sendNotificationFromTo = function (sender, receiver, content) {
        var _this = this;
        var data = {
            senderName: sender,
            receiver: receiver,
            content: content
        };
        this.afs.collection("notificationsStudent").add(data).then(function (docRef) {
            _this.afs.collection("notificationsStudent").doc(docRef.id).update({
                notificationId: docRef.id
            });
        });
        return this.afs.collection("notifications").add(data).then(function (docRef) {
            _this.afs.collection("notifications").doc(docRef.id).update({
                notificationId: docRef.id
            });
        });
    };
    //=================== Listen to incoming FCM messages=============
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    //===============Show notifications History===============
    FcmProvider.prototype.showNotificationsHistory = function (option) {
        console.log(option);
        if (option != "all")
            return this.afs.collection("notifications", function (ref) { return ref.where("content.about", "==", option).orderBy("content.date", "desc"); }).valueChanges();
        else
            return this.afs.collection("notifications", function (ref) { return ref.orderBy("content.date", "desc"); }).valueChanges();
    };
    //================Remove Notification==============
    FcmProvider.prototype.removeNotification = function (id) {
        return this.afs.doc("notifications/" + id).delete();
    };
    //=============save user to fireStore==============================
    FcmProvider.prototype.saveUserToFireStore = function (docData, collectionName) {
        if (docData == null || docData == {})
            return;
        var collectionRef = this.afs.collection(collectionName);
        return collectionRef.add(docData).then(function (docref) {
            collectionRef.doc(docref.id).update({
                userid: docref.id
            });
        });
    };
    //==================Delete User From FireStore =======================
    FcmProvider.prototype.deleteUserFromFireStore = function (id, collectionName) {
        if (id == null || id == "")
            return;
        return this.afs.collection(collectionName).doc(id).delete();
    };
    //===================Modify user in FireStore ================
    FcmProvider.prototype.updateUserFromFireStore = function (id, collectionName, data) {
        if (id == null || id == "")
            return;
        return this.afs.collection(collectionName).doc(id).update(data);
    };
    //================== get Users From FireStore =================
    FcmProvider.prototype.getUsersFromFireStore = function (collectionName) {
        var collectionRef = this.afs.collection(collectionName);
        return collectionRef.valueChanges();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Enseignant; });
var Enseignant = /** @class */ (function () {
    function Enseignant(cin, nom, prenom, birthday, login, password, speciality) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.birthday = birthday;
        this.login = login;
        this.password = password;
        this.speciality = speciality;
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.birthday = birthday;
        this.login = login;
        this.password = password;
        this.speciality = speciality;
    }
    //=====================Adds a Teacher to DB ==========================================
    Enseignant.prototype.addUser = function (fcm) {
        return fcm.saveUserToFireStore(this.getDocData(), Enseignant.collectionName);
    };
    //=====================Creates Teacher docData to be added to DB ==========================================
    Enseignant.prototype.getDocData = function () {
        var docData = {
            cin: this.cin,
            nom: this.nom,
            prenom: this.prenom,
            birthday: this.birthday,
            login: this.login,
            password: this.password,
            speciality: this.speciality
        };
        return docData;
    };
    Enseignant.collectionName = "enseignant";
    return Enseignant;
}());

//# sourceMappingURL=Enseignant.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Etudiant; });
//import { User } from './User';
var Etudiant = /** @class */ (function () {
    //public niveauEtude: number;
    //public groupe: String;
    ///static collectionName = "etudiant";
    function Etudiant(cin, nom, prenom, birthday, login, password, niveauEtude, groupe) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.birthday = birthday;
        this.login = login;
        this.password = password;
        this.niveauEtude = niveauEtude;
        this.groupe = groupe;
        //super(cin, nom, prenom, birthday, login, password);
        //======================
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.birthday = birthday;
        this.login = login;
        this.password = password;
        //======================
        this.niveauEtude = niveauEtude;
        this.groupe = groupe;
    }
    //=====================Adds a Student to DB ==========================================
    Etudiant.prototype.addUser = function (fcm) {
        console.log("DocData :: " + this.getDocData());
        return fcm.saveUserToFireStore(this.getDocData(), Etudiant.collectionName);
    };
    //=====================Creates Student docData to be added to DB ==========================================
    Etudiant.prototype.getDocData = function () {
        var docData = {
            cin: this.cin,
            nom: this.nom,
            prenom: this.prenom,
            birthday: this.birthday,
            login: this.login,
            password: this.password,
            niveauEtude: this.niveauEtude,
            groupe: this.groupe
        };
        return docData;
    };
    Etudiant.collectionName = "etudiant";
    return Etudiant;
}());

//# sourceMappingURL=Etudiant.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the SendNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ManageNotificationProvider = /** @class */ (function () {
    function ManageNotificationProvider(firebase, afs, platform, loadingCtrl) {
        this.firebase = firebase;
        this.afs = afs;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
    }
    ManageNotificationProvider.prototype.getToken = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is("android")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is("ios")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 3:
                        token = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.saveTokenToFirestore(token, userID)];
                }
            });
        });
    };
    ManageNotificationProvider.prototype.saveTokenToFirestore = function (token, userID) {
        if (!token)
            return;
        var data = {
            token: token,
            userID: userID
        };
        return this.afs.collection('devices').doc(token).set(data);
    };
    ManageNotificationProvider.prototype.sendNotificationFromTo = function (sender, receiver, content) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, dataSet, rslt, query1, i;
            return __generator(this, function (_a) {
                data = {
                    senderName: sender,
                    receiver: receiver,
                    content: content,
                    isClicked: false,
                    studentID: null
                };
                dataSet = new Array();
                if (receiver.receiverAll == null) {
                    if (receiver.receiverbyClass.classe == "Les deux groupes") {
                        query1 = this.afs.collection("etudiant").ref.where("niveauEtude", "==", receiver.receiverbyClass.niveau);
                        query1.get().then(function (snapshot) {
                            var i = 0;
                            snapshot.forEach(function (e) {
                                console.log(e.data().userid);
                                data.studentID = e.data().userid;
                                dataSet[i] = data;
                                console.log("datasettttttt:" + JSON.stringify(dataSet[i]));
                                rslt = _this.afs.collection("notificationsStudent").add(dataSet[i]).then(function (docRef) {
                                    _this.afs.collection("notificationsStudent").doc(docRef.id).update({
                                        notificationId: docRef.id
                                    });
                                });
                                //delete dataSet[0]["studentID"]
                                i++;
                                console.log("----------------------------------");
                            });
                            rslt = _this.afs.collection("notifications").add(dataSet[0]).then(function (docRef) {
                                _this.afs.collection("notifications").doc(docRef.id).update({
                                    notificationId: docRef.id
                                });
                            });
                            return rslt;
                        });
                    }
                    else {
                        this.afs.collection("etudiant").ref.where("groupe", "==", receiver.receiverbyClass.classe).where("niveauEtude", "==", receiver.receiverbyClass.niveau)
                            .get().then(function (snapshot) {
                            var i = 0;
                            snapshot.forEach(function (e) {
                                console.log(e.data().userid);
                                data.studentID = e.data().userid;
                                dataSet[i] = data;
                                console.log("datasettttttt:" + JSON.stringify(dataSet[i]));
                                rslt = _this.afs.collection("notificationsStudent").add(dataSet[i]).then(function (docRef) {
                                    _this.afs.collection("notificationsStudent").doc(docRef.id).update({
                                        notificationId: docRef.id
                                    });
                                });
                                //delete dataSet[0]["studentID"]
                                i++;
                                console.log("----------------------------------");
                            });
                            rslt = _this.afs.collection("notifications").add(dataSet[0]).then(function (docRef) {
                                _this.afs.collection("notifications").doc(docRef.id).update({
                                    notificationId: docRef.id
                                });
                            });
                            return rslt;
                        });
                    }
                }
                else {
                    i = 0;
                    this.afs.collection("etudiant").ref
                        .get().then(function (snapshot) {
                        snapshot.forEach(function (e) {
                            console.log(e.data());
                            data.studentID = e.data().userid;
                            dataSet.push(data);
                            rslt = _this.afs.collection("notificationsStudent").add(dataSet[i]).then(function (docRef) {
                                _this.afs.collection("notificationsStudent").doc(docRef.id).update({
                                    notificationId: docRef.id
                                });
                            });
                            i++;
                            console.log("----------------------------------");
                        });
                        delete dataSet[0]["studentID"];
                        rslt = _this.afs.collection("notifications").add(dataSet[0]).then(function (docRef) {
                            _this.afs.collection("notifications").doc(docRef.id).update({
                                notificationId: docRef.id
                            });
                        });
                        return rslt;
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    ManageNotificationProvider.prototype.listenToNotification = function () {
        return this.firebase.onNotificationOpen();
    };
    ManageNotificationProvider.prototype.showNotificationsHistory = function (option, sender) {
        console.log(option);
        if (option != "all")
            return this.afs.collection("notifications", function (ref) { return ref.where("content.about", "==", option).where("senderName", "==", sender).orderBy("content.date", "desc"); }).valueChanges();
        else
            return this.afs.collection("notifications", function (ref) { return ref.where("senderName", "==", sender).orderBy("content.date", "desc"); }).valueChanges();
    };
    ManageNotificationProvider.prototype.getBadges = function (option, sender) {
        return this.afs.collection("notificationsStudent", function (ref) { return ref.where("content.about", "==", option).where("studentID", "==", sender).where("isClicked", "==", false); }).valueChanges();
    };
    ManageNotificationProvider.prototype.removeNotification = function (id) {
        return this.afs.doc("notifications/" + id).delete();
    };
    ManageNotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], ManageNotificationProvider);
    return ManageNotificationProvider;
}());

//# sourceMappingURL=manage-notification.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowNotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShowNotificationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowNotificationDetailPage = /** @class */ (function () {
    function ShowNotificationDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = navParams.get("notification");
        console.log(this.notification.allContent.receiver.receiverbyClass);
        if (this.notification.allContent.receiver.receiverAll != null)
            this.receiver = "Tout le monde";
        else {
            console.log(this.notification.allContent.receiver.receiverbyClass.classe);
            this.receiver = this.notification.allContent.receiver.receiverbyClass.niveau + ": " + this.notification.allContent.receiver.receiverbyClass.classe;
        }
        this.message = this.notification.allContent.content.message;
        this.about = this.notification.allContent.content.about;
        this.time = this.notification.time.replace("<br>", ", ");
        this.link = this.notification.allContent.content.link;
    }
    ShowNotificationDetailPage.prototype.ionViewDidLoad = function () {
    };
    ShowNotificationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-notification-detail',template:/*ion-inline-start:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\show-notification-detail\show-notification-detail.html"*/'<!--\n  Generated template for the ShowNotificationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="receiver">Détail de notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style=" overflow: scroll">\n  <ion-card style="margin-top: 5%; height: 95% !important;  overflow: scroll">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/avatar.png"/>\n      </ion-avatar>\n      <h2 class="receiver">{{receiver}}</h2>\n      <p [innerHTML]="time" class="time"></p>\n    </ion-item>\n    <hr class="separator card" />\n    <ion-card-header>\n      <h2 class="objet">Objet: <span class="about">{{about}}</span></h2>\n    </ion-card-header>\n    <hr class="separator" />\n    <ion-item >\n      <h2 ion-text class="msgHeader">Message:</h2>\n      <div id="message">\n      <p ion-text text-wrap padding class="msg">{{message}}</p>\n      </div>\n    </ion-item>\n    <hr class="separator" *ngIf="link!=\'\'" />\n    <ion-item *ngIf="link!=\'\'">\n      <h2 ion-text class="linkHeader">Lien utile:</h2>\n      <a href="{{link}}" padding><p ion-text>{{link}}</p></a>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ndm\Documents\ionic Apps\Teacher\src\pages\show-notification-detail\show-notification-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ShowNotificationDetailPage);
    return ShowNotificationDetailPage;
}());

//# sourceMappingURL=show-notification-detail.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map