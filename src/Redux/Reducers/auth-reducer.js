const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    login:null,
    email:null,
    id:null
}

const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case SET_USER_DATA:
        return {...state,...action.data}
        default:
            return
    }
}

export const setUserData = (userId,userEmail,userLogin) =>({type:SET_USER_DATA,data:{userId,userEmail,userLogin}})