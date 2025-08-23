import Container from 'app/components/ui/Container'
import Link from 'next/link'
import React from 'react'

function page() {
    const ec = [
        {
            title: 'Series A - ATC',
            dis: ['Organize bookmarks into folders and subfolders', 'Move bookmarks between folders', 'Drag and drop bookmarks to reorder them'],
            src: '/images/ec/ec1.png',
            url: '/Products/ecSA'
        },
        {
            title: 'Series B - No TC',
            dis: ['Organize bookmarks into folders and subfolders', 'Move bookmarks between folders', 'Drag and drop bookmarks to reorder them'],
            src: '/images/ec/ec2.png',
            url: '/Products/ecSB'
        },
        {
            title: 'Series C - No TC',
            dis: ['Organize bookmarks into folders and subfolders', 'Move bookmarks between folders', 'Drag and drop bookmarks to reorder them'],
            src: '/images/ec/ec3.png',
            url: '/Products/ecSC'
        },
        {
            title: 'Headmount Series - ATC',
            dis: ['Organize bookmarks into folders and subfolders', 'Move bookmarks between folders', 'Drag and drop bookmarks to reorder them'],
            src: '/images/ec/ec4.png',
            url: '/Products/ecHS'
        }
    ]
    return (
        <main className='w-full h-full flex flex-col items-center justify-center gap-10 mt-20  md:my-20'>
            <Container>
            <h2 className='text-2xl text-center md:text-4xl font-bold'>Find the Right EC Sensor for You</h2>
                <Container>
                    <section className='flex flex-col justify-center gap-10 md:gap-20 my-10'>
                        {ec.map((item, index) => (
                            <article key={index} className='w-full flex flex-col md:flex-row items-center justify-between gap-4 md:not-odd:flex-row-reverse'>
                                    <div className='flex-1/2'>
                                        <img src={item.src} alt={item.title} className='object-cover w-96 md:h-80 rounded-lg ' />
                                    </div>
                                    <div className='flex-1/2'>

                                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                                        <ul className='text-lg flex flex-col gap-2 mt-4'>
                                            {item.dis.map((dis, idx) =>
                                                <li key={idx} className='text-gray-700 flex items-center gap-2'>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 5.08408L2.07067 6.23208C2.66133 6.86541 2.95667 7.18142 3.28733 7.28142C3.578 7.36875 3.88733 7.34542 4.164 7.21475C4.47933 7.06542 4.732 6.70741 5.23867 5.99075L9 0.666748" stroke="#00BC7D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span className='text-base text-[#818181]'>{dis}</span>
                                                </li>
                                            )}
                                        </ul>
                                        <Link
                                            className="
        w-28 h-8 my-3 md:mt-10 
        text-[13.33px] text-[#3B3B3B] bg-white 
        rounded-lg font-semibold flex justify-center items-center
        transition-all duration-300 ease-in-out
        hover:bg-[#f3f4f6] hover:text-[#1F2937] hover:shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_7px_0px_#D0DDE3C4]
      "
                                            href={item.url}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                            </article>
                        ))}
                    </section>
                </Container>
            </Container>
        </main>
    )
}

export default page