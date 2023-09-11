import { createContext, useContext, useState } from "react";
import ShoppingCart from "../Cart/ShoppingCart";

const ShopingCartContext = createContext({});

// 2
const ShopingCartProvider = ({children}) => {
    // test oppin || close
    const [isOpen , setIsOpen] = useState(false)
    // all data api
    const[cartItems, setCartItems] = useState([])
    // detalse card item
    const [detalse, setDetalse] = useState([])


     
    const OpenCart = () =>{
        setIsOpen(true)
    }
    const CloseCart = () =>{
        setIsOpen(false)
    }
     //get item qiantity
     const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    const CartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity , 0
    );

    // Add detale card

    const AddToDetalse = (id) => {
        setDetalse(detalse => {
            if(detalse.find(item => item.id === id) == null ){
                return[...detalse, {id}]
            }else{
                return detalse.map(item => {
                    if(item.id === id){
                        return{...item}
                    }else{
                        return item
                    }
                })
            }
        })
    }

     // add items to cart
     const increaseCartItems = (id) => {
        setCartItems((cartItems) => {
            if(cartItems.find(item => item.id === id) == null){
                return[...cartItems, {id, quantity: 1}]
            }else{
                return cartItems.map(item => {
                    if(item.id === id){
                        return {...item , quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    // decrimant item 
    const decraseCartItem = (id) =>{
         setCartItems((cartItems) => {
            if(cartItems.find(item => item.id === id) == null ){
                return cartItems.filter(item => item.id !== id)
            } else{
                return cartItems.map(item => {
                    if(item.id === id){
                       return {...item , quantity: item.quantity - 1}
                    }else{
                       return  item
                    }
                })
            }
         })
    }
  
    // remove Item on Cart Item
    const removeItemCartItem = (id) => {
        setCartItems((cartItems) => cartItems.filter(item => item.id !== id))
    }
  return (
      <ShopingCartContext.Provider value={{
        cartItems,
          OpenCart,
          CloseCart,
          increaseCartItems,
          decraseCartItem,
          removeItemCartItem,
          getItemsQuantity,
          CartQuantity,
          AddToDetalse,
          detalse
        
        }}>
            {children}

            <ShoppingCart isOppin={isOpen}/>
            
            </ShopingCartContext.Provider>
  )
}

export default ShopingCartProvider
// Custem Hook privet
export const useShoppingCart = () => {
    return useContext(ShopingCartContext)
}