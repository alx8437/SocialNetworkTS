import {AuthStateType} from "../stateTypes";
import {ACTIONS_TYPE_AUTH, IsAuthActionType} from "./authActions";

const initialState = {
    data: {
        userId: null,
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