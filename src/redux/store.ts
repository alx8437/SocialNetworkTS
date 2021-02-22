import {combineReducers} from "redux";
import profileReducer from "./profile/profileReducer";
import dialogsReducer from "./dialogs/dialogsReducer";
import usersReducer from "./users/usersReducer";
import {authReducer} from "./auth/authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app/appReducer";
import {configureStore} from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export default store;