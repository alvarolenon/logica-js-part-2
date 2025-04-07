let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, Texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = Texto;
   responsiveVoice.speak(Texto, 'Brazilian Portuguese Female', 
      {rate:1.2});

}

function exibirMensagemInicial() {
   exibirTextoNaTela('h1', 'jogo do numero secreto');
   exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');
}

exibirMensagemInicial();


function verificarChute() {
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto){
      exibirTextoNaTela('h1','ACERTOU!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);  
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('p', 'O numero secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O numero secreto é maior');
      }
      tentativas++;
      limparCampo();
   }
   console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = []
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
   }
}

   function limparCampo() {
      chute = document.querySelector('input');
      chute.value = ''; 

   }
   function reiniciarJogo() {
      numeroSecreto = gerarNumeroAleatorio();
      limparCampo();
      tentativas = 1;
      exibirTextoNaTela('h1', 'jogo do numero secreto');
      exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');



}