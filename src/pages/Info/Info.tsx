import React, {useEffect} from 'react';
import './info.scss'
import Img from '../../assets/img/icon.jpg'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router';
import {fetchUser, setUser} from "../../redux/actionCreators/usersActionCreators";
import {fetchPosts} from "../../redux/actionCreators/postsActionCreators";
import Posts from "../../components/posts/posts";

const Info = () => {
    const {currentUser, users} = useSelector((state: any) => state.users)
    const history = useHistory()
    const dispatch = useDispatch();
    const getUserPost = () =>{
        dispatch(fetchPosts(currentUser.id))
    }

    useEffect(() => {
        console.log(currentUser)
        const str = history.location.pathname;
        const id: any = str.split('/').pop();
        if (users.length) {
            const user = users.find((value: any) => value.id === +id)
            dispatch(setUser(user))
        }else {
            dispatch(fetchUser(id))
        }
    }, [])
    return (
        <div className={'info-block'}>
            <img className={'img'} src={Img} alt=""/>
            <div className={'block-info'}>
                <div>Name:{currentUser.firstName} {currentUser.lastName}</div>
                <div>Website:{currentUser.website}</div>
                <div>Company: {currentUser.company}</div>
            </div>
            <button className={'info-button'} disabled={currentUser.isAdd} onClick={getUserPost}>Open posts</button>
            <Posts/>
        </div>
    );
};

export default Info;