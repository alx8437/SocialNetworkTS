import {v1} from "uuid";
import {DialogsStateType, MessagePropsType} from "../rootStateTypes";

export enum ACTION_TYPES_DIALOGS {
    ADD_MESSAGE = "Dialogs/ADD_MESSAGE",
    UPDATE_TEXT_MESSAGE = "Dialogs/UPDATE_TEXT_MESSAGE",
}

export type AddMessageActionType = {
    type: ACTION_TYPES_DIALOGS.ADD_MESSAGE,
}

export type UpdateTextMessageActionType = {
    type: ACTION_TYPES_DIALOGS.UPDATE_TEXT_MESSAGE,
    newTextMessage: string,
}


const initialState: DialogsStateType = {
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

const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionsType): DialogsStateType => {
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

export const addMessageAC = () => ({type: ACTION_TYPES_DIALOGS.ADD_MESSAGE} as const)
export const updateTextMessageAC = (newTextMessage: string) => {
    return {type: ACTION_TYPES_DIALOGS.UPDATE_TEXT_MESSAGE, newTextMessage} as const
}



export type DialogsActionsType = AddMessageActionType | UpdateTextMessageActionType

export default dialogsReducer;