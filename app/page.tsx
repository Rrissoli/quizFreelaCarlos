
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  

  
  return (
    <main className={styles.main}>
      <div className={styles.box}>
      <h1 className={styles.titulo}><span className={styles.vermelho}>Olá tripulante,</span> bem vindo a bordo!</h1>
      <p className={styles.texto}>É um enorme prazer tê-lo aqui conosco... Se você chegou até aqui, é porque quer realizar o teste para saber qual o seu perfil de empreendedor! Para iniciar, você só precisa clicar em “Iniciar Teste”.</p>
      <div className={styles.box_buttons}>
        <button className={styles.button_iniciar} > <Link href="/questionpage"> Iniciar Teste </Link></button>
        <button className={styles.button_saibamais}>Saiba Mais</button>
      </div>
      </div>
    </main>
  )
}
