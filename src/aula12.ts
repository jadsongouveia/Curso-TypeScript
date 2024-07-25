function logar(user:string,pass:string){
       console.log(`User..${user}`);
       console.log(`Senha...${pass}`) 
}
logar('bruno','123');

//-----------------------------------------------------

function soma2(n1:number,n2:number):number{
    let r = n1+n2
    return r
}
let n_res= soma2(10,10)
let s_res:string= soma2(8,5).toString();
console.log(n_res)
console.log(s_res)

//------------------------------------------------------

function fatorial(n:number) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//------------------------------------------------------

//CONVERTENDO DE STRING PARA NUMBER
function teste(s1:string):number{
    const result = Number(s1);
    if(isNaN(result)){
        throw new Error("o valor fornecido não é um número válido");
    }
    return result;
}

const numero = teste('1234.56');
console.log(numero);

//--------------------------------------------------------

// convertendo de string para number fazendo a soma

function somaDeNumeros(arthur:string):number{
    const maria = arthur.split(',')

    const soma = maria.reduce((felipe, joice) => {
        const gabriel = parseFloat(joice.trim());

        return felipe + gabriel;
    }, 0);

    return soma;
}

const numerosS = "1.5, 2, 3.5, 41";
const resultado = somaDeNumeros(numerosS);
console.log(resultado);