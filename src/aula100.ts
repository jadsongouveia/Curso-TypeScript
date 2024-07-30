function burro(n:number[]):string{
    let s=0
    n.forEach((e)=>{
        s+=e
    })
    return s % 2 === 0 ? 'par':'impar';
}

let anta = [10,20,30,40,50]
console.log(burro(anta))

let outraAnta = [10,21,30,40,50]
console.log(burro(outraAnta))