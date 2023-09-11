import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataRoom from '../Data/DataRoom'
import RoomMinData from './RoomMinData'
import SelectionTitle from '../HomePage/SectionTitle'

const RoomAllData = () => {
  return (
    <Container>
        <SelectionTitle title='غــرف نـوم'/>
        <Row xs='1' md='2' lg='4'>
            {
                DataRoom.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                           <RoomMinData {...item}/>
                        </Col>
                    )
                })
            }

        </Row>
    </Container>
  )
}

export default RoomAllData