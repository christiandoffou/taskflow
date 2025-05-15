import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-20" id="Contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div
          className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px]
          border-t-4 border-accent"
        >
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* Contact info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contacter-Nous
              </h4>
              {/*<p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sequi sit quos alias non consectetur itaque? Consequuntur quas
                quae illum, fugiat ipsa animi non ut repellendus incidunt omnis
                eligendi vel!
              </p>*/}
              <div className="flex flex-col gap-[30px] mb-16">
                {/* Contact items */}
                <div className="flex items-start gap-[20px] mb-6">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-primary font-semibold leading-none mb-2">
                      Discutez avec nous
                    </h5>
                    <p className="mb-4">
                      Notre équipe amicale est là pour vous aider
                    </p>
                    <p className="font-semibold text-primary">
                      chrisdoffou@gmail.com
                    </p>
                  </div>
                </div>
                {/* Contact items */}
                <div className="flex items-start gap-[20px] mb-6">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-primary font-semibold leading-none mb-2">
                      Bureau
                    </h5>
                    <p className="mb-4">
                      Venez nous dire bonjour à notre bureau
                    </p>
                    <p className="font-semibold text-primary">
                      Valon Street, Abidjan, Côte d'Ivoire
                    </p>
                  </div>
                </div>
                {/* Contact items */}
                <div className="flex items-start gap-[20px] mb-6">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-primary font-semibold leading-none mb-2">
                      Telephone
                    </h5>
                    <p className="mb-4">Lundi - Vendredi, 9h - 17h</p>
                    <p className="font-semibold text-primary">
                      (225) 07 69 20 80 32
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* Contact form */}
            <div className="flex-1">
              <h2 className="h2 mb-2">Contacter-Nous</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sequi sit quos alias non consectetur itaque? Consequuntur quas
                quae illum, fugiat ipsa animi non ut repellendus incidunt omnis
                eligendi vel!
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
