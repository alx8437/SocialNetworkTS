import dialogsReducer, {ACTION_TYPES_DIALOGS, AddMessageActionType} from "./dialogsReducer";
import {DialogsStateType} from "../rootStateTypes";


let startState: DialogsStateType = {
    dialogs: [],
    messages: [],
};

beforeEach(() => {
    startState = {
        ...startState,
    }
});

test("add message test", () => {

    const action: AddMessageActionType = {
        type: ACTION_TYPES_DIALOGS.ADD_MESSAGE,
        newTextMessage: 'test message'
    }

    const newState = dialogsReducer(startState, action)

    expect(newState.messages.length).toBe(1)
    expect(newState.messages[0].message).toBe('test message')
})

