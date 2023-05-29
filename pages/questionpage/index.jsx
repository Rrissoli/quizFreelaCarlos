import Image from 'next/image';
import '../../app/globals.css';
import styles from './styles.module.css';
import Quiz from '../api/questoes';
import { useEffect, useState } from 'react';
import OutroComponente from '../reposta';
import Link from 'next/link'

export default function QuestionPage() {
    const [questoes, setQuestoes] = useState([]);
    const [pontuador, setPontuador] = useState(0);
    const [posicao, setPosicao] = useState(0);
    const [objCliente, setObjCliente] = useState(null)
    useEffect(() => {
        const fetchQuestoes = async () => {
            const res = await fetch('/api/questoes');
            const data = await res.json();
            setQuestoes(data.perguntas);
        };

        fetchQuestoes();
    }, []);

    const selecaoResposta = (pontuacao) => {
        let posicaoF = posicao;
        let somaPosicao = posicaoF + 1;
        setPosicao(somaPosicao);
        let soma = pontuador + pontuacao;
        setPontuador(soma);
        console.log(pontuador);
        
            if(pontuador > 70){
                setObjCliente({classificacao: "Comandante",
                titulo:"Parabéns, você é um verdadeiro comandante!",
                texto1: "Essa pontuação é para poucos e isso mostra que você é um empreendedor que sabe bem aonde quer chegar e não tem medo de correr atrás! Os seus resultados te trouxeram até aqui e você como um verdadeiro comandante sabe a importância de estar sempre a frente buscando novas oportunidades para o seu negócio.",
                desafios:"- Continuar a frente dos concorrentes e se manter valorizado no mercado mesmo quando os outros baixam os preços para não perder venda - Incerteza em planejar os próximos passo - Autocobrança excessiva e perfeccionismo",
                oportunidades:"- É hora de focar em diferenciar a sua marca e se transformar no líder do seu nicho - Criar um posicionamento forte com o seu público - Hora de dobrar o seu faturamento",
                navegar:"Diversos empreendedores já estão conquistando seus tesouros e dominando as marés do empreendedorismo. Você foi aprovado para passar para próxima fase, com maiores desafios para escalar o seu negócio. Se você deixar para amanhã, alguém tomará o seu lugar, agora é a sua oportunidade de ter o mapa do tesouro em mãos e conquistar muito mais! Está preparado para o desafio?",
                botao:"Quero conhecer a minha Bússola Digital"})
        }else if(pontuador > 60 && pontuador < 70){
            setObjCliente({classificacao: "Navegador",
                titulo:"Parabéns, você é um navegador talentoso!",
                texto1: "Essa pontuação é para poucos e isso mostra que você é um empreendedor que sabe bem aonde quer chegar e não tem medo de correr atrás! Os seus resultados te trouxeram até aqui e você como um verdadeiro comandante sabe a importância de estar sempre a frente buscando novas oportunidades para o seu negócio.",
                desafios:"- Continuar a frente dos concorrentes e se manter valorizado no mercado mesmo quando os outros baixam os preços para não perder venda - Incerteza em planejar os próximos passo - Autocobrança excessiva e perfeccionismo",
                oportunidades:"- É hora de focar em diferenciar a sua marca e se transformar no líder do seu nicho - Criar um posicionamento forte com o seu público - Hora de dobrar o seu faturamento",
                navegar:"Diversos empreendedores já estão conquistando seus tesouros e dominando as marés do empreendedorismo. Você foi aprovado para passar para próxima fase, com maiores desafios para escalar o seu negócio. Se você deixar para amanhã, alguém tomará o seu lugar, agora é a sua oportunidade de ter o mapa do tesouro em mãos e conquistar muito mais! Está preparado para o desafio?",
                botao:"A bússola para chegar ao seu tesouro está aqui."})

        }else if(pontuador > 45 && pontuador < 60){
            setObjCliente({classificacao: "Marinheiro",
                titulo:"Você é um ótimo marinheiro!",
                texto1: "Essa pontuação é para poucos e isso mostra que você é um empreendedor que sabe bem aonde quer chegar e não tem medo de correr atrás! Os seus resultados te trouxeram até aqui e você como um verdadeiro comandante sabe a importância de estar sempre a frente buscando novas oportunidades para o seu negócio.",
                desafios:"- Continuar a frente dos concorrentes e se manter valorizado no mercado mesmo quando os outros baixam os preços para não perder venda - Incerteza em planejar os próximos passo - Autocobrança excessiva e perfeccionismo",
                oportunidades:"- É hora de focar em diferenciar a sua marca e se transformar no líder do seu nicho - Criar um posicionamento forte com o seu público - Hora de dobrar o seu faturamento",
                navegar:"Diversos empreendedores já estão conquistando seus tesouros e dominando as marés do empreendedorismo. Você foi aprovado para passar para próxima fase, com maiores desafios para escalar o seu negócio. Se você deixar para amanhã, alguém tomará o seu lugar, agora é a sua oportunidade de ter o mapa do tesouro em mãos e conquistar muito mais! Está preparado para o desafio?",
                botao:"Pegue sua bússola aqui"})

        }else if(pontuador > 30 && pontuador < 45){
            setObjCliente({classificacao: "APRENDIZ DE MARINHEIRO",
                titulo:"Você é um ótimo marinheiro!",
                texto1: "Essa pontuação é para poucos e isso mostra que você é um empreendedor que sabe bem aonde quer chegar e não tem medo de correr atrás! Os seus resultados te trouxeram até aqui e você como um verdadeiro comandante sabe a importância de estar sempre a frente buscando novas oportunidades para o seu negócio.",
                desafios:"- Continuar a frente dos concorrentes e se manter valorizado no mercado mesmo quando os outros baixam os preços para não perder venda - Incerteza em planejar os próximos passo - Autocobrança excessiva e perfeccionismo",
                oportunidades:"- É hora de focar em diferenciar a sua marca e se transformar no líder do seu nicho - Criar um posicionamento forte com o seu público - Hora de dobrar o seu faturamento",
                navegar:"Diversos empreendedores já estão conquistando seus tesouros e dominando as marés do empreendedorismo. Você foi aprovado para passar para próxima fase, com maiores desafios para escalar o seu negócio. Se você deixar para amanhã, alguém tomará o seu lugar, agora é a sua oportunidade de ter o mapa do tesouro em mãos e conquistar muito mais! Está preparado para o desafio?",
                botao:"Quero conhecer minha próxima missão"})

        }else if(pontuador > 0 && pontuador < 30){
            setObjCliente({classificacao: "NÁUFRAGO",
                titulo:"Náufrago em treinamento!",
                texto1: "Essa pontuação é para poucos e isso mostra que você é um empreendedor que sabe bem aonde quer chegar e não tem medo de correr atrás! Os seus resultados te trouxeram até aqui e você como um verdadeiro comandante sabe a importância de estar sempre a frente buscando novas oportunidades para o seu negócio.",
                desafios:"- Continuar a frente dos concorrentes e se manter valorizado no mercado mesmo quando os outros baixam os preços para não perder venda - Incerteza em planejar os próximos passo - Autocobrança excessiva e perfeccionismo",
                oportunidades:"- É hora de focar em diferenciar a sua marca e se transformar no líder do seu nicho - Criar um posicionamento forte com o seu público - Hora de dobrar o seu faturamento",
                navegar:"Diversos empreendedores já estão conquistando seus tesouros e dominando as marés do empreendedorismo. Você foi aprovado para passar para próxima fase, com maiores desafios para escalar o seu negócio. Se você deixar para amanhã, alguém tomará o seu lugar, agora é a sua oportunidade de ter o mapa do tesouro em mãos e conquistar muito mais! Está preparado para o desafio?",
                botao:"Quero aproveitar essa oportunidade"})

        }
    };

    if (posicao >= questoes.length) {
        
        return <OutroComponente cliente={objCliente}/>;
    }

    return (
        <div className={styles.main_question}>
            <div className={styles.page}>
                <Link href="/">
                <button className={styles.button_back} >
                    <Image src="/assets/stinha.svg" width={30} height={30} />
                    Voltar
                </button>
                </Link>
                <div className={styles.pergunta_div}>
                    <h1 className={styles.pergunta}>{questoes[posicao]?.pergunta}</h1>
                </div>
                <div className={styles.respostas_div}>
                    {questoes[posicao]?.respostas.map((item) => (
                        <button
                            className={styles.resposta_div_squad}
                            onClick={() => selecaoResposta(item.pontuacao)}
                            key={item.id}
                        >
                            {item.resposta}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
