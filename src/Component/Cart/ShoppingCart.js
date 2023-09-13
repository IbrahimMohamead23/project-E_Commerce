import React, { useEffect } from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'
import CartItemss from './CartItems';
import FormatCurrency from '../Catagory/FormatCarncy';
import AlctData from '../Data/AllcktData';
import CartItemCoputer from '../Computer/CartItemCoputer';
import ComputerData from '../Data/ComputerData';
import CartItemMopail from '../Mopail/CartItemMopail';
import CartItemAxss from '../Axsswoar/CartItemAxss';
import CartItemDash from '../DashLcd/CartItemDash';
import CartItemsRoom from '../Room/CartItemsRoom';
import CartItemMatbkh from '../Matbkh/CartItemMatbkh';
import CartItemsManzalya from '../Manzelya/CartItemManzelya';

const ShoppingCart = ({isOppin}) => {  
const {CloseCart,cartItems} = useShoppingCart();
  return (
    // <Offcanvas show={isOppin} placement='start'>
     <Offcanvas show={isOppin} onHide={CloseCart} placement='start'> 
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Stack gap={3}>
           
           {
             cartItems.map((item) => {
              return(
                <CartItemss key={item.id} {...item}/>
              )
             })
           }

           {
            cartItems.map(item => {
              return(
                <CartItemCoputer key={item.id} {...item}/>
              )
            })
           }

           {
             cartItems.map(item => {
              return(
                <CartItemMopail key={item.id} {...item}/>
              )
             })
           }

           {
             cartItems.map(item => {
               return(
                 <CartItemAxss key={item.id} {...item}/>
               )
             })
           }
           
           {
             cartItems.map(item => {
               return(
                 <CartItemDash key={item.id} {...item}/>
               )
             })
           }

           {
             cartItems.map(item => {
               return(
                 <CartItemsManzalya key={item.id} {...item}/>
               )
             })
           }

           {
             cartItems.map(item => {
               return(
                 <CartItemMatbkh key={item.id} {...item}/>
               )
             })
           }

           { 
             cartItems.map(item => {
               return(
                 <CartItemsRoom key={item.id} {...item}/>
               )
             })
           }


               <div className='ms-auto fw-bold fs-5'>
                Total Price : {' '} 
                {FormatCurrency(
                 cartItems.reduce((total, cartItem) => {
                      const item = AlctData.find(i => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                  },0)
                  // 
               
                )} 
 
               </div>

          </Stack>

        </Offcanvas.Body>

    </Offcanvas>
  )

}

export default ShoppingCart