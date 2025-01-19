import wave from "../assets/pattern.svg"
import sd from "../assets/logo-sd.png"
import smp from "../assets/logo-smp.png"
import smk from "../assets/logo-sma.png"
import kuliah from "../assets/logo-itk.png"
import Wave from "react-wavify"
import { PiInfoThin } from "react-icons/pi";

import fotoSd2 from "../assets/foto_sd.webp"
import fotoSmp2 from "../assets/foto_smp2.jpg"
import fotoSmk2 from "../assets/smk2smd.jpeg"
import fotoItk2 from "../assets/foto_itk.jpeg"

import AOS from "aos"
import '../../node_modules/aos/dist/aos.css'
import { useEffect } from "react"

const AboutComponent = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  })
  return (
    <div className="mt-6 mb-[280px] relative lg:mt-40">
      <img
        src={wave}
        alt="wave"
        className="rotate-180 lg:w-full"
      />
      <h1 className="text-white font-medium text-2xl text-center capitalize absolute top-8 inset-0"
        data-aos="fade-down"
        data-aos-duration="1000"
      >about me</h1>
      {/* SD */}
      <div className="absolute top-20 left-3"
        data-aos="fade-right"
        data-aos-duration="1000"
        // data-aos-offset="300"
        data-aos-delay="0"
      >
        <div className="border border-red-600 w-full drop-shadow-md text-white bg-black bg-opacity-10  rounded-md p-4 flex flex-row gap-4 items-center">
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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <PiInfoThin 
            type="button"
            className="z-20 w-8 h-8 text-quaternary"
            onClick={() => document.getElementById('my_modal_2').showModal()}
          />
        </div>
        <dialog id="my_modal_2" className="modal">x
          <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg text-center">SD Negeri 017 Muara Badak</h3>
            <img
              src={fotoSd2}
              alt=""
              className="w-full h-1/2"
            />
            <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=%20SD%20Negeri%20017%20Muara%20Badak,%20Jl.%20Perintis%20Gg.%20Sidorejo%20III%20No.RT.25,%20Badak%20Baru,%20Kec.%20Muara%20Badak,%20Kabupaten%20Kutai%20Kartanegara,%20Kalimantan%20Timur%2075382+(SD%20Negeri%20017%20Muara%20Badak)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {/* SMP */}
      <div className="absolute top-56 right-3"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        // data-aos-offset="300"
      >
        <div className="border border-blue-500 w-full drop-shadow-md text-white bg-black bg-opacity-10 rounded-md p-4 flex flex-row gap-4 items-center">
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
          <PiInfoThin 
            type="button"
            className="z-20 w-8 h-8 text-quaternary"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          />
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg text-center">SMP Negeri 02 Muara Badak</h3>
            <img
              src={fotoSmp2}
              alt=""
              className="w-full"
            />
            <iframe
              width="100%"
              height="300"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=SMP%202,%20Muara%20Badak,%20Kutai%20Kartanegara,%20Kalimantan%20Timur+(SMP%20N%202%20Muara%20Badak)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {/* SMK */}
      <div className="absolute top-[370px] left-3"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200">
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
          <PiInfoThin 
            type="button"
            className="z-20 w-8 h-8 text-quaternary"
            onClick={() => document.getElementById('my_modal_4').showModal()}
          />
        </div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg text-center">SMK N 2 Samarinda</h3>
            <img
              src={fotoSmk2}
              alt=""
              className="w-full"
            />
            <iframe
              width="100%"
              height="300"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=SMK%20N%202%20Samarinda,%20Jl.%20A.%20Wahab%20Syahranie%20No.01,%20Air%20Hitam,%20Kec.%20Samarinda%20Ulu,%20Kota%20Samarinda,%20Kalimantan%20Timur%2075124+(SMK%20N%202%20Samarinda)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {/* Kuliah */}
      <div className="absolute top-[520px] right-3"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200">
        <div className="border border-green-500 w-full drop-shadow-md text-white bg-black bg-opacity-10  rounded-md p-4 flex flex-row gap-4 items-center">
          <div className="flex flex-col items-center z-20">
            <h1 className="font-medium text-base">Univ</h1>
            <img
              src={kuliah}
              alt="logo-sd"
              className="w-16"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm z-20">
            <div className="flex flex-row gap-1 justify-between">
              <span>Kampus</span>
              <div>:</div>
              <p className="w-full">ITK</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Kota</span>
              <div>:</div>
              <p className="w-full">Balikpapan</p>
            </div>
            <div className="flex flex-row gap-1 justify-between">
              <span>Provinsi</span>
              <div>:</div>
              <p className="text-full">Kalimantan Timur</p>
            </div>
          </div>
          <Wave fill='#008000'
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
          <PiInfoThin 
            type="button"
            className="z-20 w-8 h-8 text-quaternary"
            onClick={() => document.getElementById('my_modal_5').showModal()}
          />
        </div>
        <dialog id="my_modal_5" className="modal">
          <div className="modal-box flex flex-col gap-2">
            <h3 className="font-bold text-lg text-center">Institut Teknologi Kalimantan</h3>
            <img
              src={fotoItk2}
              alt=""
              className="w-full"
            />
            <iframe
              width="100%"
              height="300"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Institut%20Teknologi%20Kalimantan,%20%20Jl.%20Soekarno%20Hatta%20No.KM%2015,%20Karang%20Joang,%20Kec.%20Balikpapan%20Utara,%20Kota%20Balikpapan,%20Kalimantan%20Timur%2076127+(Institut%20Teknologi%20Kalimantan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  )
}

export default AboutComponent