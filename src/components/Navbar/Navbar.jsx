import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/ProductState";
import "./navbar.css";

const Navbar = ({search, setSearch}) => {
  const {cart} = CartState()
  return (
    <div className="navbar_main">
      <div className="logo mx-2">
      <Link to='/'>
          <h2>InstaCart</h2>
          </Link>
      </div>
      <div className="search my-1">
        <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <FaSearch />
      </div>
      <div className="cart mx-2">
         <Link to='/cart'><h2>Cart<FaShoppingCart className="text-success"/>({cart.length})</h2></Link>
      </div>
    </div>
  );
};

export default Navbar;
