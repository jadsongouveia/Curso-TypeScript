const horas: HTMLElement|null = document.getElementById('horas');
const minutos: HTMLElement|null = document.getElementById('minutos');
const segundos: HTMLElement|null = document.getElementById('segundos');

const tempo = setInterval(function time(){
    let dateToDay = new Date()
    let hr: number|string = dateToDay.getHours(); 
    let min: number|string = dateToDay.getMinutes();
    let s: number|string = dateToDay.getSeconds()

    if(hr < 10) hr = '0' + hr

    if(min < 10) min = '0' + min
    
    if(s < 10) s = '0' + s

/*  USANDO OPERADOR TERNARIO(mesma coisa que if else)
    hr = hr < 10 ? '0' + hr : hr
    min = min < 10 ? '0' + min : min
    s = s < 10 ? '0' + s : s

    ? = retorne
    : = se nao
*/

    if(horas)horas.textContent = hr.toString();
    if(minutos)minutos.textContent = min.toString();
    if(segundos)segundos.textContent = s.toString()
})














































/*
const horas:HTMLElement | null = document.getElementById('horas');
const minutos:HTMLElement | null = document.getElementById('minutos');
const segundos:HTMLElement | null = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToDay = new Date();
    let hr:number | string = dateToDay.getHours();
    let min:number | string = dateToDay.getMinutes();
    let s:number | string = dateToDay.getSeconds();

    if(hr < 10) hr = '0' + hr

    if(min < 10) min = '0' + min

    if(s < 10) s = '0' + s


    if(horas)horas.textContent = hr.toString();
    if(minutos)minutos.textContent = min.toString();
    if(segundos)segundos.textContent = s.toString();
})
*/