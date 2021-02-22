import {Dispatch} from "redux";
import {getAuthMe} from "../auth/authReducer";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    initialized: false,
}

//slice reducer
const slice = createSlice({
    name: "initializedApp",
    initialState,
    reducers: {
        setInitialisedAC(state) {
            state.initialized = !state.initialized
        }
    }
})

const {setInitialisedAC} = slice.actions

export const appReducer = slice.reducer

//Thunk creators
export const setInitialised = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthMe())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialisedAC());
        })
}