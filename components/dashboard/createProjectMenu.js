import Menu from "../menu";
import styles from '../../styles/Menu.module.css'

export default function CreateProjectMenu(props) {
    return <Menu buttons={[
        <button className='button round nq-button gradient'>
        <div className='flex'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Create
        </div>
    </button>
    ]} headerBackground="/illustrations/new-project.png" title="Create new project" child={
        <>
            <input placeholder="Project name*" type="text" name="projectName"></input>
        </>
    } />
}