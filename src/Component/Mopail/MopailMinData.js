import React from 'react'
import MopailCat from '../Catagory/CatagoryMopail'
import { Col, Row } from 'react-bootstrap'
import MopailData from '../Data/MopailData'
import MinDataMopail from './minDataMopail,'

const MopailMinData = () => {
    const newMopailData = MopailData.slice(0,4)
  return (
    <div>
        <MopailCat title='مـوبـيلات' btntitle='المزيد'/>
        <Row xs='1' md='2' lg='4' className=''>
            {
                 newMopailData.map(item => {
                    return(
                        <Col key={item.id} style={{margin:'0.5rem 0'}}>
                            <MinDataMopail {...item} />
                        </Col>
                    )
                 })

            }
        </Row>
    
    </div>
  )
}

export default MopailMinData