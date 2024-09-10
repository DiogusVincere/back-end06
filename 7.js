//7

// Criação do objeto livro com as propriedades solicitadas
const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia',
    idadePublicacao: new Date().getFullYear() - 1949
};

// Acesso às propriedades utilizando colchetes e impressão no console
console.log('Detalhes do Livro:');
console.log('Título:', livro['titulo']);
console.log('Autor:', livro['autor']);
console.log('Ano de Publicação:', livro['anoPublicacao']);
console.log('Gênero:', livro['genero']);
console.log('Idade de Publicação:', livro['idadePublicacao'], 'anos');
