import shadow from "../assets/shadow.png"
import helmi from "../assets/foto-helmi.png"
import bintang from "../assets/Star 3.png"
import kotak from "../assets/Rectangle 4.png"
import bulat from "../assets/Ellipse 15.png"

const MainSactionComponent = () => {
  return (
    <div className="flex flex-col mx-4 pt-24 z-10">
      {/* say hello */}
      <div className="flex flex-col gap-3">
        <div className="capitalize">
          <h1 className="text-quinary text-sm">hello 👋🏻</h1>
          <h2 className="text-quaternary font-semibold text-2xl">im helmi</h2>
        </div>
        <div className="capitalize">
          <h3 className="text-white font-medium text-lg">frontend web developer</h3>
          <h4 className="text-white font-extralight">from indonesia</h4>
        </div>
        <div>
          <button className="capitalize text-primary border-none rounded-lg py-2 px-4 bg-quaternary font-medium text-sm">
            contact me
          </button>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <img src={shadow} alt="" className="animate-pulse" />
        <div className="flex justify-center items-center">
          <img src={helmi} alt="" className="top-0 w-96 absolute drop-shadow-2xl" />
          <img src={bintang} alt="" className="w-16 h-16 absolute top-10 left-10 animate-spin" />
          <img src={bulat} alt="" className="w-14 h-14 absolute left-4 bottom-4 animate-bounce" />
          <img src={kotak} alt="" className="w-14 h-14 absolute top-36 right-4 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default MainSactionComponent