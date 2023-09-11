import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContacxt';

const MinCardsComputer = ({id,img,title}) => {
    const {increaseCartItems, getItemsQuantity,decraseCartItem,removeItemCartItem} = useShoppingCart();
    const quantity =  getItemsQuantity(id)

  return (
   <>
   <Card>
    <Card.Img variant='top' src={img} style={{width:'100%', height:'12rem'}}/>
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
               <Button variant='danger' size='sm' onClick={() => removeItemCartItem(id)}>Remove</Button>
            </div>
          }
         </div>
    </Card.Body>

</Card>
   </>
  )
}

export default MinCardsComputer