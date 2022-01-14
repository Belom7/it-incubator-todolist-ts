import React from "react";
import {FilterType} from "./App";
import cl from './ToDoList.module.css'
import {MapTasks} from "./MapTasks";
import {InputAddTask} from "./InputAddTask";

type PropsType = {
    id:string
    title: string
    tasks: Array<inPropsType>
    deleteTask: (idTasks:string,id: string) => void
    filterTask: (todoListID:string,value: FilterType) => void
    addTask: (todoListID: string,title: string) => void
    filter: string
    checkedBoxStatus: (todoListID: string, id: string, value: boolean) => void
    deleteToDoList:(todoListID: string)=>void
    updateTasks:(todoListID: string, id:string,title:string)=>void
}

export type inPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const ToDoList:React.FC<PropsType> = (props) => {

    const onClickHandlerFilterButton = (todoListID:string,value: FilterType) => props.filterTask(todoListID ,value)

    const onClickHandlerDeleteButton = (idTasks:string,tID: string) => {
        props.deleteTask(idTasks,tID)
    }
    const onChangeHandlerInputStatus = (todoListID: string,tID: string, value: boolean) => {
        props.checkedBoxStatus(todoListID,tID, value)
    }
    const onClickHandlerDeleteToDoList = () => {
        props.deleteToDoList(props.id)
    }
    const collBackHandler = (title:string) => {
        props.addTask(props.id, title)
    }
    const updateTaskHandler = (id:string,title:string) => {
        props.updateTasks(props.id,id,title)
    }



    return (
        <div>
            <h3>
                {props.title}
                <button onClick={onClickHandlerDeleteToDoList}>x</button>
            </h3>
            <InputAddTask callBack={collBackHandler} />
            <MapTasks tasks={props.tasks}
                      idTasks={props.id}
                      onClickHandlerDeleteButton={onClickHandlerDeleteButton}
                      onChangeHandlerInputStatus={onChangeHandlerInputStatus}
                      updateTask={updateTaskHandler}

            />
            <div>
                <button className={props.filter === 'All' ? cl.activeFilterButton : ''}
                        onClick={() => onClickHandlerFilterButton(props.id, 'All')}>All
                </button>
                <button className={props.filter === 'Active' ? cl.activeFilterButton : ''}
                        onClick={() => onClickHandlerFilterButton(props.id,'Active')}>Active
                </button>
                <button className={props.filter === 'Completed' ? cl.activeFilterButton : ''}
                        onClick={() => onClickHandlerFilterButton(props.id,'Completed')}>Completed
                </button>
            </div>
        </div>
    )
}

