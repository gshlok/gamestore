import React from 'react'

function CartCard({ imglink, name, cost, onRemove }) {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg shadow-md p-4 m-4 hover:scale-102 hover:shadow-xl">
      <img src={imglink} alt={name} className="w-20 h-20 object-cover rounded mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p>{cost}</p>
      </div>
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Remove
      </button>
    </div>
  )
}

export default CartCard