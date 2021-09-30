import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router';
import {fetchUsers} from "../../redux/actionCreators/usersActionCreators";
import './users.scss'
import User from '../users/user/user'
import AddUserModal from "../../modals/addUserModals/addUserModal";


const Users = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false)
    const [data, setData] = useState(null)

    const history = useHistory()
    const {users} = useSelector((state: any) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className={'main-block'}>
            <button className={'add-button'} onClick={() => setOpen(true)}>Add user</button>
            {
                users.map((user: any) => <User user={user}/>)
            }
            <AddUserModal onClose={() => setOpen(false)} visible={open}/>
        </div>
    );
};

export default Users;