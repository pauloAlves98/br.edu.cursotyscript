enum Cores {
    N = 10,
    VERMELHO = 'Red',
    AZUL = 'Blue',
}
// enum Cores {
//     VERDE = 'Green',
//     AMARELO = 'Yellow',
// }
console.log(Cores[Cores.N]);

export function escolhaACor(cor: Cores): void {
    console.log(cor);
}

escolhaACor(Cores.AZUL);
