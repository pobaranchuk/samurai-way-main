import axios from "axios";
import {UserProfileType} from "../redux/profile-reducer";

const instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true
    }
);

export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number){
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status})
    }
}




export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}