// Comentário - atalho para criar comentário ctrl + ;
// Comentário de múltiplas linhas - atalho para criar comentário ctrl + shift + a;
// Declaração do tipo + nome da variável = informação

let mensagem = "Olá Impressionador";
console.log(mensagem);

// Declaração de variável com let
let cor = "Vermelho";
console.log(cor);

// let cor = "azul"; // Erro - não é possível declarar a mesma variável com let

cor = "Azul"; // Alterando o valor da variável de maneira correta
console.log(cor);

const segundaMensagem = "Bem vindo ao curso impressionador!";
console.log(segundaMensagem);

// const segundaMensagem = "Bem vindo ao curso impressionador!"; // Erro - não é possível declarar a mesma variável com const
// segundaMensagem = "Quero trocar a mensagem da minha variável!"; // Erro - não é possível alterar o valor de uma variável declarada com const

const PI = 3.14; // PI nunca muda - Constante - não é possível alterar o valor de uma variável declarada com const porém é possível alterar o valor de uma variável declarada com let exemplo: let PI = 3.14; PI = 3.1415; // Alterando o valor da variável de maneira correta

idade = 30; // Declaração de variável sem var, let ou const - não é recomendado declarar variáveis sem var, let ou const, pois elas tem escopo global e podem causar problemas no código
console.log(idade);

var nome = "Alison"; // Declaração de variável com var - não é recomendado utilizar var, pois ela tem escopo global e pode causar problemas no código
console.log(nome);

var nome = "Diego"; // É possível declarar a mesma variável com var
console.log(nome);

nome  = "Cordeiro"; // Alterando o valor da variável de maneira correta
console.log(nome);

//Redeclarações 
let nome = "Diacui"; // Erro - não é possível declarar a mesma variável com let
const nome = "Alison";
const nome = "Diacui"; // Erro - não é possível declarar a mesma variável com const

// UNICA VARIÁVEL QUE PODE SER REDECLARADA É VAR, MAS NÃO É RECOMENDADO UTILIZAR VAR, POIS ELA TEM ESCOPO GLOBAL E PODE CAUSAR PROBLEMAS NO CÓDIGO

//Reatribuições - Mutabilidade
let numero = 10; // É possível alterar o valor de uma variável declarada com let mas não é possível alterar o valor de uma variável declarada com const
console.log(numero);
numero = 20; // Alterando o valor da variável de maneira correta
console.log(numero);

// Hoisting - Elevação de variáveis - É possível utilizar uma variável antes de declará-la, mas não é recomendado, pois pode causar problemas no código
console.log(segundaMensagem); // undefined - A variável é elevada, mas não é inicializada
var segundaMensagem = "Utilizando hoisting";
console.log(segundaMensagem);

// Visibilidade 
{instruções} // Escopo de bloco - Variáveis declaradas com let e const só são visíveis dentro do bloco onde foram declaradas, já variáveis declaradas com var são visíveis em todo o código 
function nomeDaFuncao() {tarefas especificas} // Escopo de função - Variáveis declaradas com let e const só são visíveis dentro da função onde foram declaradas, já variáveis declaradas com var são visíveis em todo o código