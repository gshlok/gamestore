import { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Library from './Pages/Library'
import Login from './Pages/Login'
import Header from './Components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalApi from './services/GlobalApi'


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [libraryItems, setLibraryItems] = useState([]);
  const [products, setProducts] = useState([]);
  // const products = [
  //   {id: 1,imglink: "/cardImages/cyberpunk.jpg" ,name: "Cyberpunk 2077", cost: "$59.99",},
  //   {id: 2,imglink: "/cardImages/witcher3.webp", name: "Witcher 3", cost: "$10.99"},
  //   {id: 3,imglink: "/cardImages/rdr2.jpg", name: "Red Dead Redemption 2", cost: "$29.99"},
  //   {id: 4,imglink: "/cardImages/eldenring.jpg", name: "Elden Ring", cost: "$74.99"}
  // ]
  useEffect(() => {
    getGameList();
  }, [])
   const getGameList = () => {
    GlobalApi.getGames.then((resp) => {
      const mappedProducts = (resp.data.results || []).map(game => ({
        id: game.id,
        imglink: game.background_image,
        name: game.name,
        cost: `$${(Math.random() * 60 + 10).toFixed(2)}`
      }));
      setProducts(mappedProducts);
      console.log(mappedProducts);
    })
   }

  const orderGames = () => {
    const newLibrary = [...libraryItems, ...cartItems.filter(cartItem => !libraryItems.some(libItem => libItem.id === cartItem.id)),];
    setLibraryItems(newLibrary);
    setCartItems([]);
  }

  const addToCart = (product) => {  
    const exists = cartItems.some((item) => item.id === product.id);

    if(!exists) {setCartItems([...cartItems, product]);}
  };
// this does the same thing as cartItems.push(product) but it is better to use separate array.
// Hence we use spread (...) operator.

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className='col-span-3 md:ml-[20vw] p-2'>
          <Routes>
            <Route index element={<Home products={products} addToCart={addToCart} cartItems={cartItems} libraryItems={libraryItems}/>} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} orderGames={orderGames} libraryItems={libraryItems}/>} />
            <Route path="/library" element={<Library libraryItems={libraryItems}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home products={products} addToCart={addToCart} cartItems={cartItems} libraryItems={libraryItems}/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
