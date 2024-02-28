import { FaBagShopping } from "react-icons/fa6";
import Mobiles from "./Components/Mobiles.tsx";
import { UseGlobalHook } from "./context.tsx";
import Modal from "./Components/Modal.tsx";


const App = () => {
  const {totalAmt,modal} = UseGlobalHook();
  return (

    <div className="min-h-screen pb-10">
      <nav className="bg-sky-400">
        <div className="w-4/5 mx-auto flex justify-between py-3 text-xl text-white font-semibold items-center tracking-wider">
          <h1 className="">OPMobiles</h1>
          <p className="relative">
            <FaBagShopping />
            <span className="absolute bg-sky-600 min-w-6 min-h-6 flex items-center justify-center text-xs rounded-full tracking-tight -top-3 -right-4">{totalAmt}</span>
          </p>
        </div>
      </nav>

      <main className="text-center mt-6 pt-10">
        <h1 className="text-2xl uppercase font-poppins font-medium">Your Bag</h1>
        <div className="mx-auto max-w-[672px] mt-8 flex w-11/12 flex-col gap-6">
      <Mobiles/>
        </div>
      </main>


      {/* Modal */}
      {
        modal && <Modal/>
      }
    </div>
  )
}

export default App
