import instance from "./instance";
import {apiConfig} from "../config/config";

const userAPI = {
    getUsers: () => {
        return instance.get(`${apiConfig.gateway}/users`).then(({data}) => data)
    },
    getUserById: (id: number) => {
        return instance.get(`${apiConfig.gateway}/users/${id}`).then(({data}) => data)
    }
}

export {userAPI}