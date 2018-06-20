var stringPol = 'lol';

function polindrom(str) {
    let strReverse = str.split('').reverse().join('');

    if (strReverse == str) {
        return 'polindrom';
    } else {
        return 'ne polindrom';
    }

}

console.log(polindrom(stringPol));