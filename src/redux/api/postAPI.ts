import instance from "./instance";
import {apiConfig} from "../config/config";

const postAPI = {
    getPosts: (userId:any) =>{
        return instance.get(`${apiConfig.gateway}/posts`,{params:{userId:userId}}).then(({data})=>data)
    }
}

export {postAPI}