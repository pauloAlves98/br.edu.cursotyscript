let x: unknown; //obriga a checar tipo

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
//Se não checar o tipo ele reclama
