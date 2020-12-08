import {AddPostActionType, ProfilePageType, UpdateTextPost} from "./types";
import profileReducer from "./profileReducer";

test("adding new post", () => {
    const state: ProfilePageType = {
        posts: [],
        newPostText: "new text"
    }
    const action: AddPostActionType = {
        type: "ADD-POST"
    }
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].message).toBe( "new text")
})

test("upd text post", () => {
    const state: ProfilePageType = {
        posts: [],
        newPostText: ""
    }
    const action: UpdateTextPost = {
        type: "UPDATE-TEXT-POST",
        newTextPost: "text be updated"
    }
    const newState = profileReducer(state, action)

    expect(newState.newPostText).toBe("text be updated")
})