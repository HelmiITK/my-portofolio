import { CiClock2 } from "react-icons/ci";
import healthkathonSertif from "../assets/Healthkathon BPJS 2022_page-0001.jpg"
import asdosSertif from "../assets/asdosSisdig-sertif.png"
import iscSertif from "../assets/ISC - Helmi_page-0001.jpg"
import greenSertif from "../assets/Green Campaign 5.0 - Helmi_page-0001.jpg"
import { CiCircleInfo } from "react-icons/ci";

import AOS from "aos"
import '../../node_modules/aos/dist/aos.css'
import { useEffect } from "react"

const CertificateComponent = () => {
  const certificate = [
    {
      id: 1,
      title: 'asisten dosen',
      jam: '120 Jam',
      image: asdosSertif,
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti consequatur, dolorum, unde eaque atque illum maxime excepturi hic sint iure dicta nisi non distinctio',
      borderClass: 'border border-x-blue-500 border-t-secondary border-b-blue-500'
    },
    {
      id: 2,
      title: 'healthkathon BPJS',
      jam: '120 Jam',
      image: healthkathonSertif,
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti consequatur, dolorum, unde eaque atque illum maxime excepturi hic sint iure dicta nisi non distinctio',
      borderClass: 'border border-x-purple-500 border-t-secondary border-b-purple-500'
    },
    {
      id: 3,
      title: 'green campaign',
      jam: '120 Jam',
      image: greenSertif,
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti consequatur, dolorum, unde eaque atque illum maxime excepturi hic sint iure dicta nisi non distinctio',
      borderClass: 'border border-x-lime-500 border-t-secondary border-b-lime-500'
    },
    {
      id: 4,
      title: 'ISC',
      jam: '120 Jam',
      image: iscSertif,
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti consequatur, dolorum, unde eaque atque illum maxime excepturi hic sint iure dicta nisi non distinctio',
      borderClass: 'border border-x-yellow-500 border-t-secondary border-b-yellow-500'
    },
  ]

  useEffect(() => {
    AOS.init({
      once: false,
    })
  })

  return (
    <div className="mt-12">
      <h1 className="text-white font-medium text-center capitalize text-2xl" data-aos="fade-down" data-aos-duration="1000">
        certificate
      </h1>
      <div className="carousel carousel-center bg-transparent rounded-box max-w-sm space-x-4 p-4 mt-3">
        {certificate.map((item, i) => (
          <div
            key={i}
            className={`carousel-item rounded-box flex flex-col gap-2 overflow-hidden ${item?.borderClass}`}
            data-aos="flip-right" 
            data-aos-duration='1000'
          >
            <img
              src={item?.image}
              className="w-80 object-contain"
            />
            <div className="p-4 flex flex-col gap-2">
              {/* judul */}
              <h1 className="capitalize text-quaternary font-medium ">{item?.title}</h1>
              {/* jam */}
              <div className="flex items-center gap-1">
                <CiClock2 className="text-quinary" />
                <h2 className="text-sm font-light text-quinary">{item?.jam}</h2>
              </div>
              {/* desk */}
              <div className="flex items-start gap-1">
                <CiCircleInfo className="text-quinary" />
                <p className="w-64 text-sm text-justify text-quinary tracking-wider">{item?.deskripsi}</p>
              </div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="border-none bg-quaternary rounded-box py-[5px] text-sm font-medium mt-4 capitalize"
                onClick={() => document.getElementById(item?.id).showModal()}>
                visite certificate
              </button>
              <dialog id={item?.id} className="modal">
                <div className="modal-box w-full bg-transparent p-0">
                  <img
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CertificateComponent