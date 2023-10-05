import React from 'react'
import {FaShoppingBag} from "react-icons/fa";
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Navbar = () => {
  const {amount} = useSelector((state)=>state.cart);
  return (
    <nav className="navbar">
        <h1>OPMobiles</h1>
        <div className="cartBag">
        <FaShoppingBag/>
        <p className="totalItems">{amount}</p>
        </div>
    </nav>
  )
}

export default Navbar;
