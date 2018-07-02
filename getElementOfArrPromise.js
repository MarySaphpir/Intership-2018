const array = [1, 2, 3, 4, 5];

let promise = Promise.resolve();

array.forEach(item => {
    promise = promise
        .then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(item);
                    resolve();
                }, 2000);
            });
        });
});



