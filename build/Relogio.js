"use strict";
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const relogio = setInterval(function time() {
    let dateToDay = new Date();
    let hr = dateToDay.getHours();
    let min = dateToDay.getMinutes();
    let s = dateToDay.getSeconds();
    if (hr < 10)
        hr = '0' + hr;
    if (min < 10)
        min = '0' + min;
    if (s < 10)
        s = '0' + s;
    if (horas)
        horas.textContent = hr.toString();
    if (minutos)
        minutos.textContent = min.toString();
    if (segundos)
        segundos.textContent = s.toString();
});
