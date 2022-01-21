import React from "react";
import {FilterType} from "./App";
import cl from './ToDoList.module.css'
import {MapTasks} from "./MapTasks";
import {InputAddTask} from "./InputAddTask";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
    updateTodoList:(todoListID: string,title:string)=>void
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
    const updateTaskHandlerTask = (id:string,title:string) => {
        props.updateTasks(props.id,id,title)
    }
    const updateTaskHandlerTodoList = (title:string) => {
        props.updateTodoList(props.id,title)
    }


    return (
        <div>
            <h3>
                {/*<button onClick={onClickHandlerDeleteToDoList}>x</button>*/}
                <EditableSpan title={props.title} callBack={updateTaskHandlerTodoList}/>
                <IconButton onClick={onClickHandlerDeleteToDoList}><Delete/></IconButton>
            </h3>
            <InputAddTask callBack={collBackHandler} />
            <MapTasks tasks={props.tasks}
                      idTasks={props.id}
                      onClickHandlerDeleteButton={onClickHandlerDeleteButton}
                      onChangeHandlerInputStatus={onChangeHandlerInputStatus}
                      updateTask={updateTaskHandlerTask}
            />
            <div>
                <Button color={props.filter === 'All' ? 'secondary' : 'default'}
                        onClick={() => onClickHandlerFilterButton(props.id, 'All')}>All
                </Button>
                <Button color={props.filter === 'Active' ? 'secondary' : 'default'}
                        onClick={() => onClickHandlerFilterButton(props.id,'Active')}>Active
                </Button>
                <Button color={props.filter === 'Completed' ? 'secondary' : 'default'}
                        onClick={() => onClickHandlerFilterButton(props.id,'Completed')}>Completed
                </Button>
            </div>
        </div>
    )
}

