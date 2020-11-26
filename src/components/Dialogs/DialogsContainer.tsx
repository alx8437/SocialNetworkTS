import React from 'react';
import {DialogsPage} from "../../redux/store";
import {addMessageAC, updateTextMessageAC} from "../../redux/dialogsReducer";
import {ActionTypes} from '../../redux/actionTypes';
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    dialogsPage: DialogsPage
    dispatch: (action: ActionTypes) => void
}

const DialogsContainer = (props: DialogsPropsType) => {

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    const updateTextMessage = (newTextMessage: string) => {
        props.dispatch(updateTextMessageAC(newTextMessage))
    }

    return <Dialogs dialogsPage={props.dialogsPage} updateTextMessage={updateTextMessage} addMessage={addMessage}/>
}

export default DialogsContainer;
