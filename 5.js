// 6

// Criação da variável anoAtual com o ano atual
const anoAtual = new Date().getFullYear();

// Criação do objeto livro com as propriedades desejadas
const livro = {
    titulo: 'O Sol é para Todos',
    autor: 'Harper Lee',
    anoPublicacao: 1960,
    genero: 'Ficção'
};

// Adição da propriedade idadePublicacao ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// Criação da string mostrarDetalhes com todas as informações do livro
const mostrarDetalhes = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}\nIdade de Publicação: ${livro.idadePublicacao} anos`;

// Exibição da string mostrarDetalhes no console
console.log(mostrarDetalhes);
