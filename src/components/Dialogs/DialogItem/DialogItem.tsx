import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogItemPropsType} from '../../../redux/stateTypes';


const DialogItem = (props: DialogItemPropsType) => {
    const path = `/dialogs/${props.id}`

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
