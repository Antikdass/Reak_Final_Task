import {postAPI} from "../api/postAPI";
import {getComments, getPosts} from "./postsActionCreators";
import {commentAPI} from "../api/commentAPI";



export const fetchComment = (postId:any) => async (dispatch:any)=>{
    try {
        const comments = await commentAPI.getComments(postId)
        dispatch(getComments({comments,postId}))
    } catch (e) {
        console.log(e, 'EEEEEEE')
    }
};