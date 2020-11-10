import React from 'react';

export type MessagePropsType = {
    id: number
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}


export default Message;
