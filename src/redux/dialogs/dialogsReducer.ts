import {v1} from "uuid";
import {DialogsPageType, MessagePropsType} from "../types";
import {ACTION_TYPES_DIALOGS, DialogsActionsType} from "./dialogsActions";

const initialState: DialogsPageType = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case ACTION_TYPES_DIALOGS.ADD_MESSAGE:
            const newMessage: MessagePropsType = {
                id: v1(),
                message: state.newTextMessage
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: ''
            }

        case ACTION_TYPES_DIALOGS.UPDATE_TEXT_MESSAGE:
            return  {
                ...state,
                newTextMessage: action.newTextMessage
            }
        default:
            return state
    }
}

export default dialogsReducer;