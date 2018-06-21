const obj =  {
    a: 1,
    b: 2,
    c: 8,
    h: {
        i: 'here we are',
        g: [4,
            5,
            { k: true, l: 12 }]
    }
};

function getAllValues(obj) {
    for(let key in obj){
        let value = obj[key];
        if(typeof value === 'object') {
            getAllValues(value);

        }else {
            console.log(value);
        }
    }

}

getAllValues(obj);