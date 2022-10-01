import Menu from "../menu";

export default function CreateProjectMenu(props) {
    return <Menu title="Create new project" child={
        <>
            <div className="flex">
                <label for="projectName">Project name<strong className="red">*</strong></label>
                <input type="text" name="projectName"></input>
            </div>
            <button className='button round nq-button gradient'>
                <div className='flex'>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Create
                </div>
            </button>
        </>
    } />
}