import React, { useContext } from 'react'
import Shop from './Shop'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import '../styles/NavBar.css'

const NavBar = () => {

  const [cart, setCart] = useContext(CartContext)
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)
  return (
    <>
      <div className='navBarShop'>
        <div className='logoContainer'>
          <Link className='logo' to={'/'}>
              <h3>COFFY</h3>
          </Link>
        </div>
        <div className='cartLinkContainer'>
          <Link className='shopLink' to={'/shop'}>
              <h3>shop</h3>
          </Link>
          <Link className='cartLink' to={'/cart'}>
              Cart items: <span className='cartCount'>{quantity}</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar