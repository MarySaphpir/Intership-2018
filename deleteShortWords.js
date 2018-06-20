let str = 'asdfgh asd asdfgd asdg';

function deleteWords(checkStr) {

    let strSplit = checkStr.split(' ');

    for (let i in strSplit) {
        if(strSplit[i].length < 5) {
            strSplit[i] = '';
        }
    }

    return strSplit.join(' ');
}

console.log(deleteWords(str));
