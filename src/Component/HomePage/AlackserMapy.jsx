import React from 'react'
import ShoAllCards from './ShoAllCards'
import AlctData from '../Data/AllcktData'
import { Col, Container, Row } from 'react-bootstrap'
import SictionTitle from './SectionTitle'

const AlackserMapy = ({goto}) => {
  return (
    <Container>
      <SictionTitle title='الاكثرمبيعا'/>

      <Row xs='1' md='2' lg='4' className=''>
        {
           AlctData.map(item => {
            return(
                <Col key={item.id} >
                            <ShoAllCards  {...item}/>
                </Col>
            )
           })
        }
</Row>
    </Container>
  )
}

export default AlackserMapy