import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          Copyright &copy; web task design with <i className="fa fa-heart"  style={{color:'red'}} ></i> by <a href='https://github.com/manishwild'> Manish Khadgi Shahi</a>
          </Col>
        </Row>
      </Container>
      
    </footer>
  )
}

export default Footer
