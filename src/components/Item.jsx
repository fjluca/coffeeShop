import React, { useContext } from 'react'
import '../styles/Shop.css'
import { CartContext } from '../context/ShoppingCartContext'

const Item = ({nombre, precio, img, id}) => {

  const [cart, setCart] = useContext(CartContext)
  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if(isItemsFound){
        return currItems.map((item) => {
          if(item.id === id){ 
            return {...item,quantity: item.quantity + 1 }
          } else {
            return item;
          }
        })
      } else {
        return [...currItems, {id, quantity: 1, precio}]
      }
    })
  }

  const removeItem = (id) => {
    setCart((currItems) => {
      if(currItems.find((item) => item.id === id)?.quantity === 1){
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  const quantityPerItem = getQuantityById(id);

  return (
    <div className='cards'>
        <figure>
          <img className='img' src={img} alt={nombre} />
        </figure>
          <h2>{nombre}</h2>
            <span>{precio} $</span>
              {
                quantityPerItem === 0 ? (
                  <button  className='btnCards' onClick={() => addToCart()}>+ add to cart</button>
                ) : (
                  <button className='btnCards' onClick={() => addToCart()}>+ add more</button>
                )}
                {
                  quantityPerItem > 0 && (
                    <button className='btnCards' onClick={() => removeItem(id)}>subtract item</button>
                  )
                }
                {
          quantityPerItem > 0 && (
            <div> Quantity: {quantityPerItem}</div>
          )
        }
    </div>
  )
}

export default Item