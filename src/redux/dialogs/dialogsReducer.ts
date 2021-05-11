import {v1} from "uuid";
import {DialogsStateType, MessagePropsType} from "../rootStateTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
}

const slice = createSlice({
    name: "dialogs",
    initialState,
    reducers: {
        addMessageAC(state, action: PayloadAction<{newTextMessage: string}>) {
            const newMessage: MessagePropsType = {
                id: v1(),
                message: action.payload.newTextMessage
            }
            state.messages.push(newMessage)
        }
    }
})

export const {addMessageAC} = slice.actions
export default slice.reducer

