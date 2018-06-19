let array1 = [1,2,3,4,5,6,8]
let array2 = [0,4.25,7]

function avarage(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let avarageValue = 0;
    for(let i = 0; i < arr.length; i++){
        avarageValue += arr[i]/arr.length;
    }
    arr1 = arr.filter((item) => {
       return item > avarageValue
    })
    arr2 = arr.filter((item) => {
        return item < avarageValue
    })
    return [arr1.sort(), arr2.sort()]
}
console.log(avarage(array1, array2));