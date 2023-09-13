import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import ComputerCatg from '../Catagory/CopmputerCatg'
import ComputerData from '../Data/ComputerData'
import MinCardsComputer from '../Computer/minCarsComputer'
const MinCardComputer = () => {
    const newComputerData = ComputerData.slice(0,4)
  return (
    <div>
          <ComputerCatg title='الاكترونيات' btntitle='المزيد'/>

          <Row xs='1' md='2' lg='4' className=''>

          {
              newComputerData.map(item => {
                  return(
                    <Col key={item.id} style={{margin:'0.5rem 0'}}>
                      <MinCardsComputer {...item}/>
                    </Col>
                  )
              })
          }

    </Row>
    
    </div>
  )
}

export default MinCardComputer