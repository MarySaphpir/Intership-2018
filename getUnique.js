const array = [1, 1, 2, 3, 3, 4, 4, 5, 5, 2, 6];
function getUniqueValues(arr) {
    arr.sort()
    let unique = arr.filter((item, pos) => {
       return arr.indexOf(item) !== pos;
   })
   return unique;
}
console.log(getUniqueValues(array))