import React from 'react'
import DataDap from '../Data/DataDap'
import { Col, Container, Row } from 'react-bootstrap'
import MinDataDap from './MinDataDap'
import MatbkhCatg from '../Catagory/CatagoryMatbkh'

const AllDataDap = () => {
    const newDataDap = DataDap.slice(0,4)
  return (
    <Container>
        <MatbkhCatg title='اجــهـزه كــهـربائيه' btntitle='الـمـزيد'/>
        <Row xs='1' md='2' lg='4' className=''>
             {
                newDataDap.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                            <MinDataDap {...item}/>
                        
                        </Col>
                    )
                })
             }
        </Row>
    </Container>
  )
}

export default AllDataDap