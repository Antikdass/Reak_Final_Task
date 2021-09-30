import {
    GET_COMMENT,
    GET_POSTS,

} from '../actionTypes/postsTypes'

const initialState = {
    posts: [],
}

export const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_POSTS : {
            return {
                ...state,
                posts: action.payload
            }
        }
        case GET_COMMENT:{
            const posts = [...state.posts]
            const postsWithComments = posts.map((value:any) =>{
                if (value.id === action.payload.postId){
                    value.comments = action.payload.comments
                }
                return value
            } )
            return {
            ...state,
              posts: postsWithComments
            }
        }
        default:
            return state;
    }
}