import Logo from '../../assets/Logo.svg'
import forma from '../../assets/Forma.svg'
import image1 from '../../assets/image1.png'

import styles from './styles.module.css'

export function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <img id='logo' src={Logo} alt="jornada do game de sucesso" />
                    <div className={styles.text}>
                        <h1>
                            Aprenda como se torna um gamer <span>profissinal</span>
                        </h1>
                        <p>
                            O passo a passo mais rapido para viver bem apenas jogando sem sair de casa
                        </p>
                    </div>

                    <form action="" className={styles.subscribe}>
                        <input type="email" placeholder='Digite seu melhor e-mail'/>
                        <button type="submit">Quero me inscrever</button>
                    </form>
                </div>
                <div className={styles.image}>
                    <img src={image1} alt="" />
                </div>
            </div>
            <img className={styles.union} src={forma} alt="" />
        </>
    )
}