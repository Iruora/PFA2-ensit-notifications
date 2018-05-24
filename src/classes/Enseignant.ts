import { FcmProvider } from './../providers/fcm/fcm';
export class Enseignant {
	
	static collectionName = "enseignant";

	constructor(
		public cin: number,
		public nom: String,
		public prenom: String,
		public birthday: Date,
		public login: String,
		public password: String,

		public speciality: String
	) {
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.birthday = birthday;
		this.login = login;
		this.password = password;

		this.speciality = speciality;
	}
	//=====================Adds a Teacher to DB ==========================================
	public addUser(fcm : FcmProvider) {
		return fcm.saveUserToFireStore(this.getDocData(),Enseignant.collectionName);
	}
	//=====================Creates Teacher docData to be added to DB ==========================================
	getDocData() {
		const docData = {
			cin: this.cin,
			nom: this.nom,
			prenom: this.prenom,
			birthday: this.birthday,
			login: this.login,
			password: this.password,

			speciality: this.speciality
		}
		
		return docData;
	}

	//remove Student
	
}