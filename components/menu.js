import styles from '../styles/Menu.module.css'
export default function Menu(props) {
    return <div className={styles.container}>
        <div className={styles.menu}>
            {props.title && <>
            <header style={{backgroundImage:'url("' + props.headerBackground + '")'}} className={styles.header}>
                <h1 className={styles.title}>{props.title}</h1>
            </header>
            <div className={styles.headerDecal} />
            </>
            }
            {props.child}
            {props.buttons && <div className={styles.buttonBar}>
                {props.buttons.map((button, index) => <div key={"createProjectButton_" + index}>{button}</div>)}
            </div>}
        </div>
    </div>
}