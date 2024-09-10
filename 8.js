// Criando o objeto livro com as propriedades especificadas
const livro = {
    título: "Título do Livro",              // Propriedade para o título do livro
    autor: "Autor do Livro",                // Propriedade para o autor do livro
    anoDePublicacao: 2020,                  // Propriedade para o ano de publicação do livro
    gênero: "Ficção",                       // Propriedade para o gênero do livro

    // Método para calcular a idade do livro com base no ano atual
    idadeDePublicacao: function() {
        const anoAtual = new Date().getFullYear();  // Obtém o ano atual
        return anoAtual - this.anoDePublicacao;     // Calcula e retorna a diferença entre o ano atual e o ano de publicação
    },

    avaliacao: null // Propriedade de avaliação inicializada como null
};

// Função para adicionar uma avaliação ao livro
function adicionarAvaliacao(novaAvaliacao) {
    if (livro.avaliacao === null) { // Verifica se a avaliação atual do livro é null
        livro.avaliacao = novaAvaliacao; // Atribui a nova avaliação ao livro
        console.log("Avaliação adicionada:", livro.avaliacao); // Imprime uma mensagem indicando que a avaliação foi adicionada
    } else {
        console.log("O livro já possui uma avaliação."); // Imprime uma mensagem indicando que o livro já tem uma avaliação
    }
}

// Exemplo de uso da função adicionarAvaliacao
adicionarAvaliacao(4.5); // Tenta adicionar uma avaliação ao livro
adicionarAvaliacao(5);   // Tenta adicionar uma nova avaliação, mas o livro já tem uma avaliação
