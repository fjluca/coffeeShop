import React from 'react'
import { productos } from '../productsDB'
import Item from './Item'
import '../styles/Shop.css'

const ItemList = () => {
    return (
        <>
            <div className='containerItem'>
                {
                    productos.map((producto, idx) => {
                        return <Item key={producto.id} {...producto}/>
                    })
                }
            </div>
    
        </>
      )
    }
    

export default ItemList