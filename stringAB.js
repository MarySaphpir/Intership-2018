let string = 'asdfgb adsg asdfvbcxa';
function changeLetters(str) {
    let strSplit = str.split(' ');

    let longestWord = strSplit.reduce(function(longestW, currentWord) {
         return (longestW.length < currentWord.length) ? currentWord : longestW;
    }, '');

return longestWord.replace(/a/g, 'b');
}

console.log(changeLetters(string));