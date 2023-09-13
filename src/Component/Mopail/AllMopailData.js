import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MopailData from '../Data/MopailData'
import AllDataMopail from './AllDataMopail'
import SictionTitle from '../HomePage/SectionTitle'

const AllMopailData = () => {
  return (
   <div>
     <SictionTitle title='مــوبــبيلات'/>

    <Row xs='1' md='2' lg='4'>

        {
            MopailData.map(item => {
              return(
                <Col key={item.id} className='mb-2'>
                <AllDataMopail {...item}/>
            </Col>
            
              )
            })

        }

    </Row>
   </div>
  )
}

export default AllMopailData