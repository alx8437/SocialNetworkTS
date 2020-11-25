import {v1} from "uuid";
import {
    AddMessageActionType,
    AddPostActionType,
    PostPropsType,
    ProfilePage,
    StateType,
    UpdateTextMessage,
    UpdateTextPost
} from "./store";



const profileReducer = (state: ProfilePage, action: AddPostActionType | UpdateTextPost
    | AddMessageActionType | UpdateTextMessage) => {
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
    return { type: "ADD-POST"}
}
export const updateTextPostAC = (newTextPost: string) => {
    return {type: "UPDATE-TEXT-POST", newTextPost} as const
}

export default profileReducer;