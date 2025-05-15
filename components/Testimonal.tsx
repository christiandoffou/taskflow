import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import SliderBtns from "./SliderBtns";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Testimonal = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="Témoignages" />
            <h2 className="h2 mb-6">
              Construit sur la confiance, prouvé par les résultats
            </h2>
            <p className="mb-10 max-w-[420px]">
              Des maisons aux espaces commerciaux, nos clients partagent leurs
              expériences de travail avec nous. Découvrez comment nous les avons
              aidés à réaliser leurs rêves grâce à un savoir-faire d'expert.
            </p>
            <Button text="Lire les témoignages" />
          </motion.div>
          {/* img && slider */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end xl:items-end relative"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt="Testimonial"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max"
            >
              {/* quote icon img */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                alt="Quote"
                width={70}
                height={70}
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
