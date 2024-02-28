import { UseGlobalHook } from "../context.tsx";

const TotalPrice = () => {
  const {totalPrice, clearCart} = UseGlobalHook();
  return (
    <div>
      <hr className="border-[1px] border-zinc-300" />
      <div className="mt-1 flex items-center justify-between px-3 ">
        <h6 className="font-semibold ">Total</h6>
        <p className="font-semibold">${totalPrice}</p>
      </div>

      <button className="mt-3 rounded-lg border-2 border-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-red-500 transition-all duration-200 ease-out hover:border-red-600 hover:bg-red-50 hover:text-red-600" onClick={() => clearCart()}>
        Clear Cart
      </button>
    </div>
  );
};

export default TotalPrice;
