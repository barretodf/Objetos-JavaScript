//Adicionando uma nova entrada na lista - usando o método filter

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];
  

cliente.enderecos.push({
  
      rua: 'R. Joseph Climber',
      numero: 1337,
      apartamento: false,      
    })
  
const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);


/*
podemos acrescentar uma nova lista a partir dessa lista que geramos, 
usando um método do array chamado filter ("filtro"). Este seleciona alguns campos ou 
entradas de forma específica para colocar na lista.

Para fazer essa chamada, vamos criar uma nova lista const listaApenasApartamentos. 
Nela, deixamos somente os endereços que são apartamentos do cliente.

Logo, a variável listaApenasApartamentos vai receber cliente.endrecos.filter().
*/