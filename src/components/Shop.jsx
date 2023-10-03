import React from 'react'
import { productos } from '../productsDB'
import Item from './Item'
import '../styles/Shop.css'
import NavBar from './NavBar'
import ItemList from './ItemList'

const Shop = () => {
  return (
    <>
        <NavBar/>
        <ItemList/>
    </>
  )
}

export default Shop