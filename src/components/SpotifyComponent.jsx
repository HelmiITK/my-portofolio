import spotifyLogo from "../assets/Spotify Logo.jpeg"
import { PiCaretLineLeftFill } from "react-icons/pi";
import { PiCaretLineRightFill } from "react-icons/pi";
import { FaPause } from "react-icons/fa";

const SpotifyComponent = () => {
  return (
    <div className="bg-white p-6 mx-6 w-[60%] rounded-md flex flex-col gap-4 drop-shadow-2xl shadow-[0px_27px_70px_-10px] shadow-green-500">
      <img
        src={spotifyLogo}
        alt="spotofy logo"
        className="w-full rounded-lg drop-shadow-xl"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-base text-black font-semibold">Usik</h1>
        <p className="text-sm text-slate-700 font-light">Feby Putri, Helmi</p>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center">
        <PiCaretLineLeftFill className="bg-gray-300 p-1 w-8 h-8 rounded-full" />
        <FaPause className="bg-gray-300 p-3 w-12 h-12 rounded-full" />
        <PiCaretLineRightFill className="bg-gray-300 p-1 w-8 h-8 rounded-full" />
      </div>
      <div>
        <progress
          className="progress progress-success w-full"
          value="40"
          max="100"
        >
        </progress>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xs font-light">1:57</h1>
          <h1 className="text-xs font-light">3:53</h1>
        </div>
      </div>
    </div>
  )
}

export default SpotifyComponent
