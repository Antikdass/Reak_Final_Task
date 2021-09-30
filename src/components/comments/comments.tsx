import React from 'react';
import './comment.scss'

const Comments = ({post}:any) => {
    return (
        <div className={'comment-main-block'}>
            {
                post.comments.map((value:any)=>(
                    <div className={'comment-block'} key={value.id}>
                        <div className={'comment-info'}>Id: {value.id}</div>
                        <div className={'comment-info'}>Name: {value.firstName} {value.lastName}</div>
                        <div className={'comment-info'}>Body: {value.body}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Comments;