import {v1} from "uuid";
import {ActionTypes, PostPropsType, StateType} from "./store";

type StateProfileReducer = {
    posts: Array<PostPropsType>
    newPostText: string
}


const profileReducer = (state: StateProfileReducer, action: ActionTypes) => {
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

export default profileReducer;