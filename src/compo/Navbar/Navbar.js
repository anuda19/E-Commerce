import React from 'react';
import {BsList} from 'react-icons/bs'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggle = ()=>{
        setNav(true)
    }

    return (
        <nav className="navBar">
            <div className="logo">Insta Cart</div>
            <ul className='nav-links'>
                <li><NavLink to="/home" >Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/addtocart">Add To Cart</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
                <button className='btnList' onClick={toggle}><BsList /></button>
        </nav>
    );
}



export default Navbar;


// <img src="../Image/logo.png"  />