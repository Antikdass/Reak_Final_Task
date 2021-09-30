import { Modal } from 'antd';
import React from 'react';
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/actionCreators/usersActionCreators";

const DeleteUserModal = ({onClose, visible,id}:any) => {
    const dispatch = useDispatch();
    const onSubmit = () =>{
        dispatch(deleteUser(id))
        onClose()
    }
    return (
        <div>
            <Modal title="Delete User" onCancel={() => onClose()} visible={visible} onOk={onSubmit}>
                <span>Are you sure you want to delete user?</span>
            </Modal>
        </div>
    );
};

export default DeleteUserModal;