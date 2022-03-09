/*eslint-disable*/
let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
    nome: 'LUIZ' as const, //atribui a nome o tipo Luiz
    sobrenome: 'Miranda',
}
function escolhaACor(cor: 'Vermelho' | 'Amarelo' | 'Azul'):  string {
    return cor;
}
let value = 10; //isso é a mesma coisa de fazer value: string  = 10;
value = 11;

console.log(escolhaACor('Azul'));//Tipo Azul é subtipo string

export default 1;