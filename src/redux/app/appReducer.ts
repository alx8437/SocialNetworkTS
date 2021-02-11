//Action type types
import {Dispatch} from "redux";
import {getAuthMe} from "../auth/authReducer";

enum ACTIONS_TYPE {
    SET_INITIALIZED = "SET_INITIALIZED"
}

//Action creator types
type SetInitialisedActionType = {
    type: ACTIONS_TYPE.SET_INITIALIZED,
}

type AllActionsType = SetInitialisedActionType

//Reducer type
export type AppStateType = {
    initialized: boolean,
}


//Reducer
const initialState = {
    initialized: false,
}

export const appReducer = (state: AppStateType = initialState, action: AllActionsType): AppStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}

//Action creators
const setInitialisedAC = (): SetInitialisedActionType => {
    return {
        type: ACTIONS_TYPE.SET_INITIALIZED,
    }
}

//Thunk creators
export const setInitialised = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthMe())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialisedAC());
        })
}