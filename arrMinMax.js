const arr = [1, 2, 3, 4, 5, 6];

function getMaxValueFormArray(array) {
    let max = array[0];
    let index_max = 0;
    let min = array[0];
    let index_min = 0;
    for(let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            index_max = i;
            max = array[i];
        }
        if(min > array[i]){
            index_min = i;
            min = array[i];
        }
    }
    array[index_max] = min;
    array[index_min] = max;

    return array;
}
console.log(getMaxValueFormArray(arr));