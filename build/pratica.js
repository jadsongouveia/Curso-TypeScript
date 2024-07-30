"use strict";
const dias1 = {
    domingo: 0,
    segunda: 1,
    terca: 2,
    quarta: 3,
    quinta: 4,
    sexta: 5,
    sabado: 6
};
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(Object.keys(dias)[1]);
const d1 = new Date();
console.log(d.getDay());
console.log(Object.keys(dias)[d.getDay()]);
const cores1 = {
    branco: "#fff",
    preto: "#000",
    vermelho: "#f00",
    verde: "#0f0",
    azul: "#00f"
};
console.log(cores.branco);
console.log(cores["azul"]);
const tipoUsuario2 = {
    USER: 10,
    ADMIN: 100,
    SUPER: 1000
};
console.log(tipoUsuario2.SUPER);
const tipoUsuario1 = tipoUsuario.USER;
console.log(tp);
