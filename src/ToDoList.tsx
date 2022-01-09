import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType} from "./App";

type PropsType={
    title:string
    tasks:Array<inPropsType>
    deleteTask:(id:string)=>void
    filterTask:(value:FilterType)=>void
    addTask:(title:string)=>void
}

type inPropsType={
    id: string
    title: string
    isDone: boolean
}

export const ToDoList = (props:PropsType) => {

    const[title, setTitle] = useState('')

    const onChangeHandlerInput = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandlerAddButton = ()=>{
        props.addTask(title)
        setTitle('')
    }
    const onClickHandlerFilterButton = (value:FilterType)=>props.filterTask(value)
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            onClickHandlerAddButton()
        }
    }
    const onClickHandlerDeleteButton = (tID:string) =>{
            props.deleteTask(tID)
    }

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandlerInput} onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickHandlerAddButton}>+</button>
            </div>
            <ul>
                {props.tasks.map(t=><li key={t.id}>
                    <button onClick={()=>onClickHandlerDeleteButton(t.id)}>x</button>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span></li>)}
            </ul>
            <div>
                <button onClick={()=>onClickHandlerFilterButton('All')}>All</button>
                <button onClick={()=>onClickHandlerFilterButton('Active')}>Active</button>
                <button onClick={()=>onClickHandlerFilterButton('Completed')}>Completed</button>
            </div>
        </div>
    )
}
