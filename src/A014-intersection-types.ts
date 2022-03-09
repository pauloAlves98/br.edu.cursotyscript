type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
    nome: 'Naruto',
    sobrenome: 'Usumaki',
    idade: 25,
};

console.log(pessoa);

//Module Mode
export { pessoa };
