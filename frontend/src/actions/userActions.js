import axios from 'axios'
import { USER_GET_REQUEST, USER_GET_SUCCESS, USER_SAVE_FAIL, USER_SAVE_REQUEST, USER_SAVE_SUCCESS } from '../constants/userConstants'


// creating save user action to save user
export const saveUser = (name, surName, birthDay, phoneNo, address) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SAVE_REQUEST
    })

    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    }
    const { data } = await axios.post('/api/users', { name, surName, birthDay, phoneNo, address}, config)

    dispatch({
      type: USER_SAVE_SUCCESS,
      payload: data
    })

    localStorage.setItem('saveInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SAVE_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

//creating acction to get all user data
export const userGet = () => async(dispatch) => {
  try {
    dispatch({type: USER_GET_REQUEST})

    const { data } = await axios.get(`/api/users`)

    dispatch({
      type: USER_GET_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_SAVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}