export class Empresa {
    public readonly nome: string;
    private colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    /**
     * Adiciona um Colaborador
     */
    public addColaborador(...colaborador: Colaborador[]): void {
        this.colaboradores = this.colaboradores.concat(colaborador);
    }
    /**
     * showColaboradores
     */
    public showColaboradores(): void {
        //for(const col of this.colaboradores)
        this.colaboradores.forEach(
            (value: Colaborador, index: number, array: Colaborador[]) => {
                console.log(value);
            },
        );
    }
}
export class Colaborador {
    constructor(
        public readonly nome: string, //já faz atribuição
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Udemy', '11.367.414/0001-17');
const colaborador1: Colaborador = new Colaborador('Naruto', 'Uzumak');
const colaborador2: Colaborador = new Colaborador('Sasuke ', 'Uchiha');
const colaborador3: Colaborador = new Colaborador('Hinata ', 'Hyuga');
empresa1.addColaborador(colaborador1, colaborador2);
empresa1.addColaborador(colaborador3);

empresa1.showColaboradores();
