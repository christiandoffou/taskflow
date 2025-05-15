"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const StatsData = [
  { endCountNum: 99, endCountText: "%", text: "Clients satisfaits" },
  { endCountNum: 800, endCountText: "+", text: "Projets réussis" },
  { endCountNum: 10, endCountText: "+", text: "Années d'expérience" },
  { endCountNum: 1000, endCountText: "+", text: "Heures de travail" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {StatsData.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center"
            >
              <h2 className="h2 mb-6 text-accent">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    delay={0.5}
                    duration={2.5}
                    suffix={item.endCountText}
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="text-xl font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
