import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import MopailData from '../Data/MopailData'
import FormatCurrency from '../Catagory/FormatCarncy';
import { useShoppingCart } from '../Context/ShoppingCartContacxt';

const CartItemMopail = ({id,quantity}) => {
    const {removeItemCartItem} = useShoppingCart();
    const item = MopailData.find(i => i.id === id);
    if(item == null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.img} alt='img-cartitem' style={{width:'125px', height:'95px', objectFit:'cover'}}/>
        <div className='me-auto'>
            <div>
                {item.title}{'  '}
                {quantity > 1 && <span className='text-muted' style={{fontSize:'0.75rem'}}>X{quantity}</span>}

                <div className='text-muted'>
                    {FormatCurrency(item.prise)}
                </div>
            </div>
        </div>
        <Button variant='outline-danger' size='sm' onClick={()=> removeItemCartItem(id)}>X</Button>

    </Stack>
  )
}

export default CartItemMopail