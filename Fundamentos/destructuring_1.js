const pessoa = {
    nome : 'Pedro',
    idade : 21,
    altura : 1.65 ,
    endereco: { 
        logradoro :"rua da felicida",
        numero : 1050, 
    }
}

console.log(pessoa)


const {nome, idade} = pessoa

console.log(nome, idade)


const { nome: n, idade: I} = pessoa 

console.log(n, I)

const{ sobrenome, bemHumorada=true} = pessoa 
console.log(sobrenome,bemHumorada)

const{endereco: {logradoro,numero,cep}} = pessoa 

console.log(logradoro, numero, cep)