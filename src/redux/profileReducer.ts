import {v1} from "uuid";
import {ACTypes, PostPropsType, ProfilePage} from "./types";

const  initialState: ProfilePage = {
    posts: [
        {id: v1(), message: "Hello, i like this course", likesCount: 15},
        {id: v1(), message: "It's a nice course, yes!", likesCount: 20},
        {id: v1(), message: "Hi!", likesCount: 2},
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePage = initialState, action: ACTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 3
            };
            state.posts.push(newPost);
            state.newPostText = ""
            return state
        case "UPDATE-TEXT-POST":
            state.newPostText = action.newTextPost;
            debugger
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const updateTextPostAC = (newTextPost: string) => {
    return {type: "UPDATE-TEXT-POST", newTextPost} as const
}

export default profileReducer;