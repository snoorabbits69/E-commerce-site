import {Link} from 'react-router-dom'
import {useState} from 'react';

import { Products } from '../Product/Products';
import {Home} from "../pages/Home"
export const Navbar=()=>{
   
   
return(
    <div>
    <nav className="navbar">

<div className="logo"/>

<ul className='left'>
       <li> <Link to="/" className='rightnav'>Home </Link></li>
       <li><Link to="/About" className='rightnav'>About </Link></li>
       <li><Link to="/Cart" className='rightnav'>Cart</Link></li>
        </ul>
    </nav>

    </div>
)
}
