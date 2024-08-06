"use strict";
var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;
var podeAndar = false;
function inicia() {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    obj = document.getElementById('dv1');
    document.addEventListener('keydown', teclaDw);
    document.addEventListener('keyup', teclaUp);
    tmp = setInterval(enterFrame, 1);
    document.addEventListener('click', mudaCor);
}
function teclaDw(event) {
    if (podeAndar) {
        const tecla = event.keyCode;
        if (tecla === 37) {
            dx = -1;
        }
        else if (tecla === 38) {
            dy = -1;
        }
        else if (tecla === 39) {
            dx = 1;
        }
        else if (tecla == 40) {
            dy = 1;
        }
    }
}
function teclaUp(event) {
    if (podeAndar) {
        const tecla = event.keyCode;
        if (tecla === 37 || tecla === 39) {
            dx = 0;
        }
        else if (tecla == 38 || tecla === 40) {
            dy = 0;
        }
    }
}
function enterFrame() {
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + 'px';
    obj.style.top = py + 'px';
}
function mudaCor() {
    if (!podeAndar) {
        obj.style.backgroundColor = '#f00';
        podeAndar = true;
    }
    else if (podeAndar) {
        obj.style.backgroundColor = '#fff';
        podeAndar = false;
    }
}
inicia();
