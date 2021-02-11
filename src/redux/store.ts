import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile/profileReducer";
import dialogsReducer from "./dialogs/dialogsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import usersReducer from "./users/usersReducer";
import {authReducer} from "./auth/authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app/appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})


export type RootStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;