function Titles({ children }) {
    return (
        <div className='w-full flex justify-center'>
            <h3 className="text-[#F5F5F5] text-center md:text-left text-2xl md:text-4xl font-bold w-fit relative capitalize">
                {children}
                <span className="absolute left-0 bottom-1 -z-10 w-full  rounded-3xl border-2 border-[#1E79A5] shadow-[0_0_7.99px_#3EADE5,0_0_15.97px_#3EADE5,0_0_55.91px_#3EADE5,0_0_111.82px_#3EADE5,0_0_191.69px_#3EADE5,0_0_250px_#3EADE5] "></span>
            </h3>

        </div>
    )
}

export default Titles