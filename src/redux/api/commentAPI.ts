import instance from "./instance";
import {apiConfig} from "../config/config";

const commentAPI = {
    getComments: (postId:any) => {
        return instance.get(`${apiConfig.gateway}/comments`,{params:{postId:postId}}).then(({data}) => data)
    }
}

export {commentAPI}