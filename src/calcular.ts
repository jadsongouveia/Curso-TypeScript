function insert(num: string): void {
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    resultadoElement.innerHTML += num;
}

function clean(): void {
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    resultadoElement.innerHTML = '';
}

function back(): void {
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    resultadoElement.innerHTML = resultadoElement.innerHTML.slice(0, -1);
}

function calcular(): void {
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    const resultado = resultadoElement.innerHTML;
    if (resultado) {
        try {
            resultadoElement.innerHTML = eval(resultado);
        } catch (error) {
            resultadoElement.innerHTML = 'Erro';
        }
    } else {
        resultadoElement.innerHTML = 'Nada ...';
    }
}


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
        const resultado = resultadoE.innerHTML
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
} */