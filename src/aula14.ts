const teste2=(txt?:string):void=>{
    console.log(txt);
}

const fsoma2=(n:number[]):number=>{
    let s:number=0;
    n.forEach((e)=>{
        s+=e;
    });
    return s
}

teste2('CFBCursos');
teste2('Curso de Typescript');
teste2('Youtube');
teste2();

let tnumeros:number[] = [10,20,30,40,50,60,70,80,90,100]

console.log(fsoma2(tnumeros));