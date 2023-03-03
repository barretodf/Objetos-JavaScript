/*
Exercício

Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos 
seguro social e cpf no formato string. 
Além disso, quando forem exibidas as informações da pessoa em um relatório, 
deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.
*/

const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 };

 pessoa.seguroSocial = "987 654 321 21";
 pessoa.cpf = "858 987 654 52";
 
console.log(pessoa);
console.log(`O cpf da pessoa começa com os dígitos ${pessoa.cpf.substring(0,3)}`);
 
 /*
 Para adicionar as novas propriedades precisamos somente informar o novo campo e o seu valor,
  ou seja,
  pessoa.cpf="15346626522-65" e pessoa.seguroSocial="854321985-9" 
  .Para exibir os 4 primeiros dígitos da identidade e CPF, 
  podemos chamar uma função de string chamada substring() e passar início e o fim da string 
  que queremos como pessoa.cpf.substring(0,4).
*/  
