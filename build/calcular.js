"use strict";
function insert(num) {
    const resultadoE = document.getElementById('resultado');
    if (resultadoE) {
        const numeros = resultadoE.innerHTML;
        resultadoE.innerHTML = numeros + num;
    }
}
function clean() {
    const resultadoE = document.getElementById('resultado');
    if (resultadoE) {
        resultadoE.innerHTML = "";
    }
}
function back() {
    const resultadoE = document.getElementById('resultado');
    if (resultadoE) {
        resultadoE.innerHTML = resultadoE.innerHTML.slice(0, -1);
    }
}
function calcular() {
    const resultadoE = document.getElementById('resultado');
    if (resultadoE) {
        const resultado = resultadoE.innerHTML;
        if (resultado) {
            try {
                resultadoE.innerHTML = eval(resultado);
            }
            catch (error) {
                'Error';
            }
        }
        else {
            resultadoE.innerHTML = 'Nada...';
        }
    }
}
