import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { CartState } from "../../Context/ProductState";
import "./navbar.css";

const Navbar = ({search, setSearch}) => {
  const {cart} = CartState()
  const navigate = useNavigate()
  const goToSeler = ()=>{
    navigate('/seller')
  }
  const goToCart = ()=>{
    navigate('/cart')
  }

  return (
    <>
    <div className="navbar_main">
    <div className="nav_top">
      <div className="logo">
      <Link to='/'>
          <h1><i>Insta<span>Cart</span></i></h1>
          </Link>
      </div>
      <div className="search_input">
        <input type="text" placeholder="Search the store" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <span className="search_icon"><FiSearch /></span>
      </div>
      <div className="available mt-3">
        <h6> Available 24/7 at</h6>
        <h5>+91-8434304475</h5>
      </div>
      <div className="wish_List mt-2">
      <span className="mx-3"><FaRegHeart /></span>
      <p>Wish Lists</p>
      </div>
      <div className="signin">
      <span className="mx-1"><BiUser /></span>
      <p>Signin</p>
      </div>
      <div className="cart" onClick={goToCart}>
      <span><BiCartAlt/></span><span className="cart_len">{cart.length}</span>
      <p>Cart</p>
      </div>
      </div>
    <div className="nav_items">
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Career</li>
        <li onClick={goToSeler}>Seller</li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default Navbar;
