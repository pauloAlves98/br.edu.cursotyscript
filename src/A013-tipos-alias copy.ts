type Idade = number; //Tipo idade
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK; // Union Types
const pessoa: Pessoa = {
    //isso é uma variavel
    idade: 30,
    nome: 'Naruto',
    salario: 200_000, //200 mil
};

//export ativa o modo module mode (escopo local)
export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor }; //faz merge do objeto com parametro cor
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
