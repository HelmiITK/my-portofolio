import { FaRegCopyright } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <div className="mx-10 pb-10">
        <div className="h-px w-full bg-slate-600 mb-4"></div>
        <h1 className="flex justify-center items-center gap-2 text-slate-600"><FaRegCopyright />2024 by Helmi<div className="w-px h-4 bg-slate-600"></div>ALL Rights Reserved
        </h1>
      </div>
    </>
  )
}

export default FooterComponent