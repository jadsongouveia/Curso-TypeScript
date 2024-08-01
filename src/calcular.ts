function insert(num:string):void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    if(resultadoE){
        const numeros = resultadoE.innerHTML
        resultadoE.innerHTML = numeros + num
    }
}

function clean():void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    if(resultadoE){
        resultadoE.innerHTML = ""
    }
}

function back():void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    if(resultadoE){
        const resultado = resultadoE.innerHTML;
        resultadoE.innerHTML = resultado.substring(0, resultado.length -1);
    }
}

function calcular():void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    if(resultadoE){
        const resultado = resultadoE.innerHTML;
        if(resultado){
            try{
                resultadoE.innerHTML = eval(resultado);
            }catch(error){
                'Error'
            }
        }else{
            'Nadaa...'
        }
    }
}









































/*
function insert(num:string):void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    resultadoE.innerHTML += num
}

function clean():void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    resultadoE.innerHTML = ""
}

function back(){
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    resultadoE.innerHTML = resultadoE.innerHTML.slice(0, -1);
}

function calcular():void{
    const resultadoE = document.getElementById('resultado') as HTMLElement;
    const resultado = resultadoE.innerHTML;
    if(resultado){
        try{
            resultadoE.innerHTML = eval(resultado)
        }catch{
            resultadoE.innerHTML = 'Error'
        }
    }else{
        resultadoE.innerHTML = "Nada..."
    }
}
*/

//----------------------------------------------------------------------

/*
function insert(num:string):void{
    const resultadoE = document.getElementById('resultado');
    if(resultadoE){
        const numeros = resultadoE.innerHTML;
        resultadoE.innerHTML = numeros + num;
    }
}

function clean():void{
    const resultadoE = document.getElementById('resultado');
    if(resultadoE){
        resultadoE.innerHTML = ""
    }
}

function back():void{
    const resultadoE = document.getElementById('resultado');
    if(resultadoE){
        const resultado = resultadoE.innerHTML;
        resultadoE.innerHTML = resultado.substring(0,resultado.length -1);
    }
}

function calcular():void{
    const resultadoE = document.getElementById('resultado');
    if(resultadoE){
        const resultado = resultadoE.innerHTML;
        if(resultado){ 
            try{
                resultadoE.innerHTML = eval(resultado)
            }catch (error){
                'Error'
            }
        }else {
            resultadoE.innerHTML = 'Nada ...';
        }
    }
}
*/