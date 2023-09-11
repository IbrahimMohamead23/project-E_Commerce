import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataAxsswoar from '../Data/AxsswoarData'
import MinDataAxss from './MinDataAxss'
import SictionTitle from '../HomePage/SectionTitle'

const AllDataAxss = () => {

  return (
    <Container>
        <SictionTitle title='اكـسســـوار'/> 

        <Row xs='1' md='2' lg='4'  >
       
       {
        DataAxsswoar.map(item => {
            return(
                <Col key={item.id} style={{margin:'0.5rem 0'}}>
                    <MinDataAxss {...item}/>
                </Col>
            )
        })
       }
    </Row>
    </Container>
  )
}

export default AllDataAxss