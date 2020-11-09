import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'

export type DialogItemPropsType = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemPropsType) => {
    const path = `/dialogs/${props.id}`

    return (
        <div>
                <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    const dialogData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Georgy"}
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogWrapper}>
                <div>
                    <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                    <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                    <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                    <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                    <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>

                </div>
                <div>
                    <Message message="Hi"/>
                    <Message message="How are you?"/>
                    <Message message="I learn React!"/>
                    <Message message="I am too"/>
                    <Message message="It's greate!"/>
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
