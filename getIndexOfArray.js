
const array = [1, 0, 0, 1, 1, 1];
function maxValueInRow(arr) {
    const maxValue = 1;
    let counter = 0;
    let endIndex = 0;
    arr.forEach((value, index) => {
        if (value === maxValue) {
            counter += 1;
            endIndex = index
            return;
        }
        counter = 0;
    })
    let startIndex = (endIndex + 1) - counter;
    return [counter,startIndex, endIndex]
}
console.log(maxValueInRow(array))