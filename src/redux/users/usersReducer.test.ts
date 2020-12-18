import {
    ACTIONS_TYPE_USERS,
    ChangeCurrentPageActionType,
    FollowActionType,
    SetTotalCountPagesActionType,
    SetUsersActionType,
    UnfollowActionType
} from "./usersActions";
import usersReducer from "./usersReducer";
import {UsersReducerType} from "../stateTypes";

let startState: UsersReducerType = {
    users: [],
    currentPage: 1,
    totalCount: 4222,
    pageSize: 4
};

beforeEach(() => {
    startState = {
        ...startState,
        users: [
            {
                id: 1123,
                name: "name",
                followed: false,
                status: "status",
                photos: {
                    small: "url1",
                    large: "url2",
                },
            }
        ],
    }
})

test("user should be followed", () => {
    const action: FollowActionType = {
        type: ACTIONS_TYPE_USERS.FOLLOW,
        userId: 1123,
    }

    const newState = usersReducer(startState, action)

    expect(newState.users[0].followed).toBe(true);
});

test("user should be unfollowed", () => {

    const state = {
        ...startState,
        users: [
            {
                ...startState.users[0],
                followed: true
            }
        ]
    }
    const action: UnfollowActionType = {
        type: ACTIONS_TYPE_USERS.UNFOLLOW,
        userId: 1123,
    }

    const newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(false);
});

test("set users in state", () => {
    const state = {...startState, users: []};

    const action: SetUsersActionType = {
        type: ACTIONS_TYPE_USERS.SET_USERS,
        users: [
            {
                id: 1123,
                name: "John",
                followed: false,
                status: "status",
                photos: {
                    small: "url1",
                    large: "url2",
                },
            },
            {
                id: 1124,
                name: "Bill",
                followed: true,
                status: "status",
                photos: {
                    small: "url1",
                    large: "url2",
                },
            }
        ],
    }
    const newState = usersReducer(state, action);

    expect(newState.users.length).toBe(2);
    expect(newState.users[1].name).toBe("Bill")
});

test("change current page", () => {
    const action: ChangeCurrentPageActionType = {
        type: ACTIONS_TYPE_USERS.CHANGE_CURRENT_PAGE,
        currentPage: 22,
    }
   const newState = usersReducer(startState, action);

    expect(newState.currentPage).toBe(22);
});

test("change totalCount page", () => {
    const action: SetTotalCountPagesActionType = {
        type: ACTIONS_TYPE_USERS.SET_TOTAL_COUNT_PAGES,
        totalCount: 7456,
    }
    const newState = usersReducer(startState, action);

    expect(newState.totalCount).toBe(7456);
});


