import React,{useEffect,useSelector} from 'react'
import {useDispatch} from 'react-redux'
import { Col, Row } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import { userGet } from '../actions/userActions'
import Users from '../components/Users.js'
//import Message from '../components/Message'
 //import Loader from '../components/Loader'


const HomeScreen = () => {

 // using useSelector
// const getUser = useSelector((state) => state.getUser)
//  const { loading, error, users } = getUser

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userGet())
}, [dispatch])

  return (
    
    
      <Row>
            {Users.map((user) => (
              <Col key={user._id} sm={12} md={6} lg={4} xl={3}>
                <Users user={user} />
              </Col>
            ))}
          </Row>

    
 

  )
            }
export default HomeScreen
