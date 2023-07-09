import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home} from "../pages/Home"
import {Navbar} from "../Components/Navbar"
import {About} from "../pages/About"
import {Cart} from "../pages/Cart"
import {Notfound} from "../pages/Notfound"
import { ShopContextProvider } from '../context/Shopcontext'
import { useContext } from "react"

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function App() {
  
return(
  <div className='app'>
    <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
   
  </div>
)

}

export default App
