import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type FilterType = 'All'|'Active'|'Completed'

function App() {

    let [task, setTask] = useState([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redax", isDone: false},
    ])
    const [filter, setFilter] = useState('All')

    const deleteTask = (id: string) => {setTask(task.filter(f => f.id !== id))}
    const filterTask = (value: string) => {setFilter(value)}
    const addTask = (title:string) => {setTask([{id: v1(), title, isDone: false}, ...task])}
    const checkedBoxStatus = (id:string, value:boolean) =>{
        setTask(task.map(m => m.id===id? {...m, isDone:value} : m))
    }

    let filterTasks = filter==='Active'? task.filter(f=>f.isDone) :
                      filter ==='Completed'? task.filter(f=>!f.isDone) :
                      task

    return (
        <div className="App">
            <ToDoList title={'My tasks'}
                      tasks={filterTasks}
                      deleteTask={deleteTask}
                      filterTask={filterTask}
                      addTask={addTask}
                      filter={filter}
                      checkedBoxStatus={checkedBoxStatus}
            />
        </div>
    );
}

export default App;
