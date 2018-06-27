function inherit(proto) {
    let F = function F() {};
    F.prototype = proto;
    let object = new F;
    return object;
}