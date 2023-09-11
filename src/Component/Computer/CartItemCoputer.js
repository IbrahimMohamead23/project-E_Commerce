import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'
import ComputerData from '../Data/ComputerData';
import { Button, Stack } from 'react-bootstrap';
import FormatCurrency from '../Catagory/FormatCarncy';

const CartItemCoputer = ({id,quantity}) => {
    const {removeItemCartItem} = useShoppingCart();
    const item = ComputerData.find(i => i.id === id);
    if(item == null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.img} alt='img_cartItem' style={{width:'125px', height:'75px', objectFit:'cover'}} />
        <div className='me-auto'>

            <div>
                {item.title}{'  '}
                {quantity > 1 && <span className='text-muted' style={{fontSize:'0.65rem'}}>X{quantity}</span>}

                <div className='text-muted'>
                    {FormatCurrency(item.prise)}
                </div>
            </div>
        </div>

        <Button variant='outline-danger' size='sm' onClick={() => removeItemCartItem(id)}>X</Button>
    </Stack>
  )
}

export default CartItemCoputer