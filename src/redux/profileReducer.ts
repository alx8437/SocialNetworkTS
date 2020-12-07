import {v1} from "uuid";
import {ACTypes, PostPropsType, ProfilePageType} from "./types";

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ACTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
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
        case "UPDATE-TEXT-POST":
            return {
                ...state,
                newPostText: action.newTextPost
            }
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const updateTextPostAC = (newTextPost: string) => ({type: "UPDATE-TEXT-POST", newTextPost} as const)


export default profileReducer;