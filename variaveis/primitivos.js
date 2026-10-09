/* String - Sequencia de caracteres entre aspas simples ou duplas
"Um texto" // String comum
'Um texto' // String comum
`Im texto` // String com template literals (permite interpolação de variáveis e expressões)
*/

let mensagem = 'Olá, mundo!'; // Atribuindo uma string a uma variável
let nome = 'Alison'; // Atribuindo uma string a uma variável
let mensagem3 = 'Bem vindo ao curso!';
let mensagem2 = `Olá, ${nome}. ${mensagem3}!`; // Atribuindo uma string com interpolação a uma variável

console.log(mensagem); // Saída: Olá, mundo!
console.log(nome); // Saída: Alison
console.log(mensagem2); // Saída: Olá, Alison. Bem vindo ao curso!

// Indice - inicio da string é 0, o segundo caractere é 1, e assim por diante
console.log(nome[0]); // Saída: A (primeira letra da string)
console.log((nome[2] = 'H')); // Saída: H (terceira letra da string, mas não altera a string original)
console.log(nome); // Saída: Alison (a string original não foi alterada

//Number - Tipo de dado numérico, pode ser inteiro ou decimal
let numero = 10; // Atribuindo um número inteiro a uma variável
let numero2 = 10.5655941; // Atribuindo um número decimal a uma variável
let numero3 = 10e2; // Atribuindo um número em notação científica a uma variável (10 * 10^2 = 1000)
let numero4 = -10; // Atribuindo um número negativo a uma variável)

/*
Infinity // Representa o infinito positivo
-Infinity // Representa o infinito negativo
NaN // Representa um valor que não é um número (Not a Number)
*/
