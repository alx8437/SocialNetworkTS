import axios from "axios";
import {ProfileType, UserType} from "../redux/stateTypes";

export type GetUsersResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: null,
}

type FollowingUsersPostResponseType = {
    resultCode: number
}

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const userApi = {
    getUser(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    unFollowUser(userId: number) {
        return instance.delete<FollowingUsersPostResponseType>(`follow/${userId}`)
            .then(res => res.data);
    },
    followUser(userId: number) {
        return instance.post<FollowingUsersPostResponseType>(`follow/${userId}`, {})
            .then(res => res.data);
    }
}
export const profileApi = {
    getProfile(userId: number | string) {
        return  instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data);
    }
}