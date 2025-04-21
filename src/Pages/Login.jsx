import React from 'react'

function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 items-center justify-center">
        <div className="p-8 rounded w-full max-w-sm bg-gray-100 outline-2 shadow-lg">
          <h2 className=" text-3xl font-bold mb-6 text-center">Login</h2>

          <div className="mb-6">
            <div className="mb-1">Email</div>
            <input className="w-full px-3 py-2 border rounded hover:bg-gray-50" placeholder="Email"/>
          </div>

          <div className="mb-6">
            <div className="mb-1">Password</div>
            <input className="w-full px-3 py-2 border rounded hover:bg-gray-50" placeholder="Password"/>
          </div>

          <button className="w-full bg-blue-600 text-white px-3 py-3 rounded hover:bg-blue-700 transition">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login