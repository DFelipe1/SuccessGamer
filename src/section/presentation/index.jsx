import { GameController } from '@phosphor-icons/react'

import styles from './styles.module.css'
import { Card } from '../../components/Card'

export function Apresentation() {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.text}>
                    <h1>
                       Você vai aprender <span>Na prática</span>
                    </h1>
                </div>
                <div className={styles.effect}/>
            </div>

            <div className={styles.wrapperCards}>
                <Card
                    title='Como se torna um gamer'
                    description='Você vai aprender a entrar no mundo gamer da maneira correta'
                >
                    <GameController weight='fill' size={32}/>
                </Card>
                <Card
                    title='Como ganhar dinheiro'
                    description='Você vai aprender a como ganhar sua primeira grana no mundo gamer'
                >
                    <GameController weight='fill' size={32}/>
                </Card>
                <Card
                    title='Como se torna um destaque'
                    description='Você vai aprender os macetes para se destacar como gamer'
                >
                    <GameController weight='fill' size={32}/>
                </Card>
            </div>
        </div>
    )
}