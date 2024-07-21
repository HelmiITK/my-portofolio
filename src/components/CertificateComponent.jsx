// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import '../components/certif.css'
import { CiClock2 } from "react-icons/ci";
import healthkathonSertif from "../assets/Healthkathon BPJS 2022_page-0001.jpg"
import asdosSertif from "../assets/asdosSisdig-sertif.png"
import iscSertif from "../assets/ISC - Helmi_page-0001.jpg"
import greenSertif from "../assets/Green Campaign 5.0 - Helmi_page-0001.jpg"
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

const CertificateComponent = () => {
  // const [isTruncated, setIsTruncated] = useState(true);
  // const [showFullText, setShowFullText] = useState(false);

  // const text = 'Perlombaan cabang machine learning tahunan yang diadakan oleh BPJS yang bertajub Healthkathon';
  // const truncatedText = text.length > 25 ? text.substring(0, 25) + '...' : text;

  // const handleTextClick = () => {
  //   setShowFullText(true);
  // }

  // const handleClose = () => {
  //   setShowFullText(false);
  // }

  // const [isExpanded1, setIsExpanded1] = useState(false);
  // const [isExpanded2, setIsExpanded2] = useState(false);

  // const text1 = 'Perlombaan cabang machine learning tahunan yang diadakan oleh BPJS yang bertajub Healthkathon.';
  // const text2 = 'Berperan sebagai asisten dosen dalam membantu kegiatan mengajar yang diadakan pada lab praktikum.';
  // const truncatedText1 = text1.length > 25 ? text1.substring(0, 25) + '...' : text1;
  // const truncatedText2 = text2.length > 25 ? text2.substring(0, 25) + '...' : text2;

  // const handleTextClick1 = () => {
  //   setIsExpanded1(!isExpanded1);
  // };
  // const handleTextClick2 = () => {
  //   setIsExpanded2(!isExpanded2);
  // };

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


  return (
    <div className="mt-12">
      <h1 className="text-white font-medium text-center capitalize text-2xl">
        certificate
      </h1>
      {/* 
      <div className='rounded-tl-badge w-8 h-8 left-[74px] absolute border-t-8 border-primary -top-2 rotate-90'></div>
      <div className='rounded-tr-badge w-8 h-8 right-[74px] absolute border-t-8 border-primary -top-2 -rotate-90'></div> */}

      {/* <div className='w-full bg-quinary pt-4 pb-10 px-4'> */}
      {/* <div className='flex mt-14 flex-col gap-2 w-full p-4 shadow-secondary shadow-[0px_8px_20px_-8px] bg-white rounded-lg bg-opacity-15'>
          <img src={healthkathonSertif} alt="Healthkathon Sertifikat" className='w-full' />
          <h1 className='text-secondary font-bold text-base'>Healthkathon</h1>
          <p className='text-black text-sm'>
            {isExpanded1 ? text1 : truncatedText1}
            {text1.length > 25 && (
              <span
                onClick={handleTextClick1}
                className='text-blue-500 cursor-pointer text-sm italic'
              >
                {isExpanded1 ? ' Show less' : ' Show more'}
              </span>
            )}
          </p>
          <div className='flex gap-2'>
            <CiClock2 className='text-secondary w-5 h-5 text-start' />
            <p>72 jam</p>
          </div>
          <button className='bg-secondary mt-2 text-quaternary rounded-lg py-2 px-4 text-sm font-medium'>Visit</button>
        </div>
        <div className='flex mt-14 flex-col gap-2 w-full p-4 shadow-secondary shadow-[0px_8px_20px_-8px] bg-white rounded-lg bg-opacity-15'>
          <img src={asdosSertif} alt="asisten dosen" className='w-full' />
          <h1 className='text-secondary font-bold text-base'>Asisten Dosen</h1>
          <p className='text-black text-sm'>
            {isExpanded2 ? text2 : truncatedText2}
            {text2.length > 25 && (
              <span
                onClick={handleTextClick2}
                className='text-blue-500 cursor-pointer text-sm italic'
              >
                {isExpanded2 ? ' Show less' : ' Show more'}
              </span>
            )}
          </p>
          <div className='flex gap-2'>
            <CiClock2 className='text-secondary w-5 h-5 text-start' />
            <p>120 jam</p>
          </div>
          <button className='bg-secondary mt-2 text-quaternary rounded-lg py-2 px-4 text-sm font-medium'>Visit</button>
        </div>
        <div className='flex mt-4 flex-col gap-2  w-full shadow-[0px_8px_20px_-8px] p-4 shadow-secondary bg-white rounded-lg bg-opacity-15'>
          <img src={iscSertif} alt="" className='w-full' />
          <h1 className='text-secondary font-bold text-base'>Panitia ISC</h1>
          <p className='text-black italic text-sm'>Belajar dasar pemrograman web javascript</p>
          <div className='flex gap-2'>
            <CiClock2 className='text-secondary w-5 h-5 text-start' />
            <p>48jam</p>
          </div>
          <button className='bg-secondary mt-2 text-quaternary rounded-lg py-2 px-4 text-sm font-medium'>Visit</button>
        </div>
        <div className='flex mt-4 flex-col gap-2  w-full shadow-[0px_8px_20px_-8px] p-4 shadow-secondary bg-white rounded-lg bg-opacity-15'>
          <img src={greenSertif} alt="" className='w-full' />
          <h1 className='text-secondary font-bold text-base'>Green Campaign</h1>
          <p className='text-black italic text-sm'>Belajar dasar pemrograman web javascript</p>
          <div className='flex gap-2'>
            <CiClock2 className='text-secondary w-5 h-5 text-start' />
            <p>48jam</p>
          </div>
          <button className='bg-secondary mt-2 text-quaternary rounded-lg py-2 px-4 text-sm font-medium'>Visit</button>
        </div> */}
      {/* </div> */}

      <div className="carousel carousel-center bg-transparent rounded-box max-w-sm space-x-4 p-4 mt-3">
        {certificate.map((item, i) => (
          <div
            key={i}
            className={`carousel-item rounded-box flex flex-col gap-2 overflow-hidden ${item?.borderClass}`}
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