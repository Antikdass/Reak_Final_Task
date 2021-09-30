import React, {useState} from 'react';
import {useHistory} from 'react-router';
import AddUserModal from "../../../modals/addUserModals/addUserModal";
import './user.scss';
import DeleteUserModal from "../../../modals/deleteUserModal/deleteUserModal";
import classnames from 'classnames';

const User = ({user}: any) => {
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const history = useHistory();

    const goToUser = (id: number) => {
        history.push(`/users/${id}`)
    }

    return (
        <div className={classnames({'user-block': true, 'user-add-block': user.isAdd})} key={user.id}>
            <div className={'info'}>Name:</div>
            <div className={'user-info'}>{user.firstName} {user.lastName}</div>
            <div className={'info'}>Website:</div>
            <div className={'user-info'}>{user.website}</div>
            <div className={'info'}>Company:</div>
            <div className={'user-info'}>{user.company}</div>
            <div className={'button-block'}>
            <button onClick={() => goToUser(user.id)} className={'button'}>More info</button>
            {
                user.isAdd ?
                    <div>
                        <button className={'button'} onClick={() => setOpenEdit(true)}>Edit</button>
                        <button className={'button'} onClick={() => setOpenDelete(true)}>Delete</button>

                    </div> : null
            }
            </div>
            <AddUserModal onClose={() => setOpenEdit(false)} visible={openEdit} user={user}/>
            <DeleteUserModal onClose={() => setOpenDelete(false)} visible={openDelete} id={user.id}/>
        </div>
    );
};

export default User;