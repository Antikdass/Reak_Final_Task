import {
    GET_COMMENT,
    GET_POSTS
} from '../actionTypes/postsTypes'
import {postAPI} from "../api/postAPI";

export const getPosts = (payload: any) => ({type: GET_POSTS, payload});
export const getComments = (payload: any) => ({type: GET_COMMENT, payload})

export const fetchPosts = (userId: any) => async (dispatch: any) => {
    try {
        const posts = await postAPI.getPosts(userId)
        const postMap = posts.map((value:any)=>{
            value.comments =[]
            return value
        })
        dispatch(getPosts(postMap))
    } catch (e) {
        console.log(e, 'EEEEEEE')
    }
};