let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
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
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto){
      exibirTextoNaTela('h1','ACERTOU!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);  
   } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('p', 'O numero secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O numero secreto é maior');
      }
      tentativas++;
   }
   console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random()* 10 + 1);


}