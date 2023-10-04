import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem,incAmount,decAmount } from '../features/cartSlice/UserSlice';

const CartItem = ({id,title,price,img,amount}) => {
  const dispatch=useDispatch();

    
  return (
    <section className='cartItems'>
    <div className="item-info">
        <div className="item-img">
            <img src={img} alt="Samsung Galaxy S7" />
        </div>
        <div className="item-des">
            <h4>{title}</h4>
            <p>{price}</p>
            <button className="remove btnCommon" onClick={()=>dispatch(removeItem(id))}>remove</button>
        </div>
    </div>

    <div className="item-amount">
    <button className="btn btnCommon " onClick={()=>dispatch(incAmount(id))}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' stroke='currentColor'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
    </button>
    <p className="amount">{amount}</p>
        
    <button className="btn btnCommon" onClick={()=>dispatch(decAmount(id))}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' stroke='currentColor'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
    </button>
    </div>

    </section>

  )
}

export default CartItem
