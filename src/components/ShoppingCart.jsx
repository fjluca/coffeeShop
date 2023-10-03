import React, { useContext } from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import NavBar from './NavBar'
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.precio;
  }, 0)
  return (
    <>  
        <NavBar/>
        <div className='cartContainer'>
          <div className='shoppingCartContainer'>
            <div>items in cart: {quantity}</div>
            <div>total: ${totalPrice}</div>
            <button className='btn btnCart' onClick={() => console.log(cart)}>Total</button>
          </div>
        </div>
    </>
    
  )
}

export default ShoppingCart