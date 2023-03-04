//Adicionando uma nova entrada na lista usando o método push

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
  console.log(cliente.enderecos);


/*
Logo, após declararmos essa propriedade e antes de exibirmos, incluiremos como acessar o array
usando o método push: cliente.enderecos.push().

Dentro do parênteses, podemos passar como parâmetro o que desejamos inserir, 
no caso como temos um array de endereço, gostaríamos de incluir outro endereço. 

Representamos esse endereço como um objeto, por isso, colocamos as chaves "{}".
*/