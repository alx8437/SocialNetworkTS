import dialogsReducer from "./dialogsReducer";
import {ACTION_TYPES_DIALOGS, AddMessageActionType, UpdateTextMessage} from "./dialogsActions";
import {DialogsReducerType} from "../stateTypes";


let startState: DialogsReducerType = {
    dialogs: [],
    messages: [],
    newTextMessage: '',
};

beforeEach(() => {
    startState = {
        ...startState,
        newTextMessage: 'test message'
    }
});

test("add message test", () => {

    const action: AddMessageActionType = {
        type: ACTION_TYPES_DIALOGS.ADD_MESSAGE
    }

    const newState = dialogsReducer(startState, action)

    expect(newState.messages.length).toBe(1)
    expect(newState.messages[0].message).toBe('test message')
})

test("update text message", () => {

    const action: UpdateTextMessage = {
        type: ACTION_TYPES_DIALOGS.UPDATE_TEXT_MESSAGE,
        newTextMessage: "new text"
    }

    const newState = dialogsReducer(startState, action)
    expect(newState.newTextMessage).toBe('new text')
})