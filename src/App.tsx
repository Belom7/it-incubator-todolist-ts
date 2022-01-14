import React, {useState} from 'react';
import './App.module.css';
import {ToDoList} from "./ToDoList";
import {v1} from "uuid";
import cl from './App.module.css'
import {InputAddTask} from "./InputAddTask";

export type FilterType = 'All' | 'Active' | 'Completed'

type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

function App() {

    const todoListID1 = v1()
    const todoListID2 = v1()

    let [todoList, setTodoList] = useState<TodoListType[]>([
        {id: todoListID1, title: "My TodoList", filter: 'All'},
        {id: todoListID2, title: "Sister TodoList", filter: 'All'},
    ])

    let [task, setTask] = useState({
        [todoListID1]: [
            {id: v1(), title: "HTML-1", isDone: true},
            {id: v1(), title: "CSS2-", isDone: true},
            {id: v1(), title: "JS-3", isDone: true},
            {id: v1(), title: "React-4", isDone: false},
            {id: v1(), title: "Redux-5", isDone: false},
        ],
        [todoListID2]: [
            {id: v1(), title: "HTML-6", isDone: true},
            {id: v1(), title: "CSS-7", isDone: true},
            {id: v1(), title: "JS-8", isDone: true},
            {id: v1(), title: "React-9", isDone: false},
            {id: v1(), title: "Redux-10", isDone: false},
        ]
    })

    const deleteTask = (idTasks: string, id: string) => {
        setTask({...task, [idTasks]: task[idTasks].filter(f => f.id !== id)})
    }
    const filterTask = (todoListID: string, value: FilterType) => {
        setTodoList(todoList.map(m => m.id === todoListID ? {...m, filter: value} : m))
    }
    const addTask = (todoListID: string, title: string) => {
        let newTask = {id: v1(), title, isDone: false}
        setTask({...task, [todoListID]: [newTask, ...task[todoListID]]})
    }
    const checkedBoxStatus = (todoListID: string, id: string, value: boolean) => {
        setTask({...task, [todoListID]: task[todoListID].map(m => m.id === id ? {...m, isDone: value} : m)})
    }
    const deleteToDoList = (todoListID: string) => {
        setTodoList(todoList.filter(f => f.id !== todoListID))
        delete task[todoListID]
    }
    const addTodoListHandler = (title: string) => {
        let newID = v1()
        let newTodoList:TodoListType = {id: newID, title:title, filter: 'All' }

        setTodoList([newTodoList,...todoList])
        setTask({[newID]:[],...task})
    }

    return (
        <div>
            <div className={cl.AppInput}>
                <InputAddTask callBack={addTodoListHandler}/>
            </div>

            <div className={cl.App}>
                {todoList.map(m => {
                    let filterTasks = m.filter === 'Active' ? task[m.id].filter(f => f.isDone) :
                        m.filter === 'Completed' ? task[m.id].filter(f => !f.isDone) :
                            task[m.id]
                    return (
                        <ToDoList key={m.id}
                                  id={m.id}
                                  title={m.title}
                                  tasks={filterTasks}
                                  deleteTask={deleteTask}
                                  filterTask={filterTask}
                                  addTask={addTask}
                                  filter={m.filter}
                                  checkedBoxStatus={checkedBoxStatus}
                                  deleteToDoList={deleteToDoList}
                        />
                    )
                })}

            </div>
        </div>
    );
}

export default App;

