import { UseGlobalHook } from "../context.tsx";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import TotalPrice from "./TotalPrice.tsx";
import EmptyCart from "./EmptyCart.tsx";

const Mobiles = () => {
  const { cartItems, loading, removeItem, IncAmount, DecAmount } = UseGlobalHook();

  if (loading) {
    return (
      <div className="mt-10 grid place-items-center">
        <h1>Loading...</h1>
      </div>
    );
  }



  if (cartItems.length > 0) {
    return (
      <>
        {cartItems.map((ele) => {
          const { id, title, img, amount, price } = ele;
          return (
            <div className="flex items-center pr-1" key={id}>
              <div>
                <img src={img} alt="" className="h-16" />
              </div>
              <div className="flex-grow text-left">
                <h5 className="text-sm font-semibold">{title}</h5>
                <p className="text-xs text-zinc-600">${price}</p>
                <button className="ease text-sm tracking-wider text-sky-700 transition-all hover:text-sky-600" onClick={() => removeItem(id)}>
                  remove
                </button>
              </div>
              <div className="flex flex-col">
                <button onClick={() => IncAmount(id)}>
                  <IoIosArrowUp className="ease -mb-1 text-lg text-sky-700 transition-all hover:text-sky-600" />
                </button>
                <span className="pr-[1px] text-sm">{amount}</span>
                <button onClick={() => DecAmount(id)}>
                  <IoIosArrowDown className="ease -mt-1 text-lg text-sky-700 transition-all hover:text-sky-600" />
                </button>
              </div>
            </div>
          )
        })}
        
        <TotalPrice />
      </>
    )
  }

  else {
    return <EmptyCart/>
  }


};

export default Mobiles;
