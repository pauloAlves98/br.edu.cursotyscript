// union types = mais de um tipo de retorno.
//tem que cobrir as possibilidades

function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean,
): number | string {
    if (typeof a == 'number' && typeof b == 'number') return a + b;
    return `${a}${b}`;
}

console.log(addOrConcat('10', 10));
