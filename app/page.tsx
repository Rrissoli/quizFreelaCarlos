
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
 
  
  return (
    <main className={styles.main}>
      <div className={styles.box}>
      <h1 className={styles.texto}><span className={styles.vermelho1}><strong>Desafio do comandante</strong></span></h1>
      <p  className={styles.texto}>@schayanezen</p>
      <p className={styles.texto}><strong>Qualquer pessoa pode começar um negócio, mas só os diferenciados chegarão ao topo! </strong></p>
      <p className={styles.texto}>Está na hora de descobrir por que a sua empresa não está navegando como você gostaria.</p>
      <p className={styles.texto}>Este teste é para aqueles que querem alcançar muito mais! </p>
      <p className={styles.texto}>Ao final, veja quais os desafios, oportunidades e os seus próximos passos. Aproveite essa viagem, nos vemos do outro lado.</p>
      <input type="text" placeholder='Nome' className={styles.localinput}/>
      <input type="email" placeholder='E-mail' className={styles.localinput}/>
      <input type="number" placeholder='Whatsapp' className={styles.localinput}/>
      <div className={styles.box_buttons}>
        <button className={styles.button_iniciar} > <Link href="/questionpage"> Iniciar Teste </Link></button>
      </div>
      <Image src="/assets/caminho.png" width={605} height={164} alt=''/>
      </div>
    </main>
  )
}
