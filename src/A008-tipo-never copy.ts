export function criaErro(): never {
    //nunca retorna nada/diferente pro void é apenas escrita
    throw new Error('Erro qualquer');
}

criaErro();
