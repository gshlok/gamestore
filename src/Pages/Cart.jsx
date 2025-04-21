import React from 'react'
import CartCard from '../Components/CartCard'
function Cart({ cartItems, removeFromCart, orderGames }) {

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.cost.replace(/[^0-9.]/g, '')), 0)
  return (
    <div>
      <h2 className='text-3xl font-bold text-center p-4'>Cart</h2>
      {cartItems.length === 0 ? (
          <div className='text-center'>Your Cart is Empty</div>
      ) : (
        <div>
          <div className='text-right text-xl font-semibold m-2'>
            Cart Total: ${total}
          </div>
        {
          cartItems.map((item)=> (
            <CartCard key = {item.id} imglink={item.imglink} name={item.name} cost={item.cost} onRemove={() => removeFromCart(item.id)}/>
          ))
        }
        <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4' onClick={orderGames}>Order</button>
        </div>
      )}
    </div>
  )
}

export default Cart