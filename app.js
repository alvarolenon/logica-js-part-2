let numeroSecreto = gerarNumeroAleatorio();

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, Texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = Texto;

}

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');

function verificarChute() {
   console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random()* 10 + 1);


}