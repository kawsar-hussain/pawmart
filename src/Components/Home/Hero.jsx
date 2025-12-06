import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="">
      <section className="w-full">
        <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation loop speed={800} className="mySwiper">
          <SwiperSlide>
            <div className="relative">
              <img className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" src="/pet.jpg" alt="first image" />
              <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-md md:text-2xl lg:text-4xl font-bold drop-shadow-lg stylish-text">Find Your Furry Friend Today!</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" src="/adoption.jpg" alt="second image" />
              <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-md md:text-2xl lg:text-4xl font-bold drop-shadow-lg stylish-text">Adopt, Don’t Shop — Give a Pet a Home</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" src="/happy-customer.jpg" alt="third image" />
              <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-md md:text-2xl lg:text-4xl font-bold drop-shadow-lg stylish-text">Because Every Pet Deserves Love and Care</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
