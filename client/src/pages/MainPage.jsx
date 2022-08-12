import React from 'react';
import TaskItem from "../components/TaskItem";
import MainForm from "../components/MainForm";
import { useEffect } from 'react';

function MainPage() {
    
    useEffect(()=>{
        let headImage=document.querySelector(".back-image");
        headImage.style.backgroundImage="none";
        headImage.style.background="#e0ebeb";
    }, []);
    return (
        <div className="main-page">
            <MainForm />
            <div className="main-page-task">
                <div className="main-page-tasks">
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                    <TaskItem goal={{name: "Andrew", content: "Super easy task Super easy task Super easy task Super easy task"}} deadline={"3 weeks"}/>
                </div>
            </div>
            
        </div>
    )
}

export default MainPage