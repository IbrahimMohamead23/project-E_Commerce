import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataAxsswoar from '../Data/AxsswoarData'
import AxssMinData from './AxssMinData'
import AxsswoarCatg from '../Catagory/CatagoryAxsswoar'

const AxssAllData = () => {
    const newDataAxsswoar = DataAxsswoar.slice(0,4)
  return (
    <Container>
        <AxsswoarCatg title='اكـسســـوار ' btntitle='الــمــزيد'/>
        <Row xs='1' md='2' lg='4' className=''>
            {
                newDataAxsswoar.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                           <AxssMinData {...item} />
                        </Col>
                    )
                })

            }
        </Row>

    </Container>
  )
}

export default AxssAllData