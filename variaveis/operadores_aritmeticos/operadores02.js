//converção Explicita
let numero = 123;
console.log(typeof numero); // number
let string = String(numero);
console.log(typeof string); // string   

let valor = 45;
console.log(valor);
console.log(valor.toString()); // converte para string

let string2 = "45";
console.log(string2);
console.log(Number(string2)); // converte para number
console.log(Boolean(string2)); // converte para boolean

let boolean = true;
console.log(String(boolean)); // converte para string
