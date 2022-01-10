import cl from "./ToDoList.module.css";
import React from "react";
import {inPropsType} from "./ToDoList";

type PropsType={
    tasks:inPropsType[]
    onClickHandlerDeleteButton:(id:string)=>void
    onChangeHandlerInputStatus:(id:string, event:boolean)=>void

}

export const MapTasks=(props:PropsType)=>{
    return(
        <ul>
            {props.tasks.map(t=>{
                return(
                    <li key={t.id} className={t.isDone? cl.isDone : ''}>
                        <button onClick={()=>props.onClickHandlerDeleteButton(t.id)}>x</button>
                        <input type="checkbox" checked={t.isDone}
                               onChange={(event)=>props.onChangeHandlerInputStatus(t.id, event.currentTarget.checked)} />
                        <span>{t.title}</span></li>
                )
            })}
        </ul>
    )
}