"use strict";
function insert(num) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML += num;
}
function clean() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
}
function back() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = resultadoElement.innerHTML.slice(0, -1);
}
function calcular() {
    const resultadoElement = document.getElementById('resultado');
    const resultado = resultadoElement.innerHTML;
    if (resultado) {
        try {
            resultadoElement.innerHTML = eval(resultado);
        }
        catch (error) {
            resultadoElement.innerHTML = 'Erro';
        }
    }
    else {
        resultadoElement.innerHTML = 'Nada ...';
    }
}
