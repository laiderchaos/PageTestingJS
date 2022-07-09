// Class chain
// Abstraction class --> Class --> Object

class User {
    constructor (nickname, password, mail, firstName, lastName) {
        this._nickName = nickname;
        this._mail = mail;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return `${this.beautyName(this._firstName)} ${this.beautyName(this._lastName)}`
    }
    beautyName(obj){
        let trim = obj.trim().toLowerCase();
        return trim[0].toUpperCase() + trim.slice(1);
    }
}

let userioto1 = new User('dasd', 'asd', 'asd', 'vlad', 'lyasov')
console.log(userioto1)
console.log(userioto1.fullName)
