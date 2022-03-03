export function multiplicaArgs(...args: Array<number>): number {
    //export é para permitir que a função seja utilizada fora desse arquivo.
    //..args [aceita varios parametros de uma vez]
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 3, 3);

console.log(result);
console.log(concatenaString('Exercicio', ' ', ' TypeScript!'));
