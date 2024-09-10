// Cria um objeto pessoa com informações pessoais
const pessoa = {
    nome: "Bruce Banner",                   // Propriedade para armazenar o nome da pessoa
    dataNascimento: "25/01/1980",           // Propriedade para armazenar a data de nascimento da pessoa no formato DD/MM/AAAA
    carteiraIdentidade: "997776-X",         // Propriedade para armazenar o número da carteira de identidade da pessoa
    email: "profbanner@email.com",          // Propriedade para armazenar o endereço de e-mail da pessoa
    telefone: "+552877776666",              // Propriedade para armazenar o número de telefone da pessoa, incluindo o código do país
    cidade: "Cachoeiro de Itapemirim",       // Propriedade para armazenar a cidade onde a pessoa reside
    estado: "ES"                            // Propriedade para armazenar a sigla do estado onde a pessoa reside
};

// Adiciona a propriedade seguroSocial ao objeto pessoa
pessoa.seguroSocial = "123-45-6789";      // Adiciona o número do seguro social da pessoa no formato XXX-XX-XXXX

// Adiciona a propriedade cpf ao objeto pessoa
pessoa.cpf = "123.456.789-00";            // Adiciona o número do CPF da pessoa no formato XXX.XXX.XXX-XX

// Função para exibir informações da pessoa com CPF e carteira de identidade parcialmente ocultos
function exibirRelatorio(pessoa) {
    // Extrai os primeiros 4 dígitos da carteira de identidade e do CPF
    const carteiraIdentidadeParcial = pessoa.carteiraIdentidade.slice(0, 4); // Pega os primeiros 4 caracteres da carteira de identidade
    const cpfParcial = pessoa.cpf.slice(0, 4);                           // Pega os primeiros 4 caracteres do CPF

    // Exibe o relatório com as informações da pessoa
    console.log(`Nome: ${pessoa.nome}`);                           // Exibe o nome da pessoa
    console.log(`Data de Nascimento: ${pessoa.dataNascimento}`);   // Exibe a data de nascimento da pessoa
    console.log(`Carteira de Identidade: ${carteiraIdentidadeParcial}****`); // Exibe os primeiros 4 dígitos da carteira de identidade e oculta o restante
    console.log(`CPF: ${cpfParcial}****`);                         // Exibe os primeiros 4 dígitos do CPF e oculta o restante
    console.log(`Email: ${pessoa.email}`);                         // Exibe o e-mail da pessoa
    console.log(`Telefone: ${pessoa.telefone}`);                   // Exibe o telefone da pessoa
    console.log(`Cidade: ${pessoa.cidade}`);                       // Exibe a cidade onde a pessoa reside
    console.log(`Estado: ${pessoa.estado}`);                       // Exibe o estado onde a pessoa reside
}

// Chama a função para exibir o relatório da pessoa
exibirRelatorio(pessoa); // Executa a função que imprime as informações da pessoa com os campos sensíveis parcialmente ocultos
