import Link from "next/link";

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "https://www.facebook.com/chrisdoffou",
  },
  {
    icon: <RiYoutubeFill />,
    path: "",
  },
  {
    icon: <RiTwitterFill />,
    path: "",
  },
  {
    icon: <RiInstagramFill />,
    path: "",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className={`${iconStyles}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
