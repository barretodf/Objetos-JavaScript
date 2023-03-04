//guardando funções como propriedade de um objeto

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente");
      } else {
        this.saldo -= valor;
        console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
      }
    },
  };
  
  cliente.efetuaPagamento(250);


  /*podemos guardar funções como propriedade de um objeto. 
  Isso nos possibilita alterar o comportamento de um objeto e a deixar descrito 
  junto com ele, como uma propriedade.

Vamos supor que agora implementaremos uma parte do sistema de compra da loja. 
Deixaremos que o cliente efetue um pagamento.

*/