import shadow from "../assets/shadow.png";
import helmi from "../assets/foto-helmi.png";
import bintang from "../assets/Star 3.png";
import kotak from "../assets/Rectangle 4.png";
import bulat from "../assets/Ellipse 15.png";
import wave from "../assets/pattern.svg";
import Flag from "react-world-flags";

import Wave from "react-wavify";
import { useState } from "react";

const MainSactionComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col pt-24 z-10 lg:flex lg:flex-row lg:justify-around lg:items-center lg:pt-36">
      {/* say hello */}
      <div className="flex flex-col gap-3 ml-4">
        <div className="capitalize">
          <h1 className="text-quinary text-sm lg:text-base">hello 👋🏻</h1>
          <h2 className="text-quaternary font-semibold text-2xl lg:text-4xl">
            im helmi
          </h2>
        </div>
        <div className="capitalize">
          <h3 className="text-white font-medium text-lg lg:text-2xl">
            frontend web developer
          </h3>
          <div className="flex items-center gap-3">
            <h4 className="text-white font-extralight lg:text-lg">from indonesia</h4>
            <Flag code="ID" style={{ width: 25 }} />
          </div>
        </div>
        <div>
          <button
            className="capitalize w-1/2 h-9 text-primary border-none rounded-md bg-quaternary font-medium text-base relative lg:w-[80%] lg:hover:scale-105 duration-200 ease-in-out hover:text-quaternary hover:bg-secondary"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="https://wa.me/6285346901814"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 inset-x-10 z-20"
            >
              contact me
            </a>
            <Wave
              fill={isHovered ? "#DBF227" : "#005C53"} // Warna berubah saat hover
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 138,
                amplitude: 18,
                speed: 0.15,
                points: 4,
              }}
              className="absolute z-10 bottom-[0.3px]"
            />
          </button>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <img src={wave} alt="" className="absolute lg:hidden" />
        <img src={shadow} alt="" className="animate-pulse" />
        <div className="flex justify-center items-center">
          <img
            src={helmi}
            alt=""
            className="top-4 w-96 absolute drop-shadow-2xl"
          />
          <img
            src={bintang}
            alt=""
            className="w-16 h-16 absolute top-10 left-10 animate-spin"
          />
          <img
            src={bulat}
            alt=""
            className="w-14 h-14 absolute left-4 -bottom-6 animate-bounce lg:left-10 lg:bottom-2"
          />
          <img
            src={kotak}
            alt=""
            className="w-16 h-16 absolute top-36 right-4 loading-bars"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSactionComponent;
