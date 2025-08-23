import React from 'react'
import Container from './Container'
import PhoneIcon from './icons/PhoneIcon'
import LocationIcon from './icons/LocationIcon'
import CopyRightIcon from './icons/CopyRightIcon'
import Link from 'next/link'

function Footer() {
  const SocialMedia = [
    {
      id: 0,
      label: 'Instagram',
      href: '/Instagram',
      icon: '/images/footer/Vector-1.svg'
    },
    {
      id: 1,
      label: 'Whatsapp',
      href: '/Whatsapp',
      icon: '/images/footer/Vector.svg'
    },
    {
      id: 2,
      label: 'Telegram',
      href: '/Telegram',
      icon: '/images/footer/Vector-2.svg'
    },
  ]
  const Pages = [
    {
      id: 0,
      label: 'Contact',
      href: '/Contact'
    },
    {
      id: 1,
      label: 'Products',
      href: '/Products'
    },
    {
      id: 2,
      label: 'About',
      href: '/About'
    },
  ]
  return (
    <footer>
      <Container >
        <div className='min-h-[496px] w-full border border-white/35 rounded-3xl mb-14 shadow-[0px_0px_53px_-20px_#fff,inset_0_0_39px_-20px_#fff] px-16  py-12  md:px-32  md:py-24 '>
          <div className='flex gap-4 h-fit flex-col md:flex-row items-center justify-center md:items-start md:justify-start'>
            <div className='w-14 h-0.5  md:h-14 rounded-full md:w-0.5 bg-white ' />
            <img src='/images/logo.svg' alt="logo" className='w-24 ' />
          </div>
          <div className=' flex  gap-14 mt-10 flex-col md:flex-row'>
            <article className='flex-1 text-white flex flex-col gap-10 items-center md:items-start text-center md:text-left'>
              <p>Leading in Electrochemical Sensor Technology</p>
              <div className='flex gap-5 flex-col md:flex-row items-center'>
                <PhoneIcon></PhoneIcon>
                <span>+98 61 3336 4527</span>
              </div>
              <div className='flex gap-5 flex-col md:flex-row items-center' >
                <div className='w-5'>
                  <LocationIcon />
                </div>
                <span className=''>Unit 1, 1st Floor, Bldg. 3, W. Socrates St., Amaniyeh, Khuzestan Tech & Science Park, Iran</span>
              </div>
            </article>
            <article className='flex-1 flex justify-end gap-10 md:gap-40 text-white font-normal flex-col-reverse md:flex-row items-center'>
              <div className='text-center md:text-left'>
                <h6>PAGES</h6>
                <ul className='flex flex-col gap-7 mt-7 '>
                  {Pages.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.href} className="relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{item.label}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='text-center md:text-left'>
                <h6>SOCIAL MEDIA</h6>
                <ul className='flex flex-row md:flex-col  gap-7 mt-7 '>
                  {SocialMedia.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href={item.href} className="relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                          <img src={item.icon} alt={item.label} className='w-6 h-6 inline-block mr-2 md:hidden' />
                          <span className='hidden md:inline-block'>
                            {item.label}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </article>
          </div>
        </div>
        <p className='w-full flex justify-center text-xs md:text-sm items-center text-white gap-2 mb-10 '>
          <CopyRightIcon />
          2025 Rad Sensor. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer