// Cria um objeto chamado pessoa com informações sobre uma pessoa
const pessoa = {
    nome: "Maria Oliveira",               // Propriedade para armazenar o nome da pessoa (tipo: string)
    idade: 30,                            // Propriedade para armazenar a idade da pessoa (tipo: number)
    solteiro: true,                       // Propriedade para indicar se a pessoa é solteira (tipo: boolean)
    hobbies: [                           // Propriedade para armazenar a lista de hobbies da pessoa (tipo: array)
        "Leitura",                        // Exemplo de hobby: leitura
        "Caminhadas",                     // Exemplo de hobby: caminhadas
        "Fotografia",                      // Exemplo de hobby: fotografia
    ],
    endereco: [                            // Propriedade para armazenar a lista de hobbies da pessoa (tipo: array)
        "Rua: Rua Oscar Freire",           // Exemplo de endereço rua: Rua Oscar Freire
        "Cidade: São Paulo",               // Exemplo de endereço cidade: São Paulo
        "Estado: São Paulo"                // Exemplo de endereço estado: São Paulo
    ]
};

// Função para mostrar informações sobre a pessoa
function mostrarInfoPessoa(pessoa) {
    // Imprime o nome da pessoa e seu tipo de dado
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    
    // Imprime a idade da pessoa e seu tipo de dado
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    
    // Imprime o estado civil da pessoa e seu tipo de dado
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    
    // Imprime a lista de hobbies da pessoa e seu tipo de dado
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);

    // Imprime a lista de endereço da pessoa e seu tipo de dado
    console.log(`Endereço: ${pessoa.endereco.join(", ")} (Tipo: ${typeof pessoa.endereco})`);
}

// Chama a função mostrarInfoPessoa passando o objeto pessoa como argumento
mostrarInfoPessoa(pessoa); // Executa a função para exibir as informações e os tipos de dados das propriedades do objeto pessoa
