import React from 'react'
import { Card, Col, Row, Button, Container,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'

const DataCards = ({id,title,img}) => {
  const {increaseCartItems, getItemsQuantity,decraseCartItem,removeItemCartItem,AddToDetalse} = useShoppingCart();
 
  const quantity =  getItemsQuantity(id)

  return (
  <Container>
          {/* <Button onClick={() => increaseCartItems(id)}> */}
          {/* <Link onClick={() => AddToDetalse(id)} to='/detalseCard' style={{textDecoration:'none'}}> */}
          <Card >
              <Card.Img className='Card-img' variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='mt-auto'>
            {quantity === 0 ? <Button className='w-100' onClick={() => increaseCartItems(id)}>Add to Cart</Button> :
             <div className='d-flex align-items-center flex-column' style={{gap:'0.5rem'}}>
                <div className='d-flex justify-content-center align-items-center' style={{gap:'0.5rem'}}>
                    <Button onClick={() => increaseCartItems(id)}>+</Button>
                      <span className='fs-3'>{quantity} in Cart</span>
                    <Button onClick={() => decraseCartItem(id)}>-</Button>
                </div>
                <Button variant='danger' size='sm' onClick={() => removeItemCartItem(id)} >Remove</Button>
                </div>}
         </div>

         {/* <Link to='/detalseCard'>Detalse</Link> */}
              </Card.Body>
            </Card>
          {/* </Link> */}
  </Container>
  )
}

export default DataCards