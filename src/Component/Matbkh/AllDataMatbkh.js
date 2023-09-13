import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ManzelyaCatg from '../Catagory/CatagoryManzelya'
import DataMatbkh from '../Data/DataMatbkh'
import MinDataMatbkh from './MinDataMatbkh'

const AllDataMatbkh = () => {
  const newDataMatbkh = DataMatbkh.slice(0,4)
  return (
    <div>

        <ManzelyaCatg title='ادوات مـنـزلـيه' btntitle='الـمـزيد'/>

        <Row xs='1' md='2' lg='4' className=''>
            {
                newDataMatbkh.map(item => {
                  return(
                    <Col key={item.id}  style={{margin:'0.5rem 0'}}> 
                        <MinDataMatbkh {...item}/>
                    </Col>
                  )
                })
            }
        </Row>
    </div>
  )
}

export default AllDataMatbkh