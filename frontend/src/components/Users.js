import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Users = ({ users }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            
            <Card.Body>
            <Link to={`/users/${users._id}`} >
                <Card.Title as='div'>
                    <strong>{users.name}</strong>
                </Card.Title>
            </Link>  
            <Link to={`/users/${users._id}`} >
                <Card.Title as='div'>
                    <strong>{users.surName}</strong>
                </Card.Title>
            </Link>
            <Link to={`/users/${users._id}`} >
                <Card.Title as='div'>
                    <strong>{users.birthDay}</strong>
                </Card.Title>
            </Link>
            <Link to={`/users/${users._id}`} >
                <Card.Title as='div'>
                    <strong>{users.phoneNo}</strong>
                </Card.Title>
            </Link>
            <Link to={`/users/${users._id}`} >
                <Card.Title as='div'>
                    <strong>{users.address}</strong>
                </Card.Title>
            </Link>
            
            </Card.Body>
        </Card>
    )
}

export default Users
