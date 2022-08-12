import React from 'react';

function MainForm() {
  return (
    <div className="main-page-task-maker">
        <form className="main-page-task-maker-form">
            <input type="text" placeholder="Name of Project"></input>
            <input type="text" placeholder="Description of project"></input>
            <input type="text" placeholder="Deadline of project"></input>
        </form>
        <button className="create-button">Create Project</button> 
    </div>
  )
}

export default MainForm