//quando queremos deletar um conjunto de chave/valor

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   };

   
//console.log(objPersonagem)

   //Se quisermos, remover a propriedade aliado, podemos utilizar o operador delete:
/*
   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //vai aparecer undefined
 */

delete objPersonagem.aliado
delete objPersonagem["status"]

//Veja que o delete remove do objeto o valor da propriedade, assim como a chave.

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem);
