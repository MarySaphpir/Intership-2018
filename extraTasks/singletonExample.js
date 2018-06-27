const Singleton = (function Singleton() {
    let instance;

    function createInstance() {
        return new Object('test');
    }

    return {
        getInstance: function () {
                if (!instance){
                    instance = createInstance();
                }

                return instance;
        }
    };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2);
