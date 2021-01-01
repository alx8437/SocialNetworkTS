import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile/profileReducer";
import dialogsReducer from "./dialogs/dialogsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users/usersReducer";
import {authReducer} from "./auth/authReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})


export type StateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;