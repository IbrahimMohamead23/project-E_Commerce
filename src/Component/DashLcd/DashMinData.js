import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashData from '../Data/DashData'
import MinDashData from './MinDashData'
import DashCatg from '../Catagory/CatagoryDash'

const DashMinData = () => {
    const newDashData = DashData.slice(0,4)
  return (
    <div>
        <DashCatg title='شــاشــات' btntitle='الـمزيد'/>
        <Row xs='1' md='2' lg='4' className=''>
            {
               newDashData.map(item => {
                return(
                    <Col key={item.id}  style={{margin:'0.5rem 0'}}>
                        <MinDashData {...item}/>
                    </Col>
                )
               })
            }
        </Row>
    </div>
  )
}

export default DashMinData