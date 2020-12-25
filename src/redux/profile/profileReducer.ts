import {v1} from "uuid";
import {PostPropsType, ProfileStateType} from "../stateTypes";
import {ACTIONS_TYPE_PROFILE, ProfileActionsType} from "./profileActions";

const initialState: ProfileStateType = {
    profile: null,
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case ACTIONS_TYPE_PROFILE.ADD_POST:
            const newPost: PostPropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 3
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST:
            return {
                ...state,
                newPostText: action.newTextPost
            }
        case ACTIONS_TYPE_PROFILE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export default profileReducer;