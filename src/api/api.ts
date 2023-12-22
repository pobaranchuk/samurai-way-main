import axios from "axios";


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
    }
}