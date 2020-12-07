import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./usersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type StateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeWithDevTools())

export default store;