const string = 'asdfgb adsg asdfvbcxa';
function changeLetters(str) {
    const strSplit = str.split(' ');
    const longestWord = strSplit.reduce(function(longestW, currentWord) {
         return (longestW.length < currentWord.length) ? currentWord : longestW;
    }, '');

    return longestWord.replace(/a/g, 'b');
}
console.log(changeLetters(string));