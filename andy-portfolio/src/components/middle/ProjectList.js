import React from "react";
import "./ProjectList.css"

const ProjectList = () => {
    return (
        <>
        <h1>My Projects</h1>
        <div id="project-container">
            <div className="project-item">Expense Reimbursement Application</div>
            <div className="project-item">Spring Savings</div>
            <div  className="project-item">Weather Project</div>
            <div  className="project-item">Project 3</div>
        </div>
        </>
    )
}

export default ProjectList;