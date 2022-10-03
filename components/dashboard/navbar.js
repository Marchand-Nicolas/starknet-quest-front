import styles from '../../styles/components/dashboard/Navbar.module.css'
import Link from 'next/link'
import CreateProjectMenu from './createProjectMenu'

export default function Navbar(props) {
    return <div className={styles.container}>
        <Link href="/">
            <div className='flex button'>
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                Back
            </div>
        </Link>
        <br></br>
        <ul className={styles.list}>
            <select className='fill borderless'>
                <option>Your projects</option>
            </select>
            <br></br>
            <br></br>
            <li>
                {
                    props.projects.length ? <ul className={styles.projectList}>
                    {
                        props.projects.map((project, index) =>
                            <li key={"project_" + index} className='button'>
                                <Link href={"/dashboard/" + project.id}>
                                    <p>{project.name}</p>
                                </Link>
                            </li>
                        )
                    }
                    </ul> : <div className='emptyContainer'>
                        No project yet
                    </div>
                }
            </li>
            <li>
                <button className='button round nq-button blue fill' onClick={() => props.setMenu(<CreateProjectMenu setMenu={props.setMenu} />, document)}>
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