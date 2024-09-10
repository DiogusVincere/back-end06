// Cria um objeto estudante com as propriedades especificadas
const estudante = {
    nome: "João da Silva",                  // Propriedade para armazenar o nome completo da pessoa estudante
    matricula: 123456,                     // Propriedade para armazenar o número da matrícula, que é um número inteiro
    curso: "Engenharia de Software",        // Propriedade para armazenar o nome do curso atual da pessoa estudante
    materias: new Set([                    // Propriedade para armazenar um conjunto de textos com os nomes das matérias
        "Matemática",                      // Nome de uma matéria que a pessoa estudante está cursando
        "Algoritmos",                      // Nome de outra matéria
        "Programação Orientada a Objetos"  // Nome de outra matéria
    ])
};

// Exibe o objeto estudante no console para verificar sua estrutura e conteúdo
console.log(estudante); // Imprime o objeto estudante no console, mostrando todas as propriedades e seus valores
