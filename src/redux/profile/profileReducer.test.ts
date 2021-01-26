import {ProfileStateType} from "../rootStateTypes";
import profileReducer, {
    ACTIONS_TYPE_PROFILE,
    AddPostActionType,
    SetUserProfileType,
    UpdateTextPost
} from "./profileReducer";

let startState: ProfileStateType = {
    profile: null,
    posts: [],
    newPostText: "",
    status: "",
}

beforeEach(() => {
    startState = {
        profile: null,
        posts: [],
        newPostText: "new post",
        status: "",
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

test("add new user", () => {
    const action: SetUserProfileType = {
        type: ACTIONS_TYPE_PROFILE.SET_USER_PROFILE,
        profile: {
            aboutMe: "",
            contacts: {
                facebook: "facebook.com",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: "github.com",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "",
            fullName: "Alex",
            userId: 8427,
            photos: {
                small: "",
                large: ""
            }
        }
    }
    const newState = profileReducer(startState, action);

    expect(newState.profile?.fullName).toBe("Alex");
    expect(newState.profile?.userId).toBe(8427);
})