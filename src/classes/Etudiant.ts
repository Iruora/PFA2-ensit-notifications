
import { FcmProvider } from "../providers/fcm/fcm";
import { Enseignant } from "./Enseignant";

//import { User } from './User';
export class Etudiant /*extends User*/ {

    static collectionName = "etudiant";
    //public niveauEtude: number;
    //public groupe: String;
    ///static collectionName = "etudiant";
    constructor(
    
        public cin: number,
        public nom: String,
        public prenom: String,
        public birthday: Date,
        public login: String,
        public password: String,
        public niveauEtude: String,
        public groupe: String
    ) {
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
    public addUser(fcm : FcmProvider) {
        console.log("DocData :: "+this.getDocData());
        return fcm.saveUserToFireStore(this.getDocData(),Etudiant.collectionName);
    }
    //=====================Creates Student docData to be added to DB ==========================================
    getDocData() {
        const docData = {
            cin: this.cin,
            nom: this.nom,
            prenom: this.prenom,
            birthday: this.birthday,
            login: this.login,
            password: this.password,
            niveauEtude: this.niveauEtude,
            groupe: this.groupe
        }
        return docData;
    }
}