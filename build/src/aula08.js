"use strict";
let dados = {
    nome: "Douglidtilddes",
    idade: 25,
    status: "A",
    ola: () => { console.log("oi"); },
    info: (p) => { console.log(p); }
};
dados.nome = "Jadson";
console.log(typeof (dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
