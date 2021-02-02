import {UserData} from "../rootStateTypes";
import {Dispatch} from "redux";
import {authApi} from "../../api/api";

export enum ACTIONS_TYPE_AUTH {
    USER_IS_AUTH = "Header/USER_IS_AUTH"
}

export type AuthStateType = {
    data: UserData,
    isAuth: boolean,
}

export type IsAuthActionType = {
    type: ACTIONS_TYPE_AUTH.USER_IS_AUTH,
    data: UserData,
    isAuth: boolean,
}

const initialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
}


export const authReducer = (state: AuthStateType = initialState, action: IsAuthActionType): AuthStateType => {
    switch (action.type) {
        case ACTIONS_TYPE_AUTH.USER_IS_AUTH:
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth,
            }
        default:
            return state
    }
}

//Action creators
export const setUserData = (data: UserData, isAuth: boolean): IsAuthActionType => {
    return {
        type: ACTIONS_TYPE_AUTH.USER_IS_AUTH,
        data,
        isAuth,
    }
};

//Thunks creators
export const authMe = () => {
    return (dispatch: Dispatch<IsAuthActionType>) => {
        authApi.me().then(res => {
            if (res.resultCode === 0) {
                dispatch(setUserData(res.data, true));
            }
        })
    }
}

export const loginMe = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authApi.login(email, password, rememberMe).then(res => {
            if (res.resultCode === 0) {
                dispatch(authMe())
            }
        })

    }
}

export const logOutMe = () => {
    return (dispatch: Dispatch<any>) => {
        authApi.logOut().then(res => {
            if (res.resultCode === 0) {
                const resetUserData: UserData = {
                    login: null,
                    email: null,
                    id: null
                }
                dispatch(setUserData(resetUserData, false))
            }
        })
    }
}