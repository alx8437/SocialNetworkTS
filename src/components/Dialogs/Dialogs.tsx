import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/types";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateTextMessage: (newTextMessage: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = () => {
        props.addMessage()
    }

    const updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newTextMessage = e.currentTarget.value
        props.updateTextMessage(newTextMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogWrapper}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
            <div className={styles.sendMessage}>
                <textarea
                    value={props.dialogsPage.newTextMessage}
                    onChange={updateMessageText}
                />
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;
