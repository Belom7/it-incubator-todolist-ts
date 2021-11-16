import React from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {

    const task=[
        { id: 1, title: "Hello world111", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false },
    ]


    return (
        <div className="App">
            <ToDoList title={'What to learn111'} tasks={task}/>
        </div>
    );
}

export default App;
