import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContacxt';

const AllDataMopail = ({id,img,prise,title}) => {
    const {increaseCartItems, getItemsQuantity,decraseCartItem,removeItemCartItem} = useShoppingCart();
    const quantity =  getItemsQuantity(id) ;
  return (
    <Card>
        <Card.Img src={img} style={{width:'100%', height:'15rem'}}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit.
                  Possimus voluptates ducimus illo 
                  reprehenderit, quo minima.
            </Card.Text>
            <div className='me-auto'>
             {quantity === 0 ? <Button className='w-100' onClick={() => increaseCartItems(id)}>Add to cart</Button>:
                <div className='d-flex align-items-center flex-column' style={{gap:'0.5rem'}}>
                    <div className='d-flex' style={{gap:'0.5rem'}}>
                        <Button onClick={() => increaseCartItems(id)}>+</Button>
                          <span className='fs-3'>in cart {quantity}</span>
                        <Button onClick={()=> decraseCartItem(id)}>-</Button>
                    </div>
                    <Button variant='danger' size='sm' onClick={()=> removeItemCartItem(id)}>Remove</Button>
                </div>
             }

            </div>
        </Card.Body>

    </Card>
  )
}

export default AllDataMopail