let numeros:number[] =[20, 30, 40];
//let numeros:Array<number|string>=[10, 20, 30, 40, "bruno"];
//let numeros:(number|string)[]=[10, 20, 30, 40, "bruno"];
numeros.push(50);
numeros.unshift(10)
numeros.pop()
numeros.shift()
console.log(numeros)

let numeros_ro:ReadonlyArray<number>=[100,200,300];
console.log(numeros_ro)