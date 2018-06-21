const arr = [1, 2, 3, 4, 5, 6];

function getAverage(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++){
        average += array[i]/array.length;
    }
    const result = array.filter((item) => { return (average < item) });

    return result;
}
console.log(getAverage(arr));