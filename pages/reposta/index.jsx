
import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export default function OutroComponente(cliente) {
    const [client, setClient] = useState({ ...cliente.cliente })
    console.log(client)
    return (
        <div className={styles.main_resposta}>
            <Image src={client.assets} width={200} height={300} />
            <h1 className={styles.tittle1}>Você fez...</h1>
            <h1 className={styles.pontuacao}>{client.pontuacao} PONTOS</h1>
            <div className={styles.banner}>{client.classificacao}</div>
            <div className={styles.boxPersonalizado}>

                <p>
                    {client.titulo}
                    <br></br>
                    <br></br>
                    {client.texto1}
                </p>

                
            </div>
            <div className={styles.boxPersonalizado}>
                <div className={styles.bol}>
                    <Image src="/assets/bandeira-pirata.svg" width={62} height={62} />
                </div>
                <h1 className={styles.titulo_vermelho}>Seus Desafios</h1>
                {
                    client && client.desafios ? client.desafios.map(item => (<li>{item}</li>)) : ""
                }
            </div>
            <div className={styles.boxPersonalizado}>
                <div className={styles.bol}>
                    <Image src="/assets/bussola.svg" width={62} height={62} />
                </div>
                <h1 className={styles.titulo_vermelho}>Suas Oportunidades</h1>
                {
                    client && client.oportunidades ? client.oportunidades.map(item => (<li>{item}</li>)) : ""
                }
            </div>
            <div className={styles.boxPersonalizado}>
                <div className={styles.bol}>
                    <Image src="/assets/barco.svg" width={62} height={62} />
                </div>
                <h1 className={styles.titulo_vermelho}>Como Navegar</h1>
                <p>{client.navegar}</p>
            </div>

            <a href="https://schayanezen.com/bussoladigital/"><button className={styles.btn}>{client.botao}</button></a>
        </div>
    );
}