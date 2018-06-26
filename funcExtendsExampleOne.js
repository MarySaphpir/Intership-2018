function Validation(name) {
    this._name = name;

    this.isAdmin = () => {
        return (name === 'admin') ? true + ' is admin' : this.isUser();
    };
    this.isUser = () => {
        return (name === 'user') ? true + ' is user' : 'who are you?';
    };
    this.getTypeSigner = () => {
        return (!this.isAdmin()) ? this.isUser() : this.isAdmin();
    };
}

function Admin(name, pass) {
    Validation.apply(this, arguments);

    let parentAdmin = this.isAdmin;
    this.isAdmin = () => {
        return (name === 'admin' && pass === '123454') ? parentAdmin.call(this) : this.isUser();
    };
    if (name !== 'admin' || 'user') {
        throw new Error('please sign up');
    }
}

let admin = new Admin('user1', '123');
console.log(admin.getTypeSigner());


