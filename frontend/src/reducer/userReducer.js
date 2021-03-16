import { USER_SAVE_FAIL, USER_SAVE_REQUEST, USER_SAVE_SUCCESS } from "../constants/userConstants";

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