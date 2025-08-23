'use client'
import React from 'react'
import Container from '../../ui/Container'
import Titles from '../../ui/Titles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import SolutionsBox from '../../ui/SolutionsBox'
import SliderArrow from '../../ui/icons/SliderArrow'
import SolutionsBG from '../../ui/icons/SolutionsBg'
import Link from 'next/link'

function Solutions() {
  const SolutionsItems = [
    {
      id: 0,
      isRight: true,
      src: '/images/Solutions/CL.png',
      title: 'Chlorine Sensor',
      dis: 'Track chlorine levels accurately!',
      url: '/Products/chlorine-sensor'
    }, {
      id: 1,
      isRight: false,
      src: '/images/Solutions/ED.png',
      title: 'EC Sensor',
      dis: 'Accurately measure solids in liquids!',
      url: '/EC-Sensors'
    }, {
      id: 2,
      isRight: true,
      src: '/images/Solutions/CTD.png',
      title: 'CTD Sensor',
      dis: 'Monitor liquids with EC, temp and more',
      url: '/Products/ctd-sensor'
    }, {
      id: 3,
      isRight: false,
      src: '/images/Solutions/ph.png',
      title: 'PH Sensor',
      dis: 'Best solution for misuring',
      url: '/Products/ph-sensor-and-transmitter'
    }, {
      id: 4,
      isRight: true,
      src: '/images/Solutions/ED.png',
      title: 'TDS Sensor',
      dis: 'Precise solids measurement for safer water.',
      url: '/Products/total-dissolved-solidstds-sensor-and-transmitter'
    }
  ]

  return (

    <section className='w-full h-full'>
      <Container>
        <Titles>What are our solutions?</Titles>
        <article className=' hidden md:flex  flex-col gap-10 mt-16 '>
          {SolutionsItems.map((item) => {
            return (
              <SolutionsBox key={item.id} data={item} />
            )
          })}
        </article>
        <article className='flex md:hidden relative '>
          <Swiper
            modules={[Navigation , Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-btn',
              prevEl: '.swiper-button-prev-btn'
            }}
             autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className='mt-10 mySwiper'
          >
            {SolutionsItems.map((item) => (
              <SwiperSlide key={item.id} className='flex-shrink-0'>
                <SolutionsBox key={item.id} data={item} />

              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex justify-between items-center mt-5 absolute z-40  w-full h-full scale-[115%] pointer-events-none'>
            <button className='w-10 h-10 flex justify-center items-center  rounded-full  swiper-button-prev-btn pointer-events-auto'>
              <SliderArrow />
            </button>
            <button className='w-10 h-10 flex justify-center items-center  rounded-full swiper-button-next-btn pointer-events-auto'>
              <SliderArrow className='rotate-180' />
            </button>
          </div>
        </article>
      </Container>
    </section>
  )
}

export default Solutions