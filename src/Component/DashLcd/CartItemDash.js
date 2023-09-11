import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import FormatCurrency from '../Catagory/FormatCarncy';
import { useShoppingCart } from '../Context/ShoppingCartContacxt';
import DashData from '../Data/DashData';

const CartItemDash = ({id,quantity}) => {
    const {removeItemCartItem} = useShoppingCart();
    const item = DashData.find(i => i.id === id);
    if(item == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.img} style={{width:'125px', height:'75px', objectFit:'cover'}}/>
        <div className='me-auto'>
            {item.title}{'  '}
            {quantity > 1 && <span className='text-muted' style={{fontSize:'0.75rem'}}>X{quantity}</span>}

        <div>
            {FormatCurrency(item.prise)}
        </div>

        </div>

        <Button variant='outline-danger' onClick={()=> removeItemCartItem(id)}>X</Button>
       
    </Stack>
  )
}

export default CartItemDash