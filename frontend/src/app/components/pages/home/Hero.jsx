import React from 'react'
import Container from '../../ui/Container'

function Hero() {
    return (
        <div className='relative '>
            <Container>
                <section className='w-full h-auto md:h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row'>
                    {/* === TEXT SECTION === */}
                    <article className='flex-1 flex flex-col justify-center gap-4 md:gap-5 px-4 md:px-0 py-8 md:py-0'>
                        <h3 className='flex flex-col text-4xl md:text-6xl font-bold text-[#F5F5F5] leading-snug md:leading-relaxed text-center md:text-left'>
                            <div className='flex gap-2 md:gap-4  items-end justify-center md:justify-start text-4xl md:text-6xl/[60%] '>
                                <span>Real</span>
                                <span>
                                    Tech
                                    <span className='text-6xl/[1px]  md:text-9xl/[1px] text-[#16B2FF]'>.</span>
                                </span></div>
                            <div className='flex gap-2 md:gap-4 items-center justify-center md:justify-start'>
                                <span>Real</span>
                                <span>
                                    Impact
                                    <span className='text-6xl/[1px] md:text-9xl/[1px] text-[#16B2FF]'>.</span>
                                </span>
                            </div>
                        </h3>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start mt-5 md:mt-0 gap-2 md:gap-0">
                            <div className="h-1 w-12 md:h-full md:w-1 bg-[#16B2FF] rounded-full text-center"></div>
                            <h4 className="md:pl-3 text-lg md:text-2xl text-[#B0B0B0] leading-relaxed text-center md:text-left">
                                Accurate, efficient and integrated EC Sensor and transmitter
                            </h4>
                        </div>
                    </article>

                    {/* === IMAGE SECTION === */}
                    <article className='flex-1 flex justify-center items-center px-4 md:px-0'>
                        <img
                            className='w-full max-w-xs md:max-w-md lg:max-w-lg h-auto'
                            src="/images/Ec.png"
                            alt="Sensor"
                        />
                    </article>
                </section>
            </Container>

            {/* === BACKGROUND EFFECTS === */}
            <div
                className='w-full h-[600px] md:h-[900px] overflow-hidden absolute top-0 -z-10'
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent)'
                }}
            >
                <img className='w-full opacity-50 hidden md:block' src="/images/text1.png" alt="" />
                <img className='w-full opacity-50 block md:hidden' src="/images/text4.png" alt="" />
            </div>

            <img className='absolute top-0 -z-10 opacity-30 hidden md:block' src="/images/text3.png" alt="" />
        </div>
    )
}

export default Hero
