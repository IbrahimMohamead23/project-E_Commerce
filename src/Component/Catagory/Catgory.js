import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Catgory = ({title, btntitle}) => {
  return (
    <Container>
      <Row  className='d-flexjustify-content-between my-3'>
        <Col xs='9' md='9' lg='11'>
              <h2 style={{fontWeight:'bold'}}>{title}</h2>
        </Col>

        <Col xs='3' md='3' lg='1' className='me-auto'>
           <NavLink to='/allDataCards'>
               <Button variant='outline-primary'>{btntitle}</Button>

           </NavLink>
        </Col>
    </Row>
    </Container>
  )
}

export default Catgory