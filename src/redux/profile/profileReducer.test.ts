import {ProfileReducerType} from "../stateTypes";
import profileReducer from "./profileReducer";
import {ACTIONS_TYPE_PROFILE, AddPostActionType, UpdateTextPost} from "./profileActions";

let startState: ProfileReducerType = {
    posts: [],
    newPostText: ""
}

beforeEach(() => {
    startState = {
        posts: [],
        newPostText: "new post"
    }
});

test("adding new post", () => {

    const action: AddPostActionType = {
        type: ACTIONS_TYPE_PROFILE.ADD_POST
    }
    const newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].message).toBe( "new post")
})

test("upd text post", () => {

    const action: UpdateTextPost = {
        type: ACTIONS_TYPE_PROFILE.UPDATE_TEXT_POST,
        newTextPost: "text post be updated"
    }
    const newState = profileReducer(startState, action)

    expect(newState.newPostText).toBe("text post be updated")
})