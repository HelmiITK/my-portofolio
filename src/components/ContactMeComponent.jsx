import imgHelmi from "../assets/img-helmi.png"
import { FaInstagram } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import SpotifyComponent from "./SpotifyComponent";

import AOS from "aos"
import '../../node_modules/aos/dist/aos.css'
import { useEffect } from "react"

const ContactMeComponent = () => {
  const icon = [
    {
      link: 'https://www.instagram.com/helmitwzzz/?hl=id',
      logo: <FaInstagram className="w-7 h-7 text-quaternary" />,
      title: 'helmitwzzz',
    },
    {
      link: 'https://www.threads.net/@helmitwzzz?xmt=AQGzK1tZw2aXAZ5BuZkSej3i4tLSrvToZU9xxhW7VTN8ghY',
      logo: <FaThreads className="w-7 h-7 text-quaternary" />,
      title: 'helmitwzzz',
    },
    {
      link: 'https://discordapp.com/users/515148149384413187',
      logo: <FaDiscord className="w-7 h-7 text-quaternary" />,
      title: 'helmi.s#4618',
    },
    {
      link: 'https://github.com/HelmiITK',
      logo: <FaGithub className="w-7 h-7 text-quaternary" />,
      title: 'HelmiITK',
    }
  ]
  useEffect(() => {
    AOS.init({
      once: false,
    })
  })
  return (
    <div className="mt-10 mb-8">
      <h1 className="text-center text-white text-2xl font-medium mb-4" data-aos="fade-down" data-aos-duration="1000">Its Me</h1>

      {/* via sosial media */}
      <div className="flex items-center mt-2">
        <img
          src={imgHelmi}
          alt="img-helmi"
          className="w-1/2 drop-shadow-2xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="500"
        />
        <div className="flex flex-col mx-8 gap-4">
          {icon.map((item, i) => (
            <a
              key={i}
              href={item.link}
              title={item.title}
              target="_self"
              rel="noopener noreferrer"
              className="text-quaternary flex items-center gap-2 underline text-sm"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              {item.logo} {item.title}
            </a>
          ))}
        </div>
      </div>
      {/* My Spotify */}
      <div
        className="flex mt-8 justify-center drop-shadow-2xl shadow-green-700"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-offset="350"
      >
        <SpotifyComponent />
      </div>
      {/* via email */}
      <form
        action=""
        className="flex flex-col gap-2 justify-center items-center mt-12 border-none mx-4 rounded-md py-4 "
      >
        <SiMinutemailer className="w-12 h-12 text-quaternary" />
        <h1 className="text-quaternary font-medium text-lg capitalize">contact me</h1>
        {/* nama */}
        <label htmlFor="nama" className="capitalize text-white flex flex-col w-full px-4">
          <span className="capitalize block font-semibold mb-2 after:content-['*'] after:ml-1 after:text-pink-500 text-tertiary">
            your name
          </span>
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Bang Asep"
            className="text-white rounded-md pl-4 py-2 border border-slate-300 text-sm bg-transparent
            focus:outline-none
            focus:ring-1
            focus:ring-quaternary
            focus:border-quaternary
            "
          />
        </label>
        {/* email */}
        <label htmlFor="email" className="flex flex-col w-full px-4">
          <span className="capitalize block font-semibold mb-2 after:content-['*'] after:ml-1 after:text-pink-500 text-tertiary">
            your email
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="asep@example.com"
            className="text-white rounded-md pl-4 py-2 border border-slate-300 text-sm bg-transparent
            focus:outline-none
            focus:ring-1
            focus:ring-quaternary
            focus:border-quaternary
            invalid:text-pink-500
            invalid:focus:ring-pink-700
            invalid:focus:border-pink-700
            peer
            "
          />
          <p className="text-sm m-1 text-pink-500 invisible peer-invalid:visible">email tidak valid</p>
        </label>
        <div className="h-px w-1/2 mb-4 bg-tertiary"></div>
        {/* pesan */}
        <label htmlFor="pesan" className="capitalize text-white flex flex-col w-full px-4">
          <span className="capitalize block font-semibold mb-2 after:content-['*'] after:ml-1 after:text-pink-500 text-tertiary">
            your message
          </span>
          <textarea
            id="pesan"
            name="pesan"
            className="text-white rounded-md pl-4 py-2 border border-slate-300 text-sm bg-transparent
            focus:outline-none
            focus:ring-1
            focus:ring-quaternary
            focus:border-quaternary
            "
            rows={4}
            placeholder="type ur message here"
          ></textarea>
        </label>
        {/* kirim */}
        <button
          type="submit"
          className="capitalize text-sm border border-quaternary rounded-md py-2 px-8 font-medium mt-4 mb-1 text-quaternary">
          send message
        </button>
      </form>

      {/* <div className="flex items-center">
        <img
          src={imgHelmi}
          alt="img-helmi-footer"
          className="w-1/2"
        />
        <div className="flex flex-col gap-4 mx-20">
          <IconWithHoverTextComponen
            Icon={FaInstagram}
            link="https://www.instagram.com/helmitwzzz/"
            text="Instagram"
          />
          <IconWithHoverTextComponen
            Icon={FaThreads}
            text="Threads"
            link="https://www.threads.net/@helmitwzzz?xmt=AQGzzv3KwbMh4-dANp5055CiPVD9JVdsAvkeDhvI0TvLvVY"
          />
          <IconWithHoverTextComponen
            Icon={FaDiscord}
            text="Discord"
          />
          <IconWithHoverTextComponen
            Icon={FaGithub}
            text="Github"
            link="https://github.com/HelmiITK"
          />
        </div>
      </div> */}
    </div>
  )
}

export default ContactMeComponent
