import React from 'react';
import TaskItem from "../components/TaskItem";
import MainForm from "../components/MainForm";
import { useEffect } from 'react';

function MainPage() {
    
    return (
        <div className="main-page">
            <MainForm />
            <div className="main-page-task">
                <div className="main-page-tasks">
                </div>
            </div>
            
        </div>
    )
}

export default MainPage