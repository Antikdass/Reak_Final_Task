import { setCorrectData } from '../../helpers/helpers';
import {
    ADD_USER, DELETE_USER, EDIT_USER,
    GET_USERS, SET_CURRENT_USER
} from '../actionTypes/usersTypes'
import {userAPI} from "../api/userAPI";

export const getUser = (payload: any) => ({type: GET_USERS, payload});
export const setUser = (payload:any) =>({type:SET_CURRENT_USER,payload})
export const addUser = (payload:any)=> ({type:ADD_USER,payload})
export const editUser = (payload:any)=> ({type:EDIT_USER,payload})
export const deleteUser = (payload:any) => ({type:DELETE_USER,payload})

export const fetchUser = (id:number) => async (dispatch:any) =>{
    try{
        const user = await userAPI.getUserById(id)
        const userCorrectData = setCorrectData(user);
        dispatch(setUser(userCorrectData))
    }catch (e) {
        console.log(e,'ffff')
    }
}

export const fetchUsers = () => async (dispatch:any)=>{
    try {
        const users = await userAPI.getUsers()
        const usersCorrectData = users.map((value:any)=>setCorrectData(value))
        dispatch(getUser(usersCorrectData))
    } catch (e) {
        console.log(e, 'EEEEEEE')
    }
};