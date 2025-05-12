import React from 'react'

function Card({imglink, name, cost, onAddToCart, inCart, inLibrary}) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
      <img src={imglink} alt={name} className="w-64 h-40 object-cover rounded mb-4"/>
      <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
      <h6 className=" mb-4 text-center">{cost}</h6>
      {inLibrary ? (<button className='bg-gray-400 text-white px-4 p-2 cursor-not-allowed' disabled>In Library</button>):
      inCart ? <p className="text-green-500 mb-2">In Cart</p> :
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={onAddToCart}>Add to Cart</button>
}
    </div>
  )
}

export default Card