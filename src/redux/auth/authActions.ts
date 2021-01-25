import {UserData} from "../rootStateTypes";
import {Dispatch} from "redux";
import {authApi} from "../../api/api";

export enum ACTIONS_TYPE_AUTH {
    USER_IS_AUTH = "Header/USER_IS_AUTH"
}

export type IsAuthActionType = {
    type: ACTIONS_TYPE_AUTH.USER_IS_AUTH,
    data: UserData,
    isAuth: boolean,
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