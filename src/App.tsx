import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

export type filterType = 'All'|'Active'|'Completed'

function App() {

    let [task, setTask] = useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "React", isDone: false},
        {id: 5, title: "Redax", isDone: false},
    ])

    let [filter, setFilter] = useState('')


    const deleteTask = (id: number) => {
        let newTask = task.filter(f => f.id !== id)
        setTask(newTask)
    }

    const filterTask = (value: string) => {
        setFilter(value)
    }

    let filterTasks = filter==='Active'? task.filter(f=>f.isDone) : filter ==='Completed'? task.filter(f=>!f.isDone) : task

    return (
        <div className="App">
            <ToDoList title={'My tasks'} tasks={filterTasks} deleteTask={deleteTask} filterTask={filterTask}/>
        </div>
    );
}

export default App;
