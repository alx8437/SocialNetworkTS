import {ProfileStateType} from "../rootStateTypes";
import profileReducer, {ACTIONS_TYPE_PROFILE, AddPostActionType} from "./profileReducer";


let initialState: ProfileStateType;

beforeEach(() => {
    initialState = {
        posts: [],
        status: '',
        profile: null
    }
})

test('correct add post', () => {
    const action: AddPostActionType = {
        type: ACTIONS_TYPE_PROFILE.ADD_POST,
        newPostMessage: "hey"
    }

    const endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(1)
})



