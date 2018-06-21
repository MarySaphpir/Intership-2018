const str = 'asdfgh asd asdfgd';

function deleteWords(checkStr) {
    const strSplit = checkStr.split(' ');
    for (const i in strSplit) {
        if(strSplit[i].length < 5) {
            strSplit[i] = '';
        }
    }

    return strSplit.join(' ');
}
console.log(deleteWords(str));
