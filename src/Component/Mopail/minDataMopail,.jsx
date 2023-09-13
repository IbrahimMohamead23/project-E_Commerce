import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContacxt';

const MinDataMopail = ({id,title, img, prise}) => {
    const {increaseCartItems, getItemsQuantity,decraseCartItem,removeItemCartItem} = useShoppingCart();
    const quantity =  getItemsQuantity(id) ;
    
    return (
    <Card>
        <Card.Img src={img} alt='img-mpoail' variant='top' style={{width:'100%', height:'15rem'}}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit, amet consectetur
                 adipisicing elit. Quisquam quae nostrum 
                 vitae pariatur incidunt explicabo!
            </Card.Text>
            <h6>${prise}</h6>
            <div className='me-auto'>
              {quantity === 0 ? <Button className='w-100' onClick={() => increaseCartItems(id)}>Add to Cart</Button> :
                <div className='d-flex align-items-center flex-column' style={{gap:'0.6rem'}}>
                    <div className='d-flex justify-content-center align-items-center' style={{gap:'0.6rem'}}>
                        <Button onClick={()=> increaseCartItems(id)}>+</Button>
                           <span className='fs-3'>{quantity} in Cart</span>
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

export default  MinDataMopail