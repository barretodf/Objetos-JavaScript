//Acessando Objetos
//Usando substring para delimitar a quantidade de caracteres que quero mostrar

const usuario = {
    nome: "Andre",
    idade: 32,
    cpf: "858 568 598 72",
    email: "andre@dominio.com",
  };
  
  //console.log(cliente.nome)
  //Para ficar mais profissional vou escrever uma mensagem de resposta

  console.log(`O nome do usuário é ${usuario.nome}, essa pessoa tem ${usuario.idade} anos.`)
  
  //Posso pedir aqui só os 3 primeiros numeros do cpf usando o substring
  console.log(`os 3 primeiros dígitos do cpf é ${usuario.cpf.substring(0,3)}`)


  //Console.log(cliente) tenho todas as informações do cliente
  //para acessas um dos dados do usuário eu coloco um . ex: console.log(cliente.)
  //O vsCode vai dar opções para eu abrir um dos dados do cliente