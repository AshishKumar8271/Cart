import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice/UserSlice";
import { closeModal } from "../ModalFeatures/ModalSlice/ModalSlice";
const Modal =()=>{
    const dispatch = useDispatch();

    return(
        <section className="Modal-overlay">
            <div className="modal">
                <p>Remove All Items From Your Shopping Cart ?</p>
                <div className="choice-Btn">
                    <button className="Confirm btn" onClick={()=>{dispatch(clearCart());
                    dispatch(closeModal());}
                    }>Confirm</button>
                    <button className="clearBtn btn" onClick={()=>dispatch(closeModal())}>Cancel</button>
                </div>
            </div>
        </section>
    )
}

export default Modal;