import { IconButton, TextField} from "@material-ui/core";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {AddBox} from "@material-ui/icons";

type InputAddTaskPropsType = {
    callBack: (title: string) => void
}
export const InputAddTask = (props: InputAddTaskPropsType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(event.currentTarget.value)
    }
    const onClickHandlerAddButton = () => {
        if (title.trim() !== '') {
            props.callBack(title)
            setTitle('')
        } else {
            setError('Вы ничего не ввели')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickHandlerAddButton()
        }
    }

    return (
        <div>
            {/*<input value={title}*/}
            {/*       onChange={onChangeHandlerInput}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? cl.error : ''}*/}
            {/*/>*/}
            <TextField variant={'outlined'}
                       size={"small"}
                       value={title}
                       onChange={onChangeHandlerInput}
                       onKeyPress={onKeyPressHandler}
                       error={!!error}
                       label={'Введите значение'}
                       helperText={error}

            />

            {/*<button onClick={onClickHandlerAddButton}>+</button>*/}
            {/*{error && <div className={cl.errorMessage}>{error}</div>}*/}

            {/*<Button variant={'contained'} color={'primary'} onClick={onClickHandlerAddButton}>+</Button>*/}

            <IconButton color={'primary'} onClick={onClickHandlerAddButton}>
                <AddBox/>
            </IconButton>
        </div>
    )
}