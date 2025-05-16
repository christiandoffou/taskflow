import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="About">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* Text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[570px]"
            >
              {/* Title */}
              <Pretitle text="Apropos de Nous" />
              <h2 className="h2 mb-6">
                Concentré sur l&apos;excellence dans chaque projet
              </h2>
              <p className="mb-11">
                Nous sommes une équipe de professionnels passionnés par la
                création de solutions innovantes et efficaces. Notre objectif
                est de fournir des services de haute qualité qui répondent aux
                besoins uniques de nos clients.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="signature"
                />
                <p>Company CEO</p>
              </div>
              {/* Button */}
              <Button text="Contacter nous" />
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div
                className="hidden xl:flex w-[444px] h-[493] bg-accent absolute
              -top-4 -left-4 -z-10"
              ></div>
              <Image
                src="/assets/img/about/img.jpg"
                fill
                className="object-cover"
                alt="about"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
