import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchComment} from "../../redux/actionCreators/commentActionCreator";
import Comments from "../comments/comments";
import './post.scss'


const Posts = () => {

    const {posts} = useSelector((state: any) => state.posts)
    const dispatch = useDispatch();

    const getComment = (id:any) =>{
        dispatch(fetchComment(id))
    }

    useEffect(() => {
        console.log(posts)
    },[posts])

    return (
        <div>
            {
                posts.map((post: any) => (
                    <div className={'post-block'} key={post.id}>
                        <div className={'post-info'}>Id: {post.id}</div>
                        <div className={'post-info'}>Title: {post.title}</div>
                        <div className={'post-info'}>Body: {post.body}</div>
                        <button className={'comment-button'} onClick={()=>getComment(post.id)}>Get comments</button>
                        <Comments post={post}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;