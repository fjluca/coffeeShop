import React from 'react'
// import {Cart, Contact, Home, ProductDetail} from './pages'
import PageRouter from './router/PageRouter'
import ShoppingCartProvider from './context/ShoppingCartContext'

function App() {

  return (
    <ShoppingCartProvider> 
      <PageRouter/>
    </ShoppingCartProvider>
  )
}

export default App
