import { useEffect } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import sd from "../assets/logo-sd.png";
import smp from "../assets/logo-smp.png";
import smk from "../assets/logo-sma.png";
import kuliah from "../assets/logo-itk.png";
import Wave from "react-wavify";
import { PiInfoThin } from "react-icons/pi";

import fotoSd2 from "../assets/foto_sd.webp";
import fotoSmp2 from "../assets/foto_smp2.jpg";
import fotoSmk2 from "../assets/smk2smd.jpeg";
import fotoItk2 from "../assets/foto_itk.jpeg";
// import ThreeHobby from "./ThreeHobby";

const AboutComponentWeb = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  const educationData = [
    {
      id: "sd",
      title: "SD",
      logo: sd,
      school: "SD Negeri 017 Muara Badak",
      city: "Kutai Kartanegara",
      province: "Kalimantan Timur",
      photo: fotoSd2,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.754143231559!2d117.41342867547031!3d-0.3249763344576154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5c387923b9c25%3A0x374b4d8465fdace4!2sSD%20Negeri%20017%20Muara%20Badak!5e0!3m2!1sid!2sid!4v1737303737637!5m2!1sid!2sid",
      color: "#E62129",
    },
    {
      id: "smp",
      title: "SMP",
      logo: smp,
      school: "SMP Negeri 02 Muara Badak",
      city: "Kutai Kartanegara",
      province: "Kalimantan Timur",
      photo: fotoSmp2,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.751300848532!2d117.38460297447786!3d-0.33209493532657614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5c36043c77557%3A0xbdb6ff75c3d4c388!2sSMP%20NEGERI%202%20MUARA%20BADAK!5e0!3m2!1sid!2sid!4v1737303638838!5m2!1sid!2sid",
      color: "#3b82f6",
    },
    {
      id: "smk",
      title: "SMK",
      logo: smk,
      school: "SMK Negeri 02 Samarinda",
      city: "Samarinda",
      province: "Kalimantan Timur",
      photo: fotoSmk2,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6833677755276!2d117.1362480744785!3d-0.47125163527740016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f320dc79865%3A0x9bd4d21716551f40!2sSekolah%20Menengah%20Kejuruan%20Negeri%202%20Samarinda%2FSTMN%20SAMARINDA!5e0!3m2!1sid!2sid!4v1737303788315!5m2!1sid!2sid",
      color: "#6b7280",
    },
    {
      id: "kuliah",
      title: "Kuliah",
      logo: kuliah,
      school: "Institut Teknologi Kalimantan (ITK)",
      city: "Balikpapan",
      province: "Kalimantan Timur",
      photo: fotoItk2,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.014763198804!2d116.85960867448215!3d-1.1499441354912892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0x8489d5309f45c0db!2sInstitut%20Teknologi%20Kalimantan!5e0!3m2!1sid!2sid!4v1737303829916!5m2!1sid!2sid",
      color: "#16a34a",
    },
  ];

  return (
    <div className="hidden lg:block mt-40 px-4 mb-10">
      <h1
        className="text-white font-medium text-2xl text-center capitalize mb-10"
        // data-aos="fade-down"
        // data-aos-duration="1000"
      >
        about me
      </h1>
      {/* education */}
      <div className="grid grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <div
              className={`border w-full drop-shadow-md text-white bg-black bg-opacity-10 rounded-md p-4 flex flex-row gap-4 items-center hover:scale-105 cursor-pointer duration-200 ease-linear hover:bg-primary`}
              style={{ borderColor: edu.color }}
            >
              <div className="flex flex-col items-center z-20">
                <h1 className="font-medium text-lg">{edu.title}</h1>
                <img
                  src={edu.logo}
                  alt={`logo-${edu.id}`}
                  className="w-16 h-16"
                />
              </div>
              <div className="flex flex-col gap-1 text-sm z-20">
                <div className="flex flex-row gap-1 justify-between">
                  <span>{edu.title}</span>
                  <div>:</div>
                  <p className="w-full">{edu.school}</p>
                </div>
                <div className="flex flex-row gap-1 justify-between">
                  <span>Kota</span>
                  <div>:</div>
                  <p className="w-full">{edu.city}</p>
                </div>
                <div className="flex flex-row gap-1 justify-between">
                  <span>Provinsi</span>
                  <div>:</div>
                  <p className="text-full">{edu.province}</p>
                </div>
              </div>
              <Wave
                fill={edu.color}
                paused={false}
                style={{ display: "flex" }}
                options={{
                  height: 120,
                  amplitude: 20,
                  speed: 0.15,
                  points: 4,
                }}
                className="absolute z-10 bottom-0 left-0"
              />
              <PiInfoThin
                type="button"
                className="z-20 w-8 h-8 text-quaternary cursor-pointer"
                onClick={() =>
                  document.getElementById(`modal-${edu.id}`).showModal()
                }
              />
            </div>
            <dialog id={`modal-${edu.id}`} className="modal">
              <div className="modal-box flex flex-col gap-2">
                <h3 className="font-bold text-lg text-center">{edu.school}</h3>
                <img src={edu.photo} alt="" className="w-full h-2/6" />
                <iframe
                  title={`${edu.school} Map`}
                  src={edu.mapSrc}
                  width="100%"
                  height="300"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        ))}
      </div>
      {/* hobby and born */}

      {/* <ThreeHobby /> */}
    </div>
  );
};

export default AboutComponentWeb;
