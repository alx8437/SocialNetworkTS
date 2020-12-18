import {combineReducers, createStore} from "redux";
import profileReducer from "./profile/profileReducer";
import dialogsReducer from "./dialogs/dialogsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users/usersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type StateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeWithDevTools())

export default store;