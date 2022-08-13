import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

function TaskItem({goal, deadline}) {
    return (
        <div className="main-page-tasks-item">
            <p className="main-page-tasks-item-deadline">{deadline}</p>
            <div className="main-page-tasks-item-icon"><AiOutlineClose /></div>
            <h3 className="main-page-tasks-item-name">{goal.name}</h3>
            <p className="main-page-tasks-item-text">{goal.content}</p>
        </div>
    )
}

export default TaskItem