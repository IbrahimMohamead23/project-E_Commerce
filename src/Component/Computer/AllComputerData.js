import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SictionTitle from '../HomePage/SectionTitle'
import ComputerData from '../Data/ComputerData'
import AllCoputerCardData from './AllCoputerData'

const AllComputerData = () => {
  return (
    <div>
        <SictionTitle title='الاكترونيات'/>
        <Row xs='1' md='2' lg='4'>
            {
                ComputerData.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                           <AllCoputerCardData {...item}/>
                        </Col>
                    )
                })

            }
        </Row>

    </div>
  )
}

export default AllComputerData