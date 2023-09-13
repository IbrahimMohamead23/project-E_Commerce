import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashData from '../Data/DashData'
import MinDataDash from './MinDataDash'
import SictionTitle from '../HomePage/SectionTitle'

const DashAllData = () => {
  return (
    <div>
        <SictionTitle title='شــاشــات'/>
        <Row xs='1' md='2' lg='4'>
            {
                DashData.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                           <MinDataDash {...item}/>
                        </Col>
                    )
                })

            }
        </Row>
    </div>
  )
}

export default DashAllData