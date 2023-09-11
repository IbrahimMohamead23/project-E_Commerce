import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'
import AlctData from '../Data/AllcktData'
import FormatCurrency from '../Catagory/FormatCarncy'
 
const CartItemss = ({id,quantity}) => {
    const {removeItemCartItem} = useShoppingCart();
    const item = AlctData.find(i => i.id === id);
    if(item == null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
    <img src={item.img} alt='cart-img' style={{width:'125px' , height:'75px', objectFit:'cover' }}/>
    <div className='me-auto'>

            <div>
           
                {item.title}{' '}
                {quantity > 1 && <span className='text-muted' style={{fontSize:'0.65erm'}}>x{quantity}</span>}
                
                <div className='text-muted' style={{fontSize:'0.65erm'}}>
                  {FormatCurrency(item.price)}
                </div>
            </div>

          
            </div>

         

        

    <Button variant='outline-danger' size='sm' onClick={() => removeItemCartItem(id)}>
      &times;
    </Button>
</Stack>
  )
}

export default CartItemss