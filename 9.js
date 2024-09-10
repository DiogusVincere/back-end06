// Cria um objeto livro com as propriedades especificadas
const livro = {
    título: "Título do Livro",             // Propriedade para armazenar o título do livro
    autor: "Autor do Livro",               // Propriedade para armazenar o nome do autor do livro
    anoDePublicacao: 2020,                 // Propriedade para armazenar o ano de publicação do livro
    gênero: "Ficção",                      // Propriedade para armazenar o gênero do livro (inicialmente definido como "Ficção")
    
    // Método para calcular a idade do livro com base no ano atual
    idadeDePublicacao: function() {
        const anoAtual = new Date().getFullYear();  // Obtém o ano atual usando o objeto Date e seu método getFullYear()
        return anoAtual - this.anoDePublicacao;     // Calcula a diferença entre o ano atual e o ano de publicação para determinar a idade do livro
    }
};

// Modifica a propriedade gênero do objeto livro
livro.gênero = "Aventura"; // Altera o valor da propriedade gênero de "Ficção" para "Aventura"

// Imprime o objeto livro no console para verificar a alteração
console.log(livro); // Exibe o objeto livro atualizado, mostrando todas as propriedades, incluindo a alteração do gênero
