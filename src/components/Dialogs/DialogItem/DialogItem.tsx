import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.css'
import {DialogItemPropsType} from "../../../redux/state";




const DialogItem = (props: DialogItemPropsType) => {
    const path = `/dialogs/${props.id}`

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
