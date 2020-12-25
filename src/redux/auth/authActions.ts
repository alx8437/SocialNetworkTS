import {UserData} from "../stateTypes";

export enum ACTIONS_TYPE_AUTH {
    USER_IS_AUTH = "Header/USER_IS_AUTH"
}

export type IsAuthActionType = {
    type: ACTIONS_TYPE_AUTH.USER_IS_AUTH,
    data: UserData,
    isAuth: boolean,
}

export const setUserData = (data: UserData, isAuth: boolean): IsAuthActionType => {
   return {
       type: ACTIONS_TYPE_AUTH.USER_IS_AUTH,
       data,
       isAuth,
   }
};