
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  

  
  return (
    <main className={styles.main}>
      <div className={styles.box}>
      <h1 className={styles.texto}><span className={styles.vermelho}>Desafio do comandante</span></h1>
      <p className={styles.titulo}>Descubra se você está <span className={styles.vermelho}>na rota certa</span> para o <span className={styles.vermelho}>sucesso do seu negócio</span></p>
      <p className={styles.texto}>Você vai descobrir por que o seu negócio ainda não conquistou os resultados que você deseja, mesmo com todo o seu empenho. Uma das maiores razões de você se sentir perdido é porquê sabe o que precisa ser feito, mas não consegue colocar em prática. Sente que não tem tempo para focar na direção correta e achar as oportunidades certas para alavancar o seu negócio. <br></br> Sem julgamento, é hora de dar o próximo passo neste teste! </p>
      <div className={styles.box_buttons}>
        <button className={styles.button_iniciar} > <Link href="/questionpage"> Iniciar Teste </Link></button>
      </div>
      <Image src="/assets/caminho.png" width={605} height={164} alt=''/>
      </div>
    </main>
  )
}
