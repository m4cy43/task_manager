import React from 'react';
import { AiFillPlusSquare, AiFillCloseSquare, AiOutlineClose } from "react-icons/ai";


function MainPage() {
    return (
        <div className="main-page">
            <div className="main-page-head">

                <button><AiFillPlusSquare /></button>
                <button><AiFillCloseSquare /></button>
                <p>Today is ...</p>

            </div>

            <div className="main-page-task-maker">

                <form className="main-page-task-maker-form">

                    <input type="text" placeholder="Name of Project"></input>
                    <input type="text" placeholder="Description of project"></input>
                    <input type="text" placeholder="Deadline of project"></input>

                </form>

                <button className="create-button">Create Project</button>
                
            </div>

            <div className="main-page-tasks">

                <ul className="main-page-tasks-list">

                    <li className="main-page-tasks-list-item">

                        <div className="main-page-tasks-list-item-info">

                            <h3 className="main-page-tasks-list-item-info-name">Task-Manager</h3>
                            <p className="main-page-tasks-list-item-info-timeCreated">08.08.2022</p>
                            <p className="main-page-tasks-list-item-info-deadline">31.08.2022</p>
                            <button><AiOutlineClose /></button>
                            <p className="main-page-tasks-list-item-info-text">Make a simple task manager with second Andriuha</p>

                        </div>

                    </li>

                    <li className="main-page-tasks-list-item">

                        <div className="main-page-tasks-list-item-info">

                            <h3 className="main-page-tasks-list-item-info-name">Second coop project</h3>
                            <p className="main-page-tasks-list-item-info-timeCreated">08.08.2022</p>
                            <p className="main-page-tasks-list-item-info-deadline">31.08.2022</p>
                            <button><AiOutlineClose /></button>
                            <p className="main-page-tasks-list-item-info-text">Create second project</p>

                        </div>

                    </li>

                </ul>

            </div>

        </div>
    )
}

export default MainPage