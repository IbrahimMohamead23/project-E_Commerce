import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataDap from '../Data/DataDap'
import DataMinDap from './DataMinDap'
import SictionTitle from '../HomePage/SectionTitle'

const DataAllDap = () => {
  return (
    <div>
        <SictionTitle title='اجــهـزه كــهـربائيه'/>

        <Row xs='1' md='2' lg='4'>
            {
                DataDap.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                            <DataMinDap {...item}/>
                        
                        </Col>
                    )
                })
            }
        </Row>
    </div>
  )
}

export default DataAllDap