import React, { useState,useEffect } from 'react'
//import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../actions/userActions'

const FormScreen = ({ location, history }) => {
  // using useState 
  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [address, setAddress] = useState('')
  //const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
// using useSelector
  const userSave = useSelector((state) => state.userSave)
  const { loading, error, userInfo } = userSave

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  //using use useEffect and pushing it trough history
  useEffect(() => {
    if (userInfo) {
      history.push('/form')
    }
  }, [history, userInfo])


  // when we press save it will dispatch and save
  const submitHandler = (e) => {
    e.preventDefault()
    // if (name) {
    //   setMessage('Name and surname already exist')
    // } else {
    //   // dispatch saveuser
      
    // }
    dispatch(saveUser(name, surName, birthDay, phoneNo, address))
  }
  return (
    <>
      <h1>Plase Save Your Data</h1>
      {/* {message && <Message variant='danger'>{message}</Message>} */}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />} 
      <Form  onSubmit={submitHandler}>
      <Form.Group  controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='surName'>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type='surName'
            placeholder='Enter your last name'
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          ></Form.Control>
        </Form.Group> 
        <Form.Group controlId='birthDay'>
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type='birthDay'
            placeholder='tt.mm.jjjj'
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='phoneNo'>
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type='phoneNo'
            placeholder='+49'
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          ></Form.Control>
        </Form.Group>  
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            placeholder='Your Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group> 
      <Button type="submit">Save</Button>
    </Form>
    </>
  )
}

export default FormScreen
