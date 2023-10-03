import React from 'react'
import { Route, Routes, BrowserRouter as router } from 'react-router-dom'
import { Contact, Home, ProductDetail, Cart } from '../pages'
import NavBar from '../components/NavBar'
import ShoppingCart from '../components/ShoppingCart'
import Shop from '../components/Shop'

const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Cart/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/Cartt' element={<Cart/>}/> */}
            <Route path='/detail/:id' element={<ProductDetail/>}/>
            <Route path='/*' element={<h2>Error 404 page not found</h2>}/>
        </Routes>
    </>
  )
}

export default PageRouter