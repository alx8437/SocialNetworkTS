import React from 'react';
import {NavLink} from 'react-router-dom';
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

export default DialogItem;
