import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type StateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools())

export default store;