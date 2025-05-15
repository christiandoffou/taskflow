import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const WorkData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "Restoration",
    description: "Restoration of a 1970s house in the suburbs of Paris.",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "Renovation",
    description: "Renovation of a 1970s house in the suburbs of Paris.",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Construction of a 1970s house in the suburbs of Paris.",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "Consulting",
    description: "Consulting of a 1970s house in the suburbs of Paris.",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projet">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Nos Projets" />
          <h2 className="h2 mb-3">Découvrez nos projets</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Découvrez nos projets récents et laissez-vous inspirer par notre
            savoir-faire.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {WorkData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt=""
                quality={100}
              />
              <div
                className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center
              text-white translate-y-[108px] group-hover:translate-y-0 transition-transform 
                duration-500 ease-in-out"
              >
                <div className="pl-8">
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] bg-accent text-primary
                   text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
