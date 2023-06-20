
import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export default function OutroComponente(cliente) {
    const [client, setClient] = useState({ ...cliente.cliente })
    

    return (
        <div className={styles.main_resposta}>
            <Image src={client.assets} width={200} height={300} />
            <h1 className={styles.tittle1}>VOCÊ FEZ...</h1>
            <h1 className={styles.pontuacao}>{client.pontuacao} PONTOS</h1>
            <Image src={client.url} width={235} height={219}/>
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
                <div className={styles.quadradinho}><h1 >SEUS DESAFIOS</h1></div>
                {
                    client && client.desafios ? client.desafios.map(item => (<li key={item}>{item}</li>)) : ""
                }
            </div>
            <div className={styles.boxPersonalizado}>
                <div className={styles.bol}>
                    <Image src="/assets/bussola.svg" width={62} height={62} />
                </div>
                <div className={styles.quadradinho}><h1 >SUAS OPORTUNIDADES</h1></div>
                {
                    client && client.oportunidades ? client.oportunidades.map(item => (<li key={item}>{item}</li>)) : ""
                }
            </div>
            <div className={styles.boxPersonalizado}>
                <div className={styles.bol}>
                    <Image src="/assets/barco.svg" width={62} height={62} />
                </div>
                <div className={styles.quadradinho}><h1 >COMO NAVEGAR</h1></div>
                <p>{client.navegar}</p>
            </div>

            <a href="https://schayanezen.com/bussoladigital/"><button className={styles.btn}>{client.botao}</button></a>
        </div>
    );
}