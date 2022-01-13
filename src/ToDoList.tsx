import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {FilterType} from "./App";
import cl from './ToDoList.module.css'
import {MapTasks} from "./MapTasks";

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
}

export type inPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const ToDoList:React.FC<PropsType> = (props) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')


    const onChangeHandlerInput = (event:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(event.currentTarget.value)
    }

    const onClickHandlerAddButton = () => {
        if (title.trim() !== '') {
            props.addTask(props.id, title)
            setTitle('')
        } else {
            setError('Вы ничего не ввели')
        }
    }
    const onClickHandlerFilterButton = (todoListID:string,value: FilterType) => props.filterTask(todoListID ,value)
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // setError('')
        if (event.key === 'Enter') {
            onClickHandlerAddButton()
        }
    }
    const onClickHandlerDeleteButton = (idTasks:string,tID: string) => {
        props.deleteTask(idTasks,tID)
    }
    const onChangeHandlerInputStatus = (todoListID: string,tID: string, value: boolean) => {
        props.checkedBoxStatus(todoListID,tID, value)
    }
    const onClickHandlerDeleteToDoList = () => {
        props.deleteToDoList(props.id)
    }


    return (
        <div>
            <h3>
                {props.title}
                <button onClick={onClickHandlerDeleteToDoList}>x</button>
            </h3>
            <div>
                <input value={title}
                       onChange={onChangeHandlerInput}
                       onKeyPress={onKeyPressHandler}
                       className={error ? cl.error : ''}
                />
                <button onClick={onClickHandlerAddButton}>+</button>
                {error && <div className={cl.errorMessage}>{error}</div>}
            </div>
            <MapTasks tasks={props.tasks}
                      idTasks={props.id}
                      onClickHandlerDeleteButton={onClickHandlerDeleteButton}
                      onChangeHandlerInputStatus={onChangeHandlerInputStatus}
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
