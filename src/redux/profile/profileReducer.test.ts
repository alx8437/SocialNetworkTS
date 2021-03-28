import {ProfileStateType} from "../rootStateTypes";
import profileReducer, {ACTIONS_TYPE_PROFILE, AddPostActionType, DeletePostActionType} from "./profileReducer";


let initialState = <ProfileStateType>{};


beforeEach(() => {
    initialState = {
        posts: [
            {id: "1", message: "Hello, i like this course", likesCount: 15},
            {id: "2", message: "It's a nice course, yes!", likesCount: 20},
        ],
        status: '',
        profile: null
    }
})

test('new post should be added', () => {
    // 1. Test data
    const action: AddPostActionType = {
        type: ACTIONS_TYPE_PROFILE.ADD_POST,
        newPostMessage: "hey"
    }

    // 2. Action
    const endState = profileReducer(initialState, action)

    // 3. expectation
    expect(endState.posts.length).toBe(3)
})

test('message of new post should be "it-incubator-the-best"', () => {
    // 1. Test data

    const action: AddPostActionType = {
        type: ACTIONS_TYPE_PROFILE.ADD_POST,
        newPostMessage: "it-incubator-the-best"
    }
    // 2. Action

    const endState = profileReducer(initialState, action)

    //3. Expectation
    expect(endState.posts[2].message === 'it-incubator-the-best').toBe(true)

})

test("after deleting length of posts should be decrement", () => {
    // 1. Test data
    let action: DeletePostActionType = {type: ACTIONS_TYPE_PROFILE.DELETE_POST, postId: "2"}

    // 2. Action
    const endState = profileReducer(initialState, action)

    // 3. Expectation
    expect(endState.posts.length).toBe(1)
})




