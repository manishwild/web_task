import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const FormScreen = () => {
  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()

  const userSave = useSelector((state) => state.userSave)
  const { loading, error, userInfo } = userSave

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <h1>Plase Save Your Data</h1>
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
          <Form.Label>Sur Name</Form.Label>
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
