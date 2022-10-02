import Menu from "../menu";
import { useEffect, useState } from "react";

export default function CreateProjectMenu(props) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (name.length > 
            60) {
            setError("Project name too long");
        }
        else setError("")
        
    }, [name]);

    return <Menu buttons={[
        <button key={"createProjectButton_1"} onClick={() => props.setMenu(null)} className='button round nq-button gradient dark'>
            <div className='flex'>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Cancel
            </div>
        </button>,
        error ? null : <button key={"createProjectButton_2"} className='button round nq-button gradient'>
        <div className='flex'>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Create
        </div>
    </button>
    ]} headerBackground="/illustrations/new-project.png" title="Create new project" child={
        <>
            <input onChange={(e) => setName(e.target.value)} placeholder="Project name*" type="text" name="projectName"></input>
            <p>Project url: starknet.quest/p/{name ? name.toLowerCase().split(' ').join('-') : "project-name"}</p>
            {error ? <p className="notification error">{error}</p> : null}
        </>
    } />
}