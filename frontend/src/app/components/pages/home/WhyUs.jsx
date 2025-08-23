"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import WhyUsSvg from "../../ui/icons/WhyUsSvg"
import Titles from "../../ui/Titles"
import "swiper/css";
import Container from "../../ui/Container";

function WhyUs() {
    const WhyItems = [
        {
            id: 0,
            title: 'Proven Expertise',
            dis: 'We deliver top-tier sensors tailored for local industries.'
        },
        {
            id: 1,
            title: 'Local Expertise Global Quality',
            dis: 'We locally produce high-quality sensors for domestic industries.'
        },
        {
            id: 2,
            title: 'Reliable Quality',
            dis: 'Our locally-made sensors ensure precision for domestic needs.'
        },
    ]
    return (
        <section className="m-0 md:mt-80 lg:mt-0 relative" >
            <img src='/images/radText.png' className="absolute -z-10 w-full h-150 -top-15 object-cover" />
            <Titles>Why us?</Titles>
            <article className="w-full items-center justify-center gap-11 mt-10 hidden md:flex">
                {WhyItems.map((items) => {
                    return (
                        <div className="w-80 h-96 rounded-3xl p-8 grid grid-rows-3 justify-center bg-[linear-gradient(180deg,#FFFFFF_0%,#191924_200%)]" key={items.id}>
                            <WhyUsSvg className='justify-self-center self-center'></WhyUsSvg>
                            <h5 className="text-[#2D2D2D] text-xl font-bold text-center self-center">{items.title}</h5>
                            <p className="text-center self-center text-[#3C4143]">{items.dis}</p>
                        </div>
                    )
                })}
            </article>
            <article className="w-full flex flex-col items-center justify-center gap-11 mt-10 md:hidden">
                <Container>
                    <Swiper className="mySwiper" loop={true} spaceBetween={30} slidesPerView={1} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                        modules={[Autoplay]}>
                        {WhyItems.map((items) => {
                            return (

                                <SwiperSlide className="w-80 h-96 min-h-96 rounded-3xl p-8 flex justify-between bg-[linear-gradient(180deg,#FFFFFF_0%,#191924_200%)]  " style={{
                                    justifyContent: "space-between",
                                    display: "flex",

                                    flexDirection: "column",
                                    paddingBlock: "70px",
                                    paddingInline: "30px",
                                    marginRight: "30px",
                                }} key={items.id}>
                                    <WhyUsSvg className='justify-self-center self-center'></WhyUsSvg>
                                    <h5 className="text-[#2D2D2D] text-xl font-bold text-center self-center">{items.title}</h5>
                                    <p className="text-center self-center text-[#3C4143]">{items.dis}</p>
                                </SwiperSlide>

                            )
                        })}


                    </Swiper>
                </Container>
            </article>
        </section >
    )
}

export default WhyUs