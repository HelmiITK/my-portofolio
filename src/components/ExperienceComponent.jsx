import expRt44 from "../assets/exp_rt44.png";
import expMovie from "../assets/exp_movies.png";
import expUdemyClone from "../assets/exp_UdemyClone.png";
import expLandingPageCarRental from "../assets/exp_LandingPageCarRental.png";
import expToDoList from "../assets/exp_ToDoList.png";
import expHRTalentaClone from "../assets/exp_HRTalentaClone.png";
import { useState } from "react";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";

const ExperienceComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const experience = [
    {
      id: 1,
      title: "RT 44",
      desk: "Sistem informasi & adminstrasi masyarakat RT 44 Gading City - Balikpapan.",
      img: expRt44,
      link: "https://rt-44.vercel.app/",
    },
    {
      id: 2,
      title: "MovieList",
      desk: "Menampilkan berbagai macam film terpopuler buat refrensi nonton anda dan mencari serta menonton trial langsung film anda.",
      img: expMovie,
      link: "https://movie-ch7-helmi.vercel.app/",
    },
    {
      id: 3,
      title: "Udemy Clone",
      desk: "Temukan berbagai macam course belajar dari yang free hingga eklusif dan manfaatkan fitur-fitur video dan fitur lainnya.",
      img: expUdemyClone,
      link: "https://b17-final-project.vercel.app/",
    },
    {
      id: 4,
      title: "Car Rental",
      desk: "Landing page penyewaan rental mobil dan semua informasi yang bermanfaat.",
      img: expLandingPageCarRental,
      link: "https://helmi-ch1-binar.vercel.app/",
    },
    {
      id: 5,
      title: "ToDoList",
      desk: "Siapkan rencana baikmu dengan menulis berbagai hal yang akan dilakukan.",
      img: expToDoList,
      link: "https://to-do-list-ch3-binar.vercel.app/",
    },
    {
      id: 6,
      title: "HR Talenta Clone",
      desk: "memudahkan bisnis dalam perhitungan payroll yang cepat, akurat, dan terintegrasi.",
      img: expHRTalentaClone,
      link: "https://hr-talenta-clone.vercel.app/",
    },
  ];

  const displayedExperience = showAll ? experience : experience.slice(0, 2);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="mt-7 flex flex-col gap-2 lg:justify-center items-center">
      <h1
        className="text-white font-medium text-2xl text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Experience
      </h1>
      <div className="lg:grid grid-cols-2">
        {displayedExperience.map((item, i) => (
          <div
            key={i}
            className="card bg-base-100 image-full max-w-sm shadow-xl mt-5 mx-4 lg:max-w-lg"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <figure>
              <img src={item?.img} alt={item?.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-quaternary">{item?.title}</h2>
              <p className="text-sm">{item?.desk}</p>
              <div className="card-actions justify-end">
                <a
                  href={item?.link}
                  target="_blank"
                  className="bg-quaternary text-primary rounded-box py-1 px-4 text-sm"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="text-sm text-white text-center mt-4"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "View Less..." : "View More..."}
      </button>
    </div>
  );
};

export default ExperienceComponent;
