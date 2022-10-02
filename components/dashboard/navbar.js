import styles from '../../styles/dashboard/Navbar.module.css'
import Link from 'next/link'
import { render } from 'react-dom'
import CreateProjectMenu from './createProjectMenu'

export default function Navbar(props) {
    return <div className={styles.container}>
        <Link href="/">
            <div className='flex button hover-effect-1 '>
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                Back
            </div>
        </Link>
        <ul className={styles.list}>
            <p>Projects</p>
            <li className='emptyContainer'>
                No project yet
            </li>
            <li>
                <button className='button round nq-button gradient bluePink fill' onClick={() => props.setMenu(<CreateProjectMenu setMenu={props.setMenu} />, document)}>
                    <div className='flex'>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        New project
                    </div>
                </button>
            </li>
        </ul>
        
    </div>
}