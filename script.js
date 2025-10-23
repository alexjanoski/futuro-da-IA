const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
let historiaFinal = "";

const perguntas = [
  {
    enunciado: "Você já ouviu falar em Inteligência Artificial (IA)?",
    alternativas: [
      { texto: "Sim", afirmacao: "Você conhece a IA." },
      { texto: "Não", afirmacao: "Você não conhece a IA." }
    ]
  },
  {
    enunciado: "Você já usou algum programa ou aplicativo que responde perguntas, como a Alexa, Siri ou Chat GPT?",
    alternativas: [
      { texto: "Sim", afirmacao: "Você já usou assistentes virtuais." },
      { texto: "Não", afirmacao: "Você nunca usou assistentes virtuais." }
    ]
  },
  {
    enunciado: "A IA já te ajudou a fazer um dever de casa ou trabalho da escola?",
    alternativas: [
      { texto: "Sim", afirmacao: "A IA já te ajudou em tarefas." },
      { texto: "Não", afirmacao: "A IA ainda não te ajudou." }
    ]
  },
  {
    enunciado: "Você acha que a IA pode te ensinar coisas novas, como Matemática, Português ou Ciências?",
    alternativas: [
      { texto: "Sim", afirmacao: "Você acredita que a IA pode ensinar." },
      { texto: "Não", afirmacao: "Você não acredita que a IA pode ensinar." }
    ]
  },
  {
    enunciado: "Você acha divertido aprender com a ajuda da IA?",
    alternativas: [
      { texto: "Sim", afirmacao: "Você se diverte aprendendo com IA." },
      { texto: "Não", afirmacao: "Você não se diverte aprendendo com IA." }
    ]
  },
  {
    enunciado: "Você gostaria que a IA ajudasse mais na sua escola?",
    alternativas: [
      { texto: "Sim", afirmacao: "Você gostaria de mais ajuda da IA." },
      { texto: "Não", afirmacao: "Você não gostaria de mais ajuda da IA." }
    ]
  }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = ""; // Limpar alternativas
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = ""; // Limpar alternativas
}

// Iniciar o questionário
mostraPergunta();
