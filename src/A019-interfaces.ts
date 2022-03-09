interface TipoNome {
    nome: string;
}

type TipoSobrenome = {
    sobrenome: string;
};

type TipoNomeCompleto = {
    nomeCompleto: () => string;
};

//or
//type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}
