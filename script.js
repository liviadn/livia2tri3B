const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Como a fome se manifesta como consequência direta de um conflito armado?",
        alternativas: [
            {
                texto:"A) A fome surge devido à destruição de infraestruturas agrícolas e sistemas de distribuição de alimentos, que limita o acesso da população aos recursos alimentares.",
                afirmacao:" Em guerras, as infraestruturas essenciais, como fazendas, armazéns e redes de distribuição de alimentos, são frequentemente destruídas ou danificadas, dificultando o acesso da população a alimentos e provocando fome."

            },
            {
                texto: "B) A fome é causada exclusivamente pelo bloqueio internacional das fronteiras e a proibição de importação de alimentos.",
                afirmacao:"Embora bloqueios internacionais possam afetar a disponibilidade de alimentos,a fome em contextos de guerra é frequentemente causada por danos diretos à infraestrutura local e não apenas por bloqueios internacionais."

            },
            
        ]
    },
    {
        enunciado: "Qual é um dos efeitos da fome prolongada em uma população durante um conflito?",
        alternativas: [
            {
                texto:"A) O aumento da mortalidade infantil e a deterioração da saúde geral da população, com riscos elevados de doenças e desnutrição.",
                afirmacao:" A fome prolongada durante um conflito pode levar a uma alta taxa de mortalidade infantil e a uma deterioração geral da saúde, devido à desnutrição e à maior vulnerabilidade a doenças"
            },
            {
                texto:"B) A criação de novas oportunidades econômicas para a população afetada, como o surgimento de mercados paralelos.",
                afirmacao:"Enquanto mercados paralelos podem surgir, a fome não é uma causa de oportunidades econômicas positivas; pelo contrário, ela geralmente resulta em graves problemas de saúde e sociais."
            }
            
            
        ]
    },
    {
        enunciado: "Como a comunidade internacional pode ajudar a mitigar os efeitos da fome em regiões afetadas por conflitos?",
    
        alternativas: [
            {
                texto:"A) Através do fornecimento de ajuda humanitária, como alimentos e medicamentos, e do apoio à reconstrução das infraestruturas essenciais.",
                afirmacao:" A ajuda humanitária é crucial para aliviar a fome durante conflitos,fornecendo alimentos, medicamentos e apoio para a reconstrução das infraestruturas danificadas."
            },
            {
                texto:"B) Impondo sanções econômicas adicionais às regiões afetadas para pressionar os governos a cessar o conflito.",
                afirmacao:"Embora sanções possam ser uma ferramenta política, elas geralmente agravam a situação humanitária e não ajudam a mitigar diretamente a fome em regiões afetadas por conflitos."
            },
            
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
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();
