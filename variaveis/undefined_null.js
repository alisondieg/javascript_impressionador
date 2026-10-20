let mensagem = 'Olá impressionador';
let preco = 50.0;
let logado = true;

// Undefined
let produto;
console.log(typeof produto); // undefined - A variável foi declarada mas não inicializada
let carrinho = undefined; // Não é recomendado atribuir undefined a uma variável, pois ela já é undefined por padrão
console.log(typeof carrinho); // undefined - A variável foi declarada mas não inicializada


// Null
let cliente = null; // Null é um valor que representa a ausência de valor, diferente de undefined que representa uma variável que foi declarada mas não inicializada
console.log(cliente); // null - A variável foi declarada e inicializada com o valor null