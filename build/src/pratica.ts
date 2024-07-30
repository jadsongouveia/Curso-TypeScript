const dias1 = {
    domingo: 0,
    segunda: 1,
    terca: 2,
    quarta: 3,
    quinta: 4,
    sexta: 5,
    sabado: 6
} as const;

console.log(dias.domingo); // 0
console.log(dias['domingo']); // 0
console.log(Object.keys(dias)[1]); // segunda

const d1 = new Date();
console.log(d.getDay()); // por exemplo, 3 para quarta-feira
console.log(Object.keys(dias)[d.getDay()]); // nome do dia da semana

const cores1 = {
    branco: "#fff",
    preto: "#000",
    vermelho: "#f00",
    verde: "#0f0",
    azul: "#00f"
} as const;

console.log(cores.branco); // #fff
console.log(cores["azul"]); // #00f

const tipoUsuario2 = {
    USER: 10,
    ADMIN: 100,
    SUPER: 1000
} as const;

console.log(tipoUsuario2.SUPER); // 1000

const tipoUsuario1: typeof tipoUsuario[keyof typeof tipoUsuario] = tipoUsuario.USER;
console.log(tp); // 10
