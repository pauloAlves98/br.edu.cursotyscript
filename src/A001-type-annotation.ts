/*eslint-disable*/
//Tipos básicos
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

//Arrays
let arrayDeNumeros:Array<number> = [1,2,3];
let arrayDeStrings:Array<string> = ["1","2","3"];
let arrayDeNumeros2: number[] = [1,2,3];

//objeto
let pessoa:{
    nome:string,
    idade:number,
    adulto?:boolean,//opcional
};
// Function

function soma(x:number,y:number):number{
    return x+y;
}

//Funcão Alias
const soma2: (x:number,y:number) => number = (x,y)=> x + y; //= (x,y)=> x + y; é o valor, oq vem antes é declaração

export default 1;
