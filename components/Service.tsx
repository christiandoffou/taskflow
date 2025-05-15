"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill size={40} />,
    title: "Service de construction",
    description:
      "Nous offrons des services de construction de haute qualité pour tous vos projets résidentiels et commerciaux.",
    serviceListe: [
      "Construction de maisons individuelles",
      "Construction de bâtiments commerciaux",
      "Rénovation et agrandissement",
      "Aménagement intérieur et extérieur",
      "Gestion de projet",
      "Travaux de maçonnerie",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill size={40} />,
    title: "Service de rénovation",
    description:
      "Nous transformons vos espaces avec des rénovations sur mesure, alliant esthétique et fonctionnalité.",
    serviceListe: [
      "Rénovation intérieure et extérieure",
      "Rénovation de cuisines et salles de bains",
      "Amélioration de l'efficacité énergétique",
      "Peinture intérieure et extérieure",
      "Revêtements de sol",
      "Travaux de plomberie et d'électricité",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "maintenance",
    icon: <PiWrenchFill size={40} />,
    title: "Service de maintenance",
    description:
      "Nous assurons la maintenance préventive et corrective pour garantir la durabilité de vos installations.",
    serviceListe: [
      "Entretien préventif et correctif",
      "Réparation d'équipements",
      "Inspection régulière des installations",
      "Gestion des urgences",
      "Services de nettoyage professionnel",
      "Gestion des déchets",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill size={40} />,
    title: "Service de consulting",
    description:
      "Nos experts vous conseillent sur les meilleures pratiques en matière de construction et de rénovation.",
    serviceListe: [
      "Consultation en construction et rénovation",
      "Évaluation des besoins du client",
      "Planification et conception de projets",
      "Assistance technique",
      "Évaluation des coûts et budgets",
      "Gestion des risques",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
];

const fadeInVariants = {
  hiden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Service = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <div className="pt-16 xl:pt-32" id="Service">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Nos Services" center />
          <h2 className="h2 mb-3">Solution que nous fournissons</h2>
          <p className="mb-8 text-lg text-textColor">
            Nous offrons une large gamme de services pour répondre à tous vos
            besoins en matière de construction et de rénovation.
          </p>
        </motion.div>
        {/* Tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col md:flex-row h-full xl:gap-[30px]"
          >
            <TabsList
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full
          rounded-none p-0 bg-transparent xl:w-[345px]"
            >
              {serviceData.map((service) => (
                <TabsTrigger
                  key={service.name}
                  value={service.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0
                  ${
                    activeTab == service.name
                      ? "bg-primary text-white"
                      : "bg-accent text-primary"
                  }`}
                  >
                    <div className="text-4xl">{service.icon}</div>
                  </div>
                  <div className="uppercase font-primary text-base font-semibold tracking-[0.6px] w-[100px] ml-16">
                    {service.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Tabs Content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((service) => (
                <TabsContent
                  key={service.name}
                  value={service.name}
                  className="m-0"
                >
                  <motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* images Card */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {service.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image
                            src={thumb.url}
                            alt=""
                            fill
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Text && button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{service.title}</h3>
                        <p className="mb-10">{service.description}</p>
                        {/* Service List */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {service.serviceListe.map((item, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4 mb-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {item}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* Button */}
                        <Button text="En savoir plus" />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
