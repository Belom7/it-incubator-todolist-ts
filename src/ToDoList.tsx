import React from "react";
import {filterType} from "./App";

type PropsType={
    title:string
    tasks:Array<inPropsType>
    deleteTask:(id:number)=>void
    filterTask:(value:filterType)=>void
}

type inPropsType={
    id: number
    title: string
    isDone: boolean
}

export const ToDoList = (props:PropsType) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t=><li key={t.id}><button onClick={()=>props.deleteTask(t.id)}>x</button><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>)}
            </ul>
            <div>
                <button onClick={()=>props.filterTask('All')}>All</button>
                <button onClick={()=>props.filterTask('Active')}>Active</button>
                <button onClick={()=>props.filterTask('Completed')}>Completed</button>
            </div>
        </div>
    )
}
