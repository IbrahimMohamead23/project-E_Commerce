import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContacxt';
import { Col, Container, Row } from 'react-bootstrap';
import DetalseAlls from './DetalseAlls';
import AlackserMapy from '../HomePage/AlackserMapy';
import DetalseTitle from './DetalseTitle';
import AllComputerData from '../Computer/AllComputerData';
import TitleDetals from './ContentDetalse/TitleDetals';

const DetalseApp = () => {

    const {detalse} = useShoppingCart();

  return (
    <Container>


        <Row  xs='1' md='2'  lg='2'>
            {
                detalse.map(item => {
                    return(
                          <DetalseAlls  key={item.id} {...item} />
                     
                    )
                })
            }
        </Row>

        <TitleDetals/>


        {/* <Row>
           <AllComputerData/>
        </Row> */}

    </Container>
  )
}

export default DetalseApp