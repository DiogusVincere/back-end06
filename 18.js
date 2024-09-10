// Cria um objeto chamado contaBancaria com propriedades e métodos relacionados à conta
const contaBancaria = {
    titular: "Carlos Silva", // Propriedade para armazenar o nome do titular da conta (tipo: string)
    saldo: 1000,             // Propriedade para armazenar o saldo da conta (tipo: number)

    // Método para depositar um valor na conta
    depositar: function(valor) {
        if (valor > 0) { // Verifica se o valor do depósito é positivo
            this.saldo += valor; // Adiciona o valor ao saldo da conta
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`); // Exibe uma mensagem com o valor depositado e o saldo atualizado
        } else {
            console.log("O valor do depósito deve ser positivo."); // Exibe uma mensagem de erro se o valor for negativo ou zero
        }
    },

    // Método para sacar um valor da conta
    sacar: function(valor) {
        if (valor > 0) { // Verifica se o valor do saque é positivo
            if (valor <= this.saldo) { // Verifica se há saldo suficiente para o saque
                this.saldo -= valor; // Subtrai o valor do saldo da conta
                console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`); // Exibe uma mensagem com o valor sacado e o saldo atualizado
            } else {
                console.log("Saldo insuficiente para o saque."); // Exibe uma mensagem de erro se o saldo for insuficiente
            }
        } else {
            console.log("O valor do saque deve ser positivo."); // Exibe uma mensagem de erro se o valor for negativo ou zero
        }
    }
};

// Cria um objeto chamado cliente que possui uma conta bancária
const cliente = {
    nome: "Ana Costa",           // Propriedade para armazenar o nome do cliente (tipo: string)
    conta: contaBancaria         // Propriedade que referencia o objeto contaBancaria criado anteriormente
};

// Função para mostrar o saldo da conta do cliente
function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`); // Exibe o nome do cliente
    console.log(`Saldo da conta: R$${cliente.conta.saldo}`); // Exibe o saldo da conta associada ao cliente
}

// Realiza operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500); // Deposita R$500 na conta do cliente
cliente.conta.sacar(200);    // Saca R$200 da conta do cliente
cliente.conta.sacar(1500);   // Tenta sacar R$1500 da conta do cliente (deve exibir uma mensagem de erro)

 // Chama a função mostrarSaldo para exibir as informações atualizadas da conta do cliente
mostrarSaldo(cliente); // Exibe o nome do cliente e o saldo atualizado da conta no console
