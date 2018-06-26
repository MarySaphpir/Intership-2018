function Validator(name) {
    this.name = name;
}

Validator.prototype.isAdmin = function () {
    return (this.name === 'admin') ? this.name + ' is admin' : this.isUser();
};
Validator.prototype.isUser = function () {
    return (this.name === 'user') ? true + ' is user' : 'who are you?';
};
Validator.prototype.getTypeOfSigner = function () {
    return (!this.isAdmin()) ? this.isUser() : this.isAdmin();
};
let validate = new Validator('admin');
console.log(validate.getTypeOfSigner());

function Admin(name, pass) {
    Validator.apply(this, arguments);
    this.pass = pass;
}

Admin.prototype = Object.create(Validator.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.isAdmin = function () {
    let result = Validator.prototype.isAdmin.call(this);
    return (this.name === 'admin' && this.pass === '12345') ? result : Admin.prototype.isUser();
};
let admin = new Admin('admin', '12345');
console.log(admin.getTypeOfSigner());