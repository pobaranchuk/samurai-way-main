import axios from "axios";
import {UserProfileType} from "../redux/profile-reducer";


const instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true
    }
);

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string){
        return instance.get<UserProfileType>(`profile/${userId}`)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}