import styles from '../styles/components/Menu.module.css'
export default function Menu(props) {
    return <div className={[styles.container, props.class].join(" ")}>
        <div className={styles.menu}>
            {props.title && <>
            <header style={props.headerBackground ? {backgroundImage:'url("' + props.headerBackground + '")'} : null} className={styles.header}>
                <h1 className={styles.title}>{props.title}</h1>
            </header>
            <div className={styles.headerDecal} />
            </>
            }
            {props.child}
            {(props.buttons || props.closeButtonName) && <div className={styles.buttonBar}>
                {
                    props.closeButtonName ?
                    <button key={"createProjectButton_1"} onClick={() => props.setMenu(null)} className='button round nq-button gradient dark'>
                        <div className='flex'>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Cancel
                        </div>
                    </button>
                    : null
                }
                {props.buttons && props.buttons.map(button => button)}
            </div>}
        </div>
    </div>
}