// Cria um objeto chamado calculadora com vários métodos para operações matemáticas
const calculadora = {
    // Método para somar dois números
    soma: function(a, b) {
        return a + b; // Retorna a soma dos dois parâmetros
    },

    // Método para subtrair o segundo número do primeiro
    subtracao: function(a, b) {
        return a - b; // Retorna a subtração do segundo parâmetro do primeiro
    },

    // Método para multiplicar dois números
    multiplicacao: function(a, b) {
        return a * b; // Retorna o produto dos dois parâmetros
    },

    // Método para dividir o primeiro número pelo segundo
    divisao: function(a, b) {
        if (b === 0) { // Verifica se o divisor é zero
            return "Erro: Divisão por zero."; // Retorna uma mensagem de erro se o divisor for zero
        }
        return a / b; // Retorna o resultado da divisão do primeiro número pelo segundo
    },

    // Novo método para calcular a média aritmética de um array de números
    calcularMedia: function(numeros) {
        if (numeros.length === 0) { // Verifica se o array está vazio
            return "Erro: Array vazio."; // Retorna uma mensagem de erro se o array estiver vazio
        }
        const somaTotal = numeros.reduce((acc, num) => acc + num, 0); // Calcula a soma de todos os números no array usando reduce
        return somaTotal / numeros.length; // Retorna a média dividindo a soma total pelo número de elementos
    }
};

// Chama o método soma e imprime o resultado no console
console.log("Soma:", calculadora.soma(5, 3)); // Passa 5 e 3 como argumentos e imprime a soma

// Chama o método subtracao e imprime o resultado no console
console.log("Subtração:", calculadora.subtracao(10, 4)); // Passa 10 e 4 como argumentos e imprime a subtração

// Chama o método multiplicacao e imprime o resultado no console
console.log("Multiplicação:", calculadora.multiplicacao(6, 7)); // Passa 6 e 7 como argumentos e imprime a multiplicação

// Chama o método divisao e imprime o resultado no console
console.log("Divisão:", calculadora.divisao(8, 2)); // Passa 8 e 2 como argumentos e imprime a divisão

// Testa a divisão por zero e imprime o resultado no console
console.log("Divisão por zero:", calculadora.divisao(8, 0)); // Passa 8 e 0 como argumentos e imprime a mensagem de erro

// Cria um array de números para calcular a média
const numeros = [10, 20, 30, 40, 50];

// Chama o método calcularMedia passando o array de números e imprime o resultado no console
console.log("Média:", calculadora.calcularMedia(numeros)); // Passa o array de números como argumento e imprime a média
