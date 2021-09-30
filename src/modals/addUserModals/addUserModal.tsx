import { Drawer } from 'antd';
import {ErrorMessage, Field, Form, Formik } from 'formik';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, editUser} from './../../redux/actionCreators/usersActionCreators';
import './add-modal.scss'

const AddUserModal = ({onClose,visible,user}:any) => {

    const [data,setData] = useState<any>({
        firstName:'',
        lastName:'',
        email:'',
        company:'',
        website:'',
    })
    const dispatch = useDispatch();
    const {users} = useSelector((user:any)=>user.users)
    const onSubmit = (values:any,{setSubmitting}:any)=>{
        if (!user){
            const userModel = {id:users[users.length-1].id+1,...values,isAdd: true}
            dispatch(addUser(userModel))
        }else {
            const userModel = {id:user.id,...values,isAdd: user.isAdd}
            dispatch(editUser(userModel))
        }
        setSubmitting(false)
        onClose()
    }
    useEffect(()=>{
        if (user)setData(user)
        console.log(data)
    },[user])
    return (
        <div className={'form-block'}>
            <Drawer title="Add User" placement="right" onClose={() => onClose()} visible={visible}>

                <Formik initialValues={data} onSubmit={onSubmit}>
                    {({ isSubmitting }: any) => {
                        return (
                            <Form>
                                <div className="form-block">
                                    <div className="input-block">
                                        <label htmlFor="">Email</label>
                                        <Field type="text" name="email" placeholder="Enter email" />
                                        <ErrorMessage className="error" name="email" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">First name</label>
                                        <Field type="text" name="firstName" placeholder="Enter first name" />
                                        <ErrorMessage className="error" name="firstName" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Last name</label>
                                        <Field type="text" name="lastName" placeholder="Enter last name" />
                                        <ErrorMessage className="error" name="lastName" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Company name</label>
                                        <Field type="text" name="company" placeholder="Enter company name" />
                                        <ErrorMessage className="error" name="company" component="p" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Website</label>
                                        <Field type="text" name="website" placeholder="Enter website" />
                                        <ErrorMessage className="error" name="website" component="p" />
                                    </div>
                                    <div className="action-sumbit-block">
                                        <button className={'form-button'} disabled={isSubmitting} type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>

            </Drawer>
        </div>
    );
};

export default AddUserModal;