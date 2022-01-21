import cl from "./ToDoList.module.css";
import React from "react";
import {inPropsType} from "./ToDoList";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

type PropsType={
    tasks:inPropsType[]
    idTasks:string
    onClickHandlerDeleteButton:(idTasks:string,id:string)=>void
    onChangeHandlerInputStatus:(todoListID: string, id:string, event:boolean)=>void
    updateTask:(id:string,title:string)=>void
}

export const MapTasks=(props:PropsType)=>{

    const callBackHandler =(id:string, title:string) => {
        props.updateTask(id,title)
    }

    const onClickHandler = (taskID:string) => {
        props.onClickHandlerDeleteButton(props.idTasks, taskID)
    }

    return(
        <ul>
            {props.tasks.map(t=>{
                return(
                    <li key={t.id} className={t.isDone? cl.isDone : ''}>
                        {/*<button onClick={()=>onClickHandler(t.id)}>x</button>*/}
                        <input type="checkbox" checked={t.isDone}
                               onChange={(event)=>props.onChangeHandlerInputStatus(props.idTasks, t.id, event.currentTarget.checked)} />
                        <EditableSpan title={t.title} callBack={(title)=>callBackHandler(t.id, title)}/>
                        <IconButton onClick={()=>onClickHandler(t.id)}><Delete/></IconButton>
                    </li>
                )
            })}
        </ul>
    )
}
