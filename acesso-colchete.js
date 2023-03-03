//Acessando os dados com o uso de colchetes
//Usando forEach para acessar dados


const usuario = {
    nome: "Andre",
    idade: 32,
    cpf: "858 568 598 72",
    email: "andre@dominio.com",
  };
  

  console.log(`O nome do usuário é ${usuario["nome"]}, essa pessoa tem ${usuario["idade"]} anos.`)
 
  //Com essa sintásse eu posso acessar campos que eu não saiba o valor
const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${usuario[chave]}`);
  });

/*
Com a sintaxe de colchetes podemos acessar campos que não temos acesso no momento em que 
estamos escrevendo o código. Com isso, flexibilizamos o uso das chaves, das propriedades e 
dos objetos.

Uma coisa que podemos fazer, também, é analisar o que acontece ao tentarmos acessar uma 
chave que não existe.
vai retornar um valor indefinido
*/

