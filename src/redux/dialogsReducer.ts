import {v1} from "uuid";
import {
    AddMessageActionType,
    AddPostActionType,
    DialogsPage,
    MessagePropsType,
    UpdateTextMessage,
    UpdateTextPost
} from "./store";


const dialogsReducer = (state: DialogsPage, action: AddPostActionType | UpdateTextPost
    | AddMessageActionType | UpdateTextMessage) => {
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

export const addMessageAC = () => ({type: "ADD-MESSAGE"})
export const updateTextMessageAC = (newTextMessage: string) => {
    return {type: "UPDATE-TEXT-MESSAGE", newTextMessage} as const
}

export default dialogsReducer;