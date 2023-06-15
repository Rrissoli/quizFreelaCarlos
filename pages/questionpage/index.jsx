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
        if (pontuador > 70) {
            setObjCliente({
                classificacao: "Comandante",
                assets: "/assets/comandanteResult.svg",
                pontuacao: pontuador,
                titulo: "Parabéns, você é um verdadeiro comandante!",
                texto1: "Essa pontuação é para poucos e isso mostra que você é um empreendedor que sabe bem aonde quer chegar e não tem medo de correr atrás! Os seus resultados te trouxeram até aqui e você, como um verdadeiro comandante, sabe a importância de estar sempre à frente buscando novas oportunidades para o seu negócio.",
                desafios: [
                    "Continuar à frente dos concorrentes e se manter valorizado no mercado mesmo quando os outros baixam os preços para não perder venda",
                    "Incerteza em planejar os próximos passo",
                    "Autocobrança excessiva e perfeccionismo"
                ],
                oportunidades: [
                    "É hora de focar em diferenciar a sua marca e se transformar no líder do seu nicho",
                    "Criar um posicionamento forte com o seu público",
                    "Hora de dobrar o seu faturamento"
                ],
                navegar: "Diversos empreendedores já estão conquistando seus tesouros e dominando as marés do empreendedorismo. Você foi aprovado para passar para próxima fase, com maiores desafios para escalar o seu negócio. Se você deixar para amanhã, alguém tomará o seu lugar, agora é a sua oportunidade de ter o mapa do tesouro em mãos e conquistar muito mais! Está preparado para o desafio?",
                botao: "Quero conhecer a minha Bússola Digital"
            });
        } else if (pontuador > 60 && pontuador < 70) {
            setObjCliente({
                classificacao: "Navegador",
                assets: "/assets/navegadorResult.svg",
                pontuacao: pontuador,
                titulo: "Parabéns, você é um navegador talentoso!",
                texto1: "Sua pontuação indica que você tem competência para navegar pelo oceano do empreendedorismo. Você se comprometeu com os seus sonhos e sei que batalhou muito para chegar até aqui! Quero te dizer que daqui para frente navegar não precisa mais ser tão cansativo, com a bússola certa em mãos você pode conquistar muito mais do que já imaginou.",
                desafios: [
                    "Dificuldade de investir em marketing e tráfego e não conseguir vender",
                    "Não ter uma rotina prática para o seu Instagram sem gastar muito tempo",
                    "Não ser mais comparado com seus concorrentes inferiores"
                ],
                oportunidades: [
                    "Evoluir o seu negócio para conquistar liberdade financeira e tempo",
                    "Aumentar o faturamento e alcançar autonomia para o seu negócio",
                    "Atrair clientes que valorizam a sua empresa e pagam bem"
                ],
                navegar: "É hora de você se preparar para assumir o navio como comandante e navegar em águas mais profundas, descobrindo tesouros ainda maiores. Seu próximo passo é levantar a âncora e se preparar para desbravar o alto mar.",
                botao: "A bússola para chegar ao seu tesouro está aqui."
            });
        } else if (pontuador > 45 && pontuador < 60) {
            setObjCliente({
                classificacao: "Marinheiro",
                assets: "/assets/MarinheiroResult.svg",
                pontuacao: pontuador,
                titulo: "Você é um ótimo marinheiro!",
                texto1: "Você é um ótimo marinheiro! Sua pontuação mostrou que você tem boas habilidades para navegar pelo oceano do empreendedorismo. Você está atento às oportunidades e tem vontade de conquistar muito mais, parabéns pela sua garra! O lugar do comandante está esperando por você. Agora é hora de enfrentar desafios maiores, por isso é essencial reforçar seu negócio para que você conquiste sua liberdade financeira.",
                desafios: [
                    "Falta de estratégia nas vendas para não depender do boca a boca",
                    "Seus clientes vivem pedindo desconto",
                    "O medo do julgamento das pessoas está te bloqueando"
                ],
                oportunidades: [
                    "Essa é a momento certo para desbloquear o seu posicionamento",
                    "Atrair clientes que dão valor a sua qualidade e não choram por preço",
                    "O mercado está cheio de oportunidades e os clientes precisam do seu produto, a hora de focar na rota certa é agora."
                ],
                navegar: "Preciso ser sincera, eu sei que você pode conquistar muito mais, só que nesse momento você está remando contra a maré! Você tem grandes objetivos, mas o seu navio ainda não achou a rota certa para conquistá-los e o seu combustível pode não durar por muito tempo. Não desanime, esta é a oportunidade certa para você finalmente sentir o navio a todo vapor. Vamos encontrar o seu baú do tesouro juntos, nossa missão vai começar.",
                botao: "Pegue sua bússola aqui"
            });
        } else if (pontuador > 30 && pontuador < 45) {
            setObjCliente({
                classificacao: "APRENDIZ DE MARINHEIRO",
                assets: "/assets/aprendizResult.svg",
                pontuacao: pontuador,
                titulo: "Você é um ótimo marinheiro!",
                texto1: "Você ainda é um aprendiz de marinheiro! Venceu o medo de dar o primeiro passo, superou alguns desafios e agora está perdendo o sono sem saber como salvar o seu navio. Você está ficando para trás, agora é hora de focar nas soluções, parar de fugir dos problemas e aprender a fazer o que precisa ser feito.",
                desafios: [
                    "Você cuida da qualidade, mas só atrai clientes que querem preço baixo",
                    "Parar de se comparar com a concorrência",
                    "Impedir que o navio afunde antes que a sua energia acabe"
                ],
                oportunidades: [
                    "Aprender com um comandante experiente como ser um empreendedor de sucesso",
                    "Dar rumo e velocidade ao seu negócio para finalmente conquistar resultados financeiros",
                    "Mostrar que você é capaz para todos que não acreditam no seu potencial"
                ],
                navegar: "SOS! Esse é o seu último tanque de combustível e você está navegando em direção a um enorme iceberg. É preciso acelerar e desviar a rota para encontrar seus resultados. Você sabe que todo grande comandante começou como aprendiz, mas para se destacar é hora de jogar fora todo o excesso de peso que você carrega e descobrir qual é a sua rota certa. Você não estará sozinho, quero guiá-lo na sua próxima missão!",
                botao: "Quero conhecer minha próxima missão"
            });
        } else if (pontuador > 0 && pontuador < 30) {
            setObjCliente({
                classificacao: "NÁUFRAGO",
                assets: "/assets/Naufrago.svg",
                pontuacao: pontuador,
                titulo: "Náufrago em treinamento!",
                texto1: "Você foi corajoso, mas sua pontuação indica que você ainda é um marinheiro sonhador e precisa aprender como construir seu negócio da maneira certa. Ainda faltam peças valiosas para o seu navio conseguir navegar em alto mar e nesse momento, você está remando contra a maré num barquinho sem direção.",
                desafios: [
                    "Você não está pronto e precisa de uma bússola para te guiar",
                    "Vencer a procrastinação e aprender a fazer o que precisa ser feito",
                    "Não deixar que a falta de dinheiro te impeça de continuar"
                ],
                oportunidades: [
                    "Criar um negócio bem-sucedido e valorizado",
                    "Vencer o medo do julgamento e sentir-se confiante para alcançar seus objetivos",
                    "Se juntar a muitos outros empreendedores que se identificam com as suas dores e que caminharão junto com você rumo ao baú do tesouro."
                ],
                navegar: "Preste atenção no quanto você já se desgastou tentando e errando até aqui, sem nenhuma orientação. Agora é a oportunidade certa para construir um negócio de verdade. Sei que pode dar um pouco de medo, por isso estou aqui e não vou soltar a sua mão. Você tem sonhos que ainda estão distantes e sei que você é capaz de conquistá-los, para isso será preciso muita dedicação, foco e vontade para aproveitar as oportunidades que surgirem.",
                botao: "Quero aproveitar essa oportunidade"
            });
        }


    };

    if (posicao >= questoes.length && objCliente) {

        return <OutroComponente cliente={objCliente} />;
    }
    else {
        return (

            <div className={styles.main_question}>
                <div className={styles.page}>
                    <div className={styles.organization}>
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
                        <Link href="/">
                            <button className={styles.button_back} >
                                Cancelar Teste
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

}
