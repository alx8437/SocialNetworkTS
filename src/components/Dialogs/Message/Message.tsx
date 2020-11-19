import React from 'react';
import {MessagePropsType} from "../../../redux/store";



const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}


export default Message;
