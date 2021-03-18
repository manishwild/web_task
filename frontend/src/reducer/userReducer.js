import { USER_GET_REQUEST, USER_SAVE_FAIL, USER_SAVE_REQUEST, USER_SAVE_SUCCESS } from "../constants/userConstants";

// creating reducer to save data
export const userSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SAVE_REQUEST:
      return { loading : true}
     
    case USER_SAVE_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_SAVE_FAIL:
      return { loading: false, error: action.payload}  
      
    default:
     return state
  }
}
//creating reducer to get all user
export const getUsersReducer = (state = { users: []}, action) => {
  switch (action.type) {
    case USER_GET_REQUEST:
      return { loading: true, users: []}
    
    case USER_SAVE_SUCCESS: 
      return { loading: false, users: action.payload.users }  

    case USER_SAVE_FAIL: 
      return { loading: false, error: action.payload.users }  
    default:
      return state;
  }
}