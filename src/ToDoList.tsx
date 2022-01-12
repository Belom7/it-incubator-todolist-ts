import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType} from "./App";
import cl from './ToDoList.module.css'
import {MapTasks} from "./MapTasks";

type PropsType = {
    title: string
    tasks: Array<inPropsType>
    deleteTask: (id: string) => void
    filterTask: (value: FilterType) => void
    addTask: (title: string) => void
    filter: string
    checkedBoxStatus: (id: string, value: boolean) => void
}

export type inPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const ToDoList = (props: PropsType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')


    const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(event.currentTarget.value)
    }

    const onClickHandlerAddButton = () => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Вы ничего не ввели')
        }
    }
    const onClickHandlerFilterButton = (value: FilterType) => props.filterTask(value)
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // setError('')
        if (event.key === 'Enter') {
            onClickHandlerAddButton()
        }
    }
    const onClickHandlerDeleteButton = (tID: string) => {
        props.deleteTask(tID)
    }
    const onChangeHandlerInputStatus = (tID: string, value: boolean) => {
        props.checkedBoxStatus(tID, value)
    }


    return (
        <div>
            <h3>{props.title}</h3>
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
                      onClickHandlerDeleteButton={onClickHandlerDeleteButton}
                      onChangeHandlerInputStatus={onChangeHandlerInputStatus}
            />
            <div>
                <button className={props.filter === 'All' ? cl.activeFilterButton : ''}
                        onClick={() => onClickHandlerFilterButton('All')}>All
                </button>
                <button className={props.filter === 'Active' ? cl.activeFilterButton : ''}
                        onClick={() => onClickHandlerFilterButton('Active')}>Active
                </button>
                <button className={props.filter === 'Completed' ? cl.activeFilterButton : ''}
                        onClick={() => onClickHandlerFilterButton('Completed')}>Completed
                </button>
            </div>
        </div>
    )
}
