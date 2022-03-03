//Tupla
const dadosCliente: readonly [number, string] = [1, 'PDV']; //Tupla imutavel
const dadosCliente2: [number, string, string] = [1, 'PDV', 'DV']; //Tupla mutavel
const dadosCliente3: [number, string, ...string[]] = [1, 'PDV', '1', '2', '3']; //exige que o 1º seja number, o segundo string e o resto string

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
