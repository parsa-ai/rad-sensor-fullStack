'use client'
import Link from 'next/link'
import SliderArrow from '../../ui/icons/SliderArrow'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowIcon from '../../ui/icons/ArrowIcon';


function Blog() {
    const Blogs = [
        {
            id: 0,
            categorys: ['Blog', 'Oil & Gas'],
            title: '1Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        },
        {
            id: 1,
            categorys: ['Blog', 'Oil & Gas'],
            title: '2Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        },
        {
            id: 2,
            categorys: ['Blog', 'Oil & Gas'],
            title: '3Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        },
        {
            id: 3,
            categorys: ['Blog', 'Oil & Gas'],
            title: '4Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        }
    ]

    return (
        <section className='flex flex-col justify-center items-center w-full gap-7 mb-20 '>
            <article className='text-[#3EADE5] text-base font-bold flex justify-center h-fit items-center gap-1'>
                <div className='w-2 h-2 bg-[#D9D9D9] rounded-2xl' />
                Insights
            </article>

            <article className='flex flex-col items-center'>
                <h4 className='text-[#ADADAD] font-bold text-2xl md:text-5xl'>See the Science</h4>
                <h4 className='text-[#3EADE5] font-bold text-2xl md:text-5xl'>In Action</h4>
            </article>

            <article className='w-full relative overflow-hidden hidden md:block'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    loop={true}
                    navigation={{
                        nextEl: '.btn-next',
                        prevEl: '.btn-prev',
                    }}
                    className='!overflow-visible'
                >
                    {Blogs.map((blog) => (
                        <SwiperSlide
                            key={blog.id}
                            className='!w-[522px] h-[222px] bg-[#C6C5C7] rounded-2xl p-2 flex-shrink-0'
                        >
                            <Link
                                className='w-full h-full flex items-center gap-4'
                                href={'/Blogs/' + blog.id}
                            >
                                <article className='flex-1 pl-7 overflow-hidden flex flex-col gap-2'>
                                    <div className='flex gap-2'>
                                        {blog.categorys.map((category, index) => (
                                            <span
                                                className='bg-[#BCBCBC] text-[#3B3B3B] py-2 px-4 rounded-full text-xs font-semibold'
                                                key={index}
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <h5 className='text-2xl font-semibold text-[#141414]'>{blog.title}</h5>
                                    <p className='font-medium text-base text-[#3B3B3B] w-[250px] line-clamp-3'>
                                        {blog.text}
                                    </p>
                                </article>
                                <img
                                    src={blog.image}
                                    className='w-[200px] h-[200px] object-cover rounded-xl'
                                    alt={blog.title}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* دکمه‌ها */}
                <div className='w-full h-full absolute top-0 left-0 flex justify-between items-center px-7 flex-row-reverse pointer-events-none z-50'>
                    <button className='btn-next w-12 h-12 flex justify-center items-center bg-[#3EADE5] rounded-full shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5] pointer-events-auto'>
                        <SliderArrow className='rotate-180' />
                    </button>
                    <button className='btn-prev w-12 h-12 flex justify-center items-center bg-[#3EADE5] rounded-full shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5] pointer-events-auto'>
                        <SliderArrow />
                    </button>
                </div>
            </article>

            <article className='w-full relative overflow-hidden block md:hidden'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    loop={true}
                    navigation={{
                        nextEl: '.btn-next',
                        prevEl: '.btn-prev',
                    }}
                    className='!overflow-visible'
                >
                    {Blogs.map((blog) => (
                        <SwiperSlide
                            key={blog.id}
                            className='!w-full  h-[222px] px-10 flex-shrink-0'
                        >
                            <div className='w-full h-full bg-[#C6C5C7] rounded-2xl p-5'>
                                <Link
                                    className='w-full h-full flex flex-col items-center gap-4'
                                    href={'/blog/' + blog.id}
                                >
                                    <article className='flex-1  overflow-hidden flex flex-col gap-2'>
                                        <div className='flex gap-2'>
                                            {blog.categorys.map((category, index) => (
                                                <span
                                                    className='bg-[#BCBCBC] py-2 text-[#3B3B3B] px-4 rounded-full text-xs font-semibold'
                                                    key={index}
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                        <img
                                            src={blog.image}
                                            className='w-screen max-h-72 object-cover rounded-xl '
                                            alt={blog.title}
                                        />
                                        <h5 className='text-base font-semibold text-[#141414]'>{blog.title}</h5>
                                        <p className='font-medium text-sm text-[#3B3B3B] mb-4 w-[250px] line-clamp-3'>
                                            {blog.text}
                                        </p>
                                    </article>

                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                {/* دکمه‌ها */}
                <div className='w-full h-full absolute top-0 left-0 flex justify-between items-center px-7 flex-row-reverse pointer-events-none z-20'>
                    <button className='btn-next w-12 h-12 flex justify-center items-center bg-[#3EADE5] rounded-full shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5] pointer-events-auto'>
                        <SliderArrow className='rotate-180' />
                    </button>
                    <button className='btn-prev w-12 h-12 flex justify-center items-center bg-[#3EADE5] rounded-full shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5] pointer-events-auto'>
                        <SliderArrow />
                    </button>
                </div>
            </article>

            {/* دکمه نمایش همه */}
            <Link
                className='h-10 w-32 flex justify-center items-center bg-[#ffffff] rounded-lg font-semibold shadow-[0px_0px_11.7px_0px_#FFFFFF40] text-[#515151]'
                href={'/Blogs'}
            >
                View all
                <ArrowIcon className='rotate-[45deg] h-7 ml-1 fill-[#515151]' />
            </Link>
        </section>
    )
}

export default Blog