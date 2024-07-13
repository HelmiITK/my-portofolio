import { useState } from "react";
import PropTypes from "prop-types"

const IconWithHoverTextComponen = ({ text, Icon, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon className={`w-8 h-8 text-white transition-transform duration-300 ${hover ? '-translate-x-12' : ''}`} />
      {hover &&
        <a
          href={link}
          className="text-white transition-opacity duration-300 -translate-x-8 underline"
        >
          {text}
        </a>}
    </div>
  )
}

export default IconWithHoverTextComponen;

IconWithHoverTextComponen.propTypes = {
  text: PropTypes.string,
  Icon: PropTypes.string,
  link: PropTypes.string,
}