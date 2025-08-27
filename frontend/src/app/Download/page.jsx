import { BaseUrl } from "../components/data/data"
import Container from "../components/ui/Container"
import DownloadIcon from "app/components/ui/icons/DownloadIcon"
import { redirect } from "next/navigation"
import { MediaUrl } from '../components/data/data'

async function page() {

  let Datasheets = []
  try {
    const res = await fetch(BaseUrl + '/api/product/datasheet-download/all/', { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    Datasheets = await res.json()
  } catch (e) {
    console.error('Failed to fetch datasheets:', e)
  }

  return (
    <main>
      <Container className="flex flex-col items-center justify-center gap-5 py-16 md:py-32">
        <h1 className="text-2xl md:text-4xl text-center font-semibold mb-10 md:mb-28">
          Product Files & softwares
        </h1>
        <img src='/images/download/DatasheetsIcon.png' className="w-20 md:w-40 mb-5" />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full ">
          {Datasheets.map((item, index) => (
            <article key={index} className="flex flex-col items-center bg-[linear-gradient(235deg,rgba(80,76,97,0.15)12.08%,rgba(147,147,147,0.15)78.14%,rgba(201,201,201,0.15)111.62%,rgba(255,255,255,0.15)145.1%)] backdrop-blur-2xl rounded-4xl border border-[#6E6E6E] h-[312px] px-4 text-center">
              <div className=" flex justify-center items-center">
                <div className="w-fit ">
                  <h6 className="text-sm md:text-[20px] font-light md:font-medium my-8 line-clamp-1 ">{item.product_name}</h6>
                </div>
              </div>
              <div className="w-full  flex flex-col gap-3 h-full pb-4">
                {item.datasheet && <a href={MediaUrl + item.datasheet} target="_blank" rel="noopener noreferrer" className=" border border-[#6E6E6E] w-full rounded-2xl flex justify-between px-5 items-center font-black grow" >
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99987 12V19.3333M9.99987 19.3333L13.857 16.8889M9.99987 19.3333L6.14279 16.8889M11.2856 1.00106C11.1628 1 11.0249 1 10.8674 1H5.11448C3.67436 1 2.95377 1 2.40372 1.26643C1.91988 1.50079 1.52679 1.87447 1.28026 2.33442C1 2.85731 1 3.54233 1 4.91135V19.0891C1 20.4581 1 21.1423 1.28027 21.6652C1.52679 22.1251 1.91988 22.4995 2.40372 22.7338C2.95323 23 3.67296 23 5.11026 23H14.8895C16.3268 23 17.0455 23 17.595 22.7338C18.0788 22.4995 18.4732 22.1251 18.7198 21.6652C18.9997 21.1428 18.9997 20.4596 18.9997 19.0933V8.73139C18.9997 8.5814 18.9997 8.45019 18.9985 8.33333M11.2856 1.00106C11.6528 1.00424 11.8851 1.01692 12.1069 1.06754C12.3693 1.12742 12.6199 1.22643 12.85 1.36046C13.1094 1.51158 13.3322 1.72333 13.7766 2.14583L17.795 5.96587C18.2398 6.38864 18.4609 6.59944 18.6199 6.84612C18.7609 7.06483 18.8652 7.30331 18.9282 7.55273C18.9814 7.76348 18.9951 7.9844 18.9985 8.33333M11.2856 1.00106V4.42222C11.2856 5.79124 11.2856 6.47527 11.5658 6.99817C11.8124 7.45812 12.2055 7.83281 12.6893 8.06717C13.2388 8.33333 13.9585 8.33333 15.3958 8.33333H18.9985M18.9985 8.33333H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <span>DataSheet</span>
                  <div></div>
                </a>}
                {item.calibration_software && <a href={MediaUrl + item.calibration_software} target="_blank" rel="noopener noreferrer" className=" border border-[#6E6E6E] w-full rounded-2xl flex  items-center font-black justify-between px-5 grow" >
                  <img src="/images/download/iconMod.png" alt="icon" />
                  <span>Modbus</span>
                  <div></div></a>}
                {item.modbus_poll_software && <a href={MediaUrl + item.modbus_poll_software} target="_blank" rel="noopener noreferrer" className=" border border-[#6E6E6E] w-full rounded-2xl flex justify-between px-5 items-center font-black grow">
                  <img src="/images/download/iconCal.png" alt="icon" />
                  <span>Calibration</span>
                  <div></div></a>}
              </div>

            </article>
          ))}
        </section>


      </Container>
    </main>
  )
}

export default page