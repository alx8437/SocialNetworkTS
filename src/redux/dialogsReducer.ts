import {v1} from "uuid";
import {ActionTypes, DialogItemPropsType, MessagePropsType, StateType} from "./store";

type StateDialogsReducer = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newTextMessage: string
}


const dialogsReducer = (state: StateDialogsReducer, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagePropsType = {
                id: v1(),
                message: state.newTextMessage
            };
            state.messages.push(newMessage);
            state.newTextMessage = "";
            return state
        case "UPDATE-TEXT-MESSAGE":
            state.newTextMessage = action.newTextMessage;
            return state
        default:
            return state
    }

}

export default dialogsReducer;