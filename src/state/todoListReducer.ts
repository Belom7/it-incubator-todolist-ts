import {FilterType, TodoListType} from "../App";
import {v1} from "uuid";

export const todoListReducer = (state:Array<TodoListType>, action:defaultType): Array<TodoListType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' : {
            return state.filter(f=>f.id !== action.payload.id)
        }
        case 'ADD-TODOLIST' : {
            let newId = v1()
            let newList: TodoListType = {id: newId, title: action.payload.title, filter: "All"}
            return [...state, newList]
        }
        case "CHANGE-TODOLIST-TITLE":{
            return state.map(m=>m.id===action.payload.id? {...m, title: action.payload.title} : m)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(m=>m.id===action.payload.id? {...m, filter: action.payload.filter} : m)
        }

        default: return state
    }
}

type defaultType = removeTodolistACType | addTodoListACType | changeTodolistTitleACType | changeTodolistFilterACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>
type addTodoListACType = ReturnType<typeof addTodoListAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

export const removeTodolistAC = (id:string) => {
    return {
        type : 'REMOVE-TODOLIST',
        payload : {
            id
        }
    } as const
}

export const addTodoListAC = (title:string) => {
    return {
        type : 'ADD-TODOLIST',
        payload : {
            title
        }
    } as const
}

export const changeTodolistTitleAC = (todolistId2:string, newTodolistTitle:string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: todolistId2,
            title: newTodolistTitle
        }
    } as const
}

export const changeTodolistFilterAC = (todolistId2:string, newFilter:FilterType) => {
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId2,
            filter: newFilter
        }
    } as const
}