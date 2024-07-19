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

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const text1 = 'Perlombaan cabang machine learning tahunan yang diadakan oleh BPJS yang bertajub Healthkathon.';
  const text2 = 'Berperan sebagai asisten dosen dalam membantu kegiatan mengajar yang diadakan pada lab praktikum.';
  const truncatedText1 = text1.length > 25 ? text1.substring(0, 25) + '...' : text1;
  const truncatedText2 = text2.length > 25 ? text2.substring(0, 25) + '...' : text2;

  const handleTextClick1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const handleTextClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <div className="mt-16 relative">
      <h1 className="capitalize font-medium text-2xl text-center text-white bg-primary py-3 z-20 absolute inset-x-24 -top-1 rounded-b-badge ">
        certificate
      </h1>

      <div className='rounded-tl-badge w-8 h-8 left-[74px] absolute border-t-8 border-primary -top-2 rotate-90'></div>
      <div className='rounded-tr-badge w-8 h-8 right-[74px] absolute border-t-8 border-primary -top-2 -rotate-90'></div>

      <div className='w-full bg-gradient-to-b bg-quinary pt-4 pb-10 px-4 grid grid-cols-2 gap-4'>
        {/* sertif 1 */}
        {/* <div className='flex mt-14 flex-col gap-2  w-full shadow-2xl p-4 shadow-secondary bg-white rounded-lg bg-opacity-15'>
          <img src={healthkathonSertif} alt="" className='w-full' />
          <h1 className='text-secondary font-bold text-base'>Healthkathon</h1>
          <p className='text-black italic text-sm line-clamp-4' onClick={handleTextClick}>
            {isTruncated ? truncatedText : text}
          </p>
          <div className='flex gap-2'>
            <CiClock2 className='text-secondary w-5 h-5 text-start' />
            <p>72 jam</p>
          </div>
          <button className='bg-secondary mt-2 text-white rounded-lg py-2 px-4 text-sm font-medium'>Visit</button>
          {showFullText && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded-lg shadow-lg max-w-lg'>
                <p className='text-black italic text-sm'>{text}</p>
                <button className='bg-secondary mt-2 text-white rounded-lg py-2 px-4 text-sm font-medium' onClick={handleClose}>Close</button>
              </div>
            </div>
          )}
        </div> */}
        <div className='flex mt-14 flex-col gap-2 w-full p-4 shadow-secondary shadow-[0px_8px_20px_-8px] bg-white rounded-lg bg-opacity-15'>
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
        {/* sertif 2 */}
        {/* <div className='flex mt-14 flex-col gap-2  w-full shadow-2xl p-4 shadow-secondary bg-white rounded-lg bg-opacity-15'>
          <img src={asdosSertif} alt="" className='w-full' />
          <h1 className='text-secondary font-bold text-base'>Dicoding</h1>
          <p className='text-black italic text-sm'>Belajar dasar pemrograman web javascript</p>
          <div className='flex gap-2'>
            <CiClock2 className='text-secondary w-5 h-5 text-start' />
            <p>48jam</p>
          </div>
          <button className='bg-secondary mt-2 text-white rounded-lg py-2 px-4 text-sm font-medium'>Visit</button>
        </div> */}
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
        </div>
      </div>
    </div>
  )
}

export default CertificateComponent