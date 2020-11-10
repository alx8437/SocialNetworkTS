import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    dialogsElements: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsElements.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

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
                    value="Hi"
                    placeholder="enter your message"
                />
                <button>send</button>
            </div>
        </div>
    )
}

export default Dialogs;
