import wave from "../assets/pattern.svg"
import sd from "../assets/logo-sd.png"
import smp from "../assets/logo-smp.png"
import smk from "../assets/logo-sma.png"
import kuliah from "../assets/logo-itk.png"
import Wave from "react-wavify"

const AboutComponent = () => {
  return (
    <div className="mt-6 mb-80 relative">
      <img
        src={wave}
        alt="wave"
        className="rotate-180"
      />
      <h1 className="text-white font-medium text-2xl text-center capitalize absolute top-8 inset-0">about me</h1>
      {/* SD */}
      <div className="absolute top-20 left-3">
        <div className="border border-red-500 w-full drop-shadow-md text-white bg-black bg-opacity-10  rounded-md p-4 flex flex-row gap-4 items-center">
          <div className="flex flex-col items-center z-20">
            <h1 className="font-medium text-base">SD</h1>
            <img
              src={sd}
              alt="logo-sd"
              className="w-16 h-16"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm z-20">
            <div className="flex flex-row gap-1 justify-between">
              <span>SD</span>
              <div>:</div>
              <p className="w-full">017 Muara Badak</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Kota</span>
              <div>:</div>
              <p className="w-full">Kutai Kartanegara</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Provinsi</span>
              <div>:</div>
              <p className="text-full">Kalimantan Timur</p>
            </div>
          </div>
          <Wave fill='#E62129'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 120,
              amplitude: 20,
              speed: 0.15,
              points: 4
            }}
            className="absolute z-10 bottom-0 left-0"
          />
        </div>
      </div>
      {/* SMP */}
      <div className="absolute top-56 right-3">
        <div className="border border-blue-500 w-full drop-shadow-md text-white bg-black bg-opacity-10  rounded-md p-4 flex flex-row gap-4 items-center">
          <div className="flex flex-col items-center z-20">
            <h1 className="font-medium text-base">SMP</h1>
            <img
              src={smp}
              alt="logo-sd"
              className="w-16 h-16"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm z-20">
            <div className="flex flex-row gap-1 justify-between">
              <span>SMP</span>
              <div>:</div>
              <p className="w-full">2 Muara Badak</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Kota</span>
              <div>:</div>
              <p className="w-full">Kutai Kartanegara</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Provinsi</span>
              <div>:</div>
              <p className="text-full">Kalimantan Timur</p>
            </div>
          </div>
          <Wave fill='#3b82f6'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 120,
              amplitude: 20,
              speed: 0.15,
              points: 4
            }}
            className="absolute z-10 bottom-0 left-0"
          />
        </div>
      </div>
      {/* SMK */}
      <div className="absolute top-[370px] left-3">
        <div className="border border-gray-500 w-full drop-shadow-md text-white bg-black bg-opacity-10  rounded-md p-4 flex flex-row gap-4 items-center">
          <div className="flex flex-col items-center z-20">
            <h1 className="font-medium text-base">SMK</h1>
            <img
              src={smk}
              alt="logo-sd"
              className="w-16 h-16"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm z-20">
            <div className="flex flex-row gap-1 justify-between">
              <span>SMK</span>
              <div>:</div>
              <p className="w-full">2 Samarinda</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Kota</span>
              <div>:</div>
              <p className="w-full">Samarinda</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Provinsi</span>
              <div>:</div>
              <p className="text-full">Kalimantan Timur</p>
            </div>
          </div>
          <Wave fill='#6b7280'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 120,
              amplitude: 20,
              speed: 0.15,
              points: 4
            }}
            className="absolute z-10 bottom-0 left-0"
          />
        </div>
      </div>
      {/* Kuliah */}
      <div className="absolute top-[515px] right-3">
        <div className="border border-green-500 w-[302px] drop-shadow-md text-white bg-black bg-opacity-10  rounded-md p-4 flex flex-row gap-4 items-center">
          <div className="flex flex-col items-center z-20">
            <h1 className="font-medium text-base">University</h1>
            <img
              src={kuliah}
              alt="logo-sd"
              className="w-16 h-16"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm z-20">
            <div className="flex flex-row gap-1 justify-between">
              <span>Univ</span>
              <div>:</div>
              <p className="w-full">Kalimantan Institute of Technology</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Kota</span>
              <div>:</div>
              <p className="w-full">Balikpapan</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Provinsi</span>
              <div>:</div>
              <p className="w-full">Kalimantan Timur</p>
            </div>
          </div>
          <Wave fill='#22c55e'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 120,
              amplitude: 20,
              speed: 0.15,
              points: 4
            }}
            className="absolute z-10 bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutComponent