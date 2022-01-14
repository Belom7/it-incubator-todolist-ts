import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpanPropsType = {
    title:string
    callBack:(title:string)=>void
}

export const EditableSpan:React.FC<EditableSpanPropsType> = (props) => {

    const [title,setTitle] = useState(props.title)
    const[edit, setEdit] = useState(false)

    const onDoubleClickHandler = () => {
        setEdit(true)
    }
    const onBlurHandler = () => {
        setEdit(false)
        props.callBack(title)
    }

    const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // setError('')
        if (event.key === 'Enter') {
            onBlurHandler()
        }
    }

    return (
            edit
                ?<input value={title} onBlur={onBlurHandler} autoFocus onChange={onChangeHandlerInput} onKeyPress={onKeyPressHandler}/>
                :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

    );
};
