function fibLoop(z) {
    let x = 1;
    let y = 1;
    for (let i = 2; i < z; i++){
        let c = x + y;
        x = y;
        y = c;
    }
    return y;
}
console.log(fibLoop(7));

function fibRecursion(n) {
    return (n <= 1) ? n : n = fibRecursion(n - 1) + fibRecursion(n - 2);
}
console.log(fibRecursion(5));

