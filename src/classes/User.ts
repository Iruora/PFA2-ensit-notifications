abstract class User {
    public cin: number;
	public nom: String;
	public prenom: String;
	public birthday: Date;
	public login: String;
    public password: String;
    
    constructor(
        cin: number,
		nom: String,
		prenom: String,
		birthday: Date,
		login: String,
		password: String
    ) {
        this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.birthday = birthday;
		this.login = login;
		this.password = password;
    }

    abstract addUser();
    abstract getDocData();
}