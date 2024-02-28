import { UseGlobalHook } from "../context.tsx"

const Modal = () => {
    const {Confirm,Cancel} = UseGlobalHook();
  return (
    <div className="fixed top-0 left-0 h-full w-full grid place-items-center z-10 bg-black bg-opacity-30">
      <div className="w-4/5 max-w-[672px] py-10 md:py-14 px-3 rounded-xl bg-white shadow-xl">
        <h3 className="text-center font-semibold">Remove All Items From Your Shopping Cart ?</h3>

        <div className="mt-8 flex justify-around">
            <button className="uppercase text-xs border-2 px-3 py-1 rounded-md border-red-400 font-semibold text-red-400 tracking-wider transition-all duration-200 ease-out hover:border-red-600 hover:bg-red-50 hover:text-red-600" onClick={()=> Confirm()}>confirm</button>

            <button className="uppercase text-xs border-2 px-3 py-1 rounded-md border-blue-700 font-semibold text-blue-700 tracking-wider transition-all duration-200 ease-out hover:border-blue-900 hover:bg-blue-50 hover:text-blue-900" onClick={()=> Cancel()}>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
