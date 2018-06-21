let array1 = [1,2,3,4,5,6,8];
let array2 = [0,4.25,7];

function average(arr1, arr2) {
    const arr = arr1.concat(arr2);
    let averageValue = 0;
    for(let i = 0; i < arr.length; i++){
        averageValue += arr[i]/arr.length;
    }
    arr1 = arr.filter((item) => {
        return item > averageValue;
    });
    arr2 = arr.filter((item) => {
        return item < averageValue;
    });

    return [arr1.sort(), arr2.sort()];
}
console.log(average(array1, array2));