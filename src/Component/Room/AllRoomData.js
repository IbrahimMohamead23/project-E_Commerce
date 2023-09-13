import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DataRoom from '../Data/DataRoom'
import MinRoomData from './MinRoomData'
import RoomCatg from '../Catagory/CatagoryRoom'

const AllRoomData = () => {
    const newDataRoom  = DataRoom.slice(0,4)
  return (
    <div>
      <RoomCatg title='غــرف نـوم' btntitle='الـمـزيد' />
      <Row xs='1' md='2' lg='4' className=''>
            {
                newDataRoom.map(item => {
                   return(
                    <Col key={item.id}  style={{margin:'0.5rem 0'}}>
                    <MinRoomData {...item}/>
                </Col>
                   )
                })
            }
        </Row>
    </div>
  )
}

export default AllRoomData