import axios from 'axios'
import { USER_SAVE_FAIL, USER_SAVE_REQUEST, USER_SAVE_SUCCESS } from '../constants/userConstants'



export const Save = (name, surName, birthDay, address) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SAVE_REQUEST
    })

    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    }
    const { data } = await axios.post('/api/users', { name, surName, birthDay, address}, config)

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