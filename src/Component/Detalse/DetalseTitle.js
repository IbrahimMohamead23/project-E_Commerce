import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Arrow from '../../imgas/ArrowLeft.png'
import {NavLink} from 'react-router-dom'
const DetalseTitle = () => {
  return (
    <Row  className='d-flexjustify-content-between my-3'>
    <Col sm='10' md='10' lg='11'>
          <h2 style={{fontWeight:'bold'}}>test</h2>
    </Col>

    <Col sm='2' md='2' lg='1'>
        <NavLink to='/'>
        <Button style={{fontWeight:'bold'}}>
           <img src={Arrow} alt='arrow Left' style={{width:'3rem', height:"2rem"}}/>
          </Button>
        </NavLink>
    </Col>

    </Row>
  )
}

export default DetalseTitle