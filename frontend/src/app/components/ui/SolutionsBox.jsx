import React from 'react'
import SolutionsBG from './icons/SolutionsBg'
import SolutionsRectangle from './icons/SolutionsRectangle'
import Link from 'next/link'

function SolutionsBox({ data = {
    isRight: false,
    src: '/images/Solutions/Cl.png',
    title: 'Chlorine Sensor',
    dis: 'Track chlorine levels accurately!',
    url: '/ChlorineSensor'
} }) {

    return (
        <div className={`w-full flex items-center ${data?.isRight ? 'flex-row-reverse' : ''} `}>
            <div className={`w-full md:w-1/2  bg-white/30 h-[450px] md:h-58 flex-col md:flex-row flex justify-between items-center overflow-hidden backdrop-blur-xl drop-shadow-[0_0_8.2px_rgba(0, 0, 0, 0.10)] shadow-[0_0_13.4px_0_rgba(255,255,255,0.15)_inset]  ${!data?.isRight ? 'rounded-[200px_200px_32px_32px] md:rounded-[32px_200px_200px_32px] md:flex-row-reverse' : 'rounded-[200px_200px_32px_32px] md:rounded-[200px_32px_32px_200px]'}`}>
                <div className='relative w-54 h-full flex right justify-center items-center  '>
                    <img src="/images/Solutions/shadow.png" alt='shadow' className='absolute min-w-[312px] h-full top-0 object-cover  -z-20' />
                    <img src={data?.src} className=' w-40' alt="" />
                </div>
                <div className='flex flex-col items-center px-10'>
                    <h5 className="text-2xl font-bold">{data?.title}</h5>
                    <span className="text-base font-normal text-center md:text-left">{data?.dis}</span>
                    <Link
                        className="
        w-28 h-8 my-3 md:mt-10 
        text-[13.33px] text-[#3B3B3B] bg-white 
        rounded-lg font-semibold flex justify-center items-center
        shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_7.5px_0px_#D0DDE3C4]
        transition-all duration-300 ease-in-out
        hover:bg-[#f3f4f6] hover:text-[#1F2937] hover:shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_12px_0px_#D0DDE3C4]
      "
                        href={data?.url}
                    >
                        View Details
                    </Link>

                </div>
            </div>
        </div>
    )
}

{/* <div className={`w-full  flex items-center ${data?.isRight ? 'flex-row-reverse' : ''} `}>
            <div className='relative w-52 flex right justify-center items-center  mx-[7%] '>
                <img src={data?.src} className='absolute' alt="" />
                <div className='w-[450px] h-[450px] overflow-hidden absolute -z-10 flex justify-center items-center' style={{
                    maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                }}>
                    <SolutionsBG className='absolute' ></SolutionsBG>

                </div>

            </div>
            <div className="-mx-48">
                <div className={`absolute z-10 my-10 text-white flex flex-col h-40 ${data?.isRight ? 'mx-15' : 'mx-36'} w-96`} >
                    <h5 className="text-xl font-bold">{data?.title}</h5>
                    <span className="text-base font-normal">{data?.dis}</span>
                    <Link
                        className="
        w-28 h-8 absolute top-1/2
        text-[13.33px] text-[#3B3B3B] bg-white 
        rounded-lg font-semibold flex justify-center items-center
        shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_7.5px_0px_#D0DDE3C4]
        transition-all duration-300 ease-in-out
        hover:bg-[#f3f4f6] hover:text-[#1F2937] hover:shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_12px_0px_#D0DDE3C4]
      "
                        href={data?.url}
                    >
                        View Details
                    </Link>
                </div>

                <SolutionsRectangle className={`-z-10 relative ${data?.isRight ? 'rotate-y-180' : ''}`} />
            </div>

        </div> */}

export default SolutionsBox