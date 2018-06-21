const stringPol = 'lolec';

function polindrom(str) {
    const strReverse = str.split('').reverse().join('');
    if (strReverse === str) {
        return 'polindrom';
    }

    return 'ne polindrom';
}

console.log(polindrom(stringPol));