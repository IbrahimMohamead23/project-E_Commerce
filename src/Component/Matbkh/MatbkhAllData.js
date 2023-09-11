import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SictionTitle from '../HomePage/SectionTitle'
import DataMatbkh from '../Data/DataMatbkh'
import MatbakhMinData from './MatbakhMinData'

const MatbkhAllData = () => {
  return (
    <Container>
       <SictionTitle title='ادوات مـنـزلـيه'/>
      <Row xs='1' md='2' lg='4'>
          {
                DataMatbkh.map(item => {
                  return(
                    <Col key={item.id} style={{margin:'0.5rem 0'}}>
                       <MatbakhMinData {...item}/>
                    
                    </Col>
                  )
                })
          }
      </Row>
    </Container>
  )
}

export default MatbkhAllData