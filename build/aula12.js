"use strict";
function logar(user, pass) {
    console.log(`User..${user}`);
    console.log(`Senha...${pass}`);
}
logar('bruno', '123');
function soma(n1 = 0, n2 = 0) {
    let r = n1 + n2;
    return r;
}
let n_res = soma(10, 10);
let s_res = soma(8, 5).toString();
console.log(n_res);
console.log(s_res);
function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}
console.log(fatorial(5));
