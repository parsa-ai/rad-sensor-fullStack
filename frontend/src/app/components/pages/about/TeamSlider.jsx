"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default function TeamSlider({ team }) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      spaceBetween={40}
      slidesPerView={"auto"}
      autoplay={{
        delay: 3000, 
      }}
    >
      {team.map((member, index) => (
        <SwiperSlide key={index} className="px-5 w-full">
          <div className="w-full bg-[#29282F] p-2 shadow-[0px_4px_50.6px_0px_#8686864D_inset] rounded-2xl flex flex-col gap-2.5">
            <img
              src={member.img}
              className="w-full object-cover object-top rounded-xl"
              alt={member.name}
            />
            <div className="px-2 flex flex-col items-center">
              <span className="text-xl font-semibold">{member.name}</span>
              <span className="text-base font-medium">{member.role}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
