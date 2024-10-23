import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../App'
function Cart() {
  const { cart, setCart } = useContext(CartContext)
  console.log(cart);
  
  return (
    <div>
      {
        cart.lenght > 0 && cart.map(function(value) {
          return (
            <div>
              <div className="img"></div>
              <div className="name">
                <h3>{value.product.attributes.title}</h3>
                <p>{value.product.attributes.company}</p>
              </div>
              <div className="amount">
                <h3>{value.count}</h3>
                <span>remove</span>
              </div>
              <div className="price">
                <h3 className='font-medium text-xl'>${value.product.attributes.price}</h3>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart