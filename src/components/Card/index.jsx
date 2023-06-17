import styles from './styles.module.css'

// eslint-disable-next-line react/prop-types
export function Card({ children, title, description }) {
    return(
        <div className={styles.card}>
            <div className={styles.icon}>
                {children}
            </div>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}