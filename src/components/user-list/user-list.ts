import { FcmProvider } from './../../providers/fcm/fcm';
import { Component, Input } from '@angular/core';
import { LoadingController, ModalController } from 'ionic-angular';
import { UserPage } from '../../pages/admin-pages/admin-user/user';


/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html'
})
export class UserListComponent {
  @Input() collectionNameOut: any;
  text: string;
  public users: any[];
  public altUsers: any[];

  public collectionName: any;

  public myInput: string = '';

  constructor(private fcm: FcmProvider, public loadingCtrl: LoadingController,public modalCtrl : ModalController) {
    console.log('Hello UserListComponent Component');
    this.text = 'Hello World';
    this.users = new Array<any>();
    this.altUsers = new Array<any>();
  }

  ngOnInit() {
    if (this.collectionNameOut) {
      this.collectionName = this.collectionNameOut;
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Please wait...'
      });
      loading.present();
      this.fcm.getUsersFromFireStore(this.collectionName).subscribe(snapshot => {
        /*snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          this.users.push(doc.data());
        });
        loading.dismiss();*/
        console.log(snapshot)
        this.users = []
        for (let i = 0; i < snapshot.length; i++) {
          if (snapshot[i]) {
            this.users.push(snapshot[i]);
            this.altUsers.push(snapshot[i]);
          }
        }
        //console.log("hedom users: "+ this.users)
        loading.dismiss();
      })
      //this.altUsers = this.users;
      //console.log("$ Tab $ ", this.users)
    }
  }
  filterItems(myInput) {

    return this.users.filter((user) => {
      //console.log(user);
      //let b: boolean;
      return ("" + user.cin + user.nom + user.prenom + "").toLowerCase().indexOf(myInput.toLowerCase()) > -1;
    });


  }
  /*************************************** */
  setFilterItems($event) {
    console.log(this.altUsers);
    this.users = this.altUsers;
    if (this.myInput && this.myInput.trim() != '') {
      this.users = this.filterItems(this.myInput);
    }

  }
  /************************************** */
  onCancel($event) {
    this.users = this.altUsers;
    //alert("Canceled");
  }
  /*************************************** */
  public openModal(user){
    let data = user;
    var modalPage = this.modalCtrl.create(UserPage,data); 
    modalPage.present();
  }
}
