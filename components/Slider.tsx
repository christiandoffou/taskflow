import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-6 h-full">
          {/* Avatar Img */}
          <div className="relative hidden xl:flex w-[90px] h-[90]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt="Testimonial"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Au-delà des attentes. Respect des délais et du budget, travail de
              qualité supérieure. Je recommande vivement.
            </p>
            <p className="font-primary font-semibold text-primary">
              Chris Doffou
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-6 h-full">
          {/* Avatar Img */}
          <div className="relative hidden xl:flex w-[90px] h-[90]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt="Testimonial"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Au-delà des attentes. Respect des délais et du budget, travail de
              qualité supérieure. Je recommande vivement.
            </p>
            <p className="font-primary font-semibold text-primary">
              Chris Doffou
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-6 h-full">
          {/* Avatar Img */}
          <div className="relative hidden xl:flex w-[90px] h-[90]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt="Testimonial"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Au-delà des attentes. Respect des délais et du budget, travail de
              qualité supérieure. Je recommande vivement.
            </p>
            <p className="font-primary font-semibold text-primary">
              Chris Doffou
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
