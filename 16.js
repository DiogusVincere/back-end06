// Cria um objeto chamado pessoas com informações sobre umas pessoas
const pessoas = {
    Claudio: [ // Array contendo propriedades de uma pessoa
        "Nome: Claudio",
        "Idade: 22",
        "Cidade: Formosa",
    ],

    Rubens: [
        "Nome: Rubens",
        "Idade: 18",
        "Cidade: Londrina",
    ],

    MemphisDepay: [
        "Nome: Memphis Depay",
        "Idade: 30",
        "Cidade: São Paulo"
    ]
}

console.log(`Pessoas: ${pessoas.Claudio.join(", ")}`);
console.log(`Pessoas: ${pessoas.Rubens.join(", ")}`);
console.log(`Pessoas: ${pessoas.MemphisDepay.join(", ")}`);
