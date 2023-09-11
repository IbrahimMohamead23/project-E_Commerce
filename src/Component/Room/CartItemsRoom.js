import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import DataRoom from '../Data/DataRoom'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'
import FormatCurrency from '../Catagory/FormatCarncy'

const CartItemsRoom = ({id,quantity}) => {
    const{removeItemCartItem} = useShoppingCart();
    const item = DataRoom.find(i => i.id === id)
    if(item == null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
       <img src={item.img} alt='img-room' style={{width:'125px', height:'75px'}}/>

       <div className='me-auto'>
        {item.title}{'   '}
        {quantity > 1 && <span className='text-muted' style={{fontSize:'0.75rem'}}>x{quantity}</span>}

        <div className='text-muted'>
            {FormatCurrency(item.prise)}
        </div>
       </div>
       <Button variant='outline-danger' size='sm' onClick={()=> removeItemCartItem(id)}>X</Button>
        
        </Stack>
  )
}

export default CartItemsRoom