const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "01 - Qual é a principal característica do boto cor de rosa de acordo com o folclore brasileiro?",
        alternativas: [
            "A) Ele é conhecido por transformar-se em um homem encantador para seduzir mulheres.",
            "B) Ele é famoso por ser um protetor das crianças que brincam perto da água."
        ]
    },
    {
        enunciado: "02 - Qual é a principal consequência de um encontro com o boto cor de rosa, segundo a tradição?",
        alternativas: [
            "A) A mulher que encontra o boto pode engravidar e ter um filho com ele.",
            "B) A pessoa que encontra o boto ganha um desejo concedido."
        ]
    },
    {
        enunciado: "03 - Qual é a origem das lendas sobre o boto cor de rosa na cultura amazônica?",
        alternativas: [
            " A) Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            " B) Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
        ]
    },
]



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

