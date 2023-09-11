import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SectionComp = ({title, descoundt}) => {
  return (
    <Row>
        <Col className='my-3 sction_discount d-flex align-items-center justify-content-center'>
              <h3>{title} </h3>
              <span className='descount'>{descoundt} </span>
        </Col>
    </Row>
  )
}

export default SectionComp