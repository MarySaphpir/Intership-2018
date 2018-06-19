let arr = [1, 2, 3, 4, 5, 6];

function getAvarage(array) {
    let avarage = 0;
    for (let i = 0; i < array.length; i++){
        avarage += array[i]/array.length
    }
    let result = array.filter((item) => { return (avarage < item) });
    return result

}
console.log(getAvarage(arr))