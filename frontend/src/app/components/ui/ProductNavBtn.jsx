'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

function ProductNavBtn() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const Products = [
        {
            id: 0,
            href: '/Products/ctd-sensor',
            text: 'CTD Sensor'
        }, {
            id: 1,
            href: '/EC-Sensors',
            text: 'EC Sensor'
        }, {
            id: 2,
            href: '/Products/chlorine-sensor',
            text: 'CL Sensor'
        }, {
            id: 3,
            href: '/Products/ph-sensor-and-transmitter',
            text: 'PH Sensor'
        },
        , {
            id: 4,
            href: '/Products/total-dissolved-solidstds-sensor-and-transmitter',
            text: 'TDS Sensor'
        },
    ]
    const isActive = Products.some(item => pathname.includes(item.href))

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className={` flex justify-center items-center gap-2 rounded-xl hover:bg-[#66666675] px-3 h-10 cursor-pointer hover:stroke-white hover:text-white ${isActive ? 'stroke-white text-white ' : 'text-[#818181] stroke-[#818181]'}`}>
                <span>Products</span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M12.306 1.40381L7.65536 6.05444C7.29424 6.41556 7.11369 6.59611 6.88932 6.59611C6.66496 6.59611 6.4844 6.41556 6.12329 6.05444L1.47266 1.40381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div
                className={`
          absolute w-full pt-3.5 transform origin-top transition-all duration-300 ease-out 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
            >
                <div className="w-full bg-[#292731aa] backdrop-blur-3xl  rounded-2xl border border-[#3B3B3BF7] p-1 relative ">
                    {Products.map((item) => {
                        return (
                            <Link className="w-full h-10 text-sm  flex justify-center items-center rounded-xl text-[#F7F7F7] hover:bg-[#F7F7F714] border border-transparent hover:border-[#929292] transition" key={item.id} href={item.href}>
                                {item.text}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductNavBtn
