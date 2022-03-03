let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function createPerson(
    firstName: string, //parametros
    lastName?: string, //parametros udefined se não existir
): {
    //a função tem q retornar esse objeto
    firstName: string; //quando é ; é definicção d eobjeto
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

export function squareOf(x: any) {
    if (typeof x == 'number') return x * x;
    return null;
}

const squareOfTwoNumber = squareOf(10);
const squareOfTwoString = squareOf('10');

if (squareOfTwoNumber === null) {
    //Null é mais para
    console.log('Conta Inválida', squareOfTwoNumber);
} else {
    console.log(squareOfTwoNumber);
}
