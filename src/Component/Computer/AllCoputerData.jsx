import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContacxt';

const AllCoputerCardData = ({id,img,title}) => {
  const {increaseCartItems, getItemsQuantity,decraseCartItem,removeItemCartItem} = useShoppingCart();
  const quantity =  getItemsQuantity(id)

  return (
    <Card>
        <Card.Img src={img} variant='top' style={{width:'100%', height:'12rem'}}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
        <div className='mt-auto'>
         {quantity === 0 ?  <Button onClick={() => increaseCartItems(id)} className='w-100'>Add to Cart </Button> : 
          <div className='d-flex flex-column align-items-center'>
             <div className='d-flex justify-content-center align-items-center' style={{gap:'0.65rem'}}>
                <Button onClick={()=> increaseCartItems(id)}>+</Button>
                  <span className='fs-3'>in Cart {quantity}</span>
                <Button onClick={()=> decraseCartItem(id)}>-</Button>
             </div>
             <Button onClick={()=>removeItemCartItem(id)} variant='danger' size='sm'>Remove</Button>
          </div>
          }
        </div>
        </Card.Body>
       
    </Card>
  )
}

export default AllCoputerCardData;