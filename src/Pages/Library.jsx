function Library({ libraryItems }) {
  return (
    <div>
      <h2 className='text-3xl font-bold text-center p-4'>Library</h2>
      {libraryItems.length === 0 ? (
        <p className = 'text-center'>Your Library is Empty</p>
      ) : (
        <div className='grid grid-cols-3 gap-4 p-4'>
          {libraryItems.map(item => (
            <div key={item.id} className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={item.imglink} alt={item.name} className="w-64 h-40 object-cover rounded mb-4"/>
              <h2 className="text-lg font-semibold mb-2 text-center">{item.name}</h2>
              <h6 className="mb-4 text-center">{item.cost}</h6>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Library