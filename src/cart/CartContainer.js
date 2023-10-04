import React from 'react'
import CartItem from './cartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { openModal } from '../ModalFeatures/ModalSlice/ModalSlice';
const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartData,total} = useSelector((state)=>state.cart);

  if(cartData.length===0){
    return(
      <>
      <section className="cart-Container">
          <div className="cart-center">
          <h1>Your Bag</h1>
      <p className='empty'>is currently empty</p>
      </div>
      </section>
      </>
    )
  }
  // else{
    
    return (
        <section className="cart-Container">
          <div className="cart-center">
          <h1>Your Bag</h1>
          {
            cartData.map((curEle)=>{
              
             return <CartItem key={curEle.id} {...curEle}/>
            })
          }
          <div className="underline"></div>
          <div className="total">
              <h4>Total</h4>
              <p>${total}</p>
          </div>
          <div className="clear">
          <button className="clearBtn btn" onClick={()=>dispatch(openModal())}>clear cart</button>
          </div>
          </div>
        </section>
    )
    
  // }
}

export default CartContainer
