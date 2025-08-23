"use client"
import Link from 'next/link'
import ProductNavBtn from './ProductNavBtn'
import MenuIcon from './icons/MenuIcon'
import { useState } from 'react'
import SliderArrow from './icons/SliderArrow'
import ArrowIcon from './icons/ArrowIcon'
import LngBtn from './LngBtn'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    {
      id: 0,
      indexContent: <img src='/logo.png' className='w-14 h-auto' alt='logo' />,
      href: '/'
    },
    {
      id: 3,
      indexContent: <ProductNavBtn />,
      href: null
    },
    {
      id: 2,
      indexContent: 'Contact',
      href: '/Contact'
    },

    {
      id: 1,
      indexContent: 'About',
      href: '/About'
    },

    {
      id: 4,
      indexContent: 'Blogs',
      href: '/Blogs'
    },
    {
      id: 5,
      indexContent: <LngBtn />,
      href: null
    },
    {
      id: 6,
      indexContent: 'Download',
      href: '/Download',
      isOutlined: true
    },
  ]

  return (
    <>
      <header className='bg-[#9292924F] h-16 w-full top-0 left-0 backdrop-blur-3xl   justify-center items-center  gap-4 px-6 fixed shadow-[0_0px_9px_0_#8D8D8D40] text-[#818181] font-medium z-55 hidden md:flex'>
        {navItems.map((item) => {
          if (item.href === null) {
            return <div key={item.id}>{item.indexContent}</div>
          }

          const isLogo = item.href === '/'
          const isOutlined = item.isOutlined
          const isActive = item.href.includes(pathname) && pathname !== '/';
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
              flex justify-center font-medium px-3 text-base  items-center h-10 rounded-xl transition 
              ${isActive ? 'text-white' : ' hover:text-white'}
              ${isLogo ? '' : ' gap-2'}
              ${isOutlined
                  ? 'w-36 border border-[#F7F7F7] text-white hover:bg-white hover:!text-black'
                  : 'hover:bg-[#66666675]  '}
              ${isOutlined && isActive
                  ? 'w-36 border border-[#F7F7F7]  bg-white !text-black'
                  : 'hover:bg-[#66666675]  '}
              duration-300
            `}
            >
              {item.indexContent}
            </Link>
          )
        })}
      </header>
      <header className='bg-[#282930] h-16 w-full grid fixed top-0 grid-cols-3 justify-center items-center gap-4 px-6  shadow-[0_0px_9px_0_#8D8D8D40] text-[#818181] font-medium z-50 md:hidden'>
        <div>
          {isOpen && (
            <div
              className='w-dvw h-dvh absolute top-0 left-0 -z-50'
              onClick={() => setIsOpen(false)}
            />
          )}
          <div onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </div>
          <div
            className={`
              absolute w-[70vw] h-dvh top-0 left-0 bg-[#6E6E6E52] z-50 shadow-[0_0px_9px_0_#8D8D8D40] backdrop-blur-[84.5px]
              transition-all duration-300
              ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
            `}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Add your mobile nav items here if needed */}
            <Sidebar setIsOpen={setIsOpen} />
          </div>
        </div>
        <Link href='/' className='flex justify-center items-center h-10 rounded-xl'>
          <img src='/logo.png' className='w-14 h-auto' alt='logo' />
        </Link>
        <div />
      </header>
    </>
  )
}

const Sidebar = ({ setIsOpen }) => {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="w-full h-dvh flex justify-between  pb-6 flex-col  text-white min-h-dvh  font-medium text-base">
      <div className='border-b-2 py-6  px-7 flex gap-2 justify-start items-center' >
        <img src="/images/usa.png" className='w-fit h-fit' alt="" />
        Language
      </div>
      <div className={`flex flex-col justify-between h-full  px-7 py-9`}>
        <Link onClick={() => { setIsOpen(false) }} href='/' className="font-semibold">Home</Link>

        <div>
          <div
            className="flex items-center justify-between cursor-pointer  font-semibold"
            onClick={() => setProductsOpen(!productsOpen)}
          >
            <p className={`flex gap-4 items-center  ${productsOpen ? 'mb-3' : ""}`}>Products

              <span
                className={`inline-block transition-transform duration-300   ${productsOpen ? 'rotate-90' : ' rotate-[270deg]'} `}
              ><SliderArrow className="w-2.5" /></span>
            </p>


          </div>

          <div
            className={`
          overflow-hidden transition-all duration-300 
          ${productsOpen ? 'max-h-60 mb-3 opacity-100 mt-2' : 'max-h-0 opacity-0'}
          pl-4
            `}
            style={{ transitionProperty: 'max-height, opacity, margin-top' }}
          >
            <ul className="space-y-1 text-gray-300 px-5 gap-4 flex flex-col">
              <Link href={'/Products/ctd-sensor'} onClick={() => { setIsOpen(false) }}><li className="list-disc">CTD Sensor </li></Link>
              <Link href={'/Products/total-dissolved-solidstds-sensor-and-transmitter'} onClick={() => { setIsOpen(false) }}><li className="list-disc">TDS Sensor </li></Link>
              <Link href={'/Products/chlorine-sensor'} onClick={() => { setIsOpen(false) }}><li className="list-disc">CL Sensor </li></Link>
              <Link href={'/Products/ph-sensor-and-transmitter'} onClick={() => { setIsOpen(false) }}><li className="list-disc">PH Sensor </li></Link>
              <Link href={'/EC-Sensors'} onClick={() => { setIsOpen(false) }}><li className="list-disc">EC Sensor </li></Link>
            </ul>
          </div>
        </div>
        <Link onClick={() => { setIsOpen(false) }} href='/Contact' className="font-semibold">Contact</Link>
        <Link onClick={() => { setIsOpen(false) }} href='/About' className="font-semibold">About</Link>
        <Link onClick={() => { setIsOpen(false) }} href='/Blogs' className="font-semibold">Blogs</Link>
      </div>


      {/* Buttons */}
      <div className="space-y-2 w-full px-7 text-base ">
        <Link  onClick={() => { setIsOpen(false) }}  href={'/Download'} className="w-full block text-center bg-white text-black font-medium py-4 rounded-lg ">
          Downloads
        </Link>
        <button onClick={() => setIsOpen(false)} className="w-full border py-2 border-white text-white  rounded-lg flex items-center justify-center gap-2">
          <div className='rotate-[-135deg] '>
            <ArrowIcon className='fill-[#F7F7F7] w-5' />
          </div>
          <span >Back</span>
        </button>
      </div>
    </div>
  );
};


export default Header
