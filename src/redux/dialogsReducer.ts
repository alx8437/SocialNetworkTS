import {v1} from "uuid";
import {ACTypes, DialogsPage, MessagePropsType} from "./types";

const initialState: DialogsPage = {
    dialogs: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Victor"},
        {id: v1(), name: "Georgy"}
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "I learn React!"},
        {id: v1(), message: "I am too"},
        {id: v1(), message: "It's grate!"},
    ],
    newTextMessage: ""
}

const dialogsReducer = (state: DialogsPage = initialState, action: ACTypes) => {
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

export const addMessageAC = () => ({type: "ADD-MESSAGE"} as const)
export const updateTextMessageAC = (newTextMessage: string) => {
    return {type: "UPDATE-TEXT-MESSAGE", newTextMessage} as const
}

export default dialogsReducer;