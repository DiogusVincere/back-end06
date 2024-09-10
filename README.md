1 - Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição
(índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

2 - Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no
console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento
do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

3 - Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três
números inteiros ao array e, em seguida, exiba o array resultante.

4 - Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que
representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de
animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

5 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um
livro. O objeto deve conter as seguintes propriedades:
titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
Exercícios
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os
detalhes do livro no console.

6 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()).
Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro
foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de
publicação.
Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação,
são exibidas corretamente.

7 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no
console os detalhes do livro.

8 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser
inicializada como null.
No final do arquivo livro.js, adicione uma avaliação ao objeto.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.


9 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois altere o gênero do livro para "Aventura".

10 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no
console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
Exercícios

11 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois altere o gênero do livro para "Aventura".

12 - Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social e cpf
no formato string. Além disso, quando forem exibidas as informações da pessoa em um relatório, deverão
aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.
- const pessoa = {
nome: "Bruce Banner",
dataNascimento: "25/01/1980",
carteiraIdentidade: "997776-X",
email: "profbanner@email.com",
telefone: "+552877776666",
cidade: "Cachoeiro de Itapemirim",
estado: "ES"
}

13 - Você precisa criar a estrutura de um novo objeto para representar uma pessoa estudante no sistema de
uma universidade com os seguintes campos:
Nome: um campo de texto com o nome completo;
Matrícula: um número inteiro;
Curso: um campo de texto contendo o curso atual;
Matérias: um conjunto de textos contendo apenas os nomes das matérias que a pessoa estudante está
cursando.

14- Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente
informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa
específica.
Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas
as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como
argumento.

15 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um
objeto representando o endereço da pessoa, com as seguintes subpropriedades:
rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.
Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações
atualizadas, incluindo o endereço, são exibidas corretamente no console.

16 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve
representar uma pessoa e conter as seguintes propriedades:
nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.

17 - Crie um objeto chamado calculadora que terá os seguintes métodos:
soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo.
Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no
console os resultados obtidos.
b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um
array de números como parâmetro e retornar a média aritmética dos valores.
c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

18 - Crie um objeto chamado contaBancaria com as seguintes propriedades:
titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize
this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this
para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as
seguintes propriedades:
nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o
nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto
contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
Array:
Documentação do MDN sobre Arrays em JavaScript
Operações com arrays / listas:
•Métodos de Array em JavaScript (MDN)
JSON:
•Introdução ao JSON (MDN)
Objeto e classe:
•Objetos em JavaScript (MDN)
•Classes em JavaScript (MDN)
Tipos de objetos:
•Tipos de objetos em JavaScript (MDN)
R
