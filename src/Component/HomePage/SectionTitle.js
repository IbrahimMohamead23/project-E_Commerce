import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Arrow from '../../imgas/ArrowLeft.png'
import { NavLink } from 'react-router-dom'

const SictionTitle = ({title}) => {
  return (
   <Container>
     <Row  className='d-flexjustify-content-between my-3'>
        <Col xs='9' md='10' lg='11'>
              <h2 style={{fontWeight:'bold'}}>{title}</h2>
        </Col>

        <Col xs='2' md='2' lg='1'>
            <NavLink to='/'>
            <Button style={{fontWeight:'bold'}}>
               <img src={Arrow} alt='arrow Left' style={{width:'3rem', height:"2rem"}}/>
              </Button>
            </NavLink>
        </Col>

        </Row>
   </Container>
  )
}

export default SictionTitle