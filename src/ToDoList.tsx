import React from "react";

type PropsType = {
    title: string
    tasks: Array<inPropsType>
}

type inPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const ToDoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {props.tasks.map(t => <li><input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span></li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}