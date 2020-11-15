import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPage} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPage
    addMessage: (messageText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const newTextMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        const messageText = newTextMessage.current?.value
        if (messageText) {
            props.addMessage(messageText)
        }
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
                    placeholder="Enter your message"
                    ref={newTextMessage}
                />
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;
