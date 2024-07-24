"use strict";
function logar(user, pass) {
    console.log(`User..${user}`);
    console.log(`Senha...${pass}`);
}
logar('bruno', '123');
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(10, 10);
let s_res = soma2(8, 5).toString();
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
function teste(s1) {
    const result = Number(s1);
    if (isNaN(result)) {
        throw new Error("o valor fornecido não é um número válido");
    }
    return result;
}
const numero = teste('1234.56');
console.log(numero);
