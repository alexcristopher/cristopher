const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sobre o exercito ",
        alternativas: [
            {
                texto: "ESA",
                afirmacao: "Os concursos militares foram criados para garantir um processo de seleção justo e transparente para ingresso nas forças armadas, priorizando a meritocracia e a qualificação dos candidatos. Além disso, eles visam assegurar que os cargos sejam ocupados por indivíduos competentes e preparados para as funções militares."
            },
            {
                texto: "Espcex",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Melhor formação ",
        alternativas: [
            {
                texto: "ESA",
                afirmacao: ""
            },
            {
                texto: "Espcex",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Mas concorrido ",
        alternativas: [
            {
                texto: "ESA",
                afirmacao: ""
            },
            {
                texto: "Espcex",
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: "Formação mais dificil ",
        alternativas: [
            {
                texto: "ESA",
                afirmacao: ""
            },
            {
                texto: "Espcex",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Os concursos militares são de ",
        alternativas: [
            {
                texto: "Exatas",
                afirmacao: " "
            },
            {
                texto: "Humanas ",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
