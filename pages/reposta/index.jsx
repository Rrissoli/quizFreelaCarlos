
import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export default function OutroComponente(cliente) {
    const [client, setClient] = useState({...cliente.cliente})
    console.log(client)
    return (
        <div className={styles.main_resposta}>
            <Image src="/assets/trofeu.svg" width={300} height={300}/>
            <h3 className={styles.parabens}>{client.titulo}</h3>
            <h2 className={styles.analise}>Segundo nossa análise, o seu perfil é de: </h2>
            <h1 className={styles.titulo}>{client.classificacao}</h1>
            <p className={styles.paragrafo}>Quer saber mais sobre como você pode se tornar um(a) empreendedor(a) cada vez melhor no mercado digital e se destacar pelo alto desempenho? Clique no botão abaixo e conheça o método que irá te guiar!</p>
            <a href="https://schayanezen.com/bussoladigital/"><button className={styles.btn}>{client.botao}</button></a>
        </div>
    );
}