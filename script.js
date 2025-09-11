const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const lista = [item1, item2]

const perguntas = [
{
    responda com sim ou não:
1. Voce ja ouviu falar em inteligecia Artificial (IA)?
   sim
   não
2.Voce ja usou algum programa ou aplicativo que responde perguntas, como a Alexa, siri ou Chat GPT?
  sim
  não
3. A IA ja te ajudou a fazer um dever de casa ou trabalho da escola?
   sim
   não
4. Voce acha que a IA pode te ensinar coisas novas, como matematica, português ou ciências?
   sim
   não 
5. Você acha divertido aprender confirmm a ajuda da IA?
   sim
   não
6. você gostaria que a IA ajudasse mais na sua escola?
   sim
   não
}
}
}
let atual = 0;
let perguntaAtual;
let histroriaFinal ="";

function mostraPergunta() {
   perguntaAtual = perguntas{atual};
   caixaPerguntas.textoscontent = oerguntaAtual.enunciado;
   mostraAlternativa();
}
   
    function mostraAlternativas() {
      for (const alternativa of perguntaAtual.alternativas) {
         const botaoAlternativas = document.createElement("button");
         botaoAlternativas.textcontent = alternativa. texto;
         botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
         caixaAlternativas.appendChild(botaoAlternativas);
      }
    }

    function respostaSelecionada(opcaoSelecionada);{
        const afimacoes = opcaoSelecionada.afirmacoes;
        historiaFinal = afirmacoes;
        atual++;
        mostraPergunta();
    }
    function mostraResultado(){
      caixaPerguntas.textcontent = "Em 2049...";
      textoResultado.textContent = historiaFinal;
      caixaAlternativas.textContent = "";
    }

     mostraPergunta();

