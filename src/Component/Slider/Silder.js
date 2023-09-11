import React from 'react'
import { Carousel } from 'react-bootstrap'
import slid1 from '../../imgas/slidr4.jpg'
import slid2 from '../../imgas/slidr3.jpg'
import slid3 from '../../imgas/slidr2.jpg'

const Silder = () => {
  return (
    <Carousel>
      <Carousel.Item>
          <img src={slid1} alt='slid-img' style={{width:'100%', height:'40vh'}}/>
      </Carousel.Item>

      <Carousel.Item>
      <img src={slid2} alt='slid-img' style={{width:'100%', height:'40vh'}}/>
       
      </Carousel.Item>

      <Carousel.Item>
      <img src={slid3} alt='slid-img' style={{width:'100%', height:'40vh'}}/>
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Silder