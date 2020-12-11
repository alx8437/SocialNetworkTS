import {ACTypes, User, UserPageType} from "./types";

const initialState: UserPageType = {
    users: []
}


const usersReducer = (state: UserPageType = initialState, action: ACTypes): UserPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    (u.id === action.userId) ? {...u, followed: true} : u
                )
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    (u.id === action.userId) ? {...u, followed: false} : u
                )
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: "FOLLOW", userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: "UNFOLLOW", userId} as const
}
export const setUsersAC = (users: Array<User>) => {
    return {type: "SET-USERS", users} as const
}

export default usersReducer;

