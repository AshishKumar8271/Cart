import React, { useEffect } from 'react';
import Navbar from './cart/Navbar';
import "./cart/index.css";
import CartContainer from './cart/CartContainer';
import Modal from "./cart/Modal";
import { useDispatch } from 'react-redux';
import { totalAmount,fetchCart } from './features/cartSlice/UserSlice';
import { useSelector } from 'react-redux';
const App = () => {
  const {cartData,loading} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const {isOpen} = useSelector((state) => state.modal);



  useEffect(()=>{
    dispatch(fetchCart());
  },[])

  useEffect(()=>{
    dispatch(totalAmount());
  },[cartData]);


  
  if(loading){
    return(
      <section className='loading'>
        <h1>Loading...</h1>  
      </section>
    )
  }
    return (
      <>
      {
        isOpen && <Modal/>
      }
      <Navbar/>
      <CartContainer/>
      
      </>
    )
}

export default App
