import React from 'react'
import Silder from '../Slider/Silder'
import Catgory from '../Catagory/Catgory'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards'
import SectionComp from './SectionComp'
//data Cards
import AlctData from '../Data/AllcktData'
import DataCards from './Cards'
import MinCardComputer from '../Computer/MinCardComputer'
import MopailMinData from '../Mopail/MopailMinData'
import AxssAllData from '../Axsswoar/AxssAllData'
import DashMinData from '../DashLcd/DashMinData'
import AllDataDap from '../Manzelya/AllDataDap'
import AllDataMatbkh from '../Matbkh/AllDataMatbkh'
import AllRoomData from '../Room/AllRoomData'

const newAllctData = AlctData.slice(0,8)


const HomePage = ({goto}) => {
  return (
    <>
        <Silder/>
    <Container>
         <Catgory title='الاكثرمابيعا' btntitle='المزيد' />
         <Row xs={1} md={2} lg={4 } >

        {

        newAllctData.map(item => {
            return(
          <Col key={item.id} style={{margin:'0.5rem 0'}}>

                   <Cards {...item}/>
                   {/* <DataCards {...item}/> */}
            </Col>

            )
          })


        }
               </Row>


         <SectionComp title='هــــــــــــنـــــاك خـــصـــم يــصـل الى' descoundt='30%'/>
         <MinCardComputer/>
         <SectionComp title='احـــدث الــــمـــنـــتــجــات' descoundt='New'/>
         {/* mopail data */}
         <MopailMinData/>
         {/* Axsswoar data */}
         <AxssAllData />
         {/* Dash Data */}
         <DashMinData/>
         {/* manzelya data */}
         <AllDataDap />
         {/* matbkh data */}
         <AllDataMatbkh />
         {/* all room data */}
         < AllRoomData/>



    </Container>
    </>
  )
}

export default HomePage