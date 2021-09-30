import {
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    GET_USERS, SET_CURRENT_USER,

} from '../actionTypes/usersTypes'

const initialState = {
    users: [],
    currentUser: {
        id: 0,
        firstName: '',
        lastName: '',
        website: '',
        company: '',
        email: '',
        isAdd: false,
    },
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USERS : {
            return {
                ...state,
                users: action.payload
            }
        }
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        case EDIT_USER: {
            const users = [...state.users]
            const usersMap = users.map((value: any) => {
                if (value.id === action.payload.id) {
                    value = action.payload
                }
                return value
            })
            return {
                ...state,
                users: usersMap
            }
        }
        case DELETE_USER:{
            return {
                ...state,
                users: [...state.users].filter((value:any) => value.id != action.payload )
            }
        }
        default:
            return state;
    }
}
