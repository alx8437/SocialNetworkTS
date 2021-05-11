import {AuthStateType, UserData} from "../rootStateTypes";
import {Dispatch} from "redux";
import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthStateType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<{ data: UserData, isAuth: boolean }>) {
            state.data = action.payload.data
            state.isAuth = action.payload.isAuth
        },
    }
})

export const {setUserData} = slice.actions
export default slice.reducer

//Thunk creators
export const getAuthMe = () => async (dispatch: Dispatch) => {
    const res = await authApi.me()
    if (res.resultCode === 0) {
        dispatch(setUserData({data: res.data, isAuth: true}));
    }
}

export const loginMe = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authApi.login(email, password, rememberMe).then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuthMe())
            } else {
                const message = res.messages.length > 0 ? res.messages[0] : "some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        })

    }
}

export const logOutMe = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await authApi.logOut()
        if (res.resultCode === 0) {
            const resetUserData: UserData = {
                login: null,
                email: null,
                id: null
            }
            dispatch(setUserData({data: resetUserData, isAuth: false}))
        }
    } catch (e) {
        console.log(e)
    }
}

