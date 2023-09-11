import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Arrow from '../../../imgas/ArrowLeft.png'
import { NavLink } from 'react-router-dom'

const TitleDetals = () => {
  return (
    <Container>
       <Row  className='d-flexjustify-content-between my-5'>
        <Col sm='10' md='10' lg='11'>
              <h3 style={{fontWeight:'bold'}}>قــد يــعـجـبـك ايـضا</h3>
        </Col>

        <Col sm='2' md='2' lg='1'>
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

export default TitleDetals