const objetoA: {
    chaveA: string; //o valor dessa chave é inalteravel
    chaveB: string; // uso do ; em objetos e da , em inicializações
    chaveC?: number; //isso é um atributro opcional
    // readonly chaveC - não seria permitido a alteração desse atributo após inferencia de valor
} = {
    //O uso de const exige uma iniciação do objeto construído!
    //Insto é uma inicialização
    chaveA: 'Um valor',
    chaveB: 'Dois',
};

objetoA.chaveB = 'Mais um valor';

console.log(objetoA);
