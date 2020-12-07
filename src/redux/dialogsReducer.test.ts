import {AddMessageActionType, DialogsPageType, UpdateTextMessage} from "./types";
import dialogsReducer from "./dialogsReducer";


test("add message test", () => {
    const state: DialogsPageType = {
        dialogs: [],
        messages: [],
        newTextMessage: 'test message'
    }

    const action: AddMessageActionType = {
        type: "ADD-MESSAGE"
    }

    const newState = dialogsReducer(state, action)

    expect(newState.messages.length).toBe(1)
    expect(newState.messages[0].message).toBe('test message')
})

test("update text message", () => {
    const state: DialogsPageType = {
        dialogs: [],
        messages: [],
        newTextMessage: ''
    }

    const action: UpdateTextMessage = {
        type: "UPDATE-TEXT-MESSAGE",
        newTextMessage: "new text"
    }

    const newState = dialogsReducer(state, action)
    expect(newState.newTextMessage).toBe('new text')
})