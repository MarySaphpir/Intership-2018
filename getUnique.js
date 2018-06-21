const array = [1, 1, 2, 3, 3, 4, 4, 5, 5, 2];

function getUniqueValues(arr) {
    arr.sort();
    const unique = arr.filter((item, pos) => {
       return arr.indexOf(item) !== pos;
   });

   return unique;
}
console.log(getUniqueValues(array));