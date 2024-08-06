var dx:number;
var dy:number;
var px:number;
var py:number;
var vel:number;
var obj:HTMLElement;
var tmp:any;
var podeAndar: boolean = false;

function inicia():void{
     dx=0;
     dy=0;
     px=0;
     py=0;
     vel=1;
     obj= document.getElementById('dv1') as HTMLElement;
     document.addEventListener('keydown',teclaDw);
     document.addEventListener('keyup',teclaUp);
     tmp=setInterval(enterFrame,1);
     document.addEventListener('click',mudaCor)
}

function teclaDw(event: KeyboardEvent):void{
    if(podeAndar){
        const tecla = event.keyCode;
        if(tecla === 37){
            dx=-1
        }else if(tecla === 38){
            dy=-1
        }else if(tecla === 39){
            dx=1
        }else if(tecla== 40){
            dy=1
        }
    }
}

function teclaUp(event: KeyboardEvent):void{
    if(podeAndar){
        const tecla = event.keyCode;
        if(tecla === 37 || tecla === 39){
            dx = 0;
        }else if(tecla == 38 || tecla === 40){
            dy= 0;
        }
    }
}

function enterFrame():void{
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + 'px';
    obj.style.top = py + 'px';
}

function mudaCor():void{
    if(!podeAndar){
        obj.style.backgroundColor = '#f00';
        podeAndar = true;
    }else if(podeAndar) {
        obj.style.backgroundColor = '#fff';
        podeAndar = false;
    }
}

inicia();