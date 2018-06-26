function AllWorkers(name) {
    this.name = name;
    const arrProgrs = ['Dima', 'Vlad', 'Roma'];
    this.arrProgrs = arrProgrs;
    const arrQas = ['Tony', 'Yarik', 'Vadila'];
    this.arrQas = arrQas;
}
AllWorkers.prototype.findWorker = function(arr, value) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value) {
            return value
        }
    }
};
AllWorkers.prototype.programmers = function () {
    return AllWorkers.prototype.findWorker(this.arrProgrs, this.name) ? this.name + ' is programmer' : 'ne prog';
};
AllWorkers.prototype.qas = function () {
    return (AllWorkers.prototype.findWorker(this.arrQas, this.name)) ? this.name + ' is qa' : 'ne qa';
};

function Worker(name) {
    AllWorkers.apply(this, arguments);
    let spesialized;
    this.spesialized = spesialized;
}
Worker.prototype = Object.create(AllWorkers.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.getSalary = function () {
    let result = AllWorkers.prototype.programmers.call(this);
    return (result === 'ne prog') ? this.spesialized = 'bezrabotniy' : 'js-dev';
};
let worker = new Worker('Yarik');
console.log(worker.getSalary());
