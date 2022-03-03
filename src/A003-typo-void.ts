function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Luiz',
    idade: 39,
    exibirNome(): void {
        console.log(this.nome + ' idade+' + this.idade);
    },
};
pessoa.exibirNome();
console.log(semRetorno('Naruto', 'Uzumaki'));

export { pessoa };
