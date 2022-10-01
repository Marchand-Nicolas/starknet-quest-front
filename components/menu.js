import styles from '../styles/Menu.module.css'
export default function Menu(props) {
    return <div className={styles.container}>
        <div className={styles.menu}>
            {props.title && <>
                <h1 className='title'>{props.title}</h1>
                <hr></hr>
            </>}
            {props.child}
        </div>
    </div>
}