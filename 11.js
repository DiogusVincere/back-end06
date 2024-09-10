// Cria um objeto livro com as propriedades especificadas
const livro = {
    título: "Título do Livro",             // Propriedade para armazenar o título do livro
    autor: "Autor do Livro",               // Propriedade para armazenar o nome do autor do livro
    anoDePublicacao: 2020,                 // Propriedade para armazenar o ano de publicação do livro
    gênero: "Ficção",                      // Propriedade para armazenar o gênero do livro (inicialmente definido como "Ficção")
    idadeDePublicacao: function() {        // Método para calcular a idade do livro com base no ano atual
        const anoAtual = new Date().getFullYear();  // Obtém o ano atual usando o objeto Date e seu método getFullYear()
        return anoAtual - this.anoDePublicacao;     // Calcula e retorna a diferença entre o ano atual e o ano de publicação para determinar a idade do livro
    },
    avaliacao: 4.5                        // Propriedade para armazenar a avaliação do livro, inicialmente definida como 4.5
};

// Exclui a propriedade avaliacao do objeto livro
delete livro.avaliacao;                  // Usa o operador delete para remover a propriedade avaliacao do objeto livro

// Exibe os detalhes do objeto livro no console
console.log(livro);                     // Imprime o objeto livro no console para verificar as informações atualizadas, sem a propriedade avaliacao
