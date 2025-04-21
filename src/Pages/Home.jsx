import React from 'react'
import Card from '../Components/Card'

function Home({products, addToCart, cartItems, libraryItems}) {
  return (
    <div>
      <h2 className='text-3xl font-bold text-center p-4'>Games</h2>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {products.map(product =>{
          const inCart = cartItems.some(item => item.id === product.id);
          const inLibrary = libraryItems.some(item => item.id === product.id);
        
        return (<Card key ={product.id} imglink={product.imglink} name={product.name} cost={product.cost} onAddToCart={()=> addToCart(product)} inCart={inCart} inLibrary={inLibrary}/>);})}
      </div>
    </div>
  )
}

export default Home
